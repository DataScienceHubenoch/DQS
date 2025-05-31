import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Web3Wallet from './Web3Wallet';
import NetworkStatus from './NetworkStatus';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Consulting', path: '/consulting' },
    { label: 'Courses', path: '/courses' },
    { label: 'Team', path: '/team' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="xl:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="pt-20 pb-6 px-4 space-y-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-4">
                <NetworkStatus />
                <Web3Wallet />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 