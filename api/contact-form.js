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

    // Try n8n webhook first
    try {
      const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da';
      
      const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

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

    // Email notification using SMTP2GO (temporarily always send for testing)
    let emailSuccess = false;
    if (process.env.SMTP2GO_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.smtp2go.com/v3/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Smtp2go-Api-Key': process.env.SMTP2GO_API_KEY,
            'accept': 'application/json'
          },
          body: JSON.stringify({
            sender: process.env.SMTP2GO_SENDER || 'noreply@goaipe.com',
            to: [process.env.NOTIFICATION_EMAIL || 'mattorres@toroins.com'],
            subject: `New Contact Form Submission from ${formData.name}`,
            reply_to: formData.email,
            html_body: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Company:</strong> ${formData.company}</p>
              <p><strong>Insurance Type:</strong> ${formData.insuranceType}</p>
              <p><strong>Message:</strong> ${formData.message}</p>
              <p><strong>Submitted:</strong> ${formData.submittedAt}</p>
              <hr>
              <p><small>Note: n8n webhook ${n8nSuccess ? 'succeeded' : `failed - ${n8nError}`}</small></p>
            `,
            text_body: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nInsurance Type: ${formData.insuranceType}\nMessage: ${formData.message}\nSubmitted: ${formData.submittedAt}\n\nNote: n8n webhook ${n8nSuccess ? 'succeeded' : `failed - ${n8nError}`}`
          })
        });

        if (emailResponse.ok) {
          const result = await emailResponse.json();
          emailSuccess = true;
          console.log('Email notification sent successfully via SMTP2GO:', result);
        } else {
          const errorData = await emailResponse.json();
          console.error('SMTP2GO email sending failed:', errorData);
        }
      } catch (error) {
        console.error('SMTP2GO email service error:', error);
      }
    }

    // Log submission for monitoring
    console.log('Form submission processed:', {
      formData,
      n8nSuccess,
      emailSuccess,
      n8nError
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
        error: n8nError
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
}