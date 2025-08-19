import { createClient } from '@supabase/supabase-js';

// Admin client for server-side operations
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

// Admin functions
export const adminFunctions = {
  // Get all users
  async getAllUsers() {
    if (!supabaseAdmin) throw new Error('Admin client not available');
    
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get all enrollments
  async getAllEnrollments() {
    if (!supabaseAdmin) throw new Error('Admin client not available');
    
    const { data, error } = await supabaseAdmin
      .from('enrollments')
      .select(`
        *,
        user:profiles(full_name, email),
        course:courses(title)
      `)
      .order('enrolled_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Update enrollment status
  async updateEnrollmentStatus(enrollmentId: string, status: string) {
    if (!supabaseAdmin) throw new Error('Admin client not available');
    
    const { error } = await supabaseAdmin
      .from('enrollments')
      .update({ status })
      .eq('id', enrollmentId);
    
    if (error) throw error;
  },

  // Get contact submissions
  async getContactSubmissions() {
    if (!supabaseAdmin) throw new Error('Admin client not available');
    
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get service inquiries
  async getServiceInquiries() {
    if (!supabaseAdmin) throw new Error('Admin client not available');
    
    const { data, error } = await supabaseAdmin
      .from('service_inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};