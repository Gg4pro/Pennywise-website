import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const LAST_UPDATED = 'April 1, 2026';

const sections = [
  { id: 'agreement', title: 'Agreement to Terms' },
  { id: 'financial-disclaimer', title: 'Educational Purpose & Financial Disclaimer' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'acceptable-use', title: 'Acceptable Use' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'disclaimer-of-warranties', title: 'Disclaimer of Warranties' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'termination', title: 'Termination' },
  { id: 'severability', title: 'Severability' },
  { id: 'contact', title: 'Contact Information' },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
  }
};

const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Pennywise</title>
        <meta name="description" content="Terms of Service for pennywise-app.com. Read our terms governing use of the Pennywise website and educational finance content." />
        <meta name="keywords" content="pennywise terms of service, terms and conditions, budget app terms, financial education terms" />
        <link rel="canonical" href="https://pennywise-app.com/terms" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pennywise-app.com/terms" />
        <meta property="og:title" content="Terms of Service - Pennywise" />
        <meta property="og:description" content="Terms of Service for pennywise-app.com. Read our terms governing use of the Pennywise website and educational finance content." />
        <meta property="og:image" content="https://pennywise-app.com/images/og-image.png" />
        <meta property="og:site_name" content="Pennywise" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pennywise-app.com/terms" />
        <meta name="twitter:title" content="Terms of Service - Pennywise" />
        <meta name="twitter:description" content="Terms of Service for pennywise-app.com. Read our terms governing use of the Pennywise website and educational finance content." />
        <meta name="twitter:image" content="https://pennywise-app.com/images/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - Pennywise",
            "description": "Terms of Service for pennywise-app.com. Read our terms governing use of the Pennywise website and educational finance content.",
            "url": "https://pennywise-app.com/terms",
            "dateModified": "2026-04-01",
            "publisher": {
              "@type": "Organization",
              "name": "Pennywise",
              "url": "https://pennywise-app.com"
            }
          })}
        </script>
      </Helmet>

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 w-full">
          <div className="absolute inset-0 -z-10 bg-pattern-grid [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-medium text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                Terms of <br />
                <span className="font-serif italic text-slate-900">Service.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Please read these terms carefully before using pennywise-app.com.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-20 px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-lg">
              <p className="text-sm text-slate-400 mb-8">Last Updated: {LAST_UPDATED}</p>

              {/* Table of Contents */}
              <nav className="mb-12 p-6 bg-slate-50 rounded-2xl">
                <h2 className="text-lg font-medium text-slate-900 mb-4">Table of Contents</h2>
                <ol className="space-y-2">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-left"
                      >
                        {index + 1}. {section.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Legal Content */}
              <div className="space-y-10">

                {/* 1. Agreement to Terms */}
                <div id="agreement">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">1. Agreement to Terms</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      By accessing or using the website pennywise-app.com (the "Website"), operated by Media-z OÜ (registry code: pending, "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Website.
                    </p>
                    <p>
                      These Terms apply to all visitors, users, and others who access the Website. By using the Website, you represent that you are at least 16 years of age and have the legal capacity to enter into these Terms.
                    </p>
                  </div>
                </div>

                {/* 2. Educational Purpose & Financial Disclaimer */}
                <div id="financial-disclaimer">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">2. Educational Purpose & Financial Disclaimer</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      <strong className="text-slate-900">This is the most important section of these Terms. Please read it carefully.</strong>
                    </p>
                    <p>
                      All content published on this Website, including but not limited to blog posts, articles, guides, graphics, and any other materials, is provided strictly for <strong className="text-slate-900">general informational and educational purposes only</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Media-z OÜ is <strong className="text-slate-900">not</strong> a registered financial advisor, investment advisor, broker-dealer, tax professional, or legal professional in any jurisdiction.</li>
                      <li>Nothing on this Website constitutes financial, investment, tax, legal, or accounting advice, nor does it constitute a recommendation to buy, sell, or hold any investment, security, or financial product.</li>
                      <li>No fiduciary relationship is created between you and Media-z OÜ by virtue of your access to or use of this Website.</li>
                      <li>You <strong className="text-slate-900">must</strong> consult with a qualified, licensed financial advisor, tax professional, or attorney before making any financial decisions.</li>
                      <li>Past performance of any investment or financial strategy discussed on this Website does not guarantee future results. Individual results will vary based on numerous factors, including but not limited to your personal financial situation, risk tolerance, and market conditions.</li>
                      <li>Investing involves risk, including the possible loss of principal. You should be aware that you could lose some or all of your investment.</li>
                      <li>You are solely and entirely responsible for your own investment and financial decisions. Media-z OÜ shall not be held responsible for any decisions you make based on the content of this Website.</li>
                      <li>While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding the accuracy, completeness, or currency of any content. Financial laws, regulations, and market conditions change frequently, and information may become outdated.</li>
                    </ul>
                  </div>
                </div>

                {/* 3. Intellectual Property */}
                <div id="intellectual-property">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">3. Intellectual Property</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      All content on this Website, including but not limited to text, articles, graphics, images, logos, icons, design elements, and software, is the property of Media-z OÜ or its content suppliers and is protected by Estonian, European Union, and international copyright, trademark, and other intellectual property laws.
                    </p>
                    <p>
                      You may access and view the content on this Website for your personal, non-commercial use only. You may not, without our prior written consent:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Reproduce, distribute, modify, or create derivative works from any content on this Website.</li>
                      <li>Use any data mining, robots, scraping, or similar automated data gathering or extraction methods on this Website.</li>
                      <li>Frame, mirror, or otherwise incorporate any part of this Website into any other website or application.</li>
                      <li>Republish, sell, license, or otherwise commercially exploit the content.</li>
                    </ul>
                    <p>
                      You may share links to pages on this Website, provided that such sharing does not suggest any endorsement by or association with Media-z OÜ without our prior written consent.
                    </p>
                  </div>
                </div>

                {/* 4. Acceptable Use */}
                <div id="acceptable-use">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">4. Acceptable Use</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      When using this Website, you agree not to:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Use the Website for any unlawful purpose or in violation of any applicable local, national, or international law or regulation.</li>
                      <li>Attempt to gain unauthorized access to any portion of the Website, its servers, or any systems or networks connected to the Website.</li>
                      <li>Use any automated system, including bots, spiders, scrapers, or offline readers, to access the Website in a manner that sends more request messages than a human can reasonably produce in the same period of time.</li>
                      <li>Transmit any viruses, worms, malware, or any other code of a destructive nature.</li>
                      <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                      <li>Interfere with or disrupt the operation of the Website or the servers or networks used to make the Website available.</li>
                      <li>Use the Website content for any commercial purpose without our express written permission.</li>
                    </ul>
                  </div>
                </div>

                {/* 5. Third-Party Links */}
                <div id="third-party-links">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">5. Third-Party Links</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      This Website may contain links to third-party websites, services, or resources, including but not limited to the Apple App Store, social media platforms (X/Twitter, Instagram, TikTok), and reference materials cited in our blog content.
                    </p>
                    <p>
                      These links are provided solely for your convenience and information. Media-z OÜ does not endorse, control, or assume any responsibility for the content, privacy policies, or practices of any third-party websites or services. You access third-party websites entirely at your own risk.
                    </p>
                    <p>
                      We do not use affiliate links on this Website. We do not receive compensation from any third party for linking to their products or services.
                    </p>
                  </div>
                </div>

                {/* 6. Disclaimer of Warranties */}
                <div id="disclaimer-of-warranties">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">6. Disclaimer of Warranties</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p className="uppercase font-medium text-slate-700">
                      THE WEBSITE AND ALL CONTENT, MATERIALS, INFORMATION, AND SERVICES PROVIDED ON THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p className="uppercase font-medium text-slate-700">
                      TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, MEDIA-Z OÜ DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                    <p className="uppercase font-medium text-slate-700">
                      MEDIA-Z OÜ DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                    </p>
                  </div>
                </div>

                {/* 7. Limitation of Liability */}
                <div id="limitation-of-liability">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">7. Limitation of Liability</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p className="uppercase font-medium text-slate-700">
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MEDIA-Z OÜ, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA, GOODWILL, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH:
                    </p>
                    <ul className="list-disc list-inside space-y-2 uppercase font-medium text-slate-700">
                      <li>YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE WEBSITE;</li>
                      <li>ANY CONTENT, INFORMATION, OR MATERIALS OBTAINED FROM THE WEBSITE;</li>
                      <li>ANY FINANCIAL, INVESTMENT, OR OTHER DECISIONS MADE BASED ON CONTENT ON THE WEBSITE;</li>
                      <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA;</li>
                      <li>ANY OTHER MATTER RELATING TO THE WEBSITE.</li>
                    </ul>
                    <p>
                      This Website is provided free of charge. To the extent permitted by law, the maximum aggregate liability of Media-z OÜ for all claims arising from or related to your use of the Website shall not exceed one hundred euros (€100).
                    </p>
                    <p>
                      Some jurisdictions, including the European Union and the Republic of Estonia, do not allow the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above exclusions or limitations may not apply, and you may have additional rights under applicable consumer protection legislation.
                    </p>
                  </div>
                </div>

                {/* 8. Indemnification */}
                <div id="indemnification">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">8. Indemnification</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      You agree to indemnify, defend, and hold harmless Media-z OÜ, its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or expenses (including reasonable attorney's fees) arising from:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Your use of and access to the Website;</li>
                      <li>Your violation of any provision of these Terms;</li>
                      <li>Your violation of any applicable law or regulation;</li>
                      <li>Your violation of any third-party right, including any intellectual property or privacy right.</li>
                    </ul>
                  </div>
                </div>

                {/* 9. Governing Law */}
                <div id="governing-law">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">9. Governing Law</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of Estonia and applicable European Union regulations, without regard to conflict of law principles.
                    </p>
                    <p>
                      Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Harju County, Tallinn, Estonia.
                    </p>
                    <p>
                      If you are a consumer residing in the European Union, you may also have the right to submit a dispute to the online dispute resolution platform provided by the European Commission at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">https://ec.europa.eu/consumers/odr</a>.
                    </p>
                  </div>
                </div>

                {/* 10. Changes to Terms */}
                <div id="changes">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">10. Changes to Terms</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Media-z OÜ reserves the right to modify or replace these Terms at any time at our sole discretion. Changes will be effective immediately upon posting the updated Terms on this page. The "Last Updated" date at the top of this page will be revised to reflect the date of the most recent changes.
                    </p>
                    <p>
                      Your continued use of the Website after any changes to these Terms constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically to stay informed of any updates.
                    </p>
                  </div>
                </div>

                {/* 11. Termination */}
                <div id="termination">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">11. Termination</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Media-z OÜ may, at its sole discretion, restrict, suspend, or terminate your access to the Website at any time, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.
                    </p>
                    <p>
                      Upon termination, your right to use the Website will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property provisions, warranty disclaimers, limitation of liability, indemnification, and governing law.
                    </p>
                  </div>
                </div>

                {/* 12. Severability */}
                <div id="severability">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">12. Severability</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.
                    </p>
                  </div>
                </div>

                {/* 13. Contact Information */}
                <div id="contact">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">13. Contact Information</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-slate-50 rounded-2xl p-6 space-y-2">
                      <p><strong className="text-slate-900">Media-z OÜ</strong></p>
                      <p>Narva mnt 5</p>
                      <p>Tallinn 10117</p>
                      <p>Estonia</p>
                      <p className="pt-2">
                        Email: <a href="mailto:info@pennywise-app.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">info@pennywise-app.com</a>
                      </p>
                      <p>
                        Website: <a href="https://pennywise-app.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">pennywise-app.com</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-6 w-full">
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

export default TermsOfService;
