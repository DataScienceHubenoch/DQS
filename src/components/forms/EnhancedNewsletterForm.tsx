import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Mail } from 'lucide-react';
import { newsletterSchema } from '@/lib/validation';
import { useFormSubmissions } from '@/hooks/useSupabase';
import type { NewsletterData } from '@/lib/api';

interface EnhancedNewsletterFormProps {
  onSuccess?: () => void;
  className?: string;
  variant?: 'inline' | 'modal';
}

const EnhancedNewsletterForm: React.FC<EnhancedNewsletterFormProps> = ({ 
  onSuccess, 
  className,
  variant = 'inline'
}) => {
  const { subscribeNewsletter } = useFormSubmissions();
  const [loading, setLoading] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setLoading(true);
    try {
      await subscribeNewsletter(data);
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      // Error handling is done in the hook
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-2 ${className}`}>
        <Input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className="flex-1"
        />
        <Button 
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
        </Button>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      <div>
        <Label htmlFor="newsletter-name">Name (Optional)</Label>
        <Input
          id="newsletter-name"
          {...register('name')}
          placeholder="Your name"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="newsletter-email">Email Address *</Label>
        <Input
          id="newsletter-email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className="mt-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-sky-500 hover:bg-sky-600 text-white"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe to Newsletter'
        )}
      </Button>
    </form>
  );
};

export default EnhancedNewsletterForm;