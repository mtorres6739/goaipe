import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const data = req.body;
    
    // Format data for n8n webhook
    const formData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company || "Not provided",
      insuranceType: data.insuranceType || "Not specified",
      message: data.message || "No message",
      submittedAt: new Date().toISOString(),
      source: "goaipe.com"
    };

    let n8nSuccess = false;
    let n8nError = null;

    // Try n8n webhook first (with shorter timeout)
    try {
      const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da';
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (n8nResponse.ok) {
        n8nSuccess = true;
        console.log('Successfully sent to n8n webhook');
      } else {
        n8nError = `n8n webhook failed: ${n8nResponse.status} ${n8nResponse.statusText}`;
        console.error(n8nError);
      }
    } catch (error) {
      n8nError = `n8n webhook error: ${error.message}`;
      console.error(n8nError);
    }

    // Send email notification using SMTP (Amazon SES)
    let emailSuccess = false;
    let emailError = null;

    try {
      // Create SMTP transporter for Amazon SES
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_ENDPOINT || 'email-smtp.us-west-1.amazonaws.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER_NAME,
          pass: process.env.SMTP_PASSWORD
        }
      });

      const emailContent = `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #00bfff;">New Contact Form Submission</h2>
            <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Company:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.company}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Insurance Type:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.insuranceType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Message:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.message}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Submitted:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${new Date(formData.submittedAt).toLocaleString()}</td>
              </tr>
            </table>
            <hr style="margin-top: 30px; border: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">
              <strong>System Status:</strong> n8n webhook ${n8nSuccess ? '✅ succeeded' : `❌ failed - ${n8nError}`}
            </p>
          </body>
        </html>
      `;

      const mailOptions = {
        from: process.env.FROM_EMAIL || 'mail@myaipe.com',
        to: process.env.NOTIFICATION_EMAIL || 'mattorres@toroins.com',
        replyTo: formData.email,
        subject: `New Contact Form Submission from ${formData.name}`,
        text: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nInsurance Type: ${formData.insuranceType}\nMessage: ${formData.message}\nSubmitted: ${formData.submittedAt}\n\nSystem Status: n8n webhook ${n8nSuccess ? 'succeeded' : `failed - ${n8nError}`}`,
        html: emailContent
      };

      const info = await transporter.sendMail(mailOptions);
      emailSuccess = true;
      console.log('Email sent successfully via SMTP:', info.messageId);
    } catch (error) {
      emailError = error.message;
      console.error('SMTP email error:', error);
    }

    // Log submission for monitoring
    console.log('Form submission processed:', {
      formData,
      n8nSuccess,
      emailSuccess,
      n8nError,
      emailError
    });

    // Return success if either method worked
    if (n8nSuccess || emailSuccess) {
      return res.status(200).json({ 
        success: true, 
        message: 'Form submitted successfully',
        methods: {
          n8n: n8nSuccess,
          email: emailSuccess
        }
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to process form submission',
        errors: {
          n8n: n8nError,
          email: emailError
        }
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
}