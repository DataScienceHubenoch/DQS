import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { useCourses } from '@/hooks/useSupabase';
import { Clock, Users, Award, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CourseCardProps {
  course: Course;
  onEnroll?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  const { user } = useAuth();
  const { enrollInCourse } = useCourses();
  const [enrolling, setEnrolling] = useState(false);
  const { toast } = useToast();

  const handleEnroll = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to enroll in courses",
        variant: "destructive",
      });
      return;
    }

    setEnrolling(true);
    try {
      await enrollInCourse(course.id, user.id);
      toast({
        title: "Success",
        description: "Successfully enrolled in the course!",
      });
      if (onEnroll) onEnroll();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to enroll in course. Please try again.",
        variant: "destructive",
      });
    } finally {
      setEnrolling(false);
    }
  };

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

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
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

        {/* Price and Enroll Button */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                KSh {course.price.toLocaleString()}
              </span>
            </div>
          </div>
          
          <Button
            className="w-full bg-sky-500 hover:bg-sky-600"
            onClick={handleEnroll}
            disabled={enrolling}
          >
            {enrolling ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enrolling...
              </>
            ) : (
              'Enroll Now'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};