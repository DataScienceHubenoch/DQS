import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceInquiryForm from '@/components/forms/ServiceInquiryForm';
import SEO from '@/components/SEO';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import {
  Database,
  LineChart,
  FileText,
  Microscope,
  Palette,
  Code2,
  ClipboardList,
  Cpu,
  GraduationCap,
  Lightbulb,
  Clock,
  Check,
  MessageCircle,
  X,
  ArrowRight,
  Users,
  Zap,
  Shield,
  BarChart3,
  Target,
  Settings,
  Layers,
  Search,
  MousePointer
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = React.useState<typeof services[0] | null>(null);
  const [showInquiryForm, setShowInquiryForm] = React.useState(false);

  const handleRequestService = (serviceTitle: string) => {
    const phoneNumber = COMPANY_INFO.phone.replace('+', '');
    const message = `Hello! I would like to request information about your "${serviceTitle}" service. Could you please provide more details about the service and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: 'Data Collection',
      description: 'Accurate, reliable data is the foundation of informed decision-making. Our data collection services provide businesses with high-quality, actionable data that can drive strategy and improve performance.',
      icon: Database,
      tooltip: 'Data Collection & Management',
      features: [
        'Custom data collection strategies',
        'Multi-source data integration',
        'Real-time data streaming',
        'Data quality assurance',
        'Automated data pipelines'
      ],
      benefits: [
        'Improved data accuracy',
        'Reduced collection time',
        'Cost-effective solutions',
        'Scalable infrastructure'
      ],
      useCases: [
        'Market research',
        'Customer behavior analysis',
        'Performance monitoring',
        'Competitive intelligence'
      ]
    },
    {
      title: 'Data Analysis',
      description: 'Transform your data into valuable insights with our expert data analysis services. We use advanced analytical techniques to interpret complex data sets, uncover trends, and provide actionable recommendations.',
      icon: LineChart,
      tooltip: 'Statistical Analysis & Visualization',
      features: [
        'Advanced statistical analysis',
        'Predictive modeling',
        'Data visualization',
        'Trend analysis',
        'Performance metrics'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved efficiency',
        'Better resource allocation',
        'Competitive advantage'
      ],
      useCases: [
        'Business intelligence',
        'Performance optimization',
        'Risk assessment',
        'Market forecasting'
      ]
    },
    {
      title: 'Writing Reports',
      description: 'Our expert team crafts comprehensive and insightful reports tailored to your specific needs. Whether it\'s for internal purposes, clients, or stakeholders, we ensure clear, concise, and well-researched content.',
      icon: FileText,
      tooltip: 'Professional Report Writing',
      features: [
        'Custom report templates',
        'Data visualization',
        'Executive summaries',
        'Technical documentation',
        'Progress reports'
      ],
      benefits: [
        'Clear communication',
        'Professional presentation',
        'Time-saving solutions',
        'Consistent formatting'
      ],
      useCases: [
        'Project reports',
        'Research findings',
        'Performance reviews',
        'Client deliverables'
      ]
    },
    {
      title: 'Research Writing',
      description: 'We offer in-depth research writing services designed to support your business\'s strategic initiatives. From industry analysis to academic research, our experienced writers deliver meticulously sourced content.',
      icon: Microscope,
      tooltip: 'Academic & Industry Research',
      features: [
        'Literature reviews',
        'Methodology design',
        'Data analysis',
        'Citation management',
        'Peer review support'
      ],
      benefits: [
        'High-quality research',
        'Academic excellence',
        'Thorough analysis',
        'Proper documentation'
      ],
      useCases: [
        'Academic papers',
        'Industry reports',
        'Market research',
        'Technical documentation'
      ]
    },
    {
      title: 'Graphic Design',
      description: 'Our graphic design services combine creativity and strategy to produce visually captivating content that aligns with your brand\'s identity. We craft designs that are both aesthetically pleasing and functional.',
      icon: Palette,
      tooltip: 'Visual Design & Branding',
      features: [
        'Brand identity design',
        'Marketing materials',
        'Social media graphics',
        'Print design',
        'UI/UX design'
      ],
      benefits: [
        'Professional branding',
        'Consistent visual identity',
        'Enhanced engagement',
        'Modern aesthetics'
      ],
      useCases: [
        'Brand development',
        'Marketing campaigns',
        'Social media presence',
        'Product packaging'
      ]
    },
    {
      title: 'Web Design',
      description: 'Stand out in the digital world with our custom web design services. We create responsive, user-friendly websites that not only look great but also offer seamless user experiences.',
      icon: Code2,
      tooltip: 'Web Development & Design',
      features: [
        'Responsive design',
        'Custom development',
        'E-commerce solutions',
        'Content management',
        'SEO optimization'
      ],
      benefits: [
        'Mobile-friendly websites',
        'Improved user experience',
        'Better conversion rates',
        'Easy maintenance'
      ],
      useCases: [
        'Business websites',
        'E-commerce platforms',
        'Portfolio sites',
        'Web applications'
      ]
    },
    {
      title: 'Project Management',
      description: 'Effective project management is key to delivering results on time and within budget. Our certified project managers ensure that your projects are executed with precision and efficiency.',
      icon: ClipboardList,
      tooltip: 'Project Planning & Execution',
      features: [
        'Project planning',
        'Resource allocation',
        'Risk management',
        'Progress tracking',
        'Quality assurance'
      ],
      benefits: [
        'On-time delivery',
        'Cost control',
        'Risk mitigation',
        'Team coordination'
      ],
      useCases: [
        'Software development',
        'Construction projects',
        'Marketing campaigns',
        'Event planning'
      ]
    },
    {
      title: 'AI Development',
      description: 'Embrace the future with our advanced AI development services. Our team specializes in building intelligent systems that optimize processes, enhance decision-making, and provide valuable insights.',
      icon: Cpu,
      tooltip: 'Artificial Intelligence Solutions',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics',
        'AI integration'
      ],
      benefits: [
        'Process automation',
        'Improved accuracy',
        'Cost reduction',
        'Competitive edge'
      ],
      useCases: [
        'Process automation',
        'Customer service',
        'Data analysis',
        'Predictive maintenance'
      ]
    },
    {
      title: 'Training',
      description: 'Empower your team with our comprehensive training programs designed to enhance skills and foster professional growth. Our programs are tailored to address specific needs, ensuring measurable improvements.',
      icon: GraduationCap,
      tooltip: 'Professional Development & Training',
      features: [
        'Custom training programs',
        'Technical workshops',
        'Leadership development',
        'Skill assessment',
        'Certification support'
      ],
      benefits: [
        'Enhanced skills',
        'Improved productivity',
        'Career development',
        'Team building'
      ],
      useCases: [
        'Employee onboarding',
        'Technical training',
        'Leadership development',
        'Process improvement'
      ]
    },
    {
      title: 'Consultation',
      description: 'Our consultation services provide you with expert advice and strategic insights to help you navigate complex business challenges. We offer personalized guidance across various industries.',
      icon: Lightbulb,
      tooltip: 'Strategic Business Consulting',
      features: [
        'Business strategy',
        'Process optimization',
        'Technology consulting',
        'Market analysis',
        'Risk assessment'
      ],
      benefits: [
        'Expert guidance',
        'Strategic planning',
        'Problem solving',
        'Innovation support'
      ],
      useCases: [
        'Business transformation',
        'Digital strategy',
        'Market entry',
        'Performance improvement'
      ]
    }
  ];

  const ServiceModal = ({ service }: { service: typeof services[0] }) => (
    <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <service.icon className="h-8 w-8 text-sky-500" />
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-sky-500" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-sky-500" />
              Benefits
            </h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Layers className="h-5 w-5 text-sky-500" />
            Use Cases
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {service.useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700 bg-gray-50 p-2 rounded">
                <Check className="h-4 w-4 text-sky-500" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() => setSelectedService(null)}
          >
            Close
          </Button>
          <Button
            className="bg-sky-500 hover:bg-sky-600 text-white"
            onClick={() => handleRequestService(service.title)}
          >
            Request Service
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Our Services"
        description="Comprehensive data science services including data collection, analysis, AI development, research writing, and professional training."
        url="https://dqs.vercel.app/services"
        keywords="data science services, data analysis, AI development, machine learning, research writing, training, consulting"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
                Comprehensive data analysis and research solutions tailored to your needs
              </p>
              {/* Tutorial Guide */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-sky-500" />
                  How to Get Started
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="bg-sky-100 p-2 rounded-full">
                      <Search className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Explore Services</h3>
                      <p className="text-gray-600">Browse through our range of data analysis and research services to find what you need</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-sky-100 p-2 rounded-full">
                      <MousePointer className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">View Details</h3>
                      <p className="text-gray-600">Click on any service card to learn more about our offerings and expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-sky-100 p-2 rounded-full">
                      <ArrowRight className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Contact Us</h3>
                      <p className="text-gray-600">Reach out via WhatsApp or email to discuss your specific requirements and get started</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader>
                    <div className="text-4xl mb-4">
                      <service.icon className="w-12 h-12 text-sky-500 mx-auto" />
                    </div>
                    <CardTitle className="text-gray-900">{service.title}</CardTitle>
              </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <Button 
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = '/register';
                      }}
                    >
                      Request Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Data Analysis */}
              <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <Clock className="w-8 h-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-gray-900">Data Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Transform raw data into actionable insights</p>
                </CardContent>
              </Card>

              {/* Machine Learning */}
              <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <Clock className="w-8 h-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-gray-900">Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Build and deploy ML models for your business</p>
                </CardContent>
              </Card>

              {/* AI Solutions */}
              <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <Clock className="w-8 h-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-gray-900">AI Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Custom AI solutions for your business needs</p>
                </CardContent>
              </Card>

              {/* Data Engineering */}
              <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <Clock className="w-8 h-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-gray-900">Data Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Build robust data pipelines and infrastructure</p>
                </CardContent>
              </Card>

              {/* Business Intelligence */}
              <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <Clock className="w-8 h-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-gray-900">Business Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Create powerful dashboards and reports</p>
                </CardContent>
              </Card>

              {/* Data Strategy */}
              <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <Clock className="w-8 h-8 text-sky-500" />
                  </div>
                  <CardTitle className="text-gray-900">Data Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Develop a comprehensive data strategy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Let's work together to transform your data into actionable insights and drive your success forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500" asChild>
                <Link to="/register">Register Now</Link>
            </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600" asChild>
                <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        </section>
      </div>

      {selectedService && <ServiceModal service={selectedService} />}
      
      {/* Service Inquiry Modal */}
      <Dialog open={showInquiryForm} onOpenChange={setShowInquiryForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Service Information</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with detailed information about our services.
            </DialogDescription>
          </DialogHeader>
          <ServiceInquiryForm onSuccess={() => setShowInquiryForm(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
