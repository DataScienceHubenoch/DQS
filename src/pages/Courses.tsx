import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Database, Code2, LineChart, FileText, Palette, MessageCircle, Clock, Check, Users, BookOpen, Target, ArrowRight, BarChart, Code, Layers, Brain, Microscope, Calculator, Calendar, Timer } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Courses = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedLevel, setSelectedLevel] = React.useState('all');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedCourse, setSelectedCourse] = React.useState<typeof courses[0] | null>(null);

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
      level: 'intermediate',
      description: 'Master advanced Excel functions, data analysis tools, and automation techniques for efficient data management.',
      icon: BarChart,
      duration: '6 weeks',
      prerequisites: ['Basic Excel knowledge', 'Understanding of data analysis concepts'],
      topics: [
        'Advanced formulas and functions',
        'Data validation and error handling',
        'Pivot tables and data analysis',
        'Macros and VBA programming',
        'Data visualization and dashboards',
        'Power Query and Power Pivot',
        'Advanced charting techniques',
        'Data modeling and analysis'
      ],
      skills: [
        'Advanced Excel functions',
        'Data analysis and visualization',
        'Automation and macros',
        'Business intelligence tools',
        'Data modeling'
      ],
      tools: ['Microsoft Excel', 'Power Query', 'Power Pivot', 'VBA'],
      certification: 'Advanced Excel Professional Certificate'
    },
    {
      title: 'Data Analysis With Python',
      level: 'intermediate',
      description: 'Learn data manipulation, analysis, and visualization using Python libraries like Pandas, NumPy, and Matplotlib.',
      icon: Code,
      duration: '8 weeks',
      prerequisites: ['Basic Python programming', 'Understanding of data structures'],
      topics: [
        'Python fundamentals for data analysis',
        'NumPy for numerical computing',
        'Pandas for data manipulation',
        'Data cleaning and preprocessing',
        'Statistical analysis',
        'Data visualization with Matplotlib and Seaborn',
        'Time series analysis',
        'Data storytelling and reporting'
      ],
      skills: [
        'Python programming',
        'Data manipulation',
        'Statistical analysis',
        'Data visualization',
        'Data cleaning'
      ],
      tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      certification: 'Python Data Analysis Professional Certificate'
    },
    {
      title: 'Data Analysis With R',
      level: 'intermediate',
      description: 'Comprehensive course on statistical computing and data analysis using R programming language.',
      icon: Database,
      duration: '8 weeks',
      prerequisites: ['Basic statistics knowledge', 'Understanding of data analysis concepts'],
      topics: [
        'R programming fundamentals',
        'Data structures and manipulation',
        'Statistical analysis',
        'Data visualization with ggplot2',
        'Regression analysis',
        'Time series analysis',
        'Machine learning basics',
        'R Markdown and reporting'
      ],
      skills: [
        'R programming',
        'Statistical analysis',
        'Data visualization',
        'Regression modeling',
        'Data reporting'
      ],
      tools: ['R', 'RStudio', 'ggplot2', 'dplyr', 'tidyr'],
      certification: 'R Data Analysis Professional Certificate'
    },
    {
      title: 'Data Collection Using Commcare',
      level: 'beginner',
      description: 'Learn to design and implement mobile data collection forms using CommCare platform.',
      icon: FileText,
      duration: '4 weeks',
      prerequisites: ['Basic computer skills', 'Understanding of data collection concepts'],
      topics: [
        'CommCare platform overview',
        'Form design and development',
        'Mobile data collection setup',
        'Data validation and quality control',
        'Case management',
        'Data export and analysis',
        'Field deployment strategies',
        'Troubleshooting and support'
      ],
      skills: [
        'Form design',
        'Mobile data collection',
        'Data validation',
        'Case management',
        'Field deployment'
      ],
      tools: ['CommCare', 'XLSForm', 'CommCare HQ'],
      certification: 'CommCare Data Collection Specialist'
    },
    {
      title: 'Data Collection using ODK',
      level: 'beginner',
      description: 'Master Open Data Kit (ODK) for creating and managing mobile data collection forms.',
      icon: FileText,
      duration: '4 weeks',
      prerequisites: ['Basic computer skills', 'Understanding of data collection concepts'],
      topics: [
        'ODK platform overview',
        'Form design using XLSForm',
        'Mobile data collection setup',
        'Data validation and quality control',
        'Server management',
        'Data export and analysis',
        'Field deployment strategies',
        'Troubleshooting and support'
      ],
      skills: [
        'Form design',
        'Mobile data collection',
        'Data validation',
        'Server management',
        'Field deployment'
      ],
      tools: ['ODK', 'XLSForm', 'ODK Central'],
      certification: 'ODK Data Collection Specialist'
    },
    {
      title: 'Data Collection with KoBo ToolBox',
      level: 'beginner',
      description: 'Learn to use KoBo Toolbox for field data collection and management.',
      icon: FileText,
      duration: '4 weeks',
      prerequisites: ['Basic computer skills', 'Understanding of data collection concepts'],
      topics: [
        'KoBo Toolbox platform overview',
        'Form design and development',
        'Mobile data collection setup',
        'Data validation and quality control',
        'Data management and analysis',
        'Field deployment strategies',
        'Security and privacy',
        'Troubleshooting and support'
      ],
      skills: [
        'Form design',
        'Mobile data collection',
        'Data validation',
        'Data management',
        'Field deployment'
      ],
      tools: ['KoBo Toolbox', 'XLSForm', 'KoBo Collect'],
      certification: 'KoBo Toolbox Data Collection Specialist'
    },
    {
      title: 'Data Visualization with Tableau and Power BI',
      level: 'intermediate',
      description: 'Create interactive dashboards and compelling visualizations using Tableau and Power BI.',
      icon: Layers,
      duration: '6 weeks',
      prerequisites: ['Basic data analysis knowledge', 'Understanding of visualization concepts'],
      topics: [
        'Data visualization principles',
        'Tableau fundamentals',
        'Power BI basics',
        'Data connection and preparation',
        'Advanced visualization techniques',
        'Dashboard design and layout',
        'Interactive features and filters',
        'Data storytelling and presentation'
      ],
      skills: [
        'Data visualization',
        'Dashboard design',
        'Interactive reporting',
        'Data storytelling',
        'Business intelligence'
      ],
      tools: ['Tableau', 'Power BI', 'Excel'],
      certification: 'Data Visualization Professional Certificate'
    },
    {
      title: 'Deep Learning with Python',
      level: 'advanced',
      description: 'Explore neural networks, deep learning architectures, and implementation using Python frameworks.',
      icon: Brain,
      duration: '10 weeks',
      prerequisites: ['Python programming', 'Machine learning basics', 'Linear algebra'],
      topics: [
        'Neural network fundamentals',
        'Deep learning architectures',
        'Convolutional Neural Networks',
        'Recurrent Neural Networks',
        'Transfer learning',
        'Model optimization',
        'Deep learning frameworks',
        'Real-world applications'
      ],
      skills: [
        'Deep learning',
        'Neural networks',
        'Python programming',
        'Model optimization',
        'Transfer learning'
      ],
      tools: ['TensorFlow', 'PyTorch', 'Keras', 'Python'],
      certification: 'Deep Learning Professional Certificate'
    },
    {
      title: 'Graphic Design with CANVA',
      level: 'beginner',
      description: 'Master Canva for creating professional graphics, presentations, and marketing materials.',
      icon: Palette,
      duration: '4 weeks',
      prerequisites: ['Basic computer skills', 'Creativity and design interest'],
      topics: [
        'Canva platform overview',
        'Design principles',
        'Template customization',
        'Brand identity design',
        'Social media graphics',
        'Presentation design',
        'Print materials',
        'Animation and video'
      ],
      skills: [
        'Graphic design',
        'Brand identity',
        'Social media graphics',
        'Presentation design',
        'Print design'
      ],
      tools: ['Canva Pro', 'Canva Design School'],
      certification: 'Canva Design Professional'
    },
    {
      title: 'Machine Learning with Python',
      level: 'advanced',
      description: 'Learn machine learning algorithms, model development, and implementation using Python.',
      icon: Brain,
      duration: '10 weeks',
      prerequisites: ['Python programming', 'Statistics', 'Linear algebra'],
      topics: [
        'Machine learning fundamentals',
        'Supervised learning algorithms',
        'Unsupervised learning',
        'Model evaluation and validation',
        'Feature engineering',
        'Hyperparameter tuning',
        'Model deployment',
        'Real-world applications'
      ],
      skills: [
        'Machine learning',
        'Python programming',
        'Model development',
        'Feature engineering',
        'Model deployment'
      ],
      tools: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Python'],
      certification: 'Machine Learning Professional Certificate'
    },
    {
      title: 'Qualitative Data Analysis using Dedoose',
      level: 'intermediate',
      description: 'Learn to analyze qualitative data using Dedoose software for mixed methods research.',
      icon: Microscope,
      duration: '6 weeks',
      prerequisites: ['Basic research methods', 'Understanding of qualitative analysis'],
      topics: [
        'Dedoose platform overview',
        'Data import and organization',
        'Coding and categorization',
        'Mixed methods analysis',
        'Data visualization',
        'Team collaboration',
        'Reporting and export',
        'Advanced analysis techniques'
      ],
      skills: [
        'Qualitative analysis',
        'Mixed methods research',
        'Data coding',
        'Team collaboration',
        'Research reporting'
      ],
      tools: ['Dedoose', 'Excel', 'Word'],
      certification: 'Qualitative Analysis Professional Certificate'
    },
    {
      title: 'Qualitative Data Analysis using NVIVO',
      level: 'intermediate',
      description: 'Master NVIVO for qualitative data analysis, coding, and interpretation.',
      icon: Microscope,
      duration: '6 weeks',
      prerequisites: ['Basic research methods', 'Understanding of qualitative analysis'],
      topics: [
        'NVIVO platform overview',
        'Data import and organization',
        'Coding and categorization',
        'Query and analysis',
        'Data visualization',
        'Team collaboration',
        'Reporting and export',
        'Advanced analysis techniques'
      ],
      skills: [
        'Qualitative analysis',
        'Data coding',
        'Team collaboration',
        'Research reporting',
        'Data visualization'
      ],
      tools: ['NVIVO', 'Excel', 'Word'],
      certification: 'NVIVO Analysis Professional Certificate'
    },
    {
      title: 'Statistical Analysis with SPSS',
      level: 'intermediate',
      description: 'Comprehensive course on statistical analysis and data interpretation using SPSS.',
      icon: Calculator,
      duration: '8 weeks',
      prerequisites: ['Basic statistics', 'Understanding of research methods'],
      topics: [
        'SPSS interface and basics',
        'Data import and preparation',
        'Descriptive statistics',
        'Inferential statistics',
        'Regression analysis',
        'Factor analysis',
        'Non-parametric tests',
        'Reporting and visualization'
      ],
      skills: [
        'Statistical analysis',
        'Data interpretation',
        'Research methods',
        'Data visualization',
        'Statistical reporting'
      ],
      tools: ['SPSS', 'Excel', 'Word'],
      certification: 'SPSS Analysis Professional Certificate'
    },
    {
      title: 'Statistical analysis with STATA',
      level: 'intermediate',
      description: 'Learn statistical analysis, data management, and visualization using STATA.',
      icon: Calculator,
      duration: '8 weeks',
      prerequisites: ['Basic statistics', 'Understanding of research methods'],
      topics: [
        'STATA interface and basics',
        'Data management',
        'Descriptive statistics',
        'Regression analysis',
        'Panel data analysis',
        'Time series analysis',
        'Programming and automation',
        'Reporting and visualization'
      ],
      skills: [
        'Statistical analysis',
        'Data management',
        'Research methods',
        'Data visualization',
        'Statistical programming'
      ],
      tools: ['STATA', 'Excel', 'Word'],
      certification: 'STATA Analysis Professional Certificate'
    },
    {
      title: 'Survival Analysis with R',
      level: 'advanced',
      description: 'Advanced course on survival analysis techniques and implementation using R.',
      icon: Timer,
      duration: '8 weeks',
      prerequisites: ['R programming', 'Statistics', 'Understanding of survival analysis'],
      topics: [
        'Survival analysis fundamentals',
        'Kaplan-Meier estimation',
        'Cox proportional hazards model',
        'Time-dependent covariates',
        'Competing risks analysis',
        'Frailty models',
        'Advanced visualization',
        'Real-world applications'
      ],
      skills: [
        'Survival analysis',
        'R programming',
        'Statistical modeling',
        'Data visualization',
        'Research methods'
      ],
      tools: ['R', 'survival package', 'ggplot2'],
      certification: 'Survival Analysis Professional Certificate'
    },
    {
      title: 'Time Series Analysis with R',
      level: 'advanced',
      description: 'Learn time series forecasting, analysis, and modeling using R programming.',
      icon: Calendar,
      duration: '8 weeks',
      prerequisites: ['R programming', 'Statistics', 'Understanding of time series'],
      topics: [
        'Time series fundamentals',
        'Trend and seasonality analysis',
        'ARIMA modeling',
        'Exponential smoothing',
        'Forecasting methods',
        'Multivariate time series',
        'Advanced visualization',
        'Real-world applications'
      ],
      skills: [
        'Time series analysis',
        'R programming',
        'Forecasting',
        'Statistical modeling',
        'Data visualization'
      ],
      tools: ['R', 'forecast package', 'ggplot2'],
      certification: 'Time Series Analysis Professional Certificate'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.icon === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const CourseModal = ({ course }: { course: typeof courses[0] }) => (
    <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <course.icon className="h-8 w-8 text-sky-500" />
            {course.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {course.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-sky-500" />
              Course Details
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="h-5 w-5 text-sky-500" />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Target className="h-5 w-5 text-sky-500" />
                <span>Level: {course.level}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-sky-500" />
                <span>Prerequisites: {course.prerequisites.join(', ')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-sky-500" />
              Skills You'll Gain
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {course.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700 bg-gray-50 p-2 rounded">
                  <Check className="h-4 w-4 text-sky-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-sky-500" />
            Course Topics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.topics.map((topic, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-2 rounded">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Layers className="h-5 w-5 text-sky-500" />
            Tools & Certification
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Tools You'll Use</h4>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, index) => (
                  <span key={index} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Certification</h4>
              <p className="text-gray-700">{course.certification}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() => setSelectedCourse(null)}
          >
            Close
          </Button>
          <Button
            className="bg-sky-500 hover:bg-sky-600 text-white"
            onClick={() => {
              const phoneNumber = '254707612395';
              const message = `Hello! I would like to enroll in the "${course.title}" course. Could you please provide more information about the course schedule and pricing?`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            Enroll Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Courses</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Comprehensive training programs designed to enhance your skills and advance your career
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
      <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 text-center bg-white/90 backdrop-blur-sm border-sky-200 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">
                    <course.icon className="w-12 h-12 text-sky-500 mx-auto" />
                  </div>
                  <CardTitle className="text-gray-900">{course.title}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {course.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      const phoneNumber = '254707612395';
                      const message = `Hello! I would like to enroll in the "${course.title}" course. Could you please provide more information about the course schedule and pricing?`;
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Enroll Now
                  </Button>
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
            Join our community of learners and take your skills to the next level with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500" asChild>
              <a href="https://wa.me/254707612395">Contact Us</a>
            </Button>
            <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-sky-600" asChild>
              <a href="#courses">View All Courses</a>
            </Button>
          </div>
        </div>
      </section>

      {selectedCourse && <CourseModal course={selectedCourse} />}
    </div>
  );
};

export default Courses;
