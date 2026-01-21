import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Pennywise free to use?",
    answer: "Yes, Pennywise is completely free to download and use. We offer all core budgeting features at no cost, including expense tracking, budget categories, and visual insights. Premium features are available for users who want advanced functionality, but you can effectively manage your finances with the free version."
  },
  {
    question: "Does Pennywise connect to my bank account?",
    answer: "No, Pennywise is designed as a privacy-focused budget app that does not require bank connections. You manually enter your transactions, giving you complete control over your data. This approach ensures your sensitive financial information never leaves your device and eliminates security risks associated with sharing bank credentials."
  },
  {
    question: "How is Pennywise different from other budget apps?",
    answer: "Pennywise stands out with its simplicity-first approach. Unlike complex apps like YNAB or Mint, Pennywise focuses on making budgeting accessible and stress-free. We don't require bank connections (protecting your privacy), offer a clean and beautiful interface, and help you build lasting financial habits without overwhelming features or steep learning curves."
  },
  {
    question: "Is my financial data secure with Pennywise?",
    answer: "Absolutely. Your data is encrypted and stored securely on your device. Since Pennywise doesn't connect to bank accounts or financial institutions, there's no risk of your banking credentials being compromised. We follow industry best practices for data protection and never sell or share your personal information."
  },
  {
    question: "What devices and platforms is Pennywise available on?",
    answer: "Pennywise is currently available on iOS through the App Store, with Android support coming soon. We're committed to making our budget app accessible on all major platforms so you can manage your finances wherever you are."
  },
  {
    question: "How do I get started with budgeting using Pennywise?",
    answer: "Getting started is simple: download Pennywise from the App Store, create your budget categories based on your spending habits, and start tracking your expenses. The app guides you through setting up your first budget in minutes. No complicated setup, no bank linking required - just straightforward budgeting that works."
  }
];

// Generate FAQ Schema for JSON-LD
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

const FAQItem: React.FC<{ faq: FAQItem; index: number; isOpen: boolean; onToggle: () => void }> = ({
  faq,
  index,
  isOpen,
  onToggle
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-medium text-slate-900 pr-8 group-hover:text-purple-600 transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-purple-600' : 'text-slate-500 group-hover:text-purple-600'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed text-base md:text-lg max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 w-full bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Frequently asked <span className="font-serif italic">questions</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Pennywise, the simple budget app that helps you take control of your finances.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            Contact our team
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
