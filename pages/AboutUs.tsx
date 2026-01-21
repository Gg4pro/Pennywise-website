import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Sparkles } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Pennywise - Our Mission to Simplify Personal Finance</title>
        <meta name="description" content="Learn about Pennywise, the team behind the simple budget app for iOS. Our mission is to make financial wellness accessible, simple, and stress-free for everyone." />
        <meta name="keywords" content="about pennywise, budget app team, personal finance app, financial wellness, money management" />
        <link rel="canonical" href="https://www.pennywise-app.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pennywise-app.com/about" />
        <meta property="og:title" content="About Pennywise - Our Mission" />
        <meta property="og:description" content="Learn about Pennywise and our mission to make financial wellness accessible, simple, and stress-free for everyone." />
        <meta property="og:image" content="https://www.pennywise-app.com/images/og-image.png" />
        <meta property="og:site_name" content="Pennywise" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pennywise-app.com/about" />
        <meta name="twitter:title" content="About Pennywise - Our Mission" />
        <meta name="twitter:description" content="Learn about Pennywise and our mission to make financial wellness accessible for everyone." />
        <meta name="twitter:image" content="https://www.pennywise-app.com/images/og-image.png" />

        {/* About Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Pennywise",
            "description": "Learn about Pennywise and our mission to make financial wellness accessible.",
            "url": "https://www.pennywise-app.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Pennywise",
              "description": "Pennywise helps you track expenses, build budgets, and achieve financial freedom.",
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
            <h1 className="text-6xl md:text-8xl font-medium text-slate-900 mb-8 leading-[0.9] tracking-tighter">
              We believe in <br />
              <span className="font-serif italic text-slate-900">financial empowerment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Pennywise was born from a simple idea: everyone deserves to feel confident about their financial future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative pt-20 pb-12 px-6 w-full">
        {/* Background Dots Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-dots [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
              {/* Abstract Shapes */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-35 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">Our Mission</h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  To make financial wellness accessible, simple, and stress-free for everyone. We're building tools that help you take control of your money without the overwhelm.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">Simplicity First</h3>
                <p className="text-slate-600 leading-relaxed">
                  Financial management shouldn't require a finance degree. We strip away complexity to reveal what truly matters.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">Built for You</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every feature is designed with real people in mind—no corporate jargon, no hidden fees, just honest tools that work.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">Your Success is Ours</h3>
                <p className="text-slate-600 leading-relaxed">
                  We succeed when you reach your financial goals. Your journey to financial freedom is what drives us forward.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Lines Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-lines" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 text-center leading-tight">
              Our <span className="font-serif italic">Story</span>
            </h2>
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-lg">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Pennywise started with a conversation between friends who were tired of complicated budgeting apps that felt more like homework than helpful tools.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                So we decided to build something different. Something that doesn't overwhelm you with charts and spreadsheets, but actually helps you understand where your money goes and how to reach your goals without the stress.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                Today, we're excited to share what we've built. Pennywise is ready to help you take control of your finances and start building the future you deserve. And we're just getting started.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Dots Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-dots [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-slate-900 mb-16 text-center leading-tight">
            Meet the <span className="font-serif italic">Team</span>
          </h2>

          <div className="space-y-16">
            {/* Team Member 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/team-1.jpg"
                    alt="Gregor, Founder & CEO of Pennywise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2">Gregor</h3>
                <p className="text-xl text-blue-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Gregor leads our vision to make financial wellness accessible to everyone. He's passionate about creating simple, intuitive tools that empower people to build better financial habits.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/team-2.jpg"
                    alt="Blaz, Head of Engineering at Pennywise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2">Blaz</h3>
                <p className="text-xl text-purple-600 font-medium mb-4">Head of Engineering</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Blaz brings deep technical expertise from building scalable systems. He's passionate about creating elegant solutions to complex financial problems through thoughtful engineering and clean code.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/team-3.jpg"
                    alt="Timotej, Head of Product at Pennywise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2">Timotej</h3>
                <p className="text-xl text-emerald-600 font-medium mb-4">Head of Product</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Timotej shapes the product vision and user experience. With a keen eye for detail and deep understanding of user needs, he ensures Pennywise delivers real value in every feature.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/team-4.jpg"
                    alt="Anika, Head of Marketing at Pennywise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2">Anika</h3>
                <p className="text-xl text-orange-600 font-medium mb-4">Head of Marketing</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Anika drives our mission to reach more people who need simple financial tools. She combines creative storytelling with data-driven strategies to help users discover and love Pennywise.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Grid Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-medium text-slate-900 mb-16 text-center leading-tight">
            What We <span className="font-serif italic">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-medium mb-3">Transparency</h3>
              <p className="text-white/90">No hidden agendas. We're upfront about everything we do.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-medium mb-3">Privacy</h3>
              <p className="text-white/90">Your financial data is yours. We protect it with military-grade security.</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-medium mb-3">Innovation</h3>
              <p className="text-white/90">We're constantly improving to serve you better, smarter, faster.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-medium mb-3">Empowerment</h3>
              <p className="text-white/90">We give you the tools to make informed decisions about your money.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 w-full">
        {/* Background Dots Texture */}
        <div className="absolute inset-0 -z-10 bg-pattern-dots [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-7xl mx-auto text-center bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          {/* Background Graphic - Emerald gradient like homepage */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">
              Join us on the journey to <br />
              <span className="font-serif italic text-white/90">financial freedom.</span>
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Start building better financial habits today. Your future self will thank you.
            </p>
            <a href="https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 mx-auto">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-0.5">Download on the</div>
                  <div className="text-xl font-semibold leading-none">App Store</div>
                </div>
              </button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
