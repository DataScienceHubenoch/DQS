import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users } from 'lucide-react';

const Footer = () => {
  const handleContactSupport = () => {
    const phoneNumber = '254707612395';
    const message = 'Hello! I would like to request information about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM', '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-sky-100 mb-6 max-w-md">
              Empowering businesses with data-driven solutions through expert consulting, 
              training, and innovative technology services.
            </p>
            <div className="flex flex-col space-y-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleContactSupport}
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
              >
                <MessageCircle className="h-5 w-5" />
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleJoinCommunity}
                className="flex items-center gap-2 border-sky-400 text-sky-100 hover:bg-sky-800/50"
              >
                <Users className="h-5 w-5" />
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sky-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sky-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sky-200 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sky-200 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sky-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-100">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sky-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sky-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sky-200 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-12 pt-8">
          <p className="text-center text-sky-200">
            © {new Date().getFullYear()} Data Quest Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
