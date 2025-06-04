import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Web3Wallet from './Web3Wallet';
import MobileMenu from './MobileMenu';
import NetworkStatus from './NetworkStatus';
import { Home, Users, Briefcase, BookOpen, FileText, MessageSquare, Phone, Menu, Settings, Lightbulb, BarChart, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const menuItems = [
    {
      path: '/',
      icon: Home,
      label: 'Home',
      description: 'Welcome to DataQuest Solutions'
    },
    {
      path: '/about',
      icon: Users,
      label: 'About',
      description: 'Learn about our mission and team'
    },
    {
      path: '/services',
      icon: Settings,
      label: 'Services',
      description: 'Explore our data solutions'
    },
    {
      path: '/consulting',
      icon: Lightbulb,
      label: 'Consulting',
      description: 'Expert data strategy guidance'
    },
    {
      path: '/analytics',
      icon: BarChart,
      label: 'Analytics',
      description: 'View data insights and metrics'
    },
    {
      path: '/courses',
      icon: BookOpen,
      label: 'Courses',
      description: 'Explore our training programs'
    },
    {
      path: '/resources',
      icon: FileText,
      label: 'Resources',
      description: 'Free guides and tutorials'
    },
    {
      path: '/blog',
      icon: FileText,
      label: 'Blog',
      description: 'Latest insights and updates'
    },
    {
      path: '/contact',
      icon: Mail,
      label: 'Contact',
      description: 'Get in touch with our team'
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-50/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className="ml-2 text-blue-900 font-semibold text-lg">DATAQUEST SOLUTIONS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <TooltipProvider key={item.path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.path}
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                      title={item.label}
                      aria-label={item.label}
                    >
                      <item.icon className="h-5 w-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            <div className="ml-4">
              <Web3Wallet />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-700 hover:text-blue-900 hover:bg-blue-100"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-50/95 backdrop-blur-md border-b border-blue-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Web3Wallet />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
