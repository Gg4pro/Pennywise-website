import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import MobileAppShowcase from '../components/MobileAppShowcase';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Pennywise - Budget & Expense Tracker App for iOS | Free Download</title>
        <meta name="description" content="Take control of your finances with Pennywise, the beautiful budget app for iOS. Track expenses, set goals, build lasting habits. No bank connection required. Download free." />
        <meta name="keywords" content="budget app, expense tracker, iOS budget app, personal finance app, money management, spending tracker, financial planning, pennywise app" />
        <link rel="canonical" href="https://www.pennywise-app.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pennywise-app.com/" />
        <meta property="og:title" content="Pennywise - Budget & Expense Tracker App for iOS" />
        <meta property="og:description" content="Take control of your finances with Pennywise, the beautiful budget app for iOS. Track expenses, set goals, build lasting habits." />
        <meta property="og:image" content="https://www.pennywise-app.com/images/og-image.png" />
        <meta property="og:site_name" content="Pennywise" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pennywise-app.com/" />
        <meta name="twitter:title" content="Pennywise - Budget & Expense Tracker App for iOS" />
        <meta name="twitter:description" content="Take control of your finances with Pennywise. Track expenses, set goals, build lasting habits." />
        <meta name="twitter:image" content="https://www.pennywise-app.com/images/og-image.png" />

        {/* SoftwareApplication Schema for App */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Pennywise",
            "description": "A beautiful budget app and expense tracker for iOS that helps you take control of your personal finances.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "iOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150"
            },
            "url": "https://apps.apple.com/si/app/pennywise-finance-tracker/id6754343519"
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pennywise",
            "url": "https://www.pennywise-app.com",
            "logo": "https://www.pennywise-app.com/images/pennywise-icon.png",
            "description": "Pennywise helps you take control of your finances with a simple, beautiful budget app for iOS.",
            "sameAs": [
              "https://www.instagram.com/pennywise_app",
              "https://x.com/pennywise_app"
            ]
          })}
        </script>

        {/* WebSite Schema with SearchAction */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Pennywise",
            "url": "https://www.pennywise-app.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.pennywise-app.com/blog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <div className="flex flex-col items-center w-full">
        <Hero />
        <Ticker />
        <Features />
        <HowItWorks />
        <MobileAppShowcase />
        <Testimonials />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
