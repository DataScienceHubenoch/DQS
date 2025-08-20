import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Users, BookOpen, DollarSign, Calendar } from 'lucide-react';

interface AnalyticsData {
  registrationTrends: Array<{ month: string; registrations: number; revenue: number }>;
  coursePopularity: Array<{ course: string; enrollments: number }>;
  paymentMethods: Array<{ method: string; count: number; percentage: number }>;
  userDemographics: Array<{ category: string; value: number }>;
}

interface AdminAnalyticsProps {
  analytics?: AnalyticsData;
}

export const AdminAnalytics: React.FC<AdminAnalyticsProps> = ({ analytics }) => {
  // Sample data for demonstration
  const sampleData: AnalyticsData = {
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

  const data = analytics || sampleData;
  const COLORS = ['#0ea5e9', '#06b6d4', '#8b5cf6', '#f59e0b'];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">328</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Enrollments</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">267</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue (KSh)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.97M</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Course Price</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,850</div>
            <p className="text-xs text-muted-foreground">
              KSh per course
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Registration Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.registrationTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="registrations" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  name="Registrations"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Course Popularity */}
        <Card>
          <CardHeader>
            <CardTitle>Course Popularity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.coursePopularity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enrollments" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.paymentMethods}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ method, percentage }) => `${method} (${percentage}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {data.paymentMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Demographics */}
        <Card>
          <CardHeader>
            <CardTitle>User Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.userDemographics.map((demo, index) => (
                <div key={demo.category} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{demo.category}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-sky-500 h-2 rounded-full"
                        style={{ width: `${demo.value}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{demo.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'New registration', user: 'John Doe', course: 'Python Data Analysis', time: '2 hours ago' },
              { action: 'Payment received', user: 'Jane Smith', course: 'Machine Learning', time: '4 hours ago' },
              { action: 'Course completed', user: 'Mike Johnson', course: 'Advanced Excel', time: '6 hours ago' },
              { action: 'New registration', user: 'Sarah Wilson', course: 'Data Visualization', time: '8 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.user} - {activity.course}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};