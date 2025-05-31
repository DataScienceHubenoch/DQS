import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Web3Wallet from './Web3Wallet';

const MobileMenu = () => {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Courses', path: '/courses' },
    { label: 'Team', path: '/team' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-lg font-medium hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t">
            <Web3Wallet />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu; 