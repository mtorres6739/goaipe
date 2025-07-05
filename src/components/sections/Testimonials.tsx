import Container from '../common/Container';
import Card, { CardBody } from '../ui/Card';
import type { Testimonial } from '@/utils/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const Testimonials = ({
  testimonials,
  title = 'Success Stories',
  subtitle
}: TestimonialsProps) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              variant="glass"
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardBody className="flex flex-col h-full">
                {/* Quote Icon */}
                <div className="text-primary mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < (testimonial.rating || 0)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Content */}
                <p className="text-text-secondary mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border-dark">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-semibold text-primary">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">68%</p>
            <p className="text-text-secondary">Average cost savings</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">23%</p>
            <p className="text-text-secondary">Increase in efficiency</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
            <p className="text-text-secondary">Customer satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-text-secondary">Active users</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;