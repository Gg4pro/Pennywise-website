import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Pennywise - Get Help with Your Budget App</title>
        <meta name="description" content="Have questions about Pennywise? Contact our support team for help with the budget app, feedback, or general inquiries. We typically respond within 24-48 hours." />
        <meta name="keywords" content="contact pennywise, budget app support, pennywise help, finance app contact" />
        <link rel="canonical" href="https://www.pennywise-app.com/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pennywise-app.com/contact" />
        <meta property="og:title" content="Contact Pennywise - Get Help" />
        <meta property="og:description" content="Have questions about Pennywise? Contact our support team for help with the budget app." />
        <meta property="og:image" content="https://www.pennywise-app.com/images/og-image.png" />
        <meta property="og:site_name" content="Pennywise" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pennywise-app.com/contact" />
        <meta name="twitter:title" content="Contact Pennywise - Get Help" />
        <meta name="twitter:description" content="Have questions about Pennywise? Contact our support team." />
        <meta name="twitter:image" content="https://www.pennywise-app.com/images/og-image.png" />

        {/* Contact Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Pennywise",
            "description": "Contact our support team for help with the Pennywise budget app.",
            "url": "https://www.pennywise-app.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Pennywise",
              "email": "info@pennywise-app.com",
              "url": "https://www.pennywise-app.com"
            }
          })}
        </script>
      </Helmet>

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
            <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-medium text-slate-900 mb-8 leading-[0.9] tracking-tighter whitespace-nowrap">
              Get in <span className="font-serif italic text-slate-900">touch.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Dots Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-dots [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Contact Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[3rem] overflow-hidden relative shadow-2xl shadow-blue-200 text-center px-6 py-16 md:py-24">
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-35 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                Contact Information
              </h2>

              <p className="text-blue-100 text-lg md:text-xl mb-10 font-light leading-relaxed">
                Have questions, feedback, or need support? We're here to help. Send us an email and we'll respond as quickly as possible.
              </p>

              <a
                href="mailto:info@pennywise-app.com"
                className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                info@pennywise-app.com
              </a>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-slate-900 mb-3">Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Need help with the app? Our support team is ready to assist you with any questions or issues.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-medium text-slate-900 mb-3">Response Time</h3>
              <p className="text-slate-600 leading-relaxed">
                We typically respond within 24-48 hours during business days. Your patience is appreciated.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Lines Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-lines" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight">
            Ready to start your <br />
            <span className="font-serif italic text-slate-900">financial journey?</span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto">
            Download Pennywise today and take the first step towards financial freedom.
          </p>
          <a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 mx-auto">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none mb-0.5">Download on the</div>
                <div className="text-xl font-semibold leading-none">App Store</div>
              </div>
            </button>
          </a>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default ContactUs;
