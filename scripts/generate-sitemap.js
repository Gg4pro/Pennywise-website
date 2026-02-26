#!/usr/bin/env node

// Generates sitemap.xml from blog post JSON files in data/blog-posts/
// Run: node scripts/generate-sitemap.js
// Also runs automatically as part of: npm run build

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'data', 'blog-posts');
const SITEMAP_PATH = join(ROOT, 'public', 'sitemap.xml');
const SITE_URL = 'https://pennywise-app.com';

async function generateSitemap() {
  // Read all blog post JSON files
  const files = await readdir(BLOG_DIR);
  const jsonFiles = files.filter(f => f.endsWith('.json')).sort();

  const blogEntries = [];

  for (const file of jsonFiles) {
    try {
      const raw = await readFile(join(BLOG_DIR, file), 'utf-8');
      const post = JSON.parse(raw);

      if (post.status !== 'published') continue;

      blogEntries.push({
        slug: post.slug,
        date: post.date,
      });
    } catch (err) {
      console.warn(`Warning: Could not parse ${file}:`, err.message);
    }
  }

  // Sort blog entries by date (newest first) for readability
  blogEntries.sort((a, b) => b.date.localeCompare(a.date));

  const today = new Date().toISOString().split('T')[0];

  // Build sitemap XML
  const urls = [
    // Static pages
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/about', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/contact', lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: '/blog', lastmod: today, changefreq: 'daily', priority: '0.9' },
    // Blog posts
    ...blogEntries.map(entry => ({
      loc: `/blog/${entry.slug}`,
      lastmod: entry.date,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(u => [
      '  <url>',
      `    <loc>${SITE_URL}${u.loc}</loc>`,
      `    <lastmod>${u.lastmod}</lastmod>`,
      `    <changefreq>${u.changefreq}</changefreq>`,
      `    <priority>${u.priority}</priority>`,
      '  </url>',
    ].join('\n')),
    '</urlset>',
    '',
  ].join('\n');

  await writeFile(SITEMAP_PATH, xml);

  console.log(`Sitemap generated: ${blogEntries.length} blog posts + 4 static pages`);
  console.log(`Written to: ${SITEMAP_PATH}`);
}

generateSitemap().catch(err => {
  console.error('Failed to generate sitemap:', err);
  process.exit(1);
});
