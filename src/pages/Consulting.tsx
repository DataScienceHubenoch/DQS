import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, ClipboardList, Users, Target, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consulting = () => {
  const handleRequestService = (serviceTitle: string) => {
    const phoneNumber = '254707612395';
    const message = `Hello! I would like to request information about your "${serviceTitle}" consulting service. Could you please provide more details about the service and pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const consultingServices = [
    {
      title: 'Data Management Systems',
      description: 'Expert consultation on designing and implementing effective data management systems for health and research.',
      services: [
        'Survey & Questionnaire Design: Creating user-friendly and effective survey forms and questionnaires tailored to your data collection needs.',
        'Electronic Health Forms: Designing electronic health record (EHR) forms for streamlined data collection and management.',
        'Kobo Toolbox: Setup and customization of Kobo Toolbox for mobile data collection in field settings.',
        'CommCare & REDCap Setup: Assistance with setting up CommCare and REDCap platforms for data collection, management, and analysis, along with training for teams.'
      ]
    },
    {
      title: 'Medical Data Analytics',
      description: 'Expert consultation in analyzing medical and epidemiological data to inform health decisions.',
      services: [
        'Statistical Analysis: Performing advanced statistical analyses on epidemiological datasets to uncover key insights.',
        'Software Expertise: Providing support in using R, Stata, SPSS, and SAS for data analysis and modeling.',
        'Data Interpretation: Assisting with the interpretation of rates, risks, ratios, and trends to guide health policy and interventions.'
      ]
    },
    {
      title: 'Infectious Disease Modelling',
      description: 'Expert consultation on applying infectious disease modelling to understand and control outbreaks.',
      services: [
        'Compartmental Models (SIR, SEIR): Guidance on using basic and advanced models to simulate disease transmission dynamics.',
        'R₀ Estimation: Estimation of the basic reproduction number (R₀) to understand how infectious a disease is and its potential to spread.',
        'Disease Spread Projections: Forecasting future disease trends under different scenarios to support public health planning and response.',
        'Intervention Impact: Evaluating the effectiveness of interventions (e.g., vaccination, social distancing) on controlling disease spread.',
        'Model Calibration & Sensitivity Analysis: Fine-tuning models using real-world data and assessing model sensitivity to different parameters.',
        'Scenario Planning & Forecasting: Simulating various intervention strategies and public health policies to inform decision-making.'
      ]
    },
    {
      title: 'Scientific Writing & Reporting',
      description: 'Expert consultation in scientific writing and reporting for health research.',
      services: [
        'Academic Papers & Grant Proposals: Assistance with writing, structuring, and editing academic papers, policy briefs, and grant proposals.',
        'Data Visualization: Creating clear, impactful visualizations (e.g., graphs, charts, tables) to effectively communicate epidemiological findings.'
      ]
    },
    {
      title: 'Machine Learning & AI for Health',
      description: 'Expert consultation on leveraging machine learning (ML) and artificial intelligence (AI) to enhance healthcare delivery, research, and decision-making.',
      services: [
        'AI in Diagnosis & Prognosis: Guidance on using AI models for disease detection, risk prediction, and outcome forecasting in clinical settings.',
        'Model Selection & Development: Support in choosing the right ML techniques (e.g., classification, regression, deep learning) and building custom models for healthcare data.',
        'Data Preparation & Feature Engineering: Assistance with cleaning, transforming, and structuring health datasets to maximize model performance.',
        'Clinical Decision Support Systems (CDSS): Design and development of AI tools to support clinicians with evidence-based recommendations.',
        'Integration into Health Systems: Strategies for implementing AI tools into electronic health records (EHRs) and clinical workflows.'
      ]
    },
    {
      title: 'Spatial Epidemiology and GIS Mapping',
      description: 'Expert consultation in spatial epidemiology, utilizing GIS mapping to analyze disease patterns and their geographical distribution.',
      services: [
        'Geospatial Data Analysis: Analyzing spatial patterns of disease using GIS tools to identify hotspots and trends.',
        'Mapping Disease Distribution: Creating interactive maps to visualize the spread of infectious diseases, risk factors, and health outcomes.',
        'Environmental & Social Determinants: Assessing the impact of environmental and social factors on disease distribution through spatial data integration.',
        'Risk Assessment: Using spatial models to identify areas at high risk for disease outbreaks or spread.',
        'Health Surveillance: Developing and implementing geospatial surveillance systems for ongoing monitoring of health conditions.',
        'Modeling & Prediction: Applying spatial epidemiological models to predict future disease spread based on geographic and environmental factors.'
      ]
    }
  ];

  const services = [
    {
      title: 'Strategic Planning',
      description: 'Develop comprehensive data strategies aligned with your business objectives and market opportunities.',
      icon: Target
    },
    {
      title: 'Implementation Support',
      description: 'Get expert guidance and hands-on support for implementing data science solutions in your organization.',
      icon: ClipboardList
    },
    {
      title: 'Team Training',
      description: 'Empower your team with the skills and knowledge needed to leverage data effectively.',
      icon: Users
    },
    {
      title: 'Performance Analysis',
      description: 'Evaluate and optimize your data initiatives to ensure maximum impact and ROI.',
      icon: BarChart
    }
  ];

  const process = [
    {
      title: 'Assessment',
      description: 'We begin by understanding your current data landscape and identifying key challenges and opportunities.',
      icon: ClipboardList
    },
    {
      title: 'Strategy',
      description: 'We develop a tailored data strategy aligned with your business objectives.',
      icon: Target
    },
    {
      title: 'Implementation',
      description: 'We provide hands-on support to implement solutions and build internal capabilities.',
      icon: Users
    },
    {
      title: 'Optimization',
      description: 'We continuously monitor and optimize your data initiatives for maximum impact.',
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Data Science Consulting
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
                Expert guidance to help you navigate the complex world of data science and analytics
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                  <CardHeader>
                    <div className="text-4xl mb-4">
                      <MessageCircle className="w-12 h-12 text-sky-500 mx-auto" />
                    </div>
                    <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <Button 
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                      onClick={() => handleRequestService(service.title)}
                    >
                      Request Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Consulting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200">
                  <CardHeader>
                    <div className="text-4xl mb-4">
                      <step.icon className="w-12 h-12 text-sky-500 mx-auto" />
                    </div>
                    <CardTitle className="text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Data Strategy?</h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Let's work together to unlock the full potential of your data and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Consulting; 