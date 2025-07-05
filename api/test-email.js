export default async function handler(req, res) {
  console.log('Test email function called');
  
  // Check if we have the required env vars
  if (!process.env.SMTP2GO_API_KEY) {
    return res.status(500).json({ 
      error: 'SMTP2GO_API_KEY not configured in environment variables' 
    });
  }

  try {
    const emailData = {
      sender: process.env.SMTP2GO_SENDER || 'mattorres@toroins.com',
      to: [process.env.NOTIFICATION_EMAIL || 'mattorres@toroins.com'],
      subject: 'Test Email from Vercel Function',
      text_body: 'This is a test email sent at ' + new Date().toISOString(),
      html_body: '<p>This is a <strong>test email</strong> sent at ' + new Date().toISOString() + '</p>'
    };

    console.log('Sending email with data:', emailData);

    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': process.env.SMTP2GO_API_KEY,
        'accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();
    console.log('SMTP2GO Response:', result);

    if (response.ok) {
      return res.status(200).json({ 
        success: true, 
        message: 'Test email sent!',
        smtp2go_response: result
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        error: 'SMTP2GO error',
        details: result
      });
    }
  } catch (error) {
    console.error('Error sending test email:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}