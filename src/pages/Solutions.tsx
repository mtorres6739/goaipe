import { Header, Footer, SEO } from '@/components/common';
import { Hero, Solutions as SolutionsSection, Process, TechStack, Testimonials, CTA } from '@/components/sections';
import { solutions, processSteps, techPartners, testimonials } from '@/utils/mockData';

const Solutions = () => {
  return (
    <>
      <SEO 
        title="Solutions"
        description="Explore AIPE's comprehensive AI solutions for insurance agencies. From policy analysis to predictive modeling, discover how our technology transforms your operations."
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Hero
          title="AI-Powered Policy Enhancement Solutions"
          subtitle="Transformative AI Solutions"
          description="Our comprehensive suite of AI-powered tools and services helps policymakers make data-driven decisions with unprecedented accuracy and efficiency."
          ctaText="Get Started"
          ctaLink="#contact"
          variant="page"
        />

        {/* Solutions Grid */}
        <SolutionsSection
          solutions={solutions}
          title="Transformative AI Solutions"
          subtitle="Our comprehensive suite of AI-powered tools and services helps policymakers make data-driven decisions with unprecedented accuracy and efficiency."
        />

        {/* Process Section */}
        <Process
          steps={processSteps}
          title="How It Works"
          subtitle="Our streamlined process ensures a smooth integration of AI solutions into your existing workflow"
        />

        {/* Success Stories */}
        <Testimonials
          testimonials={testimonials}
          title="Success Stories"
          subtitle="See how our AI solutions have transformed policy development for organizations worldwide"
        />

        {/* Tech Stack */}
        <TechStack
          partners={techPartners}
          title="Cutting-Edge Technology Stack"
          subtitle="Powered by the world's most advanced AI models, real-time communication platforms, and modern infrastructure to deliver unparalleled insurance solutions."
        />

        {/* Case Studies */}
        <section id="case-studies" className="section-padding bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Real-World Impact
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                See how organizations are achieving remarkable results with our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-8 border border-border-dark">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  National Healthcare Policy Reform
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">23%</span>
                    <span className="text-text-secondary">Reduction in policy development time</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">68%</span>
                    <span className="text-text-secondary">Increase in data-driven decisions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">4.8/5</span>
                    <span className="text-text-secondary">Stakeholder satisfaction rating</span>
                  </div>
                </div>
                <p className="text-text-secondary">
                  A major healthcare department leveraged our AI tools to streamline policy development, resulting in more effective and equitable healthcare policies.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 border border-border-dark">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  Urban Transportation Initiative
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">31%</span>
                    <span className="text-text-secondary">Improvement in traffic congestion</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">500K</span>
                    <span className="text-text-secondary">Citizens positively impacted</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">$2.4M</span>
                    <span className="text-text-secondary">Annual cost savings achieved</span>
                  </div>
                </div>
                <p className="text-text-secondary">
                  City planners used our predictive modeling to optimize public transit routes and reduce congestion, improving quality of life for residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Transform Your Policy Approach?"
          subtitle="Start making AI-driven decisions that are managing AI to develop more effective, efficient, and equitable policies."
          buttonText="Schedule Consultation"
          buttonLink="mailto:contact@goaipe.com"
          variant="gradient"
        />
      </main>

      <Footer />
    </>
  );
};

export default Solutions;