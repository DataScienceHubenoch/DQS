// SEO utility functions
export const generatePageTitle = (pageTitle: string, siteName: string = 'DataQuest Solutions'): string => {
  return pageTitle.includes(siteName) ? pageTitle : `${pageTitle} | ${siteName}`;
};

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (baseKeywords: string[], pageKeywords: string[] = []): string => {
  const allKeywords = [...baseKeywords, ...pageKeywords];
  return [...new Set(allKeywords)].join(', ');
};

export const generateCanonicalUrl = (path: string, baseUrl: string = 'https://dqs.vercel.app'): string => {
  return `${baseUrl}${path}`;
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructure);
};

// Common structured data generators
export const generateOrganizationSchema = () => {
  return generateStructuredData('Organization', {
    name: 'DataQuest Solutions',
    url: 'https://dqs.vercel.app',
    logo: 'https://dqs.vercel.app/logo.jpeg',
    description: 'Expert data science services, training, and consulting to help you make data-driven decisions.',
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kakamega",
      addressCountry: "Kenya"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254707612395",
      contactType: "customer service",
      availableLanguage: "English"
    },
    sameAs: [
      "https://www.linkedin.com/groups/10084405/",
      "https://x.com/Dataquest123",
      "https://web.facebook.com/share/g/1BpECMKhi9/",
      "https://www.youtube.com/@dataquestsolutions-z9k"
    ]
  });
};

export const generateServiceSchema = (service: any) => {
  return generateStructuredData('Service', {
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "DataQuest Solutions"
    },
    serviceType: service.category,
    areaServed: "Kenya"
  });
};

export const generateCourseSchema = (course: any) => {
  return generateStructuredData('Course', {
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "DataQuest Solutions"
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    courseMode: "online"
  });
};