import Container from '../common/Container';
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import type { Solution } from '@/utils/types';

interface SolutionsProps {
  solutions: Solution[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

const Solutions = ({
  solutions,
  title = 'Our Solutions',
  subtitle,
  columns = 3
}: SolutionsProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
  };

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

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
          {solutions.map((solution, index) => (
            <Card
              key={solution.id}
              variant="glass"
              hover
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {solution.title}
                </h3>
                <p className="text-text-secondary">
                  {solution.description}
                </p>
              </CardHeader>

              {solution.features.length > 0 && (
                <CardBody>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-text-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              )}

              <CardFooter>
                <Button
                  href={solution.ctaLink}
                  variant="outline"
                  fullWidth
                  size="sm"
                >
                  {solution.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solutions;