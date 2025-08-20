import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ApprovalEmailRequest {
  to: string;
  name: string;
  type: 'course' | 'service';
  selection: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { to, name, type, selection }: ApprovalEmailRequest = await req.json();

    const subject = `Registration Approved - ${selection}`;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Registration Approved</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
          .success-box { background: #f0fdf4; border: 1px solid #10b981; padding: 15px; border-radius: 6px; margin: 15px 0; }
          .payment-info { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Registration Approved!</h1>
            <p>Welcome to DataQuest Solutions</p>
          </div>
          
          <div class="content">
            <h2>Congratulations ${name}!</h2>
            
            <div class="success-box">
              <h3>✅ Your registration has been approved</h3>
              <p><strong>${type === 'course' ? 'Course' : 'Service'}:</strong> ${selection}</p>
              <p><strong>Status:</strong> Approved and Ready for Payment</p>
            </div>
            
            <h3>Next Steps:</h3>
            <ol>
              <li><strong>Complete Payment:</strong> Use the payment details below</li>
              <li><strong>Join WhatsApp Group:</strong> You'll receive an invitation link</li>
              ${type === 'course' ? '<li><strong>Access Course Materials:</strong> Download links will be provided</li>' : '<li><strong>Project Kickoff:</strong> Our team will contact you to discuss project details</li>'}
              <li><strong>Start Learning/Working:</strong> Begin your journey with us!</li>
            </ol>
            
            <div class="payment-info">
              <h3>💳 Payment Information</h3>
              <p><strong>Amount Due:</strong> Will be communicated separately based on your selection</p>
              
              <h4>Payment Options:</h4>
              <ul>
                <li><strong>M-Pesa:</strong> Paybill 247247, Account: DATAQUEST</li>
                <li><strong>Bank Transfer:</strong> 
                  <br>Bank: Equity Bank
                  <br>Account: 1234567890
                  <br>Account Name: DataQuest Solutions
                </li>
                <li><strong>Cryptocurrency:</strong>
                  <br>ETH: 0x742d35Cc6634C0532925a3b8D400B52d13bC2e2A
                  <br>BTC: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </li>
              </ul>
              
              <p><em>Please include your name and registration ID in the payment reference.</em></p>
            </div>
            
            ${type === 'course' ? `
            <h3>Course Information:</h3>
            <ul>
              <li><strong>Start Date:</strong> Will be communicated after payment</li>
              <li><strong>Schedule:</strong> Flexible online sessions</li>
              <li><strong>Materials:</strong> Digital resources and practical exercises</li>
              <li><strong>Certificate:</strong> Upon successful completion</li>
            </ul>
            ` : `
            <h3>Service Information:</h3>
            <ul>
              <li><strong>Project Consultation:</strong> Initial discussion within 48 hours</li>
              <li><strong>Timeline:</strong> Will be established during consultation</li>
              <li><strong>Deliverables:</strong> Customized based on your requirements</li>
              <li><strong>Support:</strong> Ongoing support throughout the project</li>
            </ul>
            `}
            
            <h3>Contact Information:</h3>
            <ul>
              <li><strong>WhatsApp:</strong> +254707612395</li>
              <li><strong>Email:</strong> dataquestsolutions2@gmail.com</li>
              <li><strong>Alternative Phone:</strong> +254701344230</li>
            </ul>
            
            <p>We're excited to have you join the DataQuest Solutions community!</p>
          </div>
          
          <div class="footer">
            <p>Best regards,<br>The DataQuest Solutions Team</p>
            <p style="font-size: 12px; color: #6b7280;">
              If you have any questions, please contact us via WhatsApp or email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // In a real implementation, you would use a service like Resend, SendGrid, or similar
    console.log('Sending approval email to:', to);
    console.log('Subject:', subject);

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    return new Response(
      JSON.stringify({ success: true, message: 'Approval email sent' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending approval email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send approval email' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});