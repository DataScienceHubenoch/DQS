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
  CheckCircle2
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
            onClick={() => handleConnectSource('database', {})}
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
            {['Total Users', 'Active Sessions', 'Conversion Rate', 'Avg. Session Duration'].map((title, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {title}
                  </CardTitle>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 text-sky-500 animate-spin" />
                  ) : (
                    <div className="h-4 w-4 text-sky-500" />
                  )}
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="h-8 flex items-center justify-center">
                      <Loader2 className="h-6 w-6 text-sky-500 animate-spin" />
                    </div>
                  ) : connectedSources.length === 0 ? (
                    <div className="text-center text-gray-500">
                      <Button
                        variant="link"
                        className="text-sky-500 hover:text-sky-600"
                        onClick={() => setShowConnectionModal(true)}
                      >
                        Connect data source
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      Loading metrics...
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Charts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: 'User Growth', description: 'Monthly user acquisition trends' },
              { title: 'Engagement Metrics', description: 'User interaction and activity patterns' },
              { title: 'Conversion Funnel', description: 'User journey and conversion rates' }
            ].map((chart, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium text-gray-900">
                      {chart.title}
                    </CardTitle>
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 text-sky-500 animate-spin" />
                    ) : (
                      <div className="h-5 w-5 text-sky-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{chart.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                    {isLoading ? (
                      <Loader2 className="h-8 w-8 text-sky-500 animate-spin" />
                    ) : connectedSources.length === 0 ? (
                      <div className="text-center">
                        <p className="text-gray-500 mb-2">No data available</p>
                        <Button
                          variant="link"
                          className="text-sky-500 hover:text-sky-600"
                          onClick={() => setShowConnectionModal(true)}
                        >
                          Connect data source
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500">
                        Loading chart data...
                      </div>
                    )}
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