import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject must be less than 200 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

// Service inquiry validation schema
export const serviceInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20, 'Phone number is too long'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  company: z.string().optional(),
});

// Course enrollment validation schema
export const courseEnrollmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(20, 'Phone number is too long'),
  course: z.string().min(1, 'Please select a course'),
  experience: z.string().min(1, 'Please select your experience level'),
  goals: z.string().min(10, 'Please describe your learning goals').max(500, 'Goals description is too long'),
});

// Newsletter subscription validation schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

// Search validation schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query cannot be empty').max(100, 'Search query is too long'),
  type: z.enum(['all', 'services', 'courses', 'blog', 'team']).optional(),
});

// File upload validation
export const fileUploadSchema = z.object({
  file: z.instanceof(File),
  type: z.enum(['document', 'image', 'resource']),
});

// Validation helper functions
export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};

export const validateServiceInquiry = (data: unknown) => {
  return serviceInquirySchema.safeParse(data);
};

export const validateCourseEnrollment = (data: unknown) => {
  return courseEnrollmentSchema.safeParse(data);
};

export const validateNewsletter = (data: unknown) => {
  return newsletterSchema.safeParse(data);
};

export const validateSearch = (data: unknown) => {
  return searchSchema.safeParse(data);
};

export const validateFileUpload = (data: unknown) => {
  return fileUploadSchema.safeParse(data);
};