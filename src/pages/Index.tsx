import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Loader2, Wallet, LogOut, RefreshCw } from 'lucide-react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useToast } from '@/components/ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const featuredTeamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Data Science Lead",
    bio: "10+ years of experience in data science and machine learning. Expert in predictive modeling and statistical analysis.",
    image: "/team/john.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Research Director",
    bio: "PhD in Statistics with expertise in research methodology and data analysis. Published author and industry speaker.",
    image: "/team/jane.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "AI Development Lead",
    bio: "Specialist in artificial intelligence and deep learning. Experienced in developing cutting-edge AI solutions.",
    image: "/team/mike.jpg"
  }
];

const Index = () => {
  const { isConnected, connect, disconnect, isConnecting, account } = useWeb3();
  const { toast } = useToast();
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const handleConnect = async () => {
    setConnectionError(null);
    try {
      await connect();
      toast({
        title: "Success",
        description: "Wallet connected successfully",
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to connect wallet';
      setConnectionError(errorMessage);
      toast({
        title: "Connection Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (!isConnected && !isConnecting) {
      handleConnect();
    }
  }, [isConnected, isConnecting]);

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setConnectionError(null);
      toast({
        title: "Success",
        description: "Wallet disconnected successfully",
      });
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      toast({
        title: "Error",
        description: "Failed to disconnect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleRequestService = (serviceName: string) => {
    const phoneNumber = '254707612395';
    const message = `Hello! I would like to request information about your "${serviceName}" service. Could you please provide more details about the service and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { name: 'Data Collection', icon: '📊', description: 'Comprehensive data gathering and management solutions' },
    { name: 'Data Analysis', icon: '🔍', description: 'Transform raw data into actionable insights' },
    { name: 'AI Development', icon: '🤖', description: 'Build intelligent systems and machine learning models' },
    { name: 'Research Writing', icon: '📝', description: 'Expert research documentation and reporting' },
    { name: 'Training & Consultation', icon: '🎓', description: 'Professional development and strategic guidance' },
    { name: 'Web & Graphic Design', icon: '🎨', description: 'Digital solutions and visual communication' }
  ];

  const featuredCourses = [
    { name: 'Data Analysis with Python', level: 'Beginner', duration: '8 weeks' },
    { name: 'Machine Learning with R', level: 'Intermediate', duration: '10 weeks' },
    { name: 'Deep Learning/AI in Python', level: 'Advanced', duration: '14 weeks' },
    { name: 'Data Visualization with Power BI', level: 'Intermediate', duration: '8 weeks' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Wallet Status Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                {isConnecting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                    <span className="text-sm text-gray-600">Connecting...</span>
                  </>
                ) : isConnected ? (
                  <>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {account ? formatAddress(account) : 'Connected'}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 hover:bg-gray-100"
                      onClick={handleDisconnect}
                    >
                      <LogOut className="h-4 w-4 text-gray-500" />
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-sm text-gray-600">
                      {connectionError ? 'Connection Failed' : 'Not Connected'}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 hover:bg-gray-100"
                      onClick={handleConnect}
                    >
                      <RefreshCw className="h-4 w-4 text-gray-500" />
                    </Button>
                  </>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isConnecting
                  ? 'Connecting to wallet...'
                  : isConnected
                  ? 'Click to disconnect wallet'
                  : connectionError
                  ? connectionError
                  : 'Click to connect wallet'}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block md:inline">
                Data Quest
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Your central destination for data science excellence. From foundational analytics to advanced AI, 
              we provide the tools, training, and expertise to transform your data into powerful insights and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Data Science Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end services designed to accelerate your data science journey and business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    className="w-full"
                    onClick={() => handleRequestService(service.name)}
                  >
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master cutting-edge data science tools and techniques with our expert-designed curriculum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                  <Button className="w-full" size="sm" asChild>
                    <Link to={`/courses?course=${encodeURIComponent(course.name)}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experts brings together diverse skills and experience to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/team" className="flex items-center gap-2">
                View All Team Members
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the Data Science Hub community and transform your approach to data analysis, 
            machine learning, and AI development with our expert guidance and cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/about">Discover Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
