import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { COMPANY_INFO } from '@/utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    insuranceType: 'property-casualty'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Determine the endpoint based on your deployment
      // For Netlify: '/.netlify/functions/contact-form'
      // For Vercel: '/api/contact-form'
      // For Express: 'http://localhost:3001/api/contact' (or your server URL)
      
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact-form';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          insuranceType: 'property-casualty'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
                    <p className="text-green-500 font-medium">Thank you for your message! We'll get back to you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg">
                    <p className="text-red-500 font-medium">Something went wrong. Please try again or email us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="insuranceType" className="block text-sm font-medium mb-2">
                      Insurance Type
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="property-casualty">Property & Casualty</option>
                      <option value="life">Life Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="auto">Auto Insurance</option>
                      <option value="commercial">Commercial Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      How can we help you? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your insurance needs and how AI can help transform your operations..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                      isSubmitting 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary-dark text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
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
                        <h4 className="font-semibold mb-1">Quick Implementation</h4>
                        <p className="text-text-muted">Get up and running in weeks, not months, with our streamlined onboarding</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold mb-1">24/7 AI Support</h4>
                        <p className="text-text-muted">Your customers get instant, accurate assistance any time of day</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold mb-1">Industry Expertise</h4>
                        <p className="text-text-muted">Built by insurance professionals for insurance professionals</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Contact Details */}
                <div className="bg-background-light rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-text-light hover:text-primary transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-text-muted">Response within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* FAQ Preview */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Common Questions</h3>
                  <div className="space-y-3">
                    <details className="group">
                      <summary className="cursor-pointer font-medium hover:text-primary transition-colors">
                        How quickly can we implement AIPE's solutions?
                      </summary>
                      <p className="mt-2 text-text-muted text-sm">
                        Most implementations take 2-4 weeks, depending on your specific needs and integration requirements.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-medium hover:text-primary transition-colors">
                        Do you offer custom pricing?
                      </summary>
                      <p className="mt-2 text-text-muted text-sm">
                        Yes, we offer flexible pricing based on your agency size and specific requirements. Contact us for a custom quote.
                      </p>
                    </details>
                    <details className="group">
                      <summary className="cursor-pointer font-medium hover:text-primary transition-colors">
                        What kind of support do you provide?
                      </summary>
                      <p className="mt-2 text-text-muted text-sm">
                        We provide comprehensive onboarding, training, and ongoing technical support to ensure your success.
                      </p>
                    </details>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3">Headquarters</h3>
                <p className="text-text-muted">
                  Phoenix, Arizona<br />
                  United States
                </p>
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-background rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3">Development Center</h3>
                <p className="text-text-muted">
                  Innovation Hub<br />
                  Coming Soon
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;