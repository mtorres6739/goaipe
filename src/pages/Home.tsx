import { Link } from 'react-router-dom';
import { Header, Footer, SEO, Container } from '@/components/common';
import { Hero, Solutions, CTA } from '@/components/sections';
import { Card, CardHeader, CardBody, Button } from '@/components/ui';
import { solutions, latestInsights } from '@/utils/mockData';
import { COMPANY_INFO } from '@/utils/constants';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="AIPE - Leading AI-driven solutions for insurance performance enhancement. Transform your agency with cutting-edge artificial intelligence."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero
          title="The Evolution of Insurance AI"
          subtitle="Artificial Intelligence for Performance Enhancement"
          description="Leading the charge in AI-driven performance solutions. Transform how governments and organizations approach complex policy challenges through cutting-edge artificial intelligence."
          ctaText="Explore Our Solutions"
          ctaLink="/solutions"
          ctaSecondaryText="Contact Us"
          ctaSecondaryLink="#contact"
          variant="home"
        />

        {/* About Section */}
        <section id="about" className="section-padding">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                About AIPE
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                {COMPANY_INFO.description}
              </p>
              <p className="text-text-secondary text-lg mb-6">
                Our proprietary AI systems leverage cutting-edge technologies including OpenAI, Anthropic Claude, LangChain, LiveKit, ElevenLabs, Deepgram, and more to deliver scalable, customizable solutions for industries such as insurance, real estate, and health coaching.
              </p>
              <p className="text-text-secondary text-lg">
                We are committed to building ethical AI that augments human capabilities, driving measurable results and fostering a future where humans and AI work together seamlessly.
              </p>
            </div>
          </Container>
        </section>

        {/* Solutions Preview */}
        <Solutions
          solutions={solutions}
          title="Our Solutions"
          subtitle="AI-powered tools that transform how insurance agencies operate"
        />

        {/* Latest Insights */}
        <section id="research" className="section-padding bg-surface">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Latest Insights
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Stay informed about the latest developments in AI-driven policy solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {latestInsights.map((post) => (
                <Card key={post.id} variant="glass" hover>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-text-secondary mb-4">
                      {post.excerpt}
                    </p>
                    <Link to={`/research/${post.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More →
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section id="cta">
          <CTA
            title="Ready to Transform Your Agency?"
            subtitle="Join leading insurance companies that are actively leveraging our AI solutions to streamline operations and enhance customer experiences."
            buttonText="Get Started"
            buttonLink="/contact"
            secondaryButtonText="View Solutions"
            secondaryButtonLink="/solutions"
            variant="gradient"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;