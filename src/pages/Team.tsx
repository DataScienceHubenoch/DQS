import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ogechi Daniel Koel',
      title: 'Biostatistician',
      email: 'ogechikoel@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ogechi-koel-4b90b92ab',
      description: 'I am an apt Biostatistician determined in applying various statistical methods to inform decisions in medicine, public health and science.',
      image: '/team/ogechi koel.jpg'
    },
    {
      name: 'Nobert Wafula',
      title: 'Data Analyst',
      email: 'wakasalanobert5746@gmail.com',
      linkedin: 'https://www.linkedin.com/in/nobert-wafula-b7b1782a2',
      description: "I'm a data analyst passionate about turning data into actionable insights and building predictive models that drive smart, impactful decisions.",
      image: '/team/nobert wafula.jpg'
    },
    {
      name: 'Enock Bereka',
      title: 'Data Scientist',
      email: 'enochosenwafulah@gmail.com',
      linkedin: 'https://www.linkedin.com/in/enock-bereka',
      description: "I'm a passionate data scientist driven by curiosity and a commitment to lifelong learning. I thrive on exploring new tools and techniques to uncover insights and solve real-world problems. My goal is to turn data into impactful solutions that drive informed decision-making and meaningful change.",
      image: '/team/Enock Bereka.jpg'
    },
    {
      name: 'Timothy Achala',
      title: 'AI Enthusiast & Computer Scientist',
      email: 'timothyachala695@gmail.com',
      linkedin: 'https://www.linkedin.com/in/timothy-a-1bb74127b',
      description: 'I am an AI Enthusiast and computer scientist with a deep passion for data. My work lies at the intersection of theory and real-world application—leveraging mathematical rigor and computational power to extract meaningful insights from complex datasets. With a strong foundation in algorithms, statistics, and machine learning, I specialize in transforming raw data into actionable intelligence.',
      image: '/team/Timothy Achalla.jpg'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="text-center pb-4 flex-none">
                <div className="aspect-square w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                <p className="text-blue-600 font-medium">{member.title}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Our Team
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
