import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, Users, Clock, TrendingUp, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Healthcare Data Analysis Case Study - DataQuest Solutions</title>
        <meta name="description" content="Learn how DataQuest Solutions helped Regional Medical Center optimize patient care through data-driven insights." />
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
              Healthcare Data Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Optimizing Patient Care Through Data-Driven Insights
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
                  Regional Medical Center, a leading healthcare provider in East Africa, was facing challenges in managing patient flow and optimizing resource allocation. With increasing patient numbers and limited resources, they needed a data-driven solution to improve operational efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Patient Volume</p>
                      <p className="text-gray-600">10,000+ monthly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-sky-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Project Duration</p>
                      <p className="text-gray-600">6 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
                <p className="text-gray-600 mb-6">
                  The medical center was experiencing several operational challenges:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Long Patient Wait Times</p>
                      <p className="text-gray-600">Average wait time of 2.5 hours for non-emergency cases</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Resource Allocation</p>
                      <p className="text-gray-600">Inefficient distribution of staff and equipment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-sky-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Data Silos</p>
                      <p className="text-gray-600">Disconnected systems preventing comprehensive analysis</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                <p className="text-gray-600 mb-6">
                  We implemented a comprehensive data analysis system that included:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Data Integration Platform</h3>
                    <p className="text-gray-600">
                      Developed a centralized data platform that integrated information from various hospital systems, including patient records, scheduling, and resource management.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Predictive Analytics Model</h3>
                    <p className="text-gray-600">
                      Created machine learning models to predict patient flow and optimize resource allocation based on historical data and real-time information.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Real-time Dashboard</h3>
                    <p className="text-gray-600">
                      Implemented an interactive dashboard for hospital staff to monitor patient flow, resource utilization, and operational metrics in real-time.
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
                        <p className="font-semibold text-gray-900">30% Reduction</p>
                        <p className="text-gray-600">in patient wait times</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">25% Improvement</p>
                        <p className="text-gray-600">in resource allocation</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">40% Increase</p>
                        <p className="text-gray-600">in patient satisfaction</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-semibold text-gray-900">20% Reduction</p>
                        <p className="text-gray-600">in staff overtime</p>
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
                    <p className="text-gray-600">Regional Medical Center</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Industry</p>
                    <p className="text-gray-600">Healthcare</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Duration</p>
                    <p className="text-gray-600">6 months</p>
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
                  Let's discuss how we can help optimize your operations through data-driven insights.
                </p>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() => {
                    const phoneNumber = '254707612395';
                    const message = 'Hello! I would like to learn more about your healthcare data analysis solutions.';
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

export default HealthcareCaseStudy; 