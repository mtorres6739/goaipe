import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { blogPosts } from '@/content/blogData';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/research" replace />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category?.id === post.category?.id)
    .slice(0, 3);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.image || post.ogImage,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author?.name,
      "jobTitle": post.author?.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIPE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goaipe.com/aipe-logo-transparent.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - AIPE Blog</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://goaipe.com/research/${post.slug}`} />
        {(post.image || post.ogImage) && (
          <meta property="og:image" content={post.image || post.ogImage} />
        )}
        <meta property="article:published_time" content={post.date} />
        {post.author && (
          <meta property="article:author" content={post.author.name} />
        )}
        {post.tags && post.tags.map(tag => (
          <meta key={tag.id} property="article:tag" content={tag.name} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-text-light">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
          {post.image && (
            <div className="absolute inset-0 z-0">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
            </div>
          )}
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/research" className="hover:text-primary transition-colors">Research</Link>
                <span>/</span>
                <span className="text-text-light">{post.category?.name}</span>
              </nav>

              {/* Category and Date */}
              <div className="flex items-center gap-4 mb-6">
                {post.category && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {post.category.name}
                  </span>
                )}
                <span className="text-text-muted">{post.date}</span>
                <span className="text-text-muted">{post.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                {post.title}
              </h1>

              {/* Author */}
              {post.author && (
                <div className="flex items-center gap-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-lg">{post.author.name}</p>
                    <p className="text-text-muted">{post.author.role}</p>
                  </div>
                  {(post.author.linkedin || post.author.twitter) && (
                    <div className="flex gap-3 ml-auto">
                      {post.author.linkedin && (
                        <a 
                          href={post.author.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {post.author.twitter && (
                        <a 
                          href={post.author.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="prose prose-lg prose-invert max-w-none"
            >
              {post.content && (
                <ReactMarkdown
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
                    p: ({children}) => <p className="mb-4 text-text-light leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                    li: ({children}) => <li className="text-text-light">{children}</li>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-text-muted">
                        {children}
                      </blockquote>
                    ),
                    code: ({children}: any) => (
                        <code className="bg-background-light px-1 py-0.5 rounded text-sm">{children}</code>
                      ),
                    pre: ({children}) => (
                        <pre className="bg-background-light p-4 rounded-lg overflow-x-auto mb-4">
                          {children}
                        </pre>
                      ),
                    a: ({href, children}) => (
                      <a href={href} className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              )}
            </motion.div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border-dark">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link
                      key={tag.id}
                      to={`/research?tag=${tag.id}`}
                      className="px-3 py-1 bg-background-light rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border-dark">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://goaipe.com/research/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-background-light rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://goaipe.com/research/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-background-light rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <article key={relatedPost.id} className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/research/${relatedPost.slug}`}>
                      {relatedPost.image && (
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-text-muted text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-text-muted">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;