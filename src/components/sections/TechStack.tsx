import Container from '../common/Container';
import type { TechPartner } from '@/utils/types';
import { techLogoData } from '@/utils/techLogos';

interface TechStackProps {
  partners: TechPartner[];
  title?: string;
  subtitle?: string;
}

const TechStack = ({
  partners,
  title = 'Our Technology Stack',
  subtitle
}: TechStackProps) => {
  return (
    <section className="section-padding">
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => {
            const logoData = techLogoData[partner.name];
            return (
              <div
                key={partner.name}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-surface rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-surface/80 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  {/* Logo/Icon */}
                  <div 
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                      logoData?.needsLightBg 
                        ? 'bg-gray-100 border border-gray-200' 
                        : 'bg-background/50 border border-border-dark'
                    }`}
                  >
                    {logoData?.logoUrl ? (
                      <img 
                        src={logoData.logoUrl} 
                        alt={`${partner.name} logo`}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const textFallback = document.createElement('span');
                          textFallback.textContent = partner.name.substring(0, 2).toUpperCase();
                          textFallback.className = 'text-xl font-bold text-primary';
                          target.parentElement?.appendChild(textFallback);
                        }}
                      />
                    ) : logoData?.svgPath ? (
                      <svg 
                        className="w-10 h-10" 
                        viewBox="0 0 24 24" 
                        fill={logoData.iconColor || 'currentColor'}
                      >
                        <path d={logoData.svgPath} />
                      </svg>
                    ) : (
                      <span className="text-xl font-bold text-primary">
                        {partner.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-text-primary font-semibold mb-2">
                    {partner.name}
                  </h3>
                  
                  <p className="text-text-secondary text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Advanced ML Algorithms
            </h3>
            <p className="text-text-secondary">
              Cutting-edge machine learning models optimized for insurance data
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Enterprise Security
            </h3>
            <p className="text-text-secondary">
              Bank-level encryption and security for all data processing
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Cloud Infrastructure
            </h3>
            <p className="text-text-secondary">
              Scalable cloud-based infrastructure for reliable performance
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;