import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesIndex = () => {
  const caseStudies = [
    {
      title: "Healthcare Data Analysis",
      description: "How we helped a healthcare provider optimize patient care through data-driven insights.",
      client: "Regional Medical Center",
      results: [
        "30% reduction in patient wait times",
        "25% improvement in resource allocation",
        "40% increase in patient satisfaction"
      ],
      link: "/case-studies/healthcare"
    },
    {
      title: "Retail Analytics",
      description: "Improving customer experience and sales through advanced data analytics.",
      client: "East Africa Retail Chain",
      results: [
        "35% reduction in inventory costs",
        "25% increase in sales revenue",
        "40% improvement in stock availability"
      ],
      link: "/case-studies/retail"
    },
    {
      title: "Financial Services Analytics",
      description: "Enhancing risk assessment and customer service through data analytics.",
      client: "East Africa Bank",
      results: [
        "60% faster loan approval process",
        "45% reduction in fraud incidents",
        "30% increase in customer satisfaction"
      ],
      link: "/case-studies/financial"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Case Studies - DataQuest Solutions</title>
        <meta name="description" content="Explore our success stories and learn how we've helped organizations achieve their goals through data-driven solutions." />
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
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Discover how we've helped organizations achieve their goals through data-driven solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <FileText className="h-8 w-8 text-sky-500" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                      <p className="text-gray-600 mt-1">{study.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Key Results</h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="h-2 w-2 rounded-full bg-sky-500 mt-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button
                        className="bg-sky-500 hover:bg-sky-600 text-white"
                        asChild
                      >
                        <Link to={study.link}>Read Full Case Study</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesIndex; 