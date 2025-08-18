import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "DataQuest Solutions - Data Science & Analytics Services",
  description = "Expert data science services, training, and consulting to help you make data-driven decisions. Transform your data into actionable insights.",
  keywords = "data science, data analysis, machine learning, AI development, research writing, data collection, training, consulting, Kenya, East Africa",
  image = "https://dqs.vercel.app/og-image.jpg",
  url = "https://dqs.vercel.app",
  type = "website",
  author = "DataQuest Solutions",
  publishedTime,
  modifiedTime,
}) => {
  const siteTitle = "DataQuest Solutions";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Dataquest123" />
      <meta name="twitter:creator" content="@Dataquest123" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article Meta Tags (for blog posts) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DataQuest Solutions",
          "url": "https://dqs.vercel.app",
          "logo": "https://dqs.vercel.app/logo.jpeg",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kakamega",
            "addressCountry": "Kenya"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254707612395",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.linkedin.com/groups/10084405/",
            "https://x.com/Dataquest123",
            "https://web.facebook.com/share/g/1BpECMKhi9/",
            "https://www.youtube.com/@dataquestsolutions-z9k"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;