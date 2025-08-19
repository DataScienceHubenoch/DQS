import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/BlogCard';
import { useBlogPosts } from '@/hooks/useSupabase';
import LoadingSpinner from '@/components/LoadingSpinner';
import { MessageCircle, Share2, Heart, MessageSquare, ExternalLink } from 'lucide-react';

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();

  const handleContactSupport = () => {
    const phoneNumber = '254707612395';
    const message = 'Hello, I have a question about Data Quest Solutions.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading blog posts..." />
      </div>
    );
  }

  const socialPosts = [
    {
      platform: 'LinkedIn',
      author: 'Data Quest Solutions',
      date: '2024-03-15',
      content: 'Your premier gateway to the field of programming, data science and health research MathematicsStatistics. 100% online sessions with flexible timetables which won\'t affect your regular schedule! Get certified and start your career with confidence! #DataScience #Programming #HealthResearch',
      likes: 45,
      comments: 12,
      shares: 8,
      link: 'https://linkedin.com/company/dataquestsolutions'
    },
    {
      platform: 'Facebook',
      author: 'Data Quest Solutions',
      date: '2024-03-14',
      content: 'Welcome to DataQuest Solutions – your hub for mastering data science and analytics! We empower learners and professionals with skills in Python, R, Power BI, and more. Let\'s build Africa\'s data future—together! #DataScience #Analytics #Training',
      likes: 89,
      comments: 23,
      shares: 15,
      link: 'https://web.facebook.com/share/g/1ELLjtsTMA/'
    },
    {
      platform: 'Twitter',
      author: '@Dataquest123',
      date: '2024-03-13',
      content: 'Welcome to dataquest solutions your premier gateway to the field of programming, data science and health research. Registered as a training and service delivery firm under The Business Registry Service, Kenya. #DataScience #Programming #Training',
      likes: 156,
      comments: 34,
      shares: 28,
      link: 'https://x.com/Dataquest123'
    },
    {
      platform: 'Instagram',
      author: '@dataquestsolutions',
      date: '2024-03-12',
      content: 'In the process of forming coalitions with Masinde Muliro University of Science and Technology for short courses training. Skilled tutors with Bachelors and Masters of Science. Gigs assured after course completion! #DataScience #CareerGrowth #TechTraining',
      likes: 234,
      comments: 45,
      shares: 32,
      link: 'https://www.instagram.com/dataquestsolutions/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay connected with our latest news, course updates, and insights from our social media platforms.
          </p>
        </div>

        {/* Social Media Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Social Media Posts */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Social Media Updates</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-sky-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      post.platform === 'LinkedIn' ? 'bg-blue-100' :
                      post.platform === 'Twitter' ? 'bg-sky-100' :
                      post.platform === 'Facebook' ? 'bg-blue-100' :
                      'bg-pink-100'
                    }`}>
                      {post.platform === 'LinkedIn' ? 'in' :
                       post.platform === 'Twitter' ? '𝕏' :
                       post.platform === 'Facebook' ? 'f' :
                       '📸'}
                    </div>
                    <div>
                      <CardTitle className="text-gray-900">{post.author}</CardTitle>
                      <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center gap-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Stay Updated?</h2>
          <p className="text-gray-700 mb-6">
            Follow us on social media for the latest updates, course announcements, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
              onClick={handleContactSupport}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button 
              variant="outline"
              className="border-sky-500 text-sky-500 hover:bg-sky-50"
              asChild
            >
              <a href="mailto:dataquestsolutions2@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
