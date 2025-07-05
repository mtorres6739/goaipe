import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CustomContactForm from '@/components/CustomContactForm';
import { COMPANY_INFO } from '@/utils/constants';

const ContactSimple = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Contact AIPE - Get Started with AI Insurance Solutions</title>
        <meta name="description" content="Contact AIPE to transform your insurance operations with AI. Schedule a demo, get pricing information, or discuss your specific needs with our team." />
        <meta property="og:title" content="Contact AIPE - Get Started with AI Insurance Solutions" />
        <meta property="og:description" content="Contact AIPE to transform your insurance operations with AI. Schedule a demo, get pricing information, or discuss your specific needs with our team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goaipe.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-background text-text-light">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Let's Transform Your Insurance Operations
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Ready to leverage AI to streamline your insurance processes? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Column */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background-light rounded-xl p-8 shadow-lg"
              >
                <CustomContactForm />
              </motion.div>

              {/* Info Column */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-8"
              >
                {/* Company Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Why Choose AIPE?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold mb-1">Proven ROI</h4>
                        <p className="text-text-muted">Our clients see 300%+ returns through reduced costs and improved efficiency</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold mb-1">Industry Expertise</h4>
                        <p className="text-text-muted">Deep understanding of insurance workflows and regulatory requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold mb-1">Quick Implementation</h4>
                        <p className="text-text-muted">Get up and running in weeks, not months, with our streamlined process</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold mb-1">Dedicated Support</h4>
                        <p className="text-text-muted">24/7 support and continuous optimization for your AI systems</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:text-secondary">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:text-secondary">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Office Hours</h4>
                      <p className="text-text-muted">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {COMPANY_INFO.social.linkedin && (
                      <a
                        href={COMPANY_INFO.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-background-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {COMPANY_INFO.social.twitter && (
                      <a
                        href={COMPANY_INFO.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-background-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactSimple;