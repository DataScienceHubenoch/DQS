import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Data Quest</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the future through data-driven insights and innovative solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Who We Are</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At Data Quest, we are dedicated to empowering businesses, organizations and 
                  individuals with the tools and knowledge needed to thrive in today's fast-paced, 
                  data-driven world. Our team of experts provides a diverse range of services designed 
                  to drive informed decision-making, foster growth, and accelerate innovation.
                </p>
                <p>
                  From data collection and analysis to advanced AI development and professional training, 
                  we deliver tailored solutions that meet the unique needs of our clients. We pride ourselves 
                  on offering high-quality, actionable insights and strategic support across various industries.
                </p>
                <p>
                  Whether you're looking to optimize operational efficiency, enhance your digital presence, 
                  or develop cutting-edge artificial intelligence solutions, we've got you covered. In addition 
                  to our service offerings, we are proud to provide a wide range of industry-leading courses.
                </p>
                <p>
                  These courses are designed to equip individuals and teams with in-depth knowledge of data 
                  analysis, machine learning, AI, and more. Whether you're looking to master tools like SPSS, 
                  R, Python, or Power BI, or expand your expertise in specialized fields like spatial analysis 
                  or infectious disease modeling, our training programs offer the skills you need to stay ahead 
                  of the curve.
                </p>
                <p>
                  At Data Quest, we are more than just a service provider—we are your partner in success. 
                  Our commitment to excellence, innovation, and customer satisfaction drives everything we do. 
                  Let us help you unlock the potential of data, technology, and knowledge to propel your business 
                  or career forward.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  🎯 Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to empower businesses, organizations, and individuals by providing 
                  innovative tools, expert knowledge, and tailored solutions that foster growth, 
                  enhance decision-making, and drive success in a data-driven world. Through high-quality 
                  services, cutting-edge AI development, and comprehensive training programs, we enable 
                  our clients to optimize performance and stay ahead of industry trends.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  🔮 Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our vision is to be a trusted partner in transforming the way businesses and 
                  individuals leverage data, technology, and knowledge. We strive to lead the way 
                  in innovation, providing strategic insights and expertise that fuel progress, 
                  drive operational excellence, and unlock new opportunities for success in an 
                  ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
            <div className="text-gray-600">Course Offerings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
            <div className="text-gray-600">Service Areas</div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We constantly push boundaries and embrace new technologies to deliver 
                  cutting-edge solutions that drive meaningful change.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, ensuring quality, 
                  accuracy, and reliability in all our services and solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We focus on creating tangible, measurable results that drive growth 
                  and success for our clients and their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let's work together to unlock the potential of your data and drive your success forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
