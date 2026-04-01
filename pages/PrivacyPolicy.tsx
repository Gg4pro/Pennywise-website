import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const LAST_UPDATED = 'April 1, 2026';

const sections = [
  { id: 'key-points', title: 'Key Points' },
  { id: 'introduction', title: 'Introduction & Scope' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'legal-basis', title: 'Legal Basis for Processing' },
  { id: 'cookies', title: 'Cookies & Tracking Technologies' },
  { id: 'third-party-services', title: 'Third-Party Services' },
  { id: 'data-sharing', title: 'Data Sharing & Disclosure' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'your-rights', title: 'Your Rights (GDPR)' },
  { id: 'international-transfers', title: 'International Data Transfers' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'changes', title: 'Changes to This Policy' },
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

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Pennywise</title>
        <meta name="description" content="Privacy Policy for pennywise-app.com. Learn how Pennywise collects, uses, and protects your data, including Google Analytics usage and your GDPR rights." />
        <meta name="keywords" content="pennywise privacy policy, data protection, GDPR, budget app privacy, google analytics privacy" />
        <link rel="canonical" href="https://pennywise-app.com/privacy" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pennywise-app.com/privacy" />
        <meta property="og:title" content="Privacy Policy - Pennywise" />
        <meta property="og:description" content="Privacy Policy for pennywise-app.com. Learn how Pennywise collects, uses, and protects your data, including Google Analytics usage and your GDPR rights." />
        <meta property="og:image" content="https://pennywise-app.com/images/og-image.png" />
        <meta property="og:site_name" content="Pennywise" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pennywise-app.com/privacy" />
        <meta name="twitter:title" content="Privacy Policy - Pennywise" />
        <meta name="twitter:description" content="Privacy Policy for pennywise-app.com. Learn how Pennywise collects, uses, and protects your data, including Google Analytics usage and your GDPR rights." />
        <meta name="twitter:image" content="https://pennywise-app.com/images/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Pennywise",
            "description": "Privacy Policy for pennywise-app.com. Learn how Pennywise collects, uses, and protects your data, including Google Analytics usage and your GDPR rights.",
            "url": "https://pennywise-app.com/privacy",
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
                Privacy <br />
                <span className="font-serif italic text-slate-900">Policy.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Your privacy matters. Here's how we handle your data.
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

              {/* Privacy Content */}
              <div className="space-y-10">

                {/* 1. Key Points (TL;DR) */}
                <div id="key-points">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">1. Key Points</h2>
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <p className="text-slate-700 font-medium mb-3">Here's a quick summary of what you need to know:</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>We use <strong className="text-slate-900">Google Analytics</strong> to understand how visitors use our website.</li>
                      <li>We use <strong className="text-slate-900">Google Fonts</strong> for typography on our website.</li>
                      <li>We only collect your personal information if you <strong className="text-slate-900">voluntarily contact us</strong> via email.</li>
                      <li>We do <strong className="text-slate-900">not</strong> sell, rent, or trade your personal data to third parties.</li>
                      <li>We do <strong className="text-slate-900">not</strong> have user accounts and do not collect financial data through this website.</li>
                      <li>As an EU-based company (Estonia), you have full <strong className="text-slate-900">GDPR rights</strong> regarding your data.</li>
                      <li>You can <strong className="text-slate-900">opt out</strong> of analytics tracking at any time.</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Introduction & Scope */}
                <div id="introduction">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">2. Introduction & Scope</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      This Privacy Policy explains how Media-z OÜ ("we," "us," or "our") collects, uses, discloses, and protects your personal data when you visit our website at pennywise-app.com (the "Website").
                    </p>
                    <p>
                      This policy applies exclusively to the Website. The Pennywise iOS application has its own privacy practices as described in its App Store listing. Please refer to the App Store for the app's privacy details.
                    </p>
                    <p>
                      Media-z OÜ, registered in the Republic of Estonia, is the data controller responsible for your personal data as described in this policy.
                    </p>
                  </div>
                </div>

                {/* 3. Information We Collect */}
                <div id="information-we-collect">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">3. Information We Collect</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>We collect information in the following ways:</p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-2">a) Information Collected Automatically via Google Analytics 4</h3>
                        <p className="mb-2">When you visit our Website, Google Analytics automatically collects:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>IP address (anonymized by default in Google Analytics 4)</li>
                          <li>Browser type and version</li>
                          <li>Device type and operating system</li>
                          <li>Screen resolution</li>
                          <li>Pages visited and time spent on each page</li>
                          <li>Referring URL (the website you came from)</li>
                          <li>Geographic location (country and city level only)</li>
                          <li>Language preference</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-2">b) Information You Provide Voluntarily</h3>
                        <p>
                          If you contact us via email at info@pennywise-app.com, we receive the information you choose to provide, which may include your name, email address, and the content of your message.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-2">c) Information Collected via Google Fonts</h3>
                        <p>
                          Our Website uses Google Fonts to display typography. When you load a page, your browser makes requests to Google's font servers, which may log your IP address and browser information. This is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Google's Privacy Policy</a>.
                        </p>
                      </div>
                    </div>

                    <p>
                      <strong className="text-slate-900">Information we do not collect:</strong> We do not collect Social Security numbers, bank account numbers, credit card numbers, income data, or any other sensitive financial information through this Website.
                    </p>
                  </div>
                </div>

                {/* 4. How We Use Your Information */}
                <div id="how-we-use">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">4. How We Use Your Information</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>We use the information we collect for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-slate-800">Website analytics:</strong> To analyze website traffic, understand usage patterns, and improve our content and user experience.</li>
                      <li><strong className="text-slate-800">Communication:</strong> To respond to your inquiries when you contact us via email.</li>
                      <li><strong className="text-slate-800">Security:</strong> To ensure the security and proper functioning of our Website.</li>
                      <li><strong className="text-slate-800">Content improvement:</strong> To understand which blog articles and resources are most useful to our visitors.</li>
                    </ul>
                    <p>
                      We do <strong className="text-slate-900">not</strong> use your data for profiling, automated decision-making, or targeted advertising.
                    </p>
                  </div>
                </div>

                {/* 5. Legal Basis for Processing */}
                <div id="legal-basis">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">5. Legal Basis for Processing (GDPR Article 6)</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>Under the General Data Protection Regulation (GDPR), we process your personal data based on the following legal grounds:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-slate-800">Consent (Art. 6(1)(a)):</strong> For the use of analytics cookies. You may withdraw your consent at any time by disabling cookies in your browser settings.</li>
                      <li><strong className="text-slate-800">Legitimate interest (Art. 6(1)(f)):</strong> For website security, content improvement, and understanding aggregate usage patterns. Our legitimate interest is to maintain and improve the Website for the benefit of our visitors.</li>
                      <li><strong className="text-slate-800">Contract performance (Art. 6(1)(b)):</strong> When responding to your inquiries submitted via our contact email.</li>
                    </ul>
                  </div>
                </div>

                {/* 6. Cookies & Tracking Technologies */}
                <div id="cookies">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">6. Cookies & Tracking Technologies</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>Our Website uses the following cookies:</p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="py-3 pr-4 font-medium text-slate-900">Cookie</th>
                            <th className="py-3 pr-4 font-medium text-slate-900">Provider</th>
                            <th className="py-3 pr-4 font-medium text-slate-900">Purpose</th>
                            <th className="py-3 font-medium text-slate-900">Expiry</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="py-3 pr-4 font-mono text-sm">_ga</td>
                            <td className="py-3 pr-4">Google Analytics</td>
                            <td className="py-3 pr-4">Distinguishes unique visitors</td>
                            <td className="py-3">2 years</td>
                          </tr>
                          <tr className="border-b border-slate-100">
                            <td className="py-3 pr-4 font-mono text-sm">_ga_*</td>
                            <td className="py-3 pr-4">Google Analytics</td>
                            <td className="py-3 pr-4">Maintains session state</td>
                            <td className="py-3">2 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>We do not use any other cookies, advertising trackers, or social media pixels.</p>

                    <p><strong className="text-slate-800">How to opt out:</strong></p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Google Analytics Opt-out Browser Add-on</a>.</li>
                      <li>Disable or delete cookies through your browser's privacy settings.</li>
                      <li>Use your browser's "Do Not Track" feature. While there is no universal standard for honoring Do Not Track signals, we respect your preference to minimize tracking.</li>
                    </ul>
                  </div>
                </div>

                {/* 7. Third-Party Services */}
                <div id="third-party-services">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">7. Third-Party Services</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>We use the following third-party services that may process your data:</p>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong className="text-slate-800">Google Analytics</strong> (Google LLC, Mountain View, CA, USA) — Website analytics.
                        <br />
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors ml-6">Google Privacy Policy</a>
                      </li>
                      <li>
                        <strong className="text-slate-800">Google Fonts</strong> (Google LLC) — Typography rendering.
                        <br />
                        <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors ml-6">Google Fonts Privacy FAQ</a>
                      </li>
                      <li>
                        <strong className="text-slate-800">Apple App Store</strong> — Our download links direct you to the App Store, which is governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Apple's Privacy Policy</a>.
                      </li>
                      <li>
                        <strong className="text-slate-800">Social media platforms</strong> — We link to our profiles on X (Twitter), Instagram, and TikTok. Clicking these links takes you to third-party platforms governed by their own privacy policies.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 8. Data Sharing & Disclosure */}
                <div id="data-sharing">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">8. Data Sharing & Disclosure</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      <strong className="text-slate-900">We do not sell, rent, or trade your personal data to any third party.</strong>
                    </p>
                    <p>We may share your data only in the following limited circumstances:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-slate-800">Service providers:</strong> With Google, as our analytics provider, as described in this policy.</li>
                      <li><strong className="text-slate-800">Legal requirements:</strong> When required to do so by law, court order, or other legal process.</li>
                      <li><strong className="text-slate-800">Protection of rights:</strong> To protect the rights, property, or safety of Media-z OÜ, our users, or others.</li>
                      <li><strong className="text-slate-800">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, in which case your data would remain subject to this Privacy Policy.</li>
                    </ul>
                  </div>
                </div>

                {/* 9. Data Retention */}
                <div id="data-retention">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">9. Data Retention</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>We retain personal data only for as long as necessary to fulfill the purposes described in this policy:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-slate-800">Google Analytics data:</strong> Retained for 14 months (the Google Analytics 4 default), after which it is automatically deleted.</li>
                      <li><strong className="text-slate-800">Contact form emails:</strong> Retained for as long as necessary to resolve your inquiry, plus a reasonable period thereafter. We do not maintain a user database.</li>
                    </ul>
                  </div>
                </div>

                {/* 10. Your Rights (GDPR) */}
                <div id="your-rights">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">10. Your Rights (GDPR)</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>Under the General Data Protection Regulation, you have the following rights regarding your personal data:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-slate-800">Right of access</strong> (Art. 15) — You can request a copy of the personal data we hold about you.</li>
                      <li><strong className="text-slate-800">Right to rectification</strong> (Art. 16) — You can request correction of inaccurate personal data.</li>
                      <li><strong className="text-slate-800">Right to erasure</strong> (Art. 17) — You can request deletion of your personal data ("right to be forgotten").</li>
                      <li><strong className="text-slate-800">Right to restrict processing</strong> (Art. 18) — You can request that we limit how we use your data.</li>
                      <li><strong className="text-slate-800">Right to data portability</strong> (Art. 20) — You can request your data in a structured, machine-readable format.</li>
                      <li><strong className="text-slate-800">Right to object</strong> (Art. 21) — You can object to processing based on legitimate interest.</li>
                      <li><strong className="text-slate-800">Right to withdraw consent</strong> — You can withdraw consent for analytics cookies at any time, without affecting the lawfulness of processing carried out before withdrawal.</li>
                    </ul>

                    <p>
                      To exercise any of these rights, please contact us at <a href="mailto:info@pennywise-app.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">info@pennywise-app.com</a>. We will respond to your request within <strong className="text-slate-900">30 days</strong>.
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-6">
                      <p className="font-medium text-slate-800 mb-2">Right to lodge a complaint</p>
                      <p>
                        You have the right to lodge a complaint with a supervisory authority. The relevant authority for Estonia is:
                      </p>
                      <p className="mt-2">
                        <strong className="text-slate-900">Andmekaitse Inspektsioon</strong> (Data Protection Inspectorate)<br />
                        Tatari 39, Tallinn 10134, Estonia<br />
                        Website: <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">www.aki.ee</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 11. International Data Transfers */}
                <div id="international-transfers">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">11. International Data Transfers</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Google Analytics may transfer and process your data on servers located in the United States or other countries outside the European Economic Area (EEA).
                    </p>
                    <p>
                      Google relies on the EU-US Data Privacy Framework and Standard Contractual Clauses (SCCs) approved by the European Commission to ensure adequate protection for personal data transferred outside the EEA. You can learn more about Google's data processing commitments in their <a href="https://privacy.google.com/businesses/processorterms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Data Processing Terms</a>.
                    </p>
                  </div>
                </div>

                {/* 12. Data Security */}
                <div id="data-security">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">12. Data Security</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      We take the security of your personal data seriously. Our Website is served over HTTPS, ensuring that data transmitted between your browser and our servers is encrypted.
                    </p>
                    <p>
                      We rely on industry-standard security practices provided by our hosting and service providers. However, no method of electronic transmission or storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>

                {/* 13. Children's Privacy */}
                <div id="children">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">13. Children's Privacy</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Our Website is not directed at children under the age of 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and believe that your child has provided us with personal data, please contact us at <a href="mailto:info@pennywise-app.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">info@pennywise-app.com</a>, and we will take steps to delete such information promptly.
                    </p>
                  </div>
                </div>

                {/* 14. Changes to This Policy */}
                <div id="changes">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">14. Changes to This Policy</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this page.
                    </p>
                    <p>
                      For material changes, we will provide a prominent notice on our Website. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.
                    </p>
                  </div>
                </div>

                {/* 15. Contact Information */}
                <div id="contact">
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">15. Contact Information</h2>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
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

export default PrivacyPolicy;
