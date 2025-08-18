// Company Information
export const COMPANY_INFO = {
  name: 'DataQuest Solutions',
  tagline: 'Your Gateway to Data Excellence',
  description: 'Expert data science services, training, and consulting to help you make data-driven decisions.',
  email: 'dataquestsolutions2@gmail.com',
  phone: '+254707612395',
  alternatePhone: '+254701344230',
  location: 'Kakamega, Kenya',
  website: 'https://dqs.vercel.app',
  whatsappGroup: 'https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM',
  
  // Social Media Links
  social: {
    linkedin: 'https://www.linkedin.com/groups/10084405/',
    twitter: 'https://x.com/Dataquest123',
    facebook: 'https://web.facebook.com/share/g/1BpECMKhi9/',
    instagram: 'https://instagram.com/dataquestsolutions',
    youtube: 'https://www.youtube.com/@dataquestsolutions-z9k',
  },
};

// Services Configuration
export const SERVICES = [
  {
    id: 'data-collection',
    name: 'Data Collection',
    description: 'Comprehensive data gathering and management solutions',
    icon: 'Database',
    category: 'data',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    description: 'Transform raw data into actionable insights',
    icon: 'LineChart',
    category: 'analysis',
  },
  {
    id: 'ai-development',
    name: 'AI Development',
    description: 'Build intelligent systems and machine learning models',
    icon: 'Cpu',
    category: 'ai',
  },
  {
    id: 'research-writing',
    name: 'Research Writing',
    description: 'Expert research documentation and reporting',
    icon: 'FileText',
    category: 'research',
  },
  {
    id: 'training',
    name: 'Training & Consultation',
    description: 'Professional development and strategic guidance',
    icon: 'GraduationCap',
    category: 'education',
  },
  {
    id: 'design',
    name: 'Web & Graphic Design',
    description: 'Digital solutions and visual communication',
    icon: 'Palette',
    category: 'design',
  },
];

// Course Categories
export const COURSE_CATEGORIES = [
  { id: 'data-analysis', name: 'Data Analysis', icon: 'BarChart' },
  { id: 'programming', name: 'Programming', icon: 'Code' },
  { id: 'data-science', name: 'Data Science', icon: 'Database' },
  { id: 'data-collection', name: 'Data Collection', icon: 'FileText' },
  { id: 'visualization', name: 'Visualization', icon: 'Layers' },
  { id: 'machine-learning', name: 'Machine Learning', icon: 'Brain' },
];

// Navigation Menu Items
export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: 'Home' },
  { path: '/about', label: 'About', icon: 'Users' },
  { path: '/services', label: 'Services', icon: 'Settings' },
  { path: '/case-studies', label: 'Case Studies', icon: 'ClipboardList' },
  { path: '/consulting', label: 'Consulting', icon: 'Lightbulb' },
  { path: '/analytics', label: 'Analytics', icon: 'BarChart' },
  { path: '/courses', label: 'Courses', icon: 'BookOpen' },
  { path: '/resources', label: 'Resources', icon: 'FileText' },
  { path: '/blog', label: 'Blog', icon: 'FileText' },
  { path: '/contact', label: 'Contact', icon: 'Mail' },
];

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/contact',
  inquiries: '/inquiries',
  enrollments: '/enrollments',
  newsletter: '/newsletter',
  blog: '/blog',
  team: '/team',
  caseStudies: '/case-studies',
  courses: '/courses',
  search: '/search',
  analytics: '/analytics',
  upload: '/upload',
};

// File Upload Configuration
export const UPLOAD_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    spreadsheet: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection and try again.',
  server: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  fileUpload: 'File upload failed. Please try again.',
  generic: 'An unexpected error occurred. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  contactForm: 'Your message has been sent successfully! We will get back to you soon.',
  serviceInquiry: 'Your service inquiry has been submitted successfully!',
  courseEnrollment: 'Your course enrollment has been submitted successfully!',
  newsletter: 'You have been successfully subscribed to our newsletter!',
  fileUpload: 'File uploaded successfully!',
};

// Feature Flags
export const FEATURES = {
  web3Integration: true,
  analytics: true,
  blog: true,
  newsletter: true,
  fileUpload: true,
  search: true,
  darkMode: false,
  multiLanguage: false,
};