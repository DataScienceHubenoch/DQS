import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Healthcare Data Analysis",
      description: "How we helped a healthcare provider optimize patient care through data-driven insights.",
      client: "Regional Medical Center",
      challenge: "The client needed to improve patient care efficiency and reduce wait times.",
      solution: "Implemented a comprehensive data analysis system to track patient flow and identify bottlenecks.",
      results: [
        "30% reduction in patient wait times",
        "25% improvement in resource allocation",
        "40% increase in patient satisfaction"
      ],
      icon: <FileText className="h-8 w-8 text-sky-500" />,
      link: "/case-studies/healthcare"
    },
    {
      title: "E-commerce Analytics",
      description: "Improving customer experience and sales through advanced data analytics.",
      client: "Online Retail Platform",
      challenge: "The client wanted to increase customer retention and optimize their product recommendations.",
      solution: "Developed a machine learning model for personalized product recommendations and customer behavior analysis.",
      results: [
        "35% increase in customer retention",
        "45% improvement in recommendation accuracy",
        "50% growth in cross-selling revenue"
      ],
      icon: <FileText className="h-8 w-8 text-sky-500" />,
      link: "/case-studies/ecommerce"
    },
    {
      title: "Research Project Success",
      description: "Supporting academic research with comprehensive data analysis and visualization.",
      client: "University Research Department",
      challenge: "The client needed to analyze large datasets for their research project.",
      solution: "Provided end-to-end data analysis services, from data cleaning to advanced statistical analysis.",
      results: [
        "Successful publication in top-tier journal",
        "Clear visualization of complex data patterns",
        "Robust statistical validation of findings"
      ],
      icon: <FileText className="h-8 w-8 text-sky-500" />,
      link: "/case-studies/research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Case Studies - DataQuest Solutions</title>
        <meta name="description" content="Explore our successful case studies in healthcare, e-commerce, and academic research. See how we've helped clients achieve their goals through data-driven solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Discover how we've helped organizations achieve their goals through data-driven solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {study.icon}
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{study.title}</CardTitle>
                      <p className="text-gray-600 mt-1">{study.client}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="h-5 w-5 text-sky-500 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="mt-6 bg-sky-500 hover:bg-sky-600 text-white"
                        onClick={() => window.open(study.link, '_blank')}
                      >
                        Read Full Case Study
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 