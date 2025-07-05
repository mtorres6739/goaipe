import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { teamMembers, companyMilestones, companyValues, awards } from '@/content/teamData';

const About = () => {
  const [selectedTab, setSelectedTab] = useState<'team' | 'values' | 'history'>('team');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About AIPE - Leading AI Innovation in Insurance</title>
        <meta name="description" content="Learn about AIPE's mission to transform insurance through artificial intelligence. Meet our team of experts and discover our journey." />
        <meta property="og:title" content="About AIPE - Leading AI Innovation in Insurance" />
        <meta property="og:description" content="Learn about AIPE's mission to transform insurance through artificial intelligence. Meet our team of experts and discover our journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goaipe.com/about" />
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
                Transforming Insurance Through AI Innovation
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Founded in 2020, AIPE is pioneering the future of insurance with cutting-edge artificial intelligence solutions that enhance performance, streamline operations, and deliver exceptional value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="text-center md:text-left"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  To empower insurance companies with AI-driven solutions that enhance decision-making, improve customer experiences, and create sustainable competitive advantages in an evolving digital landscape.
                </p>
              </motion.div>
              <motion.div 
                className="text-center md:text-left"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  To be the global leader in insurance AI technology, setting the standard for innovation, ethics, and performance while making advanced AI accessible to insurers of all sizes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-8 border-y border-border-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {(['team', 'values', 'history'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-background-light text-text-muted hover:bg-primary/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Content Based on Tab */}
        {selectedTab === 'team' && (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerChildren}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-100 object-cover"
                    />
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-primary text-center mb-4">{member.role}</p>
                    <p className="text-sm text-text-muted mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {member.twitter && (
                        <a 
                          href={member.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {selectedTab === 'values' && (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerChildren}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {companyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-background-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-text-muted">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {selectedTab === 'history' && (
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Timeline */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerChildren}
                className="space-y-12"
              >
                {companyMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-8 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-text-muted">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Awards Section */}
              <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={staggerChildren}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-background-light rounded-lg p-6 border border-border-dark"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">🏆</div>
                        <div>
                          <h4 className="font-bold text-lg">{award.title}</h4>
                          <p className="text-primary">{award.organization}</p>
                          <p className="text-sm text-text-muted mt-1">{award.description}</p>
                          <p className="text-sm text-text-muted mt-2">{award.year}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Insurance Operations?
            </h2>
            <p className="text-xl text-text-muted mb-8">
              Join the growing number of insurance companies leveraging AIPE's AI solutions.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
            >
              Get Started Today
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;