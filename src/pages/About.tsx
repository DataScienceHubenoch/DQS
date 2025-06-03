import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that drive meaningful change.'
    },
    {
      icon: '🤝',
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring quality, accuracy, and reliability in all our services and solutions.'
    },
    {
      icon: '🎯',
      title: 'Impact',
      description: 'We focus on creating tangible, measurable results that drive growth and success for our clients and their communities.'
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
                About DataQuest Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
                Empowering organizations through innovative data science solutions and expert guidance
          </p>
        </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-sky-100 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-sky-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  To empower individuals and organizations with data-driven skills and knowledge, enabling them to make informed decisions and drive positive change in their communities.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-sky-100 p-3 rounded-xl">
                    <Eye className="h-8 w-8 text-sky-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  To be the leading provider of data analysis and research training in East Africa, fostering a community of skilled professionals who drive innovation and development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
              <CardHeader>
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <CardTitle className="text-gray-900">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                    <p className="text-gray-700">{value.description}</p>
              </CardContent>
            </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Data Journey?</h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Join us in revolutionizing the way you handle data. Let's work together to unlock your organization's full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500" asChild>
                <Link to="/contact">Get Started</Link>
            </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600" asChild>
                <Link to="/services">Explore Services</Link>
            </Button>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-muted-foreground">
              Get in touch with us through WhatsApp or email:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+254707612395</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+254701344230</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>dataquestsolutions2@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
