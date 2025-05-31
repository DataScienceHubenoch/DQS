import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '254707612395'; // WhatsApp number without the + symbol
    const message = encodeURIComponent('Hello! I would like to learn more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contact via WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton; 