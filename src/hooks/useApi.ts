import { useState, useCallback } from 'react';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });
  
  const { toast } = useToast();

  const execute = useCallback(async (apiCall: () => Promise<T>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const result = await apiCall();
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      
      throw error;
    }
  }, [toast]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}

// Specific hooks for common operations
export function useContactForm() {
  const { execute, loading, error } = useApi();
  const { toast } = useToast();

  const submitForm = useCallback(async (data: any) => {
    try {
      await execute(() => apiClient.submitContactForm(data));
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
    } catch (error) {
      // Error is already handled by useApi
    }
  }, [execute, toast]);

  return { submitForm, loading, error };
}

export function useServiceInquiry() {
  const { execute, loading, error } = useApi();
  const { toast } = useToast();

  const submitInquiry = useCallback(async (data: any) => {
    try {
      await execute(() => apiClient.submitServiceInquiry(data));
      toast({
        title: "Success",
        description: "Your service inquiry has been submitted successfully!",
      });
    } catch (error) {
      // Error is already handled by useApi
    }
  }, [execute, toast]);

  return { submitInquiry, loading, error };
}

export function useCourseEnrollment() {
  const { execute, loading, error } = useApi();
  const { toast } = useToast();

  const enrollInCourse = useCallback(async (data: any) => {
    try {
      await execute(() => apiClient.enrollInCourse(data));
      toast({
        title: "Success",
        description: "Your course enrollment has been submitted successfully!",
      });
    } catch (error) {
      // Error is already handled by useApi
    }
  }, [execute, toast]);

  return { enrollInCourse, loading, error };
}

export function useSearch() {
  const { data, execute, loading, error } = useApi<any>();

  const search = useCallback(async (query: string, type?: string) => {
    return execute(() => apiClient.search(query, type));
  }, [execute]);

  return { results: data, search, loading, error };
}