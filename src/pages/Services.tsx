import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentButton from '@/components/PaymentButton';
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
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from 'react-router-dom';

const Services = () => {
  const handleRequestService = (serviceTitle: string) => {
    const phoneNumber = '254707612395'; // WhatsApp number without the + symbol
    const message = `Hello! I would like to request information about your "${serviceTitle}" service. Could you please provide more details about the service and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: 'Data Collection',
      description: 'Accurate, reliable data is the foundation of informed decision-making. Our data collection services provide businesses with high-quality, actionable data that can drive strategy and improve performance. We specialize in gathering data from diverse sources, ensuring it\'s relevant, timely, and tailored to your specific needs. Whether it\'s qualitative or quantitative data, we employ industry-leading methods and tools to deliver precise insights that support your business objectives.',
      icon: Database,
      tooltip: 'Data Collection & Management'
    },
    {
      title: 'Data Analysis',
      description: 'Transform your data into valuable insights with our expert data analysis services. We use advanced analytical techniques to interpret complex data sets, uncover trends, and provide actionable recommendations that drive informed business decisions. Whether you need to improve operational efficiency, understand customer behavior, or forecast future trends, our data analysis services turn raw data into clear, strategic guidance that propels your business forward.',
      icon: LineChart,
      tooltip: 'Statistical Analysis & Visualization'
    },
    {
      title: 'Writing Reports',
      description: 'Our expert team crafts comprehensive and insightful reports tailored to your specific needs. Whether it\'s for internal purposes, clients, or stakeholders, we ensure clear, concise, and well-researched content that drives decisions and actions. With a focus on accuracy and presentation, we provide detailed reports that enhance your business\'s credibility and performance.',
      icon: FileText,
      tooltip: 'Professional Report Writing'
    },
    {
      title: 'Research Writing',
      description: 'We offer in-depth research writing services designed to support your business\'s strategic initiatives. From industry analysis to academic research, our experienced writers deliver meticulously sourced and structured content that provides actionable insights. We specialize in creating high-quality, evidence-based documents that inform decisions and foster growth.',
      icon: Microscope,
      tooltip: 'Academic & Industry Research'
    },
    {
      title: 'Graphic Design',
      description: 'Our graphic design services combine creativity and strategy to produce visually captivating content that aligns with your brand\'s identity. Whether it\'s logos, brochures, or social media graphics, we craft designs that are both aesthetically pleasing and functional. Let us help you communicate your message with visual clarity and impact.',
      icon: Palette,
      tooltip: 'Visual Design & Branding'
    },
    {
      title: 'Web Design',
      description: 'Stand out in the digital world with our custom web design services. We create responsive, user-friendly websites that not only look great but also offer seamless user experiences. From e-commerce sites to corporate landing pages, our designs are tailored to meet the unique needs of your business, ensuring that your online presence leaves a lasting impression.',
      icon: Code2,
      tooltip: 'Web Development & Design'
    },
    {
      title: 'Project Management',
      description: 'Effective project management is key to delivering results on time and within budget. Our certified project managers ensure that your projects are executed with precision and efficiency. We handle the planning, coordination, and execution of all project phases, keeping you informed every step of the way. Trust us to keep your projects on track and aligned with your business goals.',
      icon: ClipboardList,
      tooltip: 'Project Planning & Execution'
    },
    {
      title: 'AI Development',
      description: 'Embrace the future with our advanced AI development services. Our team specializes in building intelligent systems that optimize processes, enhance decision-making, and provide valuable insights. Whether you\'re looking for machine learning, natural language processing, or custom AI solutions, we deliver cutting-edge technology to accelerate your business success.',
      icon: Cpu,
      tooltip: 'Artificial Intelligence Solutions'
    },
    {
      title: 'Training',
      description: 'Empower your team with our comprehensive training programs designed to enhance skills and foster professional growth. From technical training to leadership development, our programs are tailored to address specific needs, ensuring measurable improvements in performance. With our expert trainers, your team will gain the knowledge and confidence to drive success.',
      icon: GraduationCap,
      tooltip: 'Professional Development & Training'
    },
    {
      title: 'Consultation',
      description: 'Our consultation services provide you with expert advice and strategic insights to help you navigate complex business challenges. We offer personalized guidance across various industries, helping you identify opportunities, optimize operations, and make informed decisions. Whether you\'re looking for business strategy, technology solutions, or process improvement, our consultants are here to support your goals.',
      icon: Lightbulb,
      tooltip: 'Strategic Business Consulting'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
                Comprehensive data science solutions tailored to your needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
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
                      onClick={() => handleRequestService(service.title)}
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
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
