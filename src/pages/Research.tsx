import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { blogPosts, categories, tags } from '@/content/blogData';

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on selected filters
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category?.id === selectedCategory;
      const matchesTag = selectedTag === 'all' || post.tags?.some(tag => tag.id === selectedTag);
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Research & Insights - AIPE Blog</title>
        <meta name="description" content="Explore the latest research, insights, and thought leadership on AI in insurance from AIPE's team of experts." />
        <meta property="og:title" content="Research & Insights - AIPE Blog" />
        <meta property="og:description" content="Explore the latest research, insights, and thought leadership on AI in insurance from AIPE's team of experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goaipe.com/research" />
      </Helmet>

      <div className="min-h-screen bg-background text-text-light">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Research & Insights
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Discover the latest trends, best practices, and innovations in AI-powered insurance technology through our expert analysis and real-world case studies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 border-b border-border-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-background-light border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-background-light border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Categories</option>
                    {Object.values(categories).map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tag Filter */}
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Tag</label>
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="px-4 py-2 bg-background-light border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Tags</option>
                    {Object.values(tags).map(tag => (
                      <option key={tag.id} value={tag.id}>
                        {tag.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <p className="text-center text-text-muted">
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              {filteredPosts.filter(post => post.featured).map(post => (
                <motion.article
                  key={post.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-background-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link to={`/research/${post.slug}`} className="block">
                    <div className="md:flex">
                      {post.image && (
                        <div className="md:w-2/5">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-8 md:w-3/5">
                        <div className="flex items-center gap-4 mb-4">
                          {post.category && (
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {post.category.name}
                            </span>
                          )}
                          <span className="text-text-muted text-sm">{post.date}</span>
                          <span className="text-text-muted text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-text-muted mb-4 line-clamp-3">{post.excerpt}</p>
                        {post.author && (
                          <div className="flex items-center gap-3">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">{post.author.name}</p>
                              <p className="text-sm text-text-muted">{post.author.role}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.filter(post => !post.featured).map(post => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="bg-background-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link to={`/research/${post.slug}`} className="block">
                    {post.image && (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {post.category && (
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                            {post.category.name}
                          </span>
                        )}
                        <span className="text-text-muted text-xs">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-muted">{post.readTime}</span>
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-sm text-text-muted">{post.author.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-text-muted">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTag('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insurance Insights</h2>
            <p className="text-lg text-text-muted mb-8">
              Subscribe to our newsletter for the latest research, case studies, and industry updates.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Research;