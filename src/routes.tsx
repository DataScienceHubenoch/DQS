import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Index from '@/pages/Index';
import Team from '@/pages/Team';
import Services from '@/pages/Services';
import Courses from '@/pages/Courses';
import Blog from '@/pages/Blog';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Resources from '@/pages/Resources';
import HealthcareCaseStudy from '@/pages/case-studies/Healthcare';
import RetailCaseStudy from '@/pages/case-studies/Retail';
import FinancialCaseStudy from '@/pages/case-studies/Financial';
import CaseStudiesIndex from '@/pages/case-studies/index';

const AppRoutes = () => {
  return (
    <TooltipProvider>
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
        <Route path="/case-studies/retail" element={<RetailCaseStudy />} />
        <Route path="/case-studies/financial" element={<FinancialCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  );
};

export default AppRoutes; 