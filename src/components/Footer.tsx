import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, ExternalLink } from 'lucide-react';

const Footer = () => {
  const handleContactSupport = () => {
    const phoneNumber = '254707612395';
    const message = 'Hello! I would like to get in touch with your team.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM', '_blank');
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'in',
      link: 'https://linkedin.com/company/dataquestsolutions',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      link: 'https://x.com/Dataquest123',
      bgColor: 'bg-sky-100'
    },
    {
      name: 'Facebook',
      icon: 'f',
      link: 'https://web.facebook.com/share/g/1ELLjtsTMA/',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Instagram',
      icon: '📸',
      link: 'https://www.instagram.com/dataquestsolutions/',
      bgColor: 'bg-pink-100'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      link: 'https://www.youtube.com/@dataquestsolutions-z9k',
      bgColor: 'bg-red-100'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      link: 'https://www.tiktok.com/@dataquestsolution',
      bgColor: 'bg-gray-100'
    }
  ];

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

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-100">Get in Touch</h3>
            <p className="text-sky-200 mb-4">
              Ready to start your data-driven journey? Contact us today.
            </p>
            <ul className="space-y-2 text-sky-200">
              <li>+254707612395</li>
              <li>+254701344230</li>
              <li>dataquestsolutions2@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-sky-800 mt-12 pt-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-sky-100">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${social.bgColor} text-gray-800 hover:opacity-80 transition-opacity`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <p className="text-center text-sky-200 mt-8">
            © {new Date().getFullYear()} Data Quest Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
