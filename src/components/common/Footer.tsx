import { Link } from 'react-router-dom';
import Container from './Container';
import { COMPANY_INFO, NAV_ITEMS } from '@/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: NAV_ITEMS.filter(item => !item.href.includes('#'))
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Policy Analysis', href: '/solutions#policy-analysis' },
        { label: 'Predictive Modeling', href: '/solutions#predictive-modeling' },
        { label: 'Decision Support', href: '/solutions#decision-support' },
        { label: 'Voice Agent', href: '/voice-agent' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '/#case-studies' },
        { label: 'Research', href: '/#research' },
        { label: 'Blog', href: '/#blog' }
      ]
    },
    {
      title: 'Contact',
      content: (
        <div className="space-y-2">
          <p className="text-text-secondary">Get in touch with us</p>
          <a 
            href={`mailto:${COMPANY_INFO.email}`}
            className="text-primary hover:text-primary-hover transition-colors"
          >
            {COMPANY_INFO.email}
          </a>
        </div>
      )
    }
  ];

  return (
    <footer className="bg-surface border-t border-border-dark">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <img 
                  src="/aipe-logo-transparent.png" 
                  alt="AIPE Logo" 
                  className="w-14 h-14 object-contain"
                />
                <span className="text-xl font-bold text-primary">{COMPANY_INFO.name}</span>
              </Link>
              <p className="text-text-secondary text-sm">
                {COMPANY_INFO.description.substring(0, 150)}...
              </p>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-text-primary font-semibold mb-4">{section.title}</h3>
                {section.content || (
                  <ul className="space-y-2">
                    {section.links?.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-text-secondary hover:text-primary transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border-dark">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-text-muted text-sm">
                &copy; {currentYear} {COMPANY_INFO.fullName}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-text-muted hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-text-muted hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;