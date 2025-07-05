import { useEffect } from 'react';
import { Header, Footer, SEO, Container } from '@/components/common';
import { Card, CardBody } from '@/components/ui';
import { COMPANY_INFO } from '@/utils/constants';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'agreement', title: 'Agreement to Terms' },
    { id: 'services', title: 'Description of Services' },
    { id: 'accounts', title: 'User Accounts' },
    { id: 'acceptable-use', title: 'Acceptable Use Policy' },
    { id: 'ai-terms', title: 'AI-Specific Terms' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'payment', title: 'Payment Terms' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'termination', title: 'Termination' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
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
        title="Terms of Service"
        description="AIPE's Terms of Service - Legal terms and conditions for using our AI-powered insurance solutions."
      />
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <Container>
          <div className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Terms of Service
                </h1>
                <p className="text-text-secondary">
                  Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                {/* Agreement to Terms */}
                <section id="agreement">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Agreement to Terms</h2>
                  <p className="text-text-secondary mb-4">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and {COMPANY_INFO.fullName} ("AIPE," "we," "us," or "our") concerning your access to and use of our AI-powered insurance solutions, platforms, and services (collectively, the "Services").
                  </p>
                  <p className="text-text-secondary mb-4">
                    By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our Services.
                  </p>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Eligibility</h3>
                  <p className="text-text-secondary">
                    You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements.
                  </p>
                </section>

                {/* Description of Services */}
                <section id="services">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Description of Services</h2>
                  <p className="text-text-secondary mb-4">
                    AIPE provides AI-powered solutions for the insurance industry, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>AI Voice Agents for customer service automation</li>
                    <li>Intelligent claims processing and fraud detection</li>
                    <li>Risk assessment and underwriting automation</li>
                    <li>Predictive analytics for policy pricing</li>
                    <li>Natural language processing for document analysis</li>
                    <li>Machine learning models for insurance optimization</li>
                  </ul>
                  <p className="text-text-secondary">
                    We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Services.
                  </p>
                </section>

                {/* User Accounts */}
                <section id="accounts">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">User Accounts</h2>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Account Creation</h3>
                  <p className="text-text-secondary mb-4">
                    To access certain features of our Services, you must create an account. When creating an account, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information to keep it accurate</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Account Termination</h3>
                  <p className="text-text-secondary">
                    We reserve the right to suspend or terminate your account if we reasonably believe you have violated these Terms or engaged in fraudulent, illegal, or harmful activities.
                  </p>
                </section>

                {/* Acceptable Use Policy */}
                <section id="acceptable-use">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Acceptable Use Policy</h2>
                  <p className="text-text-secondary mb-4">
                    You agree not to use our Services to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Engage in fraudulent, deceptive, or misleading activities</li>
                    <li>Interfere with or disrupt the integrity or performance of our Services</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Upload or transmit viruses, malware, or other harmful code</li>
                    <li>Harvest or collect information about other users without consent</li>
                    <li>Use our Services for any illegal or unauthorized purpose</li>
                    <li>Reverse engineer, decompile, or disassemble our software</li>
                    <li>Use automated systems to access our Services without permission</li>
                    <li>Circumvent any access restrictions or security measures</li>
                  </ul>
                  <p className="text-text-secondary">
                    Violation of this Acceptable Use Policy may result in immediate termination of your account and legal action.
                  </p>
                </section>

                {/* AI-Specific Terms */}
                <section id="ai-terms">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">AI-Specific Terms</h2>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">AI Output and Accuracy</h3>
                  <p className="text-text-secondary mb-4">
                    While our AI systems are designed to provide accurate and helpful outputs:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>AI-generated content and recommendations are not guaranteed to be error-free</li>
                    <li>You should independently verify important decisions based on AI outputs</li>
                    <li>We are not liable for decisions made solely based on AI recommendations</li>
                    <li>AI systems may occasionally produce unexpected or incorrect results</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">AI Training and Improvement</h3>
                  <p className="text-text-secondary mb-4">
                    By using our Services, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>We may use aggregated, anonymized data to improve our AI models</li>
                    <li>Your interactions may contribute to AI training, subject to our Privacy Policy</li>
                    <li>You can opt-out of certain AI training uses as described in our Privacy Policy</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">AI Compliance and Regulation</h3>
                  <p className="text-text-secondary">
                    Our AI systems comply with applicable regulations including the EU AI Act, state AI regulations, and insurance-specific AI guidelines. We maintain transparency about AI decision-making processes and provide human oversight for significant decisions.
                  </p>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Intellectual Property</h2>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Our Intellectual Property</h3>
                  <p className="text-text-secondary mb-4">
                    All content, features, and functionality of our Services, including but not limited to software, text, images, graphics, logos, and AI models, are owned by AIPE or our licensors and are protected by intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Your Content</h3>
                  <p className="text-text-secondary mb-4">
                    You retain ownership of content you submit to our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and store your content solely to provide and improve our Services.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">AI-Generated Content</h3>
                  <p className="text-text-secondary">
                    Content generated by our AI systems based on your inputs remains your property, subject to our right to use anonymized versions for service improvement. You are responsible for ensuring AI-generated content complies with applicable laws and doesn't infringe third-party rights.
                  </p>
                </section>

                {/* Payment Terms */}
                <section id="payment">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Payment Terms</h2>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Subscription and Fees</h3>
                  <p className="text-text-secondary mb-4">
                    Certain Services require payment of fees. By subscribing to paid Services:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>You authorize us to charge your payment method on a recurring basis</li>
                    <li>Fees are non-refundable except as required by law</li>
                    <li>We may change fees with 30 days' notice</li>
                    <li>You are responsible for all applicable taxes</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Billing</h3>
                  <p className="text-text-secondary mb-4">
                    We use third-party payment processors to handle billing. You agree to provide accurate billing information and promptly update it if it changes. Failure to pay may result in suspension or termination of Services.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Free Trials</h3>
                  <p className="text-text-secondary">
                    We may offer free trials. At the end of the trial period, your account will automatically convert to a paid subscription unless you cancel. Trial terms may include usage limits and feature restrictions.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section id="liability">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
                  <p className="text-text-secondary mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</li>
                    <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                    <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS</li>
                    <li>WE ARE NOT LIABLE FOR THIRD-PARTY ACTIONS OR CONTENT</li>
                  </ul>
                  <p className="text-text-secondary">
                    Some jurisdictions do not allow certain liability limitations, so some of the above may not apply to you.
                  </p>
                </section>

                {/* Indemnification */}
                <section id="indemnification">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Indemnification</h2>
                  <p className="text-text-secondary">
                    You agree to indemnify, defend, and hold harmless AIPE and our officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-4">
                    <li>Your use or misuse of our Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Your content or data submitted to our Services</li>
                    <li>Any negligent or wrongful conduct on your part</li>
                  </ul>
                </section>

                {/* Termination */}
                <section id="termination">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Termination</h2>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Termination by You</h3>
                  <p className="text-text-secondary mb-4">
                    You may terminate your account at any time through your account settings or by contacting us. Termination does not entitle you to refunds for unused subscription periods.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Termination by Us</h3>
                  <p className="text-text-secondary mb-4">
                    We may suspend or terminate your account immediately if:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                    <li>You breach these Terms</li>
                    <li>We are required to do so by law</li>
                    <li>We discontinue the Services</li>
                    <li>Your account shows signs of fraudulent activity</li>
                    <li>You fail to pay fees when due</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Effect of Termination</h3>
                  <p className="text-text-secondary">
                    Upon termination, your right to use our Services immediately ceases. We may delete your account and data, though some information may be retained as required by law or for legitimate business purposes.
                  </p>
                </section>

                {/* Governing Law */}
                <section id="governing-law">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Applicable Law</h3>
                  <p className="text-text-secondary mb-4">
                    These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
                  </p>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Dispute Resolution</h3>
                  <p className="text-text-secondary mb-4">
                    Any disputes arising from these Terms or our Services shall be resolved through:
                  </p>
                  <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
                    <li>Good faith negotiations between the parties</li>
                    <li>If negotiations fail, binding arbitration under JAMS rules</li>
                    <li>Arbitration shall be conducted in Delaware</li>
                    <li>Each party bears its own costs unless otherwise awarded</li>
                  </ol>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">Class Action Waiver</h3>
                  <p className="text-text-secondary">
                    You agree to resolve disputes individually and waive any right to participate in class actions, class arbitrations, or representative actions.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section id="changes">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to Terms</h2>
                  <p className="text-text-secondary mb-4">
                    We reserve the right to modify these Terms at any time. When we make changes:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>We will update the "Effective Date" at the top of these Terms</li>
                    <li>We will notify you of material changes via email or Service notification</li>
                    <li>Your continued use after changes take effect constitutes acceptance</li>
                    <li>If you disagree with changes, you must stop using our Services</li>
                  </ul>
                </section>

                {/* Contact Information */}
                <section id="contact">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
                  <p className="text-text-secondary mb-4">
                    For questions about these Terms or our Services, please contact us:
                  </p>
                  <div className="bg-surface p-6 rounded-lg">
                    <p className="text-text-primary font-semibold mb-2">{COMPANY_INFO.fullName}</p>
                    <p className="text-text-secondary mb-1">Legal Department</p>
                    <p className="text-text-secondary mb-1">
                      Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:text-primary-hover transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <p className="text-text-secondary mt-4 text-sm">
                      For privacy-related inquiries, please refer to our Privacy Policy.
                    </p>
                  </div>

                  <div className="mt-8 p-4 bg-surface/50 rounded-lg border border-border-dark">
                    <p className="text-text-muted text-sm">
                      These Terms of Service were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and are effective immediately for new users and after 30 days for existing users.
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

export default Terms;