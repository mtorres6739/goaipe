import Container from '../common/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

interface CTAProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'default' | 'gradient' | 'centered';
}

const CTA = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'default'
}: CTAProps) => {
  const variants = {
    default: 'bg-surface',
    gradient: 'bg-gradient-to-r from-primary/20 via-surface to-accent-light/20',
    centered: 'bg-background'
  };

  const contentAlignment = variant === 'centered' ? 'text-center items-center' : '';

  return (
    <section className={`section-padding ${variants[variant]}`}>
      <Container>
        <div className={`max-w-4xl mx-auto ${contentAlignment}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {variant === 'gradient' ? (
              <GradientText>{title}</GradientText>
            ) : (
              <span className="text-text-primary">{title}</span>
            )}
          </h2>

          {subtitle && (
            <p className="text-text-secondary text-lg mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          <div className={`flex gap-4 ${
            variant === 'centered' ? 'justify-center' : 'flex-col sm:flex-row'
          }`}>
            <Button href={buttonLink} size="lg">
              {buttonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                href={secondaryButtonLink}
                variant="outline"
                size="lg"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>

          {/* Optional decorative elements */}
          {variant === 'gradient' && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-2xl font-bold text-primary mb-1">Free</p>
                <p className="text-text-secondary text-sm">Initial Consultation</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-primary mb-1">24/7</p>
                <p className="text-text-secondary text-sm">Support Available</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-primary mb-1">100%</p>
                <p className="text-text-secondary text-sm">Satisfaction Guaranteed</p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CTA;