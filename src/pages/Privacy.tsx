import { useEffect } from 'react';
import { Header, Footer, SEO, Container } from '@/components/common';
import { Card, CardBody } from '@/components/ui';
import { COMPANY_INFO } from '@/utils/constants';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'ai-data-processing', title: 'How We Use AI to Process Your Data' },
    { id: 'data-usage', title: 'How We Use Your Information' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'opt-out', title: 'Opt-Out of Automated Decision Making' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'third-parties', title: 'Third-Party Services' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="AIPE's Privacy Policy - Learn how we collect, use, and protect your data in our AI-powered insurance solutions."
      />
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <Container>
          <div className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Privacy Policy
                </h1>
                <p className="text-text-secondary">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              {/* Table of Contents */}
              <Card variant="glass" className="mb-12">
                <CardBody>
                  <h2 className="text-xl font-semibold text-text-primary mb-4">Table of Contents</h2>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block w-full text-left text-primary hover:text-primary-hover transition-colors py-1"
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </CardBody>
              </Card>

              {/* Content Sections */}
              <div className="space-y-12">
                {/* Introduction */}
                <section id="introduction">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
                  <p className="text-text-secondary mb-4">
                    {COMPANY_INFO.fullName} ("AIPE," "we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered insurance solutions and services.
                  </p>
                  <p className="text-text-secondary">
                    By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not access or use our services.
                  </p>
                </section>

                {/* Information We Collect */}
                <section id="information-collected">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>
                  <p className="text-text-secondary mb-4">
                    We collect information you provide directly to us, as well as information automatically collected when you use our services:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Account credentials and profile information</li>
                    <li>Insurance policy details and claims history</li>
                    <li>Financial information for billing purposes</li>
                    <li>Communications with our support team</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>Device and browser information</li>
                    <li>IP address and approximate location</li>
                    <li>Usage data and interaction with our services</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                {/* AI Data Processing */}
                <section id="ai-data-processing">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">How We Use AI to Process Your Data</h2>
                  <p className="text-text-secondary mb-4">
                    AIPE leverages advanced artificial intelligence technologies to provide innovative insurance solutions. Our AI systems process data in the following ways:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">AI Processing Activities</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
                    <li>Analyzing insurance claims patterns to detect potential fraud</li>
                    <li>Generating risk assessments and policy recommendations</li>
                    <li>Automating customer service through our AI voice agents</li>
                    <li>Predictive modeling for insurance pricing and underwriting</li>
                    <li>Natural language processing for document analysis</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">AI Transparency and Fairness</h3>
                  <p className="text-text-secondary mb-4">
                    We are committed to responsible AI use:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>Our AI systems are regularly audited for bias and fairness</li>
                    <li>We maintain human oversight of all significant AI decisions</li>
                    <li>AI decision-making processes are documented and explainable</li>
                    <li>We do not use AI for discriminatory purposes</li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section id="data-usage">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
                  <p className="text-text-secondary mb-4">
                    We use collected information for various purposes:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>Providing and maintaining our AI-powered insurance services</li>
                    <li>Processing insurance applications and claims</li>
                    <li>Improving our AI models and service quality</li>
                    <li>Communicating with you about your account and services</li>
                    <li>Detecting and preventing fraud or security issues</li>
                    <li>Complying with legal obligations and regulations</li>
                    <li>Conducting research and analysis to enhance our offerings</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section id="data-security">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Data Security</h2>
                  <p className="text-text-secondary mb-4">
                    We implement robust security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Secure cloud infrastructure with regular security audits</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular security training for our employees</li>
                    <li>Incident response procedures for potential breaches</li>
                    <li>Compliance with industry security standards (SOC 2, ISO 27001)</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to notifying you promptly of any breaches affecting your data.
                  </p>
                </section>

                {/* Your Rights */}
                <section id="your-rights">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Your Rights</h2>
                  <p className="text-text-secondary mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">California Residents (CCPA/CPRA)</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
                    <li>Right to know what personal information we collect and how it's used</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Right to non-discrimination for exercising privacy rights</li>
                    <li>Right to correct inaccurate personal information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Other State Privacy Rights</h3>
                  <p className="text-text-secondary mb-4">
                    Residents of Colorado, Connecticut, Virginia, Utah, and other states with comprehensive privacy laws have similar rights, including access, deletion, correction, and opt-out rights.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">European Users (GDPR)</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </section>

                {/* Opt-Out of Automated Decision Making */}
                <section id="opt-out">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Opt-Out of Automated Decision Making</h2>
                  <p className="text-text-secondary mb-4">
                    You have the right to opt-out of automated decision-making, including profiling, that produces legal or similarly significant effects. Our AI systems may make automated decisions regarding:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>Insurance eligibility and pricing</li>
                    <li>Claims processing and approval</li>
                    <li>Risk assessment and underwriting</li>
                  </ul>
                  <p className="text-text-secondary mb-4">
                    To opt-out of automated decision-making:
                  </p>
                  <ol className="list-decimal list-inside text-text-secondary space-y-2">
                    <li>Contact us at {COMPANY_INFO.email}</li>
                    <li>Specify which automated processes you wish to opt-out of</li>
                    <li>We will provide alternative manual review processes</li>
                    <li>Note that opting out may result in longer processing times</li>
                  </ol>
                </section>

                {/* Data Retention */}
                <section id="data-retention">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Data Retention</h2>
                  <p className="text-text-secondary mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>Provide our services and maintain your account</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain records for insurance and audit purposes</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    Specific retention periods vary based on the type of data and applicable regulations. Generally, we retain insurance-related data for 7-10 years after policy termination, as required by law.
                  </p>
                </section>

                {/* Third-Party Services */}
                <section id="third-parties">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Services</h2>
                  <p className="text-text-secondary mb-4">
                    We may share your information with third parties in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>Service providers who assist in operating our platform</li>
                    <li>Insurance carriers and reinsurers as necessary</li>
                    <li>Regulatory authorities as required by law</li>
                    <li>Professional advisors (lawyers, auditors) under confidentiality agreements</li>
                    <li>With your consent for specific purposes</li>
                  </ul>
                  <p className="text-text-secondary">
                    All third parties are contractually obligated to protect your information and use it only for authorized purposes.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section id="children">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Children's Privacy</h2>
                  <p className="text-text-secondary">
                    Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected information from a child under 18, we will promptly delete it. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                {/* Changes to This Policy */}
                <section id="changes">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to This Policy</h2>
                  <p className="text-text-secondary mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>We will update the "Last updated" date at the top of this policy</li>
                    <li>For material changes, we will notify you via email or platform notification</li>
                    <li>Your continued use after changes constitutes acceptance of the updated policy</li>
                    <li>We maintain a version history of policy changes for transparency</li>
                  </ul>
                </section>

                {/* Contact Us */}
                <section id="contact">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
                  <p className="text-text-secondary mb-4">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-surface p-6 rounded-lg">
                    <p className="text-text-primary font-semibold mb-2">{COMPANY_INFO.fullName}</p>
                    <p className="text-text-secondary mb-1">Privacy Inquiries</p>
                    <p className="text-text-secondary mb-1">
                      Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:text-primary-hover transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <p className="text-text-secondary">
                      Response Time: We aim to respond to all privacy inquiries within 30 days
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;