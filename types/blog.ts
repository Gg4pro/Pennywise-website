// Blog post data types for Pennywise landing page
// These types are shared between the frontend components and the SEO agent

export interface BlogPostAuthor {
  name: string;
  role: string;
  image: string;
}

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Budgeting' | 'Saving' | 'Investing' | 'Security';
  categoryColor: 'blue' | 'emerald' | 'purple' | 'orange' | 'pink';
  date: string; // ISO format: YYYY-MM-DD
  readTime: string;
  featured?: boolean;
  author: BlogPostAuthor;
  targetKeyword?: string;
  relatedKeywords?: string[];
  status: 'draft' | 'approved' | 'published';
}

export interface BlogPost extends BlogPostMeta {
  content: string; // Markdown content
}

// Category color mapping used by components
export const categoryColors = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    gradient: 'from-blue-600 to-blue-700',
    shadowColor: 'shadow-blue-200',
  },
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-500',
    shadowColor: 'shadow-emerald-200',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-200',
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    gradient: 'from-orange-400 to-pink-500',
    shadowColor: 'shadow-orange-200',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-500',
    shadowColor: 'shadow-pink-200',
  },
} as const;

// Featured card styles for the blog listing page
export const featuredCardStyles = [
  {
    gradient: 'from-blue-600 to-blue-700',
    shadow: 'shadow-blue-200',
    blobLight: 'bg-blue-400',
    blobDark: 'bg-blue-800',
  },
  {
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-200',
    blobLight: 'bg-emerald-400',
    blobDark: 'bg-teal-700',
  },
  {
    gradient: 'from-rose-500 to-red-600',
    shadow: 'shadow-rose-200',
    blobLight: 'bg-rose-400',
    blobDark: 'bg-red-700',
  },
] as const;
