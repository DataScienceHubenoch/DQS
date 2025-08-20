import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  to: string;
  name: string;
  type: 'course' | 'service';
  selection: string;
  paymentMethod: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { to, name, type, selection, paymentMethod }: EmailRequest = await req.json();

    // Email content based on registration type
    const subject = `Registration Confirmation - ${selection}`;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Registration Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0ea5e9, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
          .info-box { background: #f0f9ff; border: 1px solid #0ea5e9; padding: 15px; border-radius: 6px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Registration Confirmation</h1>
            <p>Thank you for choosing DataQuest Solutions!</p>
          </div>
          
          <div class="content">
            <h2>Hello ${name},</h2>
            
            <p>Thank you for registering with DataQuest Solutions. We have received your registration for:</p>
            
            <div class="info-box">
              <h3>${type === 'course' ? 'Course' : 'Service'}: ${selection}</h3>
              <p><strong>Registration Type:</strong> ${type === 'course' ? 'Training Course' : 'Professional Service'}</p>
              <p><strong>Payment Method:</strong> ${paymentMethod.replace('_', ' ').toUpperCase()}</p>
              <p><strong>Status:</strong> Pending Review</p>
            </div>
            
            <h3>What happens next?</h3>
            <ol>
              <li>Our team will review your registration within 24 hours</li>
              <li>You will receive an approval email with payment instructions</li>
              <li>Once payment is confirmed, you'll receive access details</li>
              ${type === 'course' ? '<li>Course materials and schedule will be shared</li>' : '<li>Our team will contact you to discuss project details</li>'}
            </ol>
            
            <h3>Payment Information</h3>
            <p>Upon approval, you will receive detailed payment instructions for your selected method:</p>
            <ul>
              ${paymentMethod === 'mobile_money' ? '<li><strong>Mobile Money:</strong> M-Pesa and Airtel Money accepted</li>' : ''}
              ${paymentMethod === 'bank_transfer' ? '<li><strong>Bank Transfer:</strong> Direct bank deposit details will be provided</li>' : ''}
              ${paymentMethod === 'crypto' ? '<li><strong>Cryptocurrency:</strong> Wallet addresses for ETH, BTC, and USDT</li>' : ''}
            </ul>
            
            <p>If you have any questions, please don't hesitate to contact us:</p>
            <ul>
              <li>WhatsApp: +254707612395</li>
              <li>Email: dataquestsolutions2@gmail.com</li>
            </ul>
          </div>
          
          <div class="footer">
            <p>Best regards,<br>The DataQuest Solutions Team</p>
            <p style="font-size: 12px; color: #6b7280;">
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // In a real implementation, you would use a service like Resend, SendGrid, or similar
    // For now, we'll simulate the email sending
    console.log('Sending confirmation email to:', to);
    console.log('Subject:', subject);
    console.log('HTML Content:', htmlContent);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return new Response(
      JSON.stringify({ success: true, message: 'Confirmation email sent' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send confirmation email' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});