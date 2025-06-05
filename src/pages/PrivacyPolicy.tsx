import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy - Data Quest Solutions</title>
        <meta name="description" content="Learn about how Data Quest Solutions collects, uses, and protects your personal information." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              At Data Quest Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Please read this privacy policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this privacy policy.
            </p>
          </CardContent>
        </Card>

        {/* Information Collection */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-slate-800">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and position</li>
                <li>Billing and payment information</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-slate-800">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Device information</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Information Usage */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-slate-800">Primary Uses</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you updates and marketing communications</li>
                  <li>Respond to your inquiries</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-slate-800">Secondary Uses</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns</li>
                  <li>Prevent fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-slate-800">Security Measures</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-slate-800">Your Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Keep your login credentials secure</li>
                  <li>Use strong passwords</li>
                  <li>Report any security concerns</li>
                  <li>Update your contact information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-slate-800">Access and Control</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request data deletion</li>
                  <li>Object to data processing</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-slate-800">Additional Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                  <li>File a complaint</li>
                  <li>Request information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-900">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg space-y-3">
              <p className="text-slate-700">
                <strong>WhatsApp:</strong> +254 707 612 395
              </p>
              <p className="text-slate-700">
                <strong>Email:</strong> dataquestsolutions2@gmail.com
              </p>
              <p className="text-slate-700">
                <strong>Location:</strong> KAKAMEGA, Kenya
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8">
          <Button
            onClick={scrollToTop}
            className="rounded-full p-3 bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 