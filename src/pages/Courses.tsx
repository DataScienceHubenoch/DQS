import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Database, Code2, LineChart, FileText, Palette, MessageCircle, Clock, Check, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  const handleEnroll = (courseTitle: string) => {
    const phoneNumber = '254707612395';
    const message = `Hello! I would like to enroll in your "${courseTitle}" course. Could you please provide more details about the course schedule and enrollment process?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKI1ubJLrci6H3yehfEInM', '_blank');
  };

  const courses = [
    {
      title: 'Advanced Excel',
      description: 'Master advanced Excel functions, data analysis tools, and automation techniques for efficient data management.',
      category: 'data-analysis',
      level: 'intermediate',
      icon: FileText
    },
    {
      title: 'Data Analysis With Python',
      description: 'Learn data manipulation, analysis, and visualization using Python libraries like Pandas, NumPy, and Matplotlib.',
      category: 'data-analysis',
      level: 'intermediate',
      icon: Code2
    },
    {
      title: 'Data Analysis With R',
      description: 'Comprehensive course on statistical computing and data analysis using R programming language.',
      category: 'data-analysis',
      level: 'intermediate',
      icon: Code2
    },
    {
      title: 'Data Collection Using Commcare',
      description: 'Learn to design and implement mobile data collection forms using CommCare platform.',
      category: 'data-collection',
      level: 'beginner',
      icon: Database
    },
    {
      title: 'Data Collection using ODK',
      description: 'Master Open Data Kit (ODK) for creating and managing mobile data collection forms.',
      category: 'data-collection',
      level: 'beginner',
      icon: Database
    },
    {
      title: 'Data Collection with KoBo ToolBox',
      description: 'Learn to use KoBo Toolbox for field data collection and management.',
      category: 'data-collection',
      level: 'beginner',
      icon: Database
    },
    {
      title: 'Data Visualization with Tableau and Power BI',
      description: 'Create interactive dashboards and compelling visualizations using Tableau and Power BI.',
      category: 'data-visualization',
      level: 'intermediate',
      icon: LineChart
    },
    {
      title: 'Deep Learning with Python',
      description: 'Explore neural networks, deep learning architectures, and implementation using Python frameworks.',
      category: 'deep-learning',
      level: 'advanced',
      icon: Code2
    },
    {
      title: 'Graphic Design with CANVA',
      description: 'Master Canva for creating professional graphics, presentations, and marketing materials.',
      category: 'design',
      level: 'beginner',
      icon: Palette
    },
    {
      title: 'Machine Learning with Python',
      description: 'Learn machine learning algorithms, model development, and implementation using Python.',
      category: 'machine-learning',
      level: 'advanced',
      icon: Code2
    },
    {
      title: 'Qualitative Data Analysis using Dedoose',
      description: 'Learn to analyze qualitative data using Dedoose software for mixed methods research.',
      category: 'qualitative-analysis',
      level: 'intermediate',
      icon: FileText
    },
    {
      title: 'Qualitative Data Analysis using NVIVO',
      description: 'Master NVIVO for qualitative data analysis, coding, and interpretation.',
      category: 'qualitative-analysis',
      level: 'intermediate',
      icon: FileText
    },
    {
      title: 'Statistical Analysis with SPSS',
      description: 'Comprehensive course on statistical analysis and data interpretation using SPSS.',
      category: 'statistical-analysis',
      level: 'intermediate',
      icon: LineChart
    },
    {
      title: 'Statistical analysis with STATA',
      description: 'Learn statistical analysis, data management, and visualization using STATA.',
      category: 'statistical-analysis',
      level: 'intermediate',
      icon: LineChart
    },
    {
      title: 'Survival Analysis with R',
      description: 'Advanced course on survival analysis techniques and implementation using R.',
      category: 'statistical-analysis',
      level: 'advanced',
      icon: Code2
    },
    {
      title: 'Time Series Analysis with R',
      description: 'Learn time series forecasting, analysis, and modeling using R programming.',
      category: 'statistical-analysis',
      level: 'advanced',
      icon: Code2
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Courses</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive curriculum designed to help you master data science and analytics at Data Quest Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 bg-white/90 backdrop-blur-sm border-sky-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[180px] bg-white/90 backdrop-blur-sm border-sky-200">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] bg-white/90 backdrop-blur-sm border-sky-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="data-analysis">Data Analysis</SelectItem>
                  <SelectItem value="data-collection">Data Collection</SelectItem>
                  <SelectItem value="data-visualization">Data Visualization</SelectItem>
                  <SelectItem value="deep-learning">Deep Learning</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="machine-learning">Machine Learning</SelectItem>
                  <SelectItem value="qualitative-analysis">Qualitative Analysis</SelectItem>
                  <SelectItem value="statistical-analysis">Statistical Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-sky-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <course.icon className="w-8 h-8 text-sky-500" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                      <p className="text-sm text-gray-500 capitalize">{course.level}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500" onClick={() => setSelectedCourse(course)}>
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-gray-900">{course.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center gap-2">
                              <course.icon className="w-6 h-6 text-sky-500" />
                              <span className="capitalize text-gray-700">{course.category.replace('-', ' ')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">Level:</span>
                              <span className="capitalize text-gray-700">{course.level}</span>
                            </div>
                            <p className="text-gray-700">{course.description}</p>
                            <div className="pt-4">
                              <Button 
                                className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                                onClick={() => handleEnroll(course.title)}
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Enroll via WhatsApp
                              </Button>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Join our community of learners and take your data science skills to the next level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
              onClick={() => handleEnroll('General Inquiry')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              onClick={handleJoinCommunity}
              className="flex items-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600"
            >
              <Users className="h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
