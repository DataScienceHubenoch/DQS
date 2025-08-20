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
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Mail, Send, Users, FileText, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const emailSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  recipients: z.enum(['all', 'pending', 'approved', 'course_students', 'service_clients']),
  includeAttachment: z.boolean().optional(),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface AdminEmailToolsProps {
  onSendBulkEmail: (data: EmailFormData) => Promise<void>;
}

export const AdminEmailTools: React.FC<AdminEmailToolsProps> = ({ onSendBulkEmail }) => {
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const watchedRecipients = watch('recipients');

  const onSubmit = async (data: EmailFormData) => {
    setLoading(true);
    try {
      await onSendBulkEmail(data);
      toast({
        title: "Email Sent",
        description: "Bulk email has been sent successfully",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getRecipientCount = (type: string) => {
    // This would be calculated based on actual data
    const counts = {
      all: 328,
      pending: 45,
      approved: 267,
      course_students: 234,
      service_clients: 94,
    };
    return counts[type as keyof typeof counts] || 0;
  };

  const emailTemplates = [
    {
      name: 'Welcome Email',
      subject: 'Welcome to DataQuest Solutions!',
      message: `Dear [Name],

Welcome to DataQuest Solutions! We're excited to have you join our community of data science enthusiasts.

Your registration has been received and is currently being processed. You will receive a confirmation email within 24 hours with further instructions.

If you have any questions, please don't hesitate to contact us.

Best regards,
The DataQuest Solutions Team`
    },
    {
      name: 'Course Approval',
      subject: 'Course Registration Approved - Welcome to [Course Name]',
      message: `Dear [Name],

Great news! Your registration for [Course Name] has been approved.

Course Details:
- Start Date: [Start Date]
- Duration: [Duration]
- Meeting Schedule: [Schedule]

Next Steps:
1. Complete your payment using your preferred method
2. Join our course WhatsApp group
3. Download the course materials

We look forward to seeing you in class!

Best regards,
The DataQuest Solutions Team`
    },
    {
      name: 'Payment Reminder',
      subject: 'Payment Reminder - [Course/Service Name]',
      message: `Dear [Name],

This is a friendly reminder that your payment for [Course/Service Name] is still pending.

Amount Due: KSh [Amount]
Payment Methods: Mobile Money, Bank Transfer, Cryptocurrency

Please complete your payment to secure your spot. If you have any questions about payment options, please contact us.

Best regards,
The DataQuest Solutions Team`
    }
  ];

  const loadTemplate = (template: typeof emailTemplates[0]) => {
    setValue('subject', template.subject);
    setValue('message', template.message);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bulk Email Communication</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Templates */}
            <div>
              <Label>Quick Templates</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                {emailTemplates.map((template, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="outline"
                    onClick={() => loadTemplate(template)}
                    className="h-auto p-4 text-left"
                  >
                    <div>
                      <p className="font-medium">{template.name}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {template.subject.substring(0, 40)}...
                      </p>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Recipients */}
            <div>
              <Label htmlFor="recipients">Recipients *</Label>
              <Select
                value={watchedRecipients}
                onValueChange={(value) => setValue('recipients', value as any)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select recipient group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    All Users ({getRecipientCount('all')})
                  </SelectItem>
                  <SelectItem value="pending">
                    Pending Registrations ({getRecipientCount('pending')})
                  </SelectItem>
                  <SelectItem value="approved">
                    Approved Students ({getRecipientCount('approved')})
                  </SelectItem>
                  <SelectItem value="course_students">
                    Course Students ({getRecipientCount('course_students')})
                  </SelectItem>
                  <SelectItem value="service_clients">
                    Service Clients ({getRecipientCount('service_clients')})
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.recipients && (
                <p className="text-red-500 text-sm mt-1">{errors.recipients.message}</p>
              )}
              {watchedRecipients && (
                <p className="text-sm text-gray-600 mt-1">
                  This email will be sent to {getRecipientCount(watchedRecipients)} recipients
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                {...register('subject')}
                placeholder="Email subject"
                className="mt-1"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Email message content"
                className="min-h-[200px] mt-1"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                You can use placeholders like [Name], [Course Name], [Amount] which will be automatically replaced
              </p>
            </div>

            {/* Options */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="attachment"
                checked={watch('includeAttachment')}
                onCheckedChange={(checked) => setValue('includeAttachment', checked as boolean)}
              />
              <Label htmlFor="attachment">Include course materials attachment</Label>
            </div>

            {/* Preview/Send */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setPreviewMode(!previewMode)}
              >
                <FileText className="h-4 w-4 mr-2" />
                {previewMode ? 'Hide Preview' : 'Preview Email'}
              </Button>
              <Button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Email
                  </>
                )}
              </Button>
            </div>

            {/* Email Preview */}
            {previewMode && (
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Email Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium">To:</Label>
                      <p className="text-sm text-gray-600">
                        {watchedRecipients ? `${getRecipientCount(watchedRecipients)} recipients` : 'No recipients selected'}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Subject:</Label>
                      <p className="text-sm text-gray-600">{watch('subject') || 'No subject'}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Message:</Label>
                      <div className="bg-white p-4 rounded border text-sm whitespace-pre-wrap">
                        {watch('message') || 'No message content'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Email History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Email Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                subject: 'Welcome to DataQuest Solutions!',
                recipients: 45,
                sent: '2 hours ago',
                status: 'delivered'
              },
              {
                subject: 'Course Registration Approved',
                recipients: 23,
                sent: '1 day ago',
                status: 'delivered'
              },
              {
                subject: 'Payment Reminder',
                recipients: 12,
                sent: '3 days ago',
                status: 'delivered'
              },
            ].map((email, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{email.subject}</p>
                  <p className="text-sm text-gray-600">
                    Sent to {email.recipients} recipients • {email.sent}
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  {email.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};