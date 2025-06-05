import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">DataQuest Solutions</h3>
            <p className="text-gray-400 mb-4">
              Empowering organizations with data-driven insights and solutions for sustainable growth.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-sky-500" />
                <span>+254707612395</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-sky-500" />
                <span>dataquestsolutions2@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-500" />
                <span>Kakamega, Kenya</span>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@dataquestsolutions-z9k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Dataquest123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/groups/10084405/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/share/g/1BpECMKhi9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#data-collection" className="text-gray-400 hover:text-white transition-colors">
                  Data Collection
                </Link>
              </li>
              <li>
                <Link to="/services#data-analysis" className="text-gray-400 hover:text-white transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/services#ai-development" className="text-gray-400 hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/services#research-writing" className="text-gray-400 hover:text-white transition-colors">
                  Research Writing
                </Link>
              </li>
              <li>
                <Link to="/services#training" className="text-gray-400 hover:text-white transition-colors">
                  Training & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-400 mb-4">
                  Have questions? We're here to help. Reach out to us through any of these channels.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => window.open('https://wa.me/254707612395', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    onClick={() => window.location.href = 'mailto:dataquestsolutions2@gmail.com'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DataQuest Solutions. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
