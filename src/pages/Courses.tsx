import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Award, Search, Filter, BookOpen, DollarSign, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useCourses } from '@/hooks/useSupabase';
import LoadingSpinner from '@/components/LoadingSpinner';

const Courses = () => {
  const { courses, loading } = useCourses();
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'low' && course.price < 5000) ||
                        (priceFilter === 'medium' && course.price >= 5000 && course.price < 7000) ||
                        (priceFilter === 'high' && course.price >= 7000);

    return matchesSearch && matchesLevel && matchesPrice;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading courses..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Professional Training Courses"
        description="Explore our comprehensive data science training courses. From beginner to advanced levels, master the skills you need for success."
        url="https://dqs.vercel.app/courses"
        keywords="data science courses, python training, machine learning course, data analysis training, online courses Kenya"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Professional Training Courses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Master data science skills with our comprehensive, hands-on training programs
            </p>
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
              <Link to="/register">
                <BookOpen className="mr-2 h-5 w-5" />
                Register for Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under KSh 5,000</SelectItem>
                <SelectItem value="medium">KSh 5,000 - 7,000</SelectItem>
                <SelectItem value="high">Above KSh 7,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-gray-900 line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Certificate
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Skills You'll Gain</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills?.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {(course.skills?.length || 0) > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{(course.skills?.length || 0) - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Tools You'll Use</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.tools?.slice(0, 3).map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {(course.tools?.length || 0) > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{(course.tools?.length || 0) - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Topics Preview */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Course Topics</h4>
                  <div className="space-y-1">
                    {course.topics?.slice(0, 3).map((topic, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{topic}</span>
                      </div>
                    ))}
                    {(course.topics?.length || 0) > 3 && (
                      <p className="text-xs text-gray-500 ml-5">
                        +{(course.topics?.length || 0) - 3} more topics
                      </p>
                    )}
                  </div>
                </div>

                {/* Price and Enroll Button */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        KSh {course.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link to="/register">
                      Enroll Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all available courses
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setLevelFilter('all');
                setPriceFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-16 rounded-lg mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our expert-led courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;