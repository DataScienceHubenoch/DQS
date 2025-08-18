// Analytics and tracking utilities

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = !import.meta.env.DEV; // Disable in development
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.isEnabled) return;

    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title,
      });
    }

    // Custom analytics
    this.sendEvent({
      action: 'page_view',
      category: 'navigation',
      label: path,
    });
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (!this.isEnabled) return;

    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    this.sendEvent(event);
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean) {
    this.trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'forms',
      label: formName,
    });
  }

  // Track file downloads
  trackDownload(fileName: string, fileType: string) {
    this.trackEvent({
      action: 'file_download',
      category: 'downloads',
      label: `${fileName} (${fileType})`,
    });
  }

  // Track external link clicks
  trackExternalLink(url: string, linkText?: string) {
    this.trackEvent({
      action: 'external_link_click',
      category: 'outbound',
      label: linkText || url,
    });
  }

  // Track search queries
  trackSearch(query: string, resultsCount: number) {
    this.trackEvent({
      action: 'search',
      category: 'site_search',
      label: query,
      value: resultsCount,
    });
  }

  // Track user engagement
  trackEngagement(action: string, element: string) {
    this.trackEvent({
      action,
      category: 'engagement',
      label: element,
    });
  }

  // Send event to analytics service
  private sendEvent(event: AnalyticsEvent) {
    // In a real implementation, this would send to your analytics service
    console.log('Analytics Event:', event);
    
    // Example: Send to custom analytics endpoint
    if (this.isEnabled) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(error => {
        console.warn('Analytics tracking failed:', error);
      });
    }
  }
}

export const analytics = new Analytics();

// React hook for analytics
export const useAnalytics = () => {
  const trackPageView = (path: string, title?: string) => {
    analytics.trackPageView(path, title);
  };

  const trackEvent = (event: AnalyticsEvent) => {
    analytics.trackEvent(event);
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    analytics.trackFormSubmission(formName, success);
  };

  const trackDownload = (fileName: string, fileType: string) => {
    analytics.trackDownload(fileName, fileType);
  };

  const trackExternalLink = (url: string, linkText?: string) => {
    analytics.trackExternalLink(url, linkText);
  };

  const trackSearch = (query: string, resultsCount: number) => {
    analytics.trackSearch(query, resultsCount);
  };

  const trackEngagement = (action: string, element: string) => {
    analytics.trackEngagement(action, element);
  };

  return {
    trackPageView,
    trackEvent,
    trackFormSubmission,
    trackDownload,
    trackExternalLink,
    trackSearch,
    trackEngagement,
  };
};