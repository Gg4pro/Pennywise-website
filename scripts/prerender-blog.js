#!/usr/bin/env node

// Pre-renders blog post pages with correct meta tags for SEO.
// Runs after vite build. Reads dist/index.html as template and generates
// per-page HTML files with post-specific <title>, <meta>, og: tags baked in.
// This ensures Google sees correct metadata without executing JavaScript.

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const BLOG_DIR = join(ROOT, 'data', 'blog-posts');
const SITE_URL = 'https://pennywise-app.com';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMetaTags(html, { title, description, canonical, ogTitle, ogDescription, ogType, ogUrl }) {
  let result = html;

  // Replace <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  // Replace meta description
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeHtml(description)}"`
  );

  // Replace canonical
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonical}"`
  );

  // Replace og:type
  result = result.replace(
    /<meta property="og:type" content="[^"]*"/,
    `<meta property="og:type" content="${ogType || 'website'}"`
  );

  // Replace og:url
  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${ogUrl || canonical}"`
  );

  // Replace og:title
  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escapeHtml(ogTitle || title)}"`
  );

  // Replace og:description
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escapeHtml(ogDescription || description)}"`
  );

  // Replace twitter:url
  result = result.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${ogUrl || canonical}"`
  );

  // Replace twitter:title
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle || title)}"`
  );

  // Replace twitter:description
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription || description)}"`
  );

  return result;
}

async function prerender() {
  const template = await readFile(join(DIST, 'index.html'), 'utf-8');

  // --- Static pages ---
  const staticPages = [
    {
      path: 'about',
      title: 'About Pennywise - Our Mission to Simplify Personal Finance',
      description: 'Learn about Pennywise, the team behind the simple budget app for iOS. Our mission is to make financial wellness accessible, simple, and stress-free for everyone.',
      ogTitle: 'About Pennywise - Our Mission',
      ogDescription: 'Learn about Pennywise and our mission to make financial wellness accessible, simple, and stress-free for everyone.',
    },
    {
      path: 'contact',
      title: 'Contact Pennywise - Get Help with Your Budget App',
      description: 'Have questions about Pennywise? Contact our support team for help with the budget app, feedback, or general inquiries. We typically respond within 24-48 hours.',
      ogTitle: 'Contact Pennywise - Get Help',
      ogDescription: 'Have questions about Pennywise? Contact our support team for help with the budget app.',
    },
    {
      path: 'blog',
      title: 'Personal Finance Blog | Budgeting Tips & Money Advice | Pennywise',
      description: 'Expert budgeting tips, money management advice, and personal finance guides. Learn how to track expenses, save money, and achieve your financial goals with Pennywise.',
      ogTitle: 'Personal Finance Blog | Pennywise',
      ogDescription: 'Expert budgeting tips, money management advice, and personal finance guides to help you achieve financial freedom.',
    },
  ];

  for (const page of staticPages) {
    const canonical = `${SITE_URL}/${page.path}`;
    const html = replaceMetaTags(template, {
      title: page.title,
      description: page.description,
      canonical,
      ogTitle: page.ogTitle,
      ogDescription: page.ogDescription,
      ogUrl: canonical,
    });

    const dir = join(DIST, page.path);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), html);
  }

  console.log(`Pre-rendered ${staticPages.length} static pages`);

  // --- Blog posts ---
  const files = await readdir(BLOG_DIR);
  const jsonFiles = files.filter(f => f.endsWith('.json'));
  let count = 0;

  for (const file of jsonFiles) {
    try {
      const raw = await readFile(join(BLOG_DIR, file), 'utf-8');
      const post = JSON.parse(raw);

      if (post.status !== 'published') continue;

      const canonical = `${SITE_URL}/blog/${post.slug}`;
      const html = replaceMetaTags(template, {
        title: `${post.title} | Pennywise Blog`,
        description: post.excerpt,
        canonical,
        ogType: 'article',
        ogTitle: post.title,
        ogDescription: post.excerpt,
        ogUrl: canonical,
      });

      const dir = join(DIST, 'blog', post.slug);
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, 'index.html'), html);
      count++;
    } catch (err) {
      console.warn(`Warning: Could not prerender ${file}:`, err.message);
    }
  }

  console.log(`Pre-rendered ${count} blog posts`);
  console.log(`Total: ${staticPages.length + count} pages written to dist/`);
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
