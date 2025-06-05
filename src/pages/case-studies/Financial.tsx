import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, DollarSign, Clock, TrendingUp, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Financial Services Analytics Case Study - DataQuest Solutions</title>
        <meta name="description" content="Learn how DataQuest Solutions helped East Africa Bank improve risk assessment and customer service through data analytics." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button
              variant="ghost"
              className="mb-8 text-gray-700 hover:text-gray-900"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Financial Services Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Enhancing Risk Assessment and Customer Service Through Data Analytics
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Overview</h2>
                <p className="text-gray-600 mb-6">
                  East Africa Bank, a leading financial institution with operations across multiple countries, was seeking to enhance their risk assessment capabilities and improve customer service through data-driven insights.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Assets Under Management</p>
                      <p className="text-gray-600">$2B+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Project Duration</p>
                      <p className="text-gray-600">8 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
                <p className="text-gray-600 mb-6">
                  The bank was facing several operational challenges:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Risk Assessment</p>
                      <p className="text-gray-600">Manual processes leading to delayed loan approvals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Customer Service</p>
                      <p className="text-gray-600">Limited personalization in customer interactions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Fraud Detection</p>
                      <p className="text-gray-600">Increasing incidents of financial fraud</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                <p className="text-gray-600 mb-6">
                  We implemented a comprehensive financial analytics solution that included:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. AI-Powered Risk Assessment</h3>
                    <p className="text-gray-600">
                      Developed machine learning models to automate credit risk assessment and loan approval processes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Customer Analytics Platform</h3>
                    <p className="text-gray-600">
                      Created a real-time analytics platform that provides insights into customer behavior and preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Fraud Detection System</h3>
                    <p className="text-gray-600">
                      Implemented an advanced fraud detection system using machine learning to identify suspicious transactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">60% Faster</p>
                        <p className="text-gray-600">loan approval process</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">45% Reduction</p>
                        <p className="text-gray-600">in fraud incidents</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">30% Increase</p>
                        <p className="text-gray-600">in customer satisfaction</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">50% Reduction</p>
                        <p className="text-gray-600">in processing time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Client</p>
                    <p className="text-gray-600">East Africa Bank</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Industry</p>
                    <p className="text-gray-600">Financial Services</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Duration</p>
                    <p className="text-gray-600">8 months</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Technologies Used</p>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Python</li>
                      <li>TensorFlow</li>
                      <li>Power BI</li>
                      <li>SQL Server</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in Similar Solutions?</h3>
                <p className="text-gray-600 mb-4">
                  Let's discuss how we can help enhance your financial services through data analytics.
                </p>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() => {
                    const phoneNumber = '254707612395';
                    const message = 'Hello! I would like to learn more about your financial services analytics solutions.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Contact Us
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialCaseStudy; 