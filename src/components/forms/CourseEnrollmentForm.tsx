import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { courseEnrollmentSchema } from '@/lib/validation';
import { useCourseEnrollment } from '@/hooks/useApi';
import type { CourseEnrollmentData } from '@/lib/api';

interface CourseEnrollmentFormProps {
  onSuccess?: () => void;
  className?: string;
  defaultCourse?: string;
}

const CourseEnrollmentForm: React.FC<CourseEnrollmentFormProps> = ({ 
  onSuccess, 
  className,
  defaultCourse 
}) => {
  const { enrollInCourse, loading } = useCourseEnrollment();
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CourseEnrollmentData>({
    resolver: zodResolver(courseEnrollmentSchema),
    defaultValues: {
      course: defaultCourse || '',
    },
  });

  const selectedCourse = watch('course');
  const selectedExperience = watch('experience');

  const courses = [
    'Advanced Excel',
    'Data Analysis With Python',
    'Data Analysis With R',
    'Data Collection Using Commcare',
    'Data Collection using ODK',
    'Data Collection with KoBo ToolBox',
    'Data Visualization with Tableau and Power BI',
    'Deep Learning with Python',
    'Graphic Design with CANVA',
    'Machine Learning with Python',
    'Qualitative Data Analysis using Dedoose',
    'Qualitative Data Analysis using NVIVO',
    'Statistical Analysis with SPSS',
    'Statistical analysis with STATA',
    'Survival Analysis with R',
    'Time Series Analysis with R'
  ];

  const experienceLevels = [
    'Beginner - No prior experience',
    'Intermediate - Some experience',
    'Advanced - Extensive experience',
    'Professional - Working in the field'
  ];

  const onSubmit = async (data: CourseEnrollmentData) => {
    try {
      await enrollInCourse(data);
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      // Error handling is done in the hook
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Your full name"
            className="mt-1"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your.email@example.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+254 XXX XXX XXX"
            className="mt-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="experience">Experience Level *</Label>
          <Select
            value={selectedExperience}
            onValueChange={(value) => setValue('experience', value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="course">Course *</Label>
        <Select
          value={selectedCourse}
          onValueChange={(value) => setValue('course', value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.course && (
          <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="goals">Learning Goals *</Label>
        <Textarea
          id="goals"
          {...register('goals')}
          placeholder="What do you hope to achieve with this course? What are your career goals?"
          className="min-h-[100px] mt-1"
        />
        {errors.goals && (
          <p className="text-red-500 text-sm mt-1">{errors.goals.message}</p>
        )}
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-sky-500 hover:bg-sky-600 text-white"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enrolling...
          </>
        ) : (
          'Enroll Now'
        )}
      </Button>
    </form>
  );
};

export default CourseEnrollmentForm;