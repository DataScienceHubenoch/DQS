import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { serviceInquirySchema } from '@/lib/validation';
import { useServiceInquiry } from '@/hooks/useApi';
import type { ServiceInquiryData } from '@/lib/api';

interface ServiceInquiryFormProps {
  onSuccess?: () => void;
  className?: string;
  defaultService?: string;
}

const ServiceInquiryForm: React.FC<ServiceInquiryFormProps> = ({ 
  onSuccess, 
  className,
  defaultService 
}) => {
  const { submitInquiry, loading } = useServiceInquiry();
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ServiceInquiryData>({
    resolver: zodResolver(serviceInquirySchema),
    defaultValues: {
      service: defaultService || '',
    },
  });

  const selectedService = watch('service');

  const services = [
    'Data Collection',
    'Data Analysis',
    'AI Development',
    'Research Writing',
    'Training & Consultation',
    'Web & Graphic Design',
    'Project Management',
    'Business Intelligence',
    'Machine Learning',
    'Data Visualization'
  ];

  const onSubmit = async (data: ServiceInquiryData) => {
    try {
      await submitInquiry(data);
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      // Error handling is done in the hook
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Your full name"
            className="mt-1"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your.email@example.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+254 XXX XXX XXX"
            className="mt-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Company (Optional)</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Your company name"
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="service">Service of Interest *</Label>
        <Select
          value={selectedService}
          onValueChange={(value) => setValue('service', value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Please describe your project requirements, timeline, and any specific needs..."
          className="min-h-[120px] mt-1"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
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
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </Button>
    </form>
  );
};

export default ServiceInquiryForm;