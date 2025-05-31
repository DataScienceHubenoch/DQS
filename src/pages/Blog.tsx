import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users } from 'lucide-react';

const Blog = () => {
  const handleContactSupport = () => {
    const phoneNumber = '254700000000';
    const message = 'Hello, I have a question about Data Quest Solutions.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM', '_blank');
  };

  const faqs = [
    {
      question: 'What services does Data Quest Solutions offer?',
      answer: 'We offer a comprehensive range of services including data collection, data analysis, research writing, graphic design, web design, project management, AI development, training programs, consultation, and report writing. Our services are designed to help businesses and individuals make data-driven decisions and succeed in the digital age.'
    },
    {
      question: 'What courses do you provide?',
      answer: 'We offer 18 different courses covering various aspects of data science and analytics, including Data Analysis with SPSS, R, Python, and Stata, Machine Learning, Deep Learning/AI, Spatial Analysis, Time Series Forecasting, Survival Analysis, Data Visualization with Power BI and Tableau, Qualitative Analysis, Web Development, Graphic Design, Database Management with SQL, and specialized courses like Infectious Disease Modelling.'
    },
    {
      question: 'Who is your target audience?',
      answer: 'Our services and courses are designed for businesses, organizations, researchers, students, and professionals looking to enhance their data science and analytics skills. Whether you\'re a beginner looking to start your journey in data science or an experienced professional seeking to expand your expertise, we have solutions tailored to your needs.'
    },
    {
      question: 'How experienced is your team?',
      answer: 'Our team consists of highly qualified professionals including biostatisticians, data analysts, data scientists, and AI enthusiasts with extensive experience in their respective fields. Each team member brings unique expertise and a passion for transforming data into actionable insights.'
    },
    {
      question: 'Do you offer custom training programs?',
      answer: 'Yes, we provide custom training programs tailored to meet the specific needs of organizations and teams. Our training programs are designed to address particular skill gaps and requirements, ensuring measurable improvements in performance and productivity.'
    },
    {
      question: 'What makes your data analysis services unique?',
      answer: 'Our data analysis services combine advanced analytical techniques with industry expertise to deliver actionable insights. We use cutting-edge tools and methodologies to interpret complex datasets, uncover trends, and provide recommendations that drive informed business decisions and strategic growth.'
    },
    {
      question: 'How do you ensure data quality and security?',
      answer: 'We employ industry-leading methods and tools for data collection and analysis, ensuring accuracy, reliability, and security. Our team follows best practices for data handling, storage, and processing to maintain the highest standards of data integrity and confidentiality.'
    },
    {
      question: 'Can you help with AI development projects?',
      answer: 'Absolutely! Our AI development services include building intelligent systems, machine learning models, natural language processing solutions, and custom AI applications. We specialize in creating solutions that optimize processes, enhance decision-making, and provide valuable business insights.'
    },
    {
      question: 'What is the duration of your courses?',
      answer: 'Course durations vary depending on the complexity and depth of the subject matter. Our courses range from 6 weeks for introductory topics to 14 weeks for advanced subjects like Deep Learning/AI. Each course is designed to provide comprehensive coverage of the topic with hands-on practical experience.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we believe in building long-term partnerships with our clients. We provide ongoing consultation and support to ensure the successful implementation and maintenance of our solutions. Our team is always available to address questions and provide guidance as your needs evolve.'
    },
    {
      question: 'How can I get started with your services?',
      answer: 'Getting started is easy! You can contact us through our website, email, phone, or WhatsApp. We offer free initial consultations to understand your needs and recommend the best solutions. Our team will work with you to develop a customized approach that meets your specific requirements and goals.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across various industries including healthcare, finance, education, technology, government, research institutions, and private businesses. Our diverse expertise allows us to adapt our services and solutions to meet the unique challenges and requirements of different sectors.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services, courses, and expertise. 
            Can't find what you're looking for? Feel free to contact us!
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full bg-white/90 backdrop-blur-sm border-sky-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-white/90 backdrop-blur-sm border-sky-200">
            <CardHeader>
              <div className="text-4xl mb-4">📚</div>
              <CardTitle className="text-gray-900">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Access our comprehensive library of tutorials, guides, and documentation 
                to support your learning journey.
              </p>
              <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600">Browse Resources</Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/90 backdrop-blur-sm border-sky-200">
            <CardHeader>
              <div className="text-4xl mb-4">💬</div>
              <CardTitle className="text-gray-900">Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Join our community of learners and professionals to share knowledge, 
                ask questions, and collaborate on projects.
              </p>
              <Button 
                variant="outline" 
                onClick={handleJoinCommunity}
                className="flex items-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600"
              >
                <Users className="h-5 w-5" />
                Join Community
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/90 backdrop-blur-sm border-sky-200">
            <CardHeader>
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle className="text-gray-900">Expert Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Schedule a one-on-one consultation with our experts to get personalized 
                guidance for your specific needs.
              </p>
              <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600">Book Consultation</Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Our team is here to help. Get in touch with us for personalized assistance.
          </p>
          <Button 
            className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
            onClick={handleContactSupport}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
