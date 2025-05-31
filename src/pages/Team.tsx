import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Team = () => {
  const handleContactSupport = () => {
    const phoneNumber = '254707612395';
    const message = 'Hello! I would like to get in touch with your team.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM', '_blank');
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Team</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
                Meet the experts behind Data Quest Solutions
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-sky-200">
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-sky-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                      <p className="text-sky-500 font-medium">{member.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Join Our Team</h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                onClick={handleContactSupport}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                onClick={handleJoinCommunity}
                className="flex items-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600"
              >
                <Users className="h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
