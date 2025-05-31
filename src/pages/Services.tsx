import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in the data-driven world. 
            From data collection to AI development, we provide end-to-end services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-none">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center">
                      <service.icon 
                        className="w-12 h-12 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110 hover:text-blue-700" 
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{service.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button 
                  className="w-full mt-auto"
                  onClick={() => handleRequestService(service.title)}
                >
                  Request Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our services can help you achieve your goals and drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PaymentButton
              to="0x26862D2d4Da5db0bdf56Af59093cc6B83bC4a56C"
              amount="0.5"
              label="Pay for Consultation"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onSuccess={(tx) => {
                console.log('Consultation payment successful:', tx);
              }}
              onError={(error) => {
                console.error('Consultation payment failed:', error);
              }}
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-blue-600"
              onClick={() => handleRequestService('Consultation')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
