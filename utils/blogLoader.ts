// Blog post loader utility
// Loads blog posts from JSON files in data/blog-posts/
// This allows the SEO agent to add new posts by simply creating JSON files

import type { BlogPost, BlogPostMeta } from '../types/blog';

// Import all blog post JSON files
// Using Vite's glob import feature for dynamic loading
const blogPostModules = import.meta.glob('../data/blog-posts/*.json', { eager: true });

// Parse and validate blog posts from imported modules
function loadBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in blogPostModules) {
    const module = blogPostModules[path] as { default: BlogPost };
    const post = module.default;

    // Only include published posts
    if (post && post.status === 'published') {
      posts.push(post);
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Cache the loaded posts
let cachedPosts: BlogPost[] | null = null;

// Get all published blog posts
export function getAllBlogPosts(): BlogPost[] {
  if (!cachedPosts) {
    cachedPosts = loadBlogPosts();
  }
  return cachedPosts;
}

// Get blog post metadata only (for listing pages)
export function getBlogPostsMeta(): BlogPostMeta[] {
  return getAllBlogPosts().map(({ content, ...meta }) => meta);
}

// Get featured posts (for homepage/blog listing)
export function getFeaturedPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.featured);
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  return getAllBlogPosts().find(post => post.slug === slug) || null;
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return getAllBlogPosts()
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => post.category === category);
}

// Get total number of posts
export function getTotalPostCount(): number {
  return getAllBlogPosts().length;
}

// Format date to readable string
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
