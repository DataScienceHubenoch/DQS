import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Users, 
  Activity, 
  Target, 
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Loader2,
  Database,
  Plus,
  X,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  FileText,
  Bell,
  RefreshCw,
  Clock,
  Percent,
  UserPlus,
  MousePointerClick
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConnectionDetails {
  sourceType: string;
  connectionString?: string;
  credentials?: string;
}

const Analytics = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [connectedSources, setConnectedSources] = React.useState<string[]>([]);
  const [showConnectionModal, setShowConnectionModal] = React.useState(false);
  const [showTutorial, setShowTutorial] = React.useState(true);
  const [currentTutorialStep, setCurrentTutorialStep] = React.useState(0);

  const sampleMetrics = {
    'Total Users': {
      value: '12,458',
      change: '+12.5%',
      trend: 'up',
      icon: <Users className="h-5 w-5 text-sky-500" />
    },
    'Active Sessions': {
      value: '3,245',
      change: '+8.2%',
      trend: 'up',
      icon: <Activity className="h-5 w-5 text-sky-500" />
    },
    'Conversion Rate': {
      value: '4.8%',
      change: '-1.2%',
      trend: 'down',
      icon: <Percent className="h-5 w-5 text-sky-500" />
    },
    'Avg. Session Duration': {
      value: '4m 32s',
      change: '+15.3%',
      trend: 'up',
      icon: <Clock className="h-5 w-5 text-sky-500" />
    }
  };

  const sampleChartData = {
    'User Growth': {
      type: 'line',
      data: [
        { month: 'Jan', users: 8500 },
        { month: 'Feb', users: 9200 },
        { month: 'Mar', users: 9800 },
        { month: 'Apr', users: 10500 },
        { month: 'May', users: 11200 },
        { month: 'Jun', users: 12458 }
      ]
    },
    'Engagement Metrics': {
      type: 'bar',
      data: [
        { metric: 'Page Views', value: 45600 },
        { metric: 'Clicks', value: 23400 },
        { metric: 'Time on Site', value: 32400 },
        { metric: 'Bounce Rate', value: 15600 }
      ]
    },
    'Conversion Funnel': {
      type: 'funnel',
      data: [
        { stage: 'Visitors', value: 10000 },
        { stage: 'Engaged', value: 6500 },
        { stage: 'Interested', value: 3200 },
        { stage: 'Converted', value: 480 }
      ]
    }
  };

  const tutorialSteps = [
    {
      title: "Welcome to Analytics Dashboard",
      description: "This guide will help you get started with our analytics platform. You'll learn how to connect data sources, view key metrics, and analyze performance trends.",
      icon: <HelpCircle className="h-6 w-6 text-sky-500" />,
      example: "Example: View real-time user metrics and engagement data"
    },
    {
      title: "Connect Your Data",
      description: "Start by connecting your data sources. We support various formats including databases (MySQL, PostgreSQL), APIs, file uploads (CSV, Excel), and Google Analytics.",
      icon: <Database className="h-6 w-6 text-sky-500" />,
      example: "Example: Connect your MySQL database using connection string: mysql://user:pass@host:3306/db"
    },
    {
      title: "View Key Metrics",
      description: "Monitor important metrics like Total Users, Active Sessions, Conversion Rate, and Session Duration. These metrics update in real-time and show trends over time.",
      icon: <BarChart className="h-6 w-6 text-sky-500" />,
      example: "Example: Total Users: 12,458 (+12.5% from last month)"
    },
    {
      title: "Explore Charts",
      description: "Analyze your data with interactive charts. The User Growth chart shows monthly trends, Engagement Metrics display user interaction patterns, and the Conversion Funnel visualizes your user journey.",
      icon: <LineChart className="h-6 w-6 text-sky-500" />,
      example: "Example: User Growth chart showing monthly progression from 8,500 to 12,458 users"
    },
    {
      title: "Filter and Customize",
      description: "Use filters to focus on specific time periods, metrics, or data sources. Save your custom views for quick access and create automated reports.",
      icon: <Filter className="h-6 w-6 text-sky-500" />,
      example: "Example: Filter data for the last 30 days or specific user segments"
    },
    {
      title: "Export and Share",
      description: "Export your analytics data in various formats (CSV, PDF) or share insights directly with your team. Set up automated reports to be delivered to your inbox.",
      icon: <FileText className="h-6 w-6 text-sky-500" />,
      example: "Example: Export monthly performance report as PDF"
    },
    {
      title: "Set Up Alerts",
      description: "Configure alerts for important metrics. Get notified when user engagement drops, conversion rates change significantly, or when you reach specific milestones.",
      icon: <Bell className="h-6 w-6 text-sky-500" />,
      example: "Example: Alert when conversion rate drops below 4%"
    }
  ];

  const TutorialGuide = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-4 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-gray-900">
              {tutorialSteps[currentTutorialStep].title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setCurrentTutorialStep(0);
                  setShowTutorial(true);
                }}
                className="text-gray-500 hover:text-gray-700"
                title="Restart Tutorial"
              >
                <RefreshCw className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowTutorial(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4 mb-6">
            {tutorialSteps[currentTutorialStep].icon}
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                {tutorialSteps[currentTutorialStep].description}
              </p>
              <div className="bg-sky-50 p-4 rounded-lg">
                <p className="text-sm text-sky-700 font-medium">
                  {tutorialSteps[currentTutorialStep].example}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentTutorialStep ? 'bg-sky-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {currentTutorialStep > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentTutorialStep(prev => prev - 1)}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              )}
              {currentTutorialStep < tutorialSteps.length - 1 ? (
                <Button
                  onClick={() => setCurrentTutorialStep(prev => prev + 1)}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={() => setShowTutorial(false)}>
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // This would be replaced with actual API calls
  React.useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleConnectSource = async (sourceType: string, connectionDetails: ConnectionDetails) => {
    setIsConnecting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setConnectedSources(prev => [...prev, sourceType]);
    setIsConnecting(false);
    setShowConnectionModal(false);
  };

  const ConnectionModal = () => (
    <Dialog open={showConnectionModal} onOpenChange={setShowConnectionModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Data Source</DialogTitle>
          <DialogDescription>
            Configure your data source connection to start viewing analytics
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="source-type">Data Source Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select source type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="database">Database</SelectItem>
                <SelectItem value="api">API</SelectItem>
                <SelectItem value="file">File Upload</SelectItem>
                <SelectItem value="google-analytics">Google Analytics</SelectItem>
                <SelectItem value="custom">Custom Integration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="connection-string">Connection String</Label>
            <Input id="connection-string" placeholder="Enter connection details" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="credentials">Credentials</Label>
            <Input id="credentials" type="password" placeholder="Enter credentials" />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => setShowConnectionModal(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleConnectSource('database', { sourceType: 'database' })}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              'Connect'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {showTutorial && <TutorialGuide />}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Analytics Dashboard</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Connect your data sources to view comprehensive insights and metrics
            </p>
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
              onClick={() => setShowConnectionModal(true)}
            >
              <Plus className="mr-2 h-5 w-5" />
              Connect Data Source
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Connected Sources */}
        {connectedSources.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connected Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connectedSources.map((source, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-sky-200">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <Database className="h-5 w-5 text-sky-500" />
                      <div>
                        <p className="font-medium text-gray-900">{source}</p>
                        <p className="text-sm text-gray-500">Connected</p>
                      </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Metrics Overview */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Key Metrics</h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(sampleMetrics).map(([title, data]) => (
              <Card key={title} className="bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {title}
                  </CardTitle>
                  {data.icon}
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {data.value}
                    </div>
                    <div className={`flex items-center text-sm ${
                      data.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {data.trend === 'up' ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {data.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Charts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.entries(sampleChartData).map(([title, data]) => (
              <Card key={title} className="bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium text-gray-900">
                      {title}
                    </CardTitle>
                    {data.type === 'line' ? (
                      <LineChart className="h-5 w-5 text-sky-500" />
                    ) : data.type === 'bar' ? (
                      <BarChart className="h-5 w-5 text-sky-500" />
                    ) : (
                      <PieChart className="h-5 w-5 text-sky-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {data.type === 'line' ? 'Monthly user acquisition trends' :
                     data.type === 'bar' ? 'User interaction and activity patterns' :
                     'User journey and conversion rates'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">Sample Data Preview</p>
                      <div className="text-sm text-gray-600">
                        {data.type === 'line' ? (
                          <div className="space-y-1">
                            {data.data.map((point, i) => (
                              <div key={i} className="flex justify-between">
                                <span>{point.month}:</span>
                                <span>{point.users.toLocaleString()} users</span>
                              </div>
                            ))}
                          </div>
                        ) : data.type === 'bar' ? (
                          <div className="space-y-1">
                            {data.data.map((item, i) => (
                              <div key={i} className="flex justify-between">
                                <span>{item.metric}:</span>
                                <span>{item.value.toLocaleString()}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-1">
                            {data.data.map((stage, i) => (
                              <div key={i} className="flex justify-between">
                                <span>{stage.stage}:</span>
                                <span>{stage.value.toLocaleString()}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-6">
              Connect your data sources to unlock powerful analytics insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                onClick={() => setShowConnectionModal(true)}
              >
                <Plus className="mr-2 h-5 w-5" />
                Connect Data Source
              </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ConnectionModal />
    </div>
  );
};

export default Analytics; 