import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, PiggyBank, Target, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog post type definition
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: 'blue' | 'emerald' | 'purple' | 'orange' | 'pink';
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

// Category color mapping
const categoryColors = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-400',
  },
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-400',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500',
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    gradient: 'from-orange-400 to-pink-500',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-500',
  },
};

// Category icons mapping
const categoryIcons: { [key: string]: React.ElementType } = {
  'Budgeting': PiggyBank,
  'Saving': Target,
  'Investing': TrendingUp,
  'Security': Shield,
};

// SEO-optimized blog posts sorted by date (newest first)
// Keywords targeted: budget app, expense tracker, personal finance, money management, savings goals
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-budget-app-for-couples-2026',
    title: 'Best Budget App for Couples: How to Track Shared Expenses Together',
    excerpt: 'Managing money as a couple can be tricky. Learn how to choose a budget app that helps you and your partner stay on the same page with shared expenses and savings goals.',
    category: 'Budgeting',
    categoryColor: 'blue',
    date: '2026-01-19',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: '2',
    slug: 'how-to-save-money-on-groceries',
    title: 'How to Save Money on Groceries: 12 Proven Strategies That Work',
    excerpt: 'Groceries are one of the biggest monthly expenses for most households. These 12 strategies will help you cut your food bill without sacrificing quality or nutrition.',
    category: 'Saving',
    categoryColor: 'emerald',
    date: '2026-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '3',
    slug: 'expense-tracker-app-no-bank-login',
    title: 'Why an Expense Tracker App Without Bank Login Is Better for Your Privacy',
    excerpt: 'Not comfortable linking your bank account to an app? You are not alone. Discover why manual expense tracking gives you more control and better security.',
    category: 'Security',
    categoryColor: 'pink',
    date: '2026-01-10',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: '4',
    slug: 'monthly-budget-template-beginners',
    title: 'Monthly Budget Template for Beginners: Start Managing Your Money Today',
    excerpt: 'Creating your first budget does not have to be complicated. This simple monthly budget template will help you take control of your finances in under 30 minutes.',
    category: 'Budgeting',
    categoryColor: 'purple',
    date: '2026-01-05',
    readTime: '7 min read',
  },
  {
    id: '5',
    slug: 'how-to-track-daily-expenses',
    title: 'How to Track Daily Expenses: Build a Habit That Transforms Your Finances',
    excerpt: 'The secret to financial success is knowing where your money goes. Learn how to build a daily expense tracking habit that sticks and helps you reach your goals.',
    category: 'Budgeting',
    categoryColor: 'blue',
    date: '2025-12-28',
    readTime: '6 min read',
  },
  {
    id: '6',
    slug: 'emergency-fund-how-much-to-save',
    title: 'Emergency Fund: How Much Should You Save and Where to Keep It',
    excerpt: 'An emergency fund is your financial safety net. Find out exactly how much you need to save based on your situation and the best places to keep your emergency savings.',
    category: 'Saving',
    categoryColor: 'emerald',
    date: '2025-12-20',
    readTime: '7 min read',
  },
  {
    id: '7',
    slug: 'cash-envelope-system-digital-alternative',
    title: 'Cash Envelope System: A Digital Alternative for Modern Budgeters',
    excerpt: 'Love the cash envelope method but hate carrying cash? Learn how to apply this proven budgeting technique using a digital expense tracker app.',
    category: 'Budgeting',
    categoryColor: 'orange',
    date: '2025-12-12',
    readTime: '5 min read',
  },
  {
    id: '8',
    slug: 'financial-goals-for-your-20s',
    title: '7 Financial Goals Everyone Should Set in Their 20s',
    excerpt: 'Your 20s are the best time to build strong financial habits. These seven goals will set you up for long term wealth and financial freedom.',
    category: 'Saving',
    categoryColor: 'emerald',
    date: '2025-12-01',
    readTime: '8 min read',
  },
  {
    id: '9',
    slug: 'stop-overspending-practical-tips',
    title: 'How to Stop Overspending: 9 Practical Tips That Actually Work',
    excerpt: 'Struggling to stick to your budget? These nine practical tips will help you identify your spending triggers and break the cycle of overspending for good.',
    category: 'Budgeting',
    categoryColor: 'purple',
    date: '2025-11-18',
    readTime: '6 min read',
  },
  {
    id: '10',
    slug: 'simple-money-management-tips',
    title: 'Simple Money Management Tips for People Who Hate Budgeting',
    excerpt: 'Not everyone loves spreadsheets and detailed budgets. If traditional budgeting feels overwhelming, try these simple money management strategies instead.',
    category: 'Budgeting',
    categoryColor: 'blue',
    date: '2025-10-15',
    readTime: '5 min read',
  },
];

// Format date to readable string
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Featured card color configurations
const featuredCardStyles = [
  {
    // Blue card
    gradient: 'from-blue-600 to-blue-700',
    shadow: 'shadow-blue-200',
    blobLight: 'bg-blue-400',
    blobDark: 'bg-blue-800',
  },
  {
    // Green card
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-200',
    blobLight: 'bg-emerald-400',
    blobDark: 'bg-teal-700',
  },
  {
    // Red card
    gradient: 'from-rose-500 to-red-600',
    shadow: 'shadow-rose-200',
    blobLight: 'bg-rose-400',
    blobDark: 'bg-red-700',
  },
];

// Featured Post Card Component
const FeaturedPostCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const IconComponent = categoryIcons[post.category] || TrendingUp;
  const cardStyle = featuredCardStyles[index] || featuredCardStyles[0];

  return (
    <Link to={`/blog/${post.slug}`} className="h-full">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className={`relative rounded-[2.5rem] shadow-2xl cursor-pointer group h-full bg-gradient-to-br ${cardStyle.gradient} ${cardStyle.shadow}`}
      >
        {/* Inner container with overflow hidden to clip blobs properly */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className={`absolute -top-24 -left-24 w-96 h-96 ${cardStyle.blobLight} rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30`} />
          <div className={`absolute -bottom-24 -right-24 w-96 h-96 ${cardStyle.blobDark} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-30`} />
        </div>

        <div className="relative z-10 flex flex-col h-full p-8 md:p-10 text-white">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-white/80 uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-medium mb-4 leading-tight">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/80 mb-8 leading-relaxed text-base flex-grow">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Read More Arrow */}
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

// Regular Post Card Component
const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const colors = categoryColors[post.categoryColor];
  const IconComponent = categoryIcons[post.category] || TrendingUp;

  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.article
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/50 transition-all cursor-pointer group h-full flex flex-col"
      >
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}>
            <IconComponent className={`w-5 h-5 ${colors.text}`} />
          </div>
          <span className={`text-xs font-medium ${colors.text} uppercase tracking-wide`}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More Arrow */}
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  // All posts (including featured) for the "All Articles" section
  const allPosts = blogPosts;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  // Get posts for current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const visiblePosts = allPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Stay at current scroll position - don't scroll anywhere
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 w-full">
        {/* Background Grid Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-medium text-slate-900 mb-8 leading-[0.9] tracking-tighter">
              The Pennywise <br />
              <span className="font-serif italic text-slate-900">Blog.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Insights, tips, and strategies to help you take control of your finances and build lasting wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="relative py-12 px-6 w-full">
        {/* Background Diagonal Lines Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-lines" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-medium text-slate-900 leading-[0.95] tracking-tight">
              Featured <span className="font-serif italic">Articles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <FeaturedPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section id="all-articles" className="relative py-16 px-6 w-full">
        {/* Background Dots Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-dots [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-medium text-slate-900 leading-[0.95] tracking-tight">
              All <span className="font-serif italic">Articles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105 active:scale-95'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-full font-medium transition-all ${
                    currentPage === page
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105 active:scale-95'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105 active:scale-95'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Grid Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-emerald-200">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-30" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">
                Ready to start your <br />
                <span className="font-serif italic">financial journey?</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of users who are building better financial habits with Pennywise.
              </p>
              <a
                href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 mx-auto">
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
    </div>
  );
};

export default Blog;
