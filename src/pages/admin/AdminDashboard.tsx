import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Calendar,
  Mail,
  Download,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  BarChart3
} from 'lucide-react';
import { useAdminData } from '@/hooks/useAdminData';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AdminRegistrationTable } from '@/components/admin/AdminRegistrationTable';
import { AdminCourseManager } from '@/components/admin/AdminCourseManager';
import { AdminAnalytics } from '@/components/admin/AdminAnalytics';
import { AdminEmailTools } from '@/components/admin/AdminEmailTools';
import SEO from '@/components/SEO';

const AdminDashboard = () => {
  const { user, profile } = useAuth();
  const { 
    registrations, 
    courses, 
    analytics, 
    loading,
    updateRegistrationStatus,
    exportRegistrations,
    sendBulkEmail
  } = useAdminData();

  // Check if user is admin
  if (!user || profile?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access this page.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading admin dashboard..." />
      </div>
    );
  }

  const stats = {
    totalRegistrations: registrations?.length || 0,
    pendingRegistrations: registrations?.filter(r => r.status === 'pending').length || 0,
    approvedRegistrations: registrations?.filter(r => r.status === 'approved').length || 0,
    totalRevenue: registrations?.reduce((sum, r) => sum + (r.amount || 0), 0) || 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Admin Dashboard"
        description="DataQuest Solutions admin dashboard for managing registrations, courses, and analytics"
        url="https://dqs.vercel.app/admin"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage registrations, courses, and monitor system performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRegistrations}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingRegistrations}</div>
              <p className="text-xs text-muted-foreground">
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses?.filter(c => c.is_active).length || 0}</div>
              <p className="text-xs text-muted-foreground">
                Available for enrollment
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue (KSh)</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="registrations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="registrations">
            <AdminRegistrationTable 
              registrations={registrations || []}
              onStatusUpdate={updateRegistrationStatus}
            />
          </TabsContent>

          <TabsContent value="courses">
            <AdminCourseManager courses={courses || []} />
          </TabsContent>

          <TabsContent value="analytics">
            <AdminAnalytics analytics={analytics} />
          </TabsContent>

          <TabsContent value="communications">
            <AdminEmailTools onSendBulkEmail={sendBulkEmail} />
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => exportRegistrations('daily')}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Daily Report
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => exportRegistrations('weekly')}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Weekly Report
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => exportRegistrations('monthly')}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Monthly Report
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Report Contents</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Registration statistics and trends</li>
                    <li>• Course enrollment data</li>
                    <li>• Payment status and revenue</li>
                    <li>• User demographics and analytics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;