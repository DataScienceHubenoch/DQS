import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BulkEmailRequest {
  subject: string;
  message: string;
  recipients: 'all' | 'pending' | 'approved' | 'course_students' | 'service_clients';
  includeAttachment?: boolean;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { subject, message, recipients, includeAttachment }: BulkEmailRequest = await req.json();

    // Get recipient list based on filter
    let query = supabaseClient.from('registrations').select('email, name');
    
    switch (recipients) {
      case 'pending':
        query = query.eq('status', 'pending');
        break;
      case 'approved':
        query = query.eq('status', 'approved');
        break;
      case 'course_students':
        query = query.eq('type', 'course');
        break;
      case 'service_clients':
        query = query.eq('type', 'service');
        break;
      // 'all' doesn't need additional filtering
    }

    const { data: recipientData, error } = await query;
    
    if (error) throw error;

    // Process message with placeholders
    const processedEmails = recipientData?.map(recipient => ({
      to: recipient.email,
      subject: subject.replace('[Name]', recipient.name),
      html: generateEmailHTML(
        message.replace('[Name]', recipient.name),
        subject,
        recipient.name
      ),
    })) || [];

    // In a real implementation, you would use a service like Resend, SendGrid, or similar
    // For now, we'll simulate the bulk email sending
    console.log(`Sending bulk email to ${processedEmails.length} recipients`);
    console.log('Subject:', subject);
    console.log('Recipients filter:', recipients);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Log email campaign
    await supabaseClient.from('email_campaigns').insert({
      subject,
      message,
      recipients_filter: recipients,
      recipients_count: processedEmails.length,
      sent_at: new Date().toISOString(),
      status: 'sent'
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Bulk email sent to ${processedEmails.length} recipients`,
        recipientCount: processedEmails.length
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending bulk email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send bulk email' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

function generateEmailHTML(message: string, subject: string, recipientName: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${subject}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0ea5e9, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e5e7eb; white-space: pre-wrap; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>DataQuest Solutions</h1>
          <p>${subject}</p>
        </div>
        
        <div class="content">
          ${message}
        </div>
        
        <div class="footer">
          <p>Best regards,<br>The DataQuest Solutions Team</p>
          <p style="font-size: 12px; color: #6b7280;">
            WhatsApp: +254707612395 | Email: dataquestsolutions2@gmail.com
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}