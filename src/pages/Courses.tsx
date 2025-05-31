import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentButton from '@/components/PaymentButton';
import {
  BookOpen,
  Code2,
  Database,
  LineChart,
  Microscope,
  Palette,
  GraduationCap,
  Lightbulb,
  Cpu,
  FileText,
} from 'lucide-react';

const Courses = () => {
  const handleEnroll = (courseTitle: string) => {
    const phoneNumber = '254707612395';
    const message = `Hello! I would like to enroll in your "${courseTitle}" course. Could you please provide more details about the course schedule and enrollment process?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const courses = [
    {
      title: 'Data Analysis Fundamentals',
      description: 'Learn the basics of data analysis, including statistical methods, data visualization, and interpretation techniques. Perfect for beginners looking to start their data journey.',
      duration: '8 weeks',
      level: 'Beginner',
      price: '0.1',
      icon: LineChart
    },
    {
      title: 'Advanced Data Science',
      description: 'Dive deep into machine learning, predictive modeling, and advanced statistical analysis. This course is designed for those who want to take their data skills to the next level.',
      duration: '12 weeks',
      level: 'Advanced',
      price: '0.2',
      icon: Database
    },
    {
      title: 'Web Development Bootcamp',
      description: 'Master modern web development with hands-on projects. Learn HTML, CSS, JavaScript, and popular frameworks to build responsive and dynamic websites.',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '0.15',
      icon: Code2
    },
    {
      title: 'Research Methodology',
      description: 'Develop strong research skills with our comprehensive methodology course. Learn how to design studies, collect data, and analyze results effectively.',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '0.12',
      icon: Microscope
    },
    {
      title: 'Digital Design Principles',
      description: 'Explore the fundamentals of digital design, including UI/UX principles, color theory, and typography. Create visually appealing and user-friendly digital products.',
      duration: '8 weeks',
      level: 'Beginner',
      price: '0.1',
      icon: Palette
    },
    {
      title: 'Professional Writing',
      description: 'Enhance your writing skills for business and academic contexts. Learn to create clear, concise, and impactful content that engages your audience.',
      duration: '6 weeks',
      level: 'All Levels',
      price: '0.08',
      icon: FileText
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming': return 'bg-blue-100 text-blue-800';
      case 'Machine Learning': return 'bg-purple-100 text-purple-800';
      case 'Statistical Software': return 'bg-indigo-100 text-indigo-800';
      case 'Visualization': return 'bg-pink-100 text-pink-800';
      case 'Specialized Analysis': return 'bg-orange-100 text-orange-800';
      case 'AI/Deep Learning': return 'bg-red-100 text-red-800';
      case 'Data Collection': return 'bg-teal-100 text-teal-800';
      case 'Qualitative Research': return 'bg-emerald-100 text-emerald-800';
      case 'Design': return 'bg-rose-100 text-rose-800';
      case 'Database': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your knowledge and skills with our comprehensive courses. 
            From data analysis to web development, we offer programs designed to help you succeed.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="text-center pb-4">
                <course.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">{course.title}</CardTitle>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                <div className="mt-auto space-y-3">
                  <Button 
                    variant="outline"
                    onClick={() => handleEnroll(course.title)}
                    className="w-full"
                  >
                    Enroll via WhatsApp
                  </Button>
                  <PaymentButton
                    to="0x26862D2d4Da5db0bdf56Af59093cc6B83bC4a56C"
                    amount={course.price}
                    label={`Pay for ${course.title}`}
                    onSuccess={(tx) => {
                      console.log('Enrollment successful:', tx);
                    }}
                    onError={(error) => {
                      console.error('Enrollment failed:', error);
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-xl mb-6 opacity-90">
            Join our community of learners and take your skills to the next level.
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
              onClick={() => handleEnroll('Consultation')}
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

export default Courses;
