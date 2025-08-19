import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlogPost } from '@/lib/supabase';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 line-clamp-2">
          {post.title}
        </CardTitle>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author?.avatar_url} />
              <AvatarFallback className="text-xs">
                {post.author?.full_name 
                  ? getInitials(post.author.full_name)
                  : <User className="h-3 w-3" />
                }
              </AvatarFallback>
            </Avatar>
            <span>{post.author?.full_name || 'DataQuest Team'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.published_at || post.created_at).toLocaleDateString()}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {post.excerpt || post.content.substring(0, 150) + '...'}
        </p>
        
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/blog/${post.id}`}>
            Read More
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};