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

const AppRoutes = () => (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default AppRoutes; 