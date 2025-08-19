import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

// Generic hook for Supabase operations
export function useSupabaseQuery<T>(
  table: string,
  query?: string,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let queryBuilder = supabase.from(table).select(query || '*');
        
        const { data, error } = await queryBuilder;
        
        if (error) throw error;
        setData(data || []);
        setError(null);
      } catch (err) {
        console.error(`Error fetching ${table}:`, err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => fetchData() };
}

// Hook for real-time subscriptions
export function useSupabaseSubscription<T>(
  table: string,
  callback: (payload: any) => void,
  filter?: string
) {
  useEffect(() => {
    let subscription = supabase
      .channel(`${table}_changes`)
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table,
          filter 
        }, 
        callback
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [table, filter]);
}

// Hook for course operations
export function useCourses() {
  const { data: courses, loading, error, refetch } = useSupabaseQuery<any>(
    'courses',
    '*',
    []
  );

  const enrollInCourse = async (courseId: string, userId: string) => {
    try {
      const { error } = await supabase
        .from('enrollments')
        .insert({
          user_id: userId,
          course_id: courseId,
          status: 'pending',
          progress: 0,
          payment_status: 'pending'
        });

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error enrolling in course:', error);
      throw error;
    }
  };

  return {
    courses: courses.filter(course => course.is_active),
    loading,
    error,
    refetch,
    enrollInCourse
  };
}

// Hook for blog operations
export function useBlogPosts() {
  const { data: posts, loading, error, refetch } = useSupabaseQuery<any>(
    'blog_posts',
    `
      *,
      author:profiles(full_name, avatar_url)
    `,
    []
  );

  return {
    posts: posts.filter(post => post.published),
    loading,
    error,
    refetch
  };
}

// Hook for form submissions
export function useFormSubmissions() {
  const { toast } = useToast();

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert(formData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const submitServiceInquiry = async (formData: {
    name: string;
    email: string;
    phone: string;
    company?: string;
    service: string;
    message: string;
  }) => {
    try {
      const { error } = await supabase
        .from('service_inquiries')
        .insert(formData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your service inquiry has been submitted successfully!",
      });
    } catch (error) {
      console.error('Error submitting service inquiry:', error);
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const subscribeNewsletter = async (formData: {
    email: string;
    name?: string;
  }) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert(formData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "You've been subscribed to our newsletter!",
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return {
    submitContactForm,
    submitServiceInquiry,
    subscribeNewsletter
  };
}