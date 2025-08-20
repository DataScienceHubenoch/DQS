import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  type: 'course' | 'service';
  selection: string;
  experience?: string;
  goals?: string;
  company?: string;
  paymentMethod: 'bank_transfer' | 'mobile_money' | 'crypto';
  message?: string;
  agreeToTerms: boolean;
  agreeToMarketing?: boolean;
}

export const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submitRegistration = async (data: RegistrationData) => {
    setLoading(true);
    try {
      // Insert into registrations table
      const { error: registrationError } = await supabase
        .from('registrations')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          type: data.type,
          selection: data.selection,
          experience: data.experience,
          goals: data.goals,
          company: data.company,
          payment_method: data.paymentMethod,
          message: data.message,
          agree_to_terms: data.agreeToTerms,
          agree_to_marketing: data.agreeToMarketing || false,
          status: 'pending',
          payment_status: 'pending',
        });

      if (registrationError) throw registrationError;

      // Send confirmation email (this would be handled by an edge function)
      await sendConfirmationEmail(data);

      return true;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const sendConfirmationEmail = async (data: RegistrationData) => {
    try {
      // This would call a Supabase Edge Function to send the email
      const { error } = await supabase.functions.invoke('send-confirmation-email', {
        body: {
          to: data.email,
          name: data.name,
          type: data.type,
          selection: data.selection,
          paymentMethod: data.paymentMethod,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error('Email sending error:', error);
      // Don't throw here as registration was successful
    }
  };

  return {
    submitRegistration,
    loading,
  };
};