import Container from '../common/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  variant?: 'home' | 'page' | 'centered';
  backgroundImage?: string;
  showLogo?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  variant = 'home',
  backgroundImage,
  showLogo = false
}: HeroProps) => {
  const variants = {
    home: 'text-left',
    page: 'text-left',
    centered: 'text-center items-center'
  };

  const heightClasses = {
    home: 'min-h-[600px] md:min-h-[700px]',
    page: 'min-h-[400px] md:min-h-[500px]',
    centered: 'min-h-[400px] md:min-h-[500px]'
  };

  return (
    <section
      className={`relative ${heightClasses[variant]} flex items-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-surface/50" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-light rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Container className="relative z-10">
        <div className={`max-w-4xl ${variants[variant]} ${variant === 'centered' ? 'mx-auto' : ''}`}>
          {showLogo && (
            <div className={`mb-8 animate-fade-in ${variant === 'centered' ? 'flex justify-center' : ''}`}>
              <img 
                src="/aipe-logo.png" 
                alt="AIPE Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain filter drop-shadow-2xl"
              />
            </div>
          )}
          
          {subtitle && (
            <p className="text-primary text-lg mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            {variant === 'home' ? (
              <GradientText as="span" animate>
                {title}
              </GradientText>
            ) : (
              title
            )}
          </h1>

          {description && (
            <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl animate-fade-in animation-delay-200">
              {description}
            </p>
          )}

          {(ctaText || ctaSecondaryText) && (
            <div className={`flex gap-4 animate-fade-in animation-delay-300 ${
              variant === 'centered' ? 'justify-center' : 'flex-col sm:flex-row'
            }`}>
              {ctaText && ctaLink && (
                <Button href={ctaLink} size="lg">
                  {ctaText}
                </Button>
              )}
              {ctaSecondaryText && ctaSecondaryLink && (
                <Button href={ctaSecondaryLink} variant="outline" size="lg">
                  {ctaSecondaryText}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;