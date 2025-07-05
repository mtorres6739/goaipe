import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import { NAV_ITEMS, COMPANY_INFO } from '@/utils/constants';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path || path === '') {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-background/80'
    }`}>
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/aipe-logo-transparent.png" 
              alt="AIPE Logo" 
              className="w-11 h-11 md:w-14 md:h-14 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-primary">{COMPANY_INFO.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.href.includes('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`text-text-primary hover:text-primary transition-colors ${
                      location.pathname === item.href.split('#')[0] ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-text-primary hover:text-primary transition-colors ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-primary"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.href.includes('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-text-primary hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-text-primary hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;