// API configuration and utilities
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ServiceInquiryData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
}

export interface CourseEnrollmentData {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  goals: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
}

// API client with error handling
class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Contact form submission
  async submitContactForm(data: ContactFormData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Service inquiry submission
  async submitServiceInquiry(data: ServiceInquiryData) {
    return this.request('/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Course enrollment
  async enrollInCourse(data: CourseEnrollmentData) {
    return this.request('/enrollments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Newsletter subscription
  async subscribeNewsletter(data: NewsletterData) {
    return this.request('/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Get blog posts
  async getBlogPosts() {
    return this.request('/blog');
  }

  // Get team members
  async getTeamMembers() {
    return this.request('/team');
  }

  // Get case studies
  async getCaseStudies() {
    return this.request('/case-studies');
  }

  // Get courses
  async getCourses() {
    return this.request('/courses');
  }

  // Search functionality
  async search(query: string, type?: string) {
    const params = new URLSearchParams({ q: query });
    if (type) params.append('type', type);
    
    return this.request(`/search?${params.toString()}`);
  }

  // Analytics data
  async getAnalytics(timeframe: string = '30d') {
    return this.request(`/analytics?timeframe=${timeframe}`);
  }

  // File upload
  async uploadFile(file: File, type: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    return fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }
      return response.json();
    });
  }
}

export const apiClient = new ApiClient();