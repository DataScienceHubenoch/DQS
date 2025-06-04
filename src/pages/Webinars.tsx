import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of machine learning and how to implement basic algorithms using Python.",
      date: "March 25, 2024",
      time: "2:00 PM EAT",
      duration: "90 minutes",
      speaker: "Enock Bereka",
      role: "Lead Data Scientist",
      icon: <Video className="h-8 w-8 text-sky-500" />,
      registrationLink: "/webinars/intro-ml/register"
    },
    {
      title: "Data Visualization Best Practices",
      description: "Master the art of creating effective and engaging data visualizations using modern tools.",
      date: "April 2, 2024",
      time: "3:00 PM EAT",
      duration: "60 minutes",
      speaker: "Timothy Achalla",
      role: "Senior Data Engineer",
      icon: <Video className="h-8 w-8 text-sky-500" />,
      registrationLink: "/webinars/data-viz/register"
    },
    {
      title: "Research Data Analysis",
      description: "Learn how to analyze research data effectively using statistical methods and visualization tools.",
      date: "April 9, 2024",
      time: "2:00 PM EAT",
      duration: "90 minutes",
      speaker: "Nobert Wafula",
      role: "Data Analyst",
      icon: <Video className="h-8 w-8 text-sky-500" />,
      registrationLink: "/webinars/research-analysis/register"
    }
  ];

  const pastWebinars = [
    {
      title: "Python for Data Analysis",
      description: "A comprehensive introduction to using Python for data analysis and visualization.",
      date: "March 11, 2024",
      recordingLink: "/webinars/python-data/recording",
      icon: <Video className="h-8 w-8 text-sky-500" />
    },
    {
      title: "Statistical Analysis with R",
      description: "Learn how to perform statistical analysis using R programming language.",
      date: "March 4, 2024",
      recordingLink: "/webinars/r-stats/recording",
      icon: <Video className="h-8 w-8 text-sky-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>Webinars - DataQuest Solutions</title>
        <meta name="description" content="Join our expert-led webinars on data science, machine learning, and research methodology. Learn from industry professionals and enhance your skills." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Expert-Led Webinars
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Learn from industry professionals and enhance your data science skills
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {webinar.icon}
                    <CardTitle className="text-xl text-gray-900">{webinar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-5 w-5 text-sky-500" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-5 w-5 text-sky-500" />
                      {webinar.time} ({webinar.duration})
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-5 w-5 text-sky-500" />
                      {webinar.speaker} - {webinar.role}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => window.open(webinar.registrationLink, '_blank')}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {webinar.icon}
                    <CardTitle className="text-xl text-gray-900">{webinar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <Calendar className="h-5 w-5 text-sky-500" />
                    {webinar.date}
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
                    onClick={() => window.open(webinar.recordingLink, '_blank')}
                  >
                    <Video className="h-5 w-5 mr-2" />
                    Watch Recording
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars; 