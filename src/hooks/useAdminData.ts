import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'course' | 'service';
  selection: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  payment_method: string;
  payment_status: 'pending' | 'paid' | 'failed';
  amount?: number;
  created_at: string;
  company?: string;
  experience?: string;
  goals?: string;
}

interface AnalyticsData {
  registrationTrends: Array<{ month: string; registrations: number; revenue: number }>;
  coursePopularity: Array<{ course: string; enrollments: number }>;
  paymentMethods: Array<{ method: string; count: number; percentage: number }>;
  userDemographics: Array<{ category: string; value: number }>;
}

export const useAdminData = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch registrations
      const { data: registrationsData, error: registrationsError } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (registrationsError) throw registrationsError;

      // Fetch courses
      const { data: coursesData, error: coursesError } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (coursesError) throw coursesError;

      setRegistrations(registrationsData || []);
      setCourses(coursesData || []);

      // Generate analytics data
      generateAnalytics(registrationsData || []);
    } catch (error) {
      console.error('Error fetching admin data:', error);
      toast({
        title: "Error",
        description: "Failed to load admin data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateAnalytics = (registrations: Registration[]) => {
    // This would generate real analytics from the data
    const analyticsData: AnalyticsData = {
      registrationTrends: [
        { month: 'Jan', registrations: 45, revenue: 270000 },
        { month: 'Feb', registrations: 52, revenue: 312000 },
        { month: 'Mar', registrations: 48, revenue: 288000 },
        { month: 'Apr', registrations: 61, revenue: 366000 },
        { month: 'May', registrations: 55, revenue: 330000 },
        { month: 'Jun', registrations: 67, revenue: 402000 },
      ],
      coursePopularity: [
        { course: 'Python Data Analysis', enrollments: 89 },
        { course: 'Machine Learning', enrollments: 76 },
        { course: 'Advanced Excel', enrollments: 65 },
        { course: 'Data Visualization', enrollments: 54 },
        { course: 'R Analysis', enrollments: 43 },
      ],
      paymentMethods: [
        { method: 'Mobile Money', count: 156, percentage: 52 },
        { method: 'Bank Transfer', count: 89, percentage: 30 },
        { method: 'Cryptocurrency', count: 54, percentage: 18 },
      ],
      userDemographics: [
        { category: 'Students', value: 45 },
        { category: 'Professionals', value: 35 },
        { category: 'Researchers', value: 20 },
      ],
    };

    setAnalytics(analyticsData);
  };

  const updateRegistrationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('registrations')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setRegistrations(prev =>
        prev.map(reg =>
          reg.id === id ? { ...reg, status: status as any } : reg
        )
      );

      // Send notification email based on status
      if (status === 'approved') {
        await sendApprovalEmail(id);
      }
    } catch (error) {
      console.error('Error updating registration status:', error);
      throw error;
    }
  };

  const sendApprovalEmail = async (registrationId: string) => {
    try {
      const registration = registrations.find(r => r.id === registrationId);
      if (!registration) return;

      await supabase.functions.invoke('send-approval-email', {
        body: {
          to: registration.email,
          name: registration.name,
          selection: registration.selection,
          type: registration.type,
        },
      });
    } catch (error) {
      console.error('Error sending approval email:', error);
    }
  };

  const exportRegistrations = async (period: 'daily' | 'weekly' | 'monthly') => {
    try {
      // Generate CSV data
      const csvData = registrations.map(reg => ({
        Name: reg.name,
        Email: reg.email,
        Phone: reg.phone,
        Type: reg.type,
        Selection: reg.selection,
        Status: reg.status,
        'Payment Method': reg.payment_method,
        'Payment Status': reg.payment_status,
        'Registration Date': new Date(reg.created_at).toLocaleDateString(),
        Company: reg.company || '',
        Experience: reg.experience || '',
      }));

      // Convert to CSV
      const headers = Object.keys(csvData[0] || {});
      const csvContent = [
        headers.join(','),
        ...csvData.map(row => headers.map(header => `"${row[header as keyof typeof row]}"`).join(','))
      ].join('\n');

      // Download file
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `registrations-${period}-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);

      toast({
        title: "Export Complete",
        description: `${period} report has been downloaded`,
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export registrations",
        variant: "destructive",
      });
    }
  };

  const sendBulkEmail = async (emailData: any) => {
    try {
      await supabase.functions.invoke('send-bulk-email', {
        body: emailData,
      });
    } catch (error) {
      console.error('Error sending bulk email:', error);
      throw error;
    }
  };

  return {
    registrations,
    courses,
    analytics,
    loading,
    updateRegistrationStatus,
    exportRegistrations,
    sendBulkEmail,
    refetch: fetchData,
  };
};