import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Edit, Trash2, BookOpen, DollarSign, Clock } from 'lucide-react';
import { Course } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const courseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  duration: z.string().min(1, 'Duration is required'),
  price: z.number().min(0, 'Price must be positive'),
  topics: z.string(),
  skills: z.string(),
  tools: z.string(),
  certification: z.string().optional(),
  is_active: z.boolean(),
});

type CourseFormData = z.infer<typeof courseSchema>;

interface AdminCourseManagerProps {
  courses: Course[];
}

export const AdminCourseManager: React.FC<AdminCourseManagerProps> = ({ courses }) => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      is_active: true,
    },
  });

  const onSubmit = async (data: CourseFormData) => {
    try {
      // Convert comma-separated strings to arrays
      const courseData = {
        ...data,
        topics: data.topics.split(',').map(t => t.trim()).filter(Boolean),
        skills: data.skills.split(',').map(s => s.trim()).filter(Boolean),
        tools: data.tools.split(',').map(t => t.trim()).filter(Boolean),
      };

      // Here you would call your API to create/update the course
      console.log('Course data:', courseData);
      
      toast({
        title: "Success",
        description: editingCourse ? "Course updated successfully" : "Course created successfully",
      });
      
      setShowAddDialog(false);
      setEditingCourse(null);
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save course",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setValue('title', course.title);
    setValue('description', course.description);
    setValue('level', course.level);
    setValue('duration', course.duration);
    setValue('price', course.price);
    setValue('topics', course.topics?.join(', ') || '');
    setValue('skills', course.skills?.join(', ') || '');
    setValue('tools', course.tools?.join(', ') || '');
    setValue('certification', course.certification || '');
    setValue('is_active', course.is_active);
    setShowAddDialog(true);
  };

  const handleDelete = async (courseId: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      try {
        // Here you would call your API to delete the course
        console.log('Deleting course:', courseId);
        toast({
          title: "Success",
          description: "Course deleted successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete course",
          variant: "destructive",
        });
      }
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Course Management</CardTitle>
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button className="bg-sky-500 hover:bg-sky-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingCourse ? 'Edit Course' : 'Add New Course'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingCourse ? 'Update course information' : 'Create a new course offering'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Course Title *</Label>
                      <Input
                        id="title"
                        {...register('title')}
                        placeholder="Course title"
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="level">Level *</Label>
                      <Select
                        value={watch('level')}
                        onValueChange={(value) => setValue('level', value as any)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.level && (
                        <p className="text-red-500 text-sm mt-1">{errors.level.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      {...register('description')}
                      placeholder="Course description"
                      className="min-h-[100px]"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="duration">Duration *</Label>
                      <Input
                        id="duration"
                        {...register('duration')}
                        placeholder="e.g., 8 weeks"
                      />
                      {errors.duration && (
                        <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="price">Price (KSh) *</Label>
                      <Input
                        id="price"
                        type="number"
                        {...register('price', { valueAsNumber: true })}
                        placeholder="5000"
                      />
                      {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="topics">Topics (comma-separated)</Label>
                    <Textarea
                      id="topics"
                      {...register('topics')}
                      placeholder="Topic 1, Topic 2, Topic 3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Textarea
                      id="skills"
                      {...register('skills')}
                      placeholder="Skill 1, Skill 2, Skill 3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tools">Tools (comma-separated)</Label>
                    <Input
                      id="tools"
                      {...register('tools')}
                      placeholder="Tool 1, Tool 2, Tool 3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="certification">Certification</Label>
                    <Input
                      id="certification"
                      {...register('certification')}
                      placeholder="Certificate name"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_active"
                      checked={watch('is_active')}
                      onCheckedChange={(checked) => setValue('is_active', checked)}
                    />
                    <Label htmlFor="is_active">Course is active</Label>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowAddDialog(false);
                        setEditingCourse(null);
                        reset();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-sky-500 hover:bg-sky-600">
                      {editingCourse ? 'Update Course' : 'Create Course'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>KSh {course.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4 text-gray-400" />
                      <Badge variant={course.is_active ? 'default' : 'secondary'}>
                        {course.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(course)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(course.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};