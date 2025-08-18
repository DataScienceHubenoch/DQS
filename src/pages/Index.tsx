import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MessageCircle, Users, BookOpen, Download, Video, FileText, CheckCircle2, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import SEO from '@/components/SEO';
import { COMPANY_INFO } from '@/lib/constants';

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
  const handleRequestService = (serviceName: string) => {
    const phoneNumber = COMPANY_INFO.phone.replace('+', '');
    const message = `Hello! I would like to request information about your "${serviceName}" service. Could you please provide more details about the service and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open(COMPANY_INFO.whatsappGroup, '_blank');
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
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <SEO
        title="DataQuest Solutions - Data Science & Research Services"
        description="DataQuest Solutions provides comprehensive data science services, including data collection, analysis, AI development, and research writing. Transform your data into actionable insights."
        url="https://dqs.vercel.app"
        keywords="data science, data analysis, machine learning, AI development, research writing, data collection, Kenya"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              At DataQuest Solutions, we blend expertise with innovation to deliver
              impactful data solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Our commitment is to empower individuals and organizations by transforming data into actionable insights for sustainable growth
            </p>
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/90 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-700">+254707612395</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/90 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-700">{COMPANY_INFO.alternatePhone}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/90 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky-500">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-gray-700">{COMPANY_INFO.email}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => handleRequestService('General Inquiry')}
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
              >
                <MessageCircle className="h-5 w-5" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Data Science Solutions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              End-to-end services designed to accelerate your data science journey and business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
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

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Skilled professionals dedicated to delivering excellence in data science and research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Enock Bereka',
                role: 'Lead Data Scientist',
                bio: 'Expert in machine learning and data analysis with over 5 years of experience.',
                image: '/team/Enock Bereka.jpg'
              },
              {
                name: 'Timothy Achalla',
                role: 'Senior Data Engineer',
                bio: 'Specializes in big data processing and cloud architecture.',
                image: '/team/Timothy Achalla.jpg'
              },
              {
                name: 'Nobert Wafula',
                role: 'Data Analyst',
                bio: 'Passionate about data visualization and statistical analysis.',
                image: '/team/nobert wafula.jpg'
              },
              {
                name: 'Ogechi Koel',
                role: 'Machine Learning Engineer',
                bio: 'Focused on developing and deploying ML models for real-world applications.',
                image: '/team/ogechi koel.jpg'
              }
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-sky-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
                    <p className="text-sky-500 font-medium text-sm">{member.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="text-sky-600 border-sky-200 hover:bg-sky-50"
              asChild
            >
              <Link to="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Resources</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Access our comprehensive guides and tutorials to enhance your data science skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analysis Guide",
                description: "A comprehensive guide to getting started with data analysis. Learn the fundamentals of data analysis, including data cleaning, visualization, and statistical analysis.",
                icon: <BookOpen className="h-8 w-8 text-sky-500" />,
                downloadLink: "/resources/data-analysis-guide.pdf",
                topics: [
                  "Data Cleaning Techniques",
                  "Statistical Analysis",
                  "Data Visualization",
                  "Report Writing"
                ]
              },
              {
                title: "Python for Data Science",
                description: "Free Python tutorials for data science beginners. Master Python programming for data analysis, including pandas, numpy, and matplotlib libraries.",
                icon: <BookOpen className="h-8 w-8 text-sky-500" />,
                downloadLink: "/resources/python-data-science.pdf",
                topics: [
                  "Python Basics",
                  "Pandas for Data Analysis",
                  "Data Visualization with Matplotlib",
                  "Statistical Analysis with NumPy"
                ]
              },
              {
                title: "Research Methodology",
                description: "Essential research methods and best practices. Learn how to conduct effective research, from problem formulation to data collection and analysis.",
                icon: <BookOpen className="h-8 w-8 text-sky-500" />,
                downloadLink: "/resources/research-methodology.pdf",
                topics: [
                  "Research Design",
                  "Data Collection Methods",
                  "Qualitative Analysis",
                  "Quantitative Analysis"
                ]
              }
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {resource.icon}
                    <CardTitle className="text-xl text-gray-900">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {resource.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight className="h-4 w-4 text-sky-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => {
                      const phoneNumber = COMPANY_INFO.phone.replace('+', '');
                      const message = `Hello! I would like to request the ${resource.title} guide.`;
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Request Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="text-sky-600 border-sky-200 hover:bg-sky-50"
              asChild
            >
              <Link to="/resources">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn from industry professionals and enhance your data science skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Introduction to Machine Learning",
                description: "Learn the fundamentals of machine learning and how to implement basic algorithms using Python.",
                date: "March 25, 2024",
                time: "2:00 PM EAT",
                duration: "90 minutes",
                speaker: "Enock Bereka",
                role: "Lead Data Scientist",
                icon: <Video className="h-8 w-8 text-sky-500" />,
                registrationLink: "/webinars/intro-ml/register"
              },
              {
                title: "Data Visualization Best Practices",
                description: "Master the art of creating effective and engaging data visualizations using modern tools.",
                date: "April 2, 2024",
                time: "3:00 PM EAT",
                duration: "60 minutes",
                speaker: "Timothy Achalla",
                role: "Senior Data Engineer",
                icon: <Video className="h-8 w-8 text-sky-500" />,
                registrationLink: "/webinars/data-viz/register"
              },
              {
                title: "Research Data Analysis",
                description: "Learn how to analyze research data effectively using statistical methods and visualization tools.",
                date: "April 9, 2024",
                time: "2:00 PM EAT",
                duration: "90 minutes",
                speaker: "Nobert Wafula",
                role: "Data Analyst",
                icon: <Video className="h-8 w-8 text-sky-500" />,
                registrationLink: "/webinars/research-analysis/register"
              }
            ].map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {webinar.icon}
                    <CardTitle className="text-xl text-gray-900">{webinar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-sky-500" />
                      {webinar.time}
                    </div>
                    <div className="text-gray-600">
                      Speaker: {webinar.speaker}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => {
                      const phoneNumber = COMPANY_INFO.phone.replace('+', '');
                      const message = `Hello! I would like to join the webinar "${webinar.title}" on ${webinar.date} at ${webinar.time}.`;
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <Video className="h-5 w-5 mr-2" />
                    Join Us
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how we've helped organizations achieve their goals through data-driven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "Healthcare Data Analysis",
                description: "How we helped a healthcare provider optimize patient care through data-driven insights.",
                client: "Regional Medical Center",
                challenge: "The client needed to improve patient care efficiency and reduce wait times.",
                solution: "Implemented a comprehensive data analysis system to track patient flow and identify bottlenecks.",
                results: [
                  "30% reduction in patient wait times",
                  "25% improvement in resource allocation",
                  "40% increase in patient satisfaction"
                ],
                icon: <FileText className="h-8 w-8 text-sky-500" />,
                link: "/case-studies/healthcare"
              },
              {
                title: "Retail Analytics",
                description: "Improving customer experience and sales through advanced data analytics.",
                client: "East Africa Retail Chain",
                challenge: "The client wanted to optimize inventory management and increase sales.",
                solution: "Developed a comprehensive retail analytics solution for inventory optimization and sales analysis.",
                results: [
                  "35% reduction in inventory costs",
                  "25% increase in sales revenue",
                  "40% improvement in stock availability"
                ],
                icon: <FileText className="h-8 w-8 text-sky-500" />,
                link: "/case-studies/retail"
              },
              {
                title: "Financial Services Analytics",
                description: "Enhancing risk assessment and customer service through data analytics.",
                client: "East Africa Bank",
                challenge: "The client needed to improve risk assessment and fraud detection.",
                solution: "Implemented an AI-powered risk assessment and fraud detection system.",
                results: [
                  "60% faster loan approval process",
                  "45% reduction in fraud incidents",
                  "30% increase in customer satisfaction"
                ],
                icon: <FileText className="h-8 w-8 text-sky-500" />,
                link: "/case-studies/financial"
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {study.icon}
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{study.title}</CardTitle>
                      <p className="text-gray-600 mt-1">{study.client}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="h-5 w-5 text-sky-500 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="mt-6 bg-sky-500 hover:bg-sky-600 text-white"
                        asChild
                      >
                        <Link to={study.link}>
                          Read Full Case Study
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="text-sky-600 border-sky-200 hover:bg-sky-50"
              asChild
            >
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-20">
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
            <Button 
              variant="outline" 
              onClick={handleJoinCommunity}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            >
              <Users className="h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="text-center bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-8">
          Ready to start your data-driven journey? Contact us today.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+254707612395</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{COMPANY_INFO.alternatePhone}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-600">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>{COMPANY_INFO.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
