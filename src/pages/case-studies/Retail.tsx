import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, ShoppingBag, Clock, TrendingUp, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Retail Analytics Case Study - DataQuest Solutions</title>
        <meta name="description" content="Learn how DataQuest Solutions helped East Africa Retail Chain optimize inventory and increase sales through data analytics." />
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
              Retail Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Optimizing Inventory and Increasing Sales Through Data Analytics
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
                  East Africa Retail Chain, a leading retail group with 50+ stores across the region, was struggling with inventory management and sales optimization. They needed a data-driven solution to improve their operations and increase profitability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Store Network</p>
                      <p className="text-gray-600">50+ locations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Project Duration</p>
                      <p className="text-gray-600">4 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
                <p className="text-gray-600 mb-6">
                  The retail chain was facing several operational challenges:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Inventory Management</p>
                      <p className="text-gray-600">Overstocking and stockouts affecting profitability</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Sales Optimization</p>
                      <p className="text-gray-600">Inconsistent sales performance across locations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Data Integration</p>
                      <p className="text-gray-600">Disconnected systems across stores and departments</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                <p className="text-gray-600 mb-6">
                  We implemented a comprehensive retail analytics solution that included:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Inventory Optimization System</h3>
                    <p className="text-gray-600">
                      Developed an AI-powered inventory management system that predicts demand and optimizes stock levels across all locations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Sales Analytics Platform</h3>
                    <p className="text-gray-600">
                      Created a real-time analytics platform that tracks sales performance, customer behavior, and product trends across all stores.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Unified Data Platform</h3>
                    <p className="text-gray-600">
                      Implemented a centralized data platform that integrates information from POS systems, inventory management, and customer loyalty programs.
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
                        <p className="font-semibold text-gray-900">35% Reduction</p>
                        <p className="text-gray-600">in inventory costs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">25% Increase</p>
                        <p className="text-gray-600">in sales revenue</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">40% Improvement</p>
                        <p className="text-gray-600">in stock availability</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">50% Reduction</p>
                        <p className="text-gray-600">in stockout incidents</p>
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
                    <p className="text-gray-600">East Africa Retail Chain</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Industry</p>
                    <p className="text-gray-600">Retail</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Duration</p>
                    <p className="text-gray-600">4 months</p>
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
                  Let's discuss how we can help optimize your retail operations through data analytics.
                </p>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() => {
                    const phoneNumber = '254707612395';
                    const message = 'Hello! I would like to learn more about your retail analytics solutions.';
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

export default RetailCaseStudy; 