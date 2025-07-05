import Container from '../common/Container';
import type { ProcessStep } from '@/utils/types';

interface ProcessProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

const Process = ({
  steps,
  title = 'How It Works',
  subtitle
}: ProcessProps) => {
  return (
    <section className="section-padding bg-surface">
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

        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center relative">
                    <span className="text-3xl font-bold text-primary">
                      {step.number}
                    </span>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Connection Arrow - Hidden on mobile and last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-primary">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;