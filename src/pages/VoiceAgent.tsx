import { Header, Footer, SEO } from '@/components/common';
import { Hero, Solutions as SolutionsSection, Process, CTA } from '@/components/sections';
import { Container } from '@/components/common';
import { Badge } from '@/components/ui';
import { voiceAgentSolutions, voiceProcessSteps } from '@/utils/mockData';

const VoiceAgent = () => {
  return (
    <>
      <SEO 
        title="Voice Agent Solutions"
        description="AI-powered voice agents for insurance agencies. Automate customer service, claims processing, and sales with natural conversational AI."
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Hero
          title="AI-Powered Voice Agents for Insurance Agencies"
          subtitle="Voice Agent Solutions"
          description="Our AI-powered voice agents transform how insurance agencies interact with customers, handling everything from initial inquiries to complex claims processing."
          ctaText="Schedule Demo"
          ctaLink="mailto:contact@goaipe.com"
          ctaSecondaryText="View Pricing"
          ctaSecondaryLink="#pricing"
          variant="page"
        />

        {/* Voice Agent Solutions */}
        <SolutionsSection
          solutions={voiceAgentSolutions}
          title="Voice Agent Solutions"
          subtitle="Our AI-powered voice agents are designed specifically for insurance agencies, handling a wide range of customer interactions with natural conversation."
          columns={2}
        />

        {/* Key Features */}
        <section className="section-padding bg-surface">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Key Features
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Our AI voice agents are built using cutting-edge technology specifically designed for the insurance industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Natural Conversation
                </h3>
                <p className="text-text-secondary">
                  AI that sounds human, handles complex queries, and maintains context throughout conversations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Insurance Knowledge
                </h3>
                <p className="text-text-secondary">
                  Pre-trained on insurance terminology, policies, regulations, and industry best practices
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Performance Analytics
                </h3>
                <p className="text-text-secondary">
                  Comprehensive analytics on call performance, customer satisfaction, and conversion rates
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  CRM Integration
                </h3>
                <p className="text-text-secondary">
                  Seamlessly integrates with popular insurance CRMs and agency management systems
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Compliance Ready
                </h3>
                <p className="text-text-secondary">
                  Built with insurance compliance in mind, including call recording and audit trails
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Quick Deployment
                </h3>
                <p className="text-text-secondary">
                  Get up and running in days, not months, with our streamlined onboarding process
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Success Story */}
        <section className="section-padding">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Success Story
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                See how our AI voice agents are transforming insurance agencies across the country
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  Small Agency, Big Results
                </h3>
                <p className="text-text-secondary mb-6">
                  Midwest Insurance, a 5-person agency, implemented our AI voice agents to handle after-hours calls and basic quote requests. Within three months, they experienced:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">68%</p>
                  <p className="text-text-secondary">of inquiries handled by AI without human intervention</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">23%</p>
                  <p className="text-text-secondary">increase in new business from 24/7 availability</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
                  <p className="text-text-secondary">customer satisfaction rating for AI interactions</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-text-secondary">
                "The AI voice agent has been a game-changer for our small agency. We're now competitive with the big players, offering 24/7 service without hiring additional staff. It's like having three extra employees who never take breaks."
              </blockquote>
              <p className="text-text-primary font-semibold mt-4">
                — Sarah Martinez, Owner of Midwest Insurance
              </p>
            </div>
          </Container>
        </section>

        {/* Process */}
        <Process
          steps={voiceProcessSteps}
          title="Implementation Process"
          subtitle="Getting started with AI is simple and straightforward, with expert support at every step"
        />

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-surface">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Choose the plan that fits your agency's needs. All plans include setup, training, and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background rounded-xl p-8 border border-border-dark">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Starter</h3>
                  <p className="text-4xl font-bold text-primary mb-2">$499</p>
                  <p className="text-text-secondary">/month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Up to 500 calls/month
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    2 voice agent types
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Basic analytics
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Email support
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-xl p-8 border-2 border-primary relative">
                <Badge variant="primary" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Professional</h3>
                  <p className="text-4xl font-bold text-primary mb-2">$999</p>
                  <p className="text-text-secondary">/month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Up to 2,000 calls/month
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    All voice agent types
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    CRM integration
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-8 border border-border-dark">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Enterprise</h3>
                  <p className="text-4xl font-bold text-primary mb-2">Custom</p>
                  <p className="text-text-secondary">Contact us</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Unlimited calls
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Custom voice agents
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    White-label options
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Dedicated support
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    Custom integrations
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Transform Your Agency Operations?"
          subtitle="Join the growing number of insurance agencies using AI voice agents to improve efficiency, enhance customer service, and drive growth."
          buttonText="Schedule Demo"
          buttonLink="mailto:contact@goaipe.com"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="mailto:contact@goaipe.com"
          variant="gradient"
        />
      </main>

      <Footer />
    </>
  );
};

export default VoiceAgent;