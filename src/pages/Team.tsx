import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Enock Bereka',
      role: 'Lead Data Scientist',
      bio: 'Expert in machine learning and data analysis with over 5 years of experience.',
      image: '/team/Enock Bereka.jpg'
    },
    {
      id: 2,
      name: 'Timothy Achalla',
      role: 'Senior Data Engineer',
      bio: 'Specializes in big data processing and cloud architecture.',
      image: '/team/Timothy Achalla.jpg'
    },
    {
      id: 3,
      name: 'Nobert Wafula',
      role: 'Data Analyst',
      bio: 'Passionate about data visualization and statistical analysis.',
      image: '/team/nobert wafula.jpg'
    },
    {
      id: 4,
      name: 'Ogechi Koel',
      role: 'Machine Learning Engineer',
      bio: 'Focused on developing and deploying ML models for real-world applications.',
      image: '/team/ogechi koel.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of data scientists, analysts, and AI specialists brings together decades of experience 
            in transforming data into actionable insights and innovative solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
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

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work With Our Team?</h2>
          <p className="text-gray-600 mb-6">
            Get in touch with our experts to discuss your data science and analytics needs.
          </p>
          <Button asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Contact Our Team
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
