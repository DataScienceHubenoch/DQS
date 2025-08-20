import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Loader2, CheckCircle2, CreditCard, Smartphone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRegistration } from '@/hooks/useRegistration';
import SEO from '@/components/SEO';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  type: z.enum(['course', 'service']),
  selection: z.string().min(1, 'Please select a course or service'),
  experience: z.string().optional(),
  goals: z.string().optional(),
  company: z.string().optional(),
  paymentMethod: z.enum(['bank_transfer', 'mobile_money', 'crypto']),
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),
  agreeToMarketing: z.boolean().optional(),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const Register = () => {
  const [activeTab, setActiveTab] = useState('course');
  const { submitRegistration, loading } = useRegistration();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      type: 'course',
      agreeToTerms: false,
      agreeToMarketing: false,
    },
  });

  const watchedType = watch('type');
  const watchedSelection = watch('selection');
  const watchedPaymentMethod = watch('paymentMethod');

  const courses = [
    { id: 'advanced-excel', name: 'Advanced Excel', price: 5000, duration: '6 weeks', level: 'Intermediate' },
    { id: 'python-data-analysis', name: 'Data Analysis With Python', price: 6000, duration: '8 weeks', level: 'Intermediate' },
    { id: 'r-data-analysis', name: 'Data Analysis With R', price: 6000, duration: '8 weeks', level: 'Intermediate' },
    { id: 'python-ml', name: 'Machine Learning with Python', price: 8000, duration: '10 weeks', level: 'Advanced' },
    { id: 'deep-learning', name: 'Deep Learning with Python', price: 8000, duration: '10 weeks', level: 'Advanced' },
    { id: 'data-viz', name: 'Data Visualization with Tableau and Power BI', price: 5000, duration: '6 weeks', level: 'Intermediate' },
    { id: 'spss-stats', name: 'Statistical Analysis with SPSS', price: 4500, duration: '5 weeks', level: 'Beginner' },
    { id: 'stata-analysis', name: 'Statistical analysis with STATA', price: 4500, duration: '5 weeks', level: 'Beginner' },
    { id: 'survival-analysis', name: 'Survival Analysis with R', price: 5500, duration: '6 weeks', level: 'Advanced' },
    { id: 'time-series', name: 'Time Series Analysis with R', price: 5500, duration: '6 weeks', level: 'Advanced' },
    { id: 'commcare', name: 'Data Collection Using Commcare', price: 4000, duration: '4 weeks', level: 'Beginner' },
    { id: 'odk', name: 'Data Collection using ODK', price: 4000, duration: '4 weeks', level: 'Beginner' },
    { id: 'kobo', name: 'Data Collection with KoBo ToolBox', price: 4000, duration: '4 weeks', level: 'Beginner' },
    { id: 'nvivo', name: 'Qualitative Data Analysis using NVIVO', price: 5000, duration: '5 weeks', level: 'Intermediate' },
    { id: 'dedoose', name: 'Qualitative Data Analysis using Dedoose', price: 5000, duration: '5 weeks', level: 'Intermediate' },
    { id: 'canva', name: 'Graphic Design with CANVA', price: 3500, duration: '4 weeks', level: 'Beginner' },
  ];

  const services = [
    { id: 'data-collection', name: 'Data Collection', description: 'Comprehensive data gathering and management solutions' },
    { id: 'data-analysis', name: 'Data Analysis', description: 'Transform raw data into actionable insights' },
    { id: 'ai-development', name: 'AI Development', description: 'Build intelligent systems and machine learning models' },
    { id: 'research-writing', name: 'Research Writing', description: 'Expert research documentation and reporting' },
    { id: 'training', name: 'Training & Consultation', description: 'Professional development and strategic guidance' },
    { id: 'web-design', name: 'Web & Graphic Design', description: 'Digital solutions and visual communication' },
    { id: 'project-management', name: 'Project Management', description: 'End-to-end project planning and execution' },
    { id: 'business-intelligence', name: 'Business Intelligence', description: 'Strategic insights and reporting solutions' },
  ];

  const experienceLevels = [
    'Beginner - No prior experience',
    'Intermediate - Some experience',
    'Advanced - Extensive experience',
    'Professional - Working in the field'
  ];

  const onSubmit = async (data: RegistrationData) => {
    try {
      await submitRegistration(data);
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. You will receive a confirmation email shortly.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    }
  };

  const getSelectedItem = () => {
    if (watchedType === 'course') {
      return courses.find(c => c.id === watchedSelection);
    } else {
      return services.find(s => s.id === watchedSelection);
    }
  };

  const selectedItem = getSelectedItem();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Register for Courses & Services"
        description="Register for DataQuest Solutions courses and services. Professional data science training and consulting services."
        url="https://dqs.vercel.app/register"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Registration</h1>
          <p className="text-gray-600">
            Register for our courses or request our professional services
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Registration Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle>What would you like to register for?</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={(value) => {
                setActiveTab(value);
                setValue('type', value as 'course' | 'service');
                setValue('selection', '');
              }}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="course">Training Courses</TabsTrigger>
                  <TabsTrigger value="service">Professional Services</TabsTrigger>
                </TabsList>

                <TabsContent value="course" className="space-y-4">
                  <div>
                    <Label htmlFor="course-selection">Select a Course</Label>
                    <Select
                      value={watchedType === 'course' ? watchedSelection : ''}
                      onValueChange={(value) => setValue('selection', value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{course.name}</span>
                              <Badge variant="outline" className="ml-2">
                                KSh {course.price.toLocaleString()}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.selection && (
                      <p className="text-red-500 text-sm mt-1">{errors.selection.message}</p>
                    )}
                  </div>

                  {selectedItem && watchedType === 'course' && (
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedItem.name}</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Duration:</span>
                          <p className="font-medium">{(selectedItem as any).duration}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Level:</span>
                          <p className="font-medium">{(selectedItem as any).level}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Price:</span>
                          <p className="font-medium text-sky-600">KSh {(selectedItem as any).price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="service" className="space-y-4">
                  <div>
                    <Label htmlFor="service-selection">Select a Service</Label>
                    <Select
                      value={watchedType === 'service' ? watchedSelection : ''}
                      onValueChange={(value) => setValue('selection', value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.selection && (
                      <p className="text-red-500 text-sm mt-1">{errors.selection.message}</p>
                    )}
                  </div>

                  {selectedItem && watchedType === 'service' && (
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedItem.name}</h3>
                      <p className="text-gray-600">{(selectedItem as any).description}</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="company">Company/Organization (Optional)</Label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>
              </div>

              {watchedType === 'course' && (
                <div>
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select
                    value={watch('experience') || ''}
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
                </div>
              )}

              <div>
                <Label htmlFor="goals">
                  {watchedType === 'course' ? 'Learning Goals' : 'Project Requirements'} 
                  {watchedType === 'course' ? ' *' : ''}
                </Label>
                <Textarea
                  id="goals"
                  {...register('goals')}
                  placeholder={
                    watchedType === 'course' 
                      ? "What do you hope to achieve with this course?"
                      : "Please describe your project requirements and timeline"
                  }
                  className="min-h-[100px] mt-1"
                />
                {errors.goals && (
                  <p className="text-red-500 text-sm mt-1">{errors.goals.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Preferred Payment Method *</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      watchedPaymentMethod === 'bank_transfer' 
                        ? 'border-sky-500 bg-sky-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setValue('paymentMethod', 'bank_transfer')}
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-gray-600">Direct bank payment</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      watchedPaymentMethod === 'mobile_money' 
                        ? 'border-sky-500 bg-sky-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setValue('paymentMethod', 'mobile_money')}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-medium">Mobile Money</p>
                        <p className="text-sm text-gray-600">M-Pesa, Airtel Money</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      watchedPaymentMethod === 'crypto' 
                        ? 'border-sky-500 bg-sky-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setValue('paymentMethod', 'crypto')}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-sky-500" />
                      <div>
                        <p className="font-medium">Cryptocurrency</p>
                        <p className="text-sm text-gray-600">ETH, BTC, USDT</p>
                      </div>
                    </div>
                  </div>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
                )}
              </div>

              {watchedPaymentMethod && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Payment Instructions</h4>
                  {watchedPaymentMethod === 'bank_transfer' && (
                    <div className="text-sm text-gray-700">
                      <p>Bank details will be provided after registration confirmation.</p>
                    </div>
                  )}
                  {watchedPaymentMethod === 'mobile_money' && (
                    <div className="text-sm text-gray-700">
                      <p>Mobile money payment instructions will be sent via SMS.</p>
                    </div>
                  )}
                  {watchedPaymentMethod === 'crypto' && (
                    <div className="text-sm text-gray-700">
                      <p>Cryptocurrency wallet address will be provided for payment.</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={watch('agreeToTerms')}
                  onCheckedChange={(checked) => setValue('agreeToTerms', checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the Terms and Conditions *
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    By registering, you agree to our{' '}
                    <a href="/terms" className="text-sky-600 hover:underline" target="_blank">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" className="text-sky-600 hover:underline" target="_blank">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
              )}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={watch('agreeToMarketing')}
                  onCheckedChange={(checked) => setValue('agreeToMarketing', checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="marketing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to receive marketing communications
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Receive updates about new courses, services, and special offers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary and Submit */}
          {selectedItem && (
            <Card>
              <CardHeader>
                <CardTitle>Registration Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium capitalize">{watchedType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Selection:</span>
                    <span className="font-medium">{selectedItem.name}</span>
                  </div>
                  {watchedType === 'course' && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{(selectedItem as any).duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium text-sky-600">KSh {(selectedItem as any).price.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium capitalize">{watchedPaymentMethod?.replace('_', ' ')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 text-lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing Registration...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Complete Registration
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;