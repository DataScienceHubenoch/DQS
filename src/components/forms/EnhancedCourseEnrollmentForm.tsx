import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCourses } from '@/hooks/useSupabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/lib/supabase';
import { Loader2, CheckCircle2, Clock, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EnhancedCourseEnrollmentFormProps {
  course: Course;
  onSuccess?: () => void;
}

const EnhancedCourseEnrollmentForm: React.FC<EnhancedCourseEnrollmentFormProps> = ({
  course,
  onSuccess
}) => {
  const { user } = useAuth();
  const { enrollInCourse } = useCourses();
  const [enrolling, setEnrolling] = React.useState(false);
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
      if (onSuccess) onSuccess();
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
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl text-gray-900">
            {course.title}
          </CardTitle>
          <Badge className={getLevelColor(course.level)}>
            {course.level}
          </Badge>
        </div>
        <p className="text-gray-600">{course.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Course Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-sky-500" />
            <div>
              <p className="font-medium text-gray-900">Duration</p>
              <p className="text-sm text-gray-600">{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-sky-500" />
            <div>
              <p className="font-medium text-gray-900">Certificate</p>
              <p className="text-sm text-gray-600">Included</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Skills You'll Gain</h4>
          <div className="flex flex-wrap gap-2">
            {course.skills?.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Tools You'll Use</h4>
          <div className="flex flex-wrap gap-2">
            {course.tools?.map((tool, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Course Topics</h4>
          <div className="space-y-2">
            {course.topics?.slice(0, 5).map((topic, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{topic}</span>
              </div>
            ))}
            {(course.topics?.length || 0) > 5 && (
              <p className="text-sm text-gray-500 ml-6">
                +{(course.topics?.length || 0) - 5} more topics
              </p>
            )}
          </div>
        </div>

        {/* Price and Enrollment */}
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">Course Fee</p>
              <p className="text-2xl font-bold text-gray-900">
                KSh {course.price.toLocaleString()}
              </p>
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
              'Enroll in Course'
            )}
          </Button>
          
          {!user && (
            <p className="text-sm text-gray-500 text-center mt-2">
              Please sign in to enroll in courses
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedCourseEnrollmentForm;