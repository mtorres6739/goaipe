export default function handler(req, res) {
  console.log('Simple test function called!');
  console.log('Environment variables available:', {
    hasSmtp2goKey: !!process.env.SMTP2GO_API_KEY,
    hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL,
    hasN8nWebhook: !!process.env.N8N_WEBHOOK_URL
  });
  
  res.status(200).json({ 
    message: 'Function is working!',
    method: req.method,
    timestamp: new Date().toISOString(),
    env: {
      smtp2go_configured: !!process.env.SMTP2GO_API_KEY,
      notification_email: process.env.NOTIFICATION_EMAIL || 'NOT SET',
      n8n_configured: !!process.env.N8N_WEBHOOK_URL
    }
  });
}