import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Mail, MapPin, Phone, Users } from 'lucide-react';

const Contact = () => {
  const handleContactSupport = () => {
    const phoneNumber = '254707612395';
    const message = 'Hello! I would like to get in touch with your team.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Get in touch with our team for any questions or inquiries
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-sky-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="bg-white/90 backdrop-blur-sm border-sky-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/90 backdrop-blur-sm border-sky-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    className="bg-white/90 backdrop-blur-sm border-sky-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] bg-white/90 backdrop-blur-sm border-sky-200"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-sky-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                    <p className="text-gray-700">+254 707 612 395</p>
                    <Button 
                      variant="outline" 
                      onClick={handleContactSupport}
                      className="mt-2 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-700">info@dataquestsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sky-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-700">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-sky-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Join Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Connect with other learners and professionals in our WhatsApp community.
                </p>
                <Button 
                  variant="outline" 
                  onClick={handleJoinCommunity}
                  className="w-full flex items-center justify-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600"
                >
                  <Users className="h-5 w-5" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
