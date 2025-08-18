import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { COMPANY_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400 mb-4">
              {COMPANY_INFO.description}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-sky-500" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-sky-500" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-500" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
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
                    onClick={() => window.open(`https://wa.me/${COMPANY_INFO.phone.replace('+', '')}`, '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    onClick={() => window.location.href = `mailto:${COMPANY_INFO.email}`}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Signup */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <NewsletterForm variant="inline" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
