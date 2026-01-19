import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Copy, Check, PiggyBank, Target, TrendingUp, Shield } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getBlogPostBySlug, formatDate } from '../utils/blogLoader';
import { categoryColors } from '../types/blog';

// Category icons mapping
const categoryIcons: { [key: string]: React.ElementType } = {
  Budgeting: PiggyBank,
  Saving: Target,
  Investing: TrendingUp,
  Security: Shield,
};

// Copy link component with state
const CopyLinkButton: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-all"
      title="Copy link"
    >
      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
    </button>
  );
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Get post data from JSON files
  const post = slug ? getBlogPostBySlug(slug) : null;

  // Handle 404
  if (!post) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link
            to="/blog"
            className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const colors = categoryColors[post.categoryColor];
  const IconComponent = categoryIcons[post.category] || TrendingUp;

  // Parse markdown-like content to HTML (simple version)
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc pl-6 mb-6 space-y-2">
            {listItems.map((item, i) => (
              <li key={i} className="text-slate-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={elements.length} className="overflow-x-auto mb-8">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-100">
                  {tableRows[0].map((cell, i) => (
                    <th key={i} className="px-6 py-3 text-left text-sm font-medium text-slate-900">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-slate-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table row
      if (trimmed.startsWith('|')) {
        flushList();
        inTable = true;
        const cells = trimmed
          .split('|')
          .filter((c) => c.trim() !== '')
          .map((c) => c.trim());
        if (!trimmed.includes('---')) {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable();
      }

      // H2
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-3xl md:text-4xl font-medium text-slate-900 mt-12 mb-6 leading-tight">
            {trimmed.replace('## ', '')}
          </h2>
        );
        return;
      }

      // H3
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-2xl font-medium text-slate-900 mt-8 mb-4 leading-tight">
            {trimmed.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Horizontal rule
      if (trimmed === '---') {
        flushList();
        elements.push(<hr key={index} className="my-12 border-slate-200" />);
        return;
      }

      // List item
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        const itemText = trimmed.replace(/^[-*]\s+/, '');
        // Handle bold text and links
        const formatted = itemText
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">$1</a>');
        listItems.push(formatted);
        return;
      } else if (inList && trimmed === '') {
        flushList();
        return;
      }

      // Numbered list
      if (/^\d+\.\s/.test(trimmed)) {
        flushList();
        const itemText = trimmed.replace(/^\d+\.\s+/, '');
        const formatted = itemText
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">$1</a>');
        elements.push(
          <div key={index} className="flex gap-4 mb-4">
            <span className="text-slate-900 font-medium">{trimmed.match(/^\d+/)?.[0]}.</span>
            <p
              className="text-slate-700 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatted }}
            />
          </div>
        );
        return;
      }

      // Paragraph
      if (trimmed !== '' && !inList) {
        flushList();
        // Handle bold, italic, and links
        let formatted = trimmed
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">$1</a>');

        elements.push(
          <p
            key={index}
            className="text-slate-700 text-lg leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
    });

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 px-6 w-full bg-gradient-to-br ${colors.gradient}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Blog</span>
            </button>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-white/80 uppercase tracking-wide">{post.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white mb-8 leading-[1.1] tracking-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                <img src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-medium text-white">{post.author.name}</div>
                <div className="text-sm text-white/70">{post.author.role}</div>
              </div>
            </div>

            {/* Date & Read Time */}
            <div className="flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 px-6 w-full">
        <div className="max-w-3xl mx-auto">
          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-12 pb-8 border-b border-slate-100"
          >
            <span className="text-sm font-medium text-slate-500 mr-2">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 hover:bg-blue-100 hover:text-blue-500 rounded-full flex items-center justify-center transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 rounded-full flex items-center justify-center transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <CopyLinkButton />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {renderContent(post.content)}
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
                Start your journey to <br />
                <span className="font-serif italic text-white/90">financial freedom.</span>
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Download Pennywise and take the first step toward building lasting financial habits.
              </p>
              <a
                href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 mx-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none mb-0.5">Download on the</div>
                    <div className="text-xl font-semibold leading-none">App Store</div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Back to Blog Link */}
      <section className="relative pb-20 px-6 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => {
              navigate('/blog');
              setTimeout(() => {
                const allArticlesSection = document.getElementById('all-articles');
                if (allArticlesSection) {
                  const navbarHeight = 80;
                  const elementPosition = allArticlesSection.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'auto'
                  });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to all articles
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
