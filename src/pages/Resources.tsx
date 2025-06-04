import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BookOpen, Download, Video, FileText, CheckCircle2, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Resources = () => {
  const resources = [
    {
      title: "Data Analysis Guide",
      description: "A comprehensive guide to getting started with data analysis. Learn the fundamentals of data analysis, including data cleaning, visualization, and statistical analysis.",
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      topics: [
        "Data Cleaning Techniques",
        "Statistical Analysis",
        "Data Visualization",
        "Report Writing"
      ]
    },
    {
      title: "Python for Data Science",
      description: "Free Python tutorials for data science beginners. Master Python programming for data analysis, including pandas, numpy, and matplotlib libraries.",
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      topics: [
        "Python Basics",
        "Pandas for Data Analysis",
        "Data Visualization with Matplotlib",
        "Statistical Analysis with NumPy"
      ]
    },
    {
      title: "Research Methodology",
      description: "Essential research methods and best practices. Learn how to conduct effective research, from problem formulation to data collection and analysis.",
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      topics: [
        "Research Design",
        "Data Collection Methods",
        "Qualitative Analysis",
        "Quantitative Analysis"
      ]
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning concepts and algorithms. Understand the basics of supervised and unsupervised learning.",
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Feature Engineering"
      ]
    },
    {
      title: "Data Visualization Best Practices",
      description: "Learn how to create effective and engaging data visualizations that communicate insights clearly and effectively.",
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      topics: [
        "Visualization Types",
        "Color Theory",
        "Dashboard Design",
        "Interactive Visualizations"
      ]
    },
    {
      title: "Big Data Analytics",
      description: "Explore techniques and tools for analyzing large-scale datasets efficiently and effectively.",
      icon: <BookOpen className="h-8 w-8 text-sky-500" />,
      topics: [
        "Hadoop Ecosystem",
        "Spark Processing",
        "Data Warehousing",
        "Real-time Analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Free Resources - DataQuest Solutions</title>
        <meta name="description" content="Access our comprehensive collection of free data science resources, including guides, tutorials, and best practices." />
        <meta name="keywords" content="data science resources, data analysis guide, python tutorial, research methodology, machine learning guide" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Free Data Science Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Access our comprehensive collection of guides, tutorials, and best practices to enhance your data science skills
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {resource.icon}
                    <CardTitle className="text-xl text-gray-900">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {resource.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight className="h-4 w-4 text-sky-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => {
                      const phoneNumber = '254707612395';
                      const message = `Hello! I would like to request the ${resource.title} guide.`;
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Request Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Resources?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community to access exclusive resources and stay updated with the latest in data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => {
                const phoneNumber = '254707612395';
                const message = 'Hello! I would like to join the DataQuest Solutions community and access more resources.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Join Community
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources; 