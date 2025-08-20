import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RegistrationCTAProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ 
  className = '',
  variant = 'default' 
}) => {
  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-sky-500 to-blue-600 text-white p-6 rounded-lg ${className}`}>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
          <p className="mb-4 opacity-90">
            Register for our courses or request professional services
          </p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100" asChild>
            <Link to="/register">
              <UserPlus className="mr-2 h-5 w-5" />
              Register Now
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive training courses or request professional services 
            tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                <BookOpen className="h-8 w-8 text-sky-600" />
              </div>
              <CardTitle className="text-xl">Training Courses</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Enroll in our expert-led courses covering data science, machine learning, 
                and analytics tools. Get certified and advance your career.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Flexible online sessions</li>
                <li>• Industry-recognized certificates</li>
                <li>• Hands-on practical projects</li>
                <li>• Expert instructor support</li>
              </ul>
              <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                <Link to="/register">
                  Register for Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Professional Services</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Get expert help with your data projects. From analysis to AI development, 
                our team delivers professional solutions for your business needs.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Custom data analysis solutions</li>
                <li>• AI and machine learning development</li>
                <li>• Research writing and documentation</li>
                <li>• Strategic consulting and training</li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                <Link to="/register">
                  Request Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Have questions? Our team is here to help you choose the right option.
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us for Guidance</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};