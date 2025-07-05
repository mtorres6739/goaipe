import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '@/utils/constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title,
  description = COMPANY_INFO.description,
  keywords = 'AI, artificial intelligence, insurance tech, performance enhancement, policy analysis, predictive modeling',
  image = '/aipe.png',
  url = window.location.href
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${COMPANY_INFO.name}` : `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={COMPANY_INFO.name} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;