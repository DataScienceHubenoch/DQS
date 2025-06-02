import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const handleContactSupport = () => {
    const phoneNumber = '254707612395';
    const message = 'Hello, I have a question about Data Quest Solutions.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      question: "What services does Data Quest Solutions offer?",
      answer: "We offer a comprehensive range of data services including data collection, analysis, visualization, and training. Our services are tailored to help organizations make data-driven decisions."
    },
    {
      question: "How can I get started with your services?",
      answer: "Getting started is easy! Simply contact us through our website or WhatsApp, and we'll schedule a consultation to understand your needs and recommend the best solutions."
    },
    {
      question: "Do you offer customized training programs?",
      answer: "Yes, we provide customized training programs tailored to your organization's specific needs. Our training covers various tools and techniques in data analysis and visualization."
    },
    {
      question: "What tools do you use for data analysis?",
      answer: "We use a variety of industry-standard tools including Excel, Python, R, Tableau, and Power BI. The choice of tools depends on your specific requirements and project scope."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services, training programs, and data solutions.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-sky-200">
              <CardHeader>
                <CardTitle className="text-gray-900">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">{faq.answer}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Our team is here to help! Contact us for personalized assistance and detailed information about our services.
          </p>
          <Button 
            className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
            onClick={handleContactSupport}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 