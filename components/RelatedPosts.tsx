import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPost, categoryColors } from '../types/blog';
import { formatDate } from '../utils/blogLoader';

interface RelatedPostsProps {
  posts: BlogPost[];
  currentCategory: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, currentCategory }) => {
  if (posts.length === 0) return null;

  return (
    <section className="relative py-16 px-6 w-full bg-slate-50" aria-labelledby="related-posts-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="related-posts-heading"
            className="text-3xl md:text-4xl font-medium text-slate-900 mb-3 leading-tight"
          >
            Related Articles
          </h2>
          <p className="text-slate-600 mb-10">
            Continue exploring {currentCategory.toLowerCase()} tips and strategies.
          </p>

          <div className="grid gap-6">
            {posts.map((post, index) => {
              const colors = categoryColors[post.categoryColor];

              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Category Badge */}
                      <div className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-medium w-fit`}>
                        {post.category}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedPosts;
