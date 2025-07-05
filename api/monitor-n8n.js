export default async function handler(req, res) {
  // Test n8n webhook status
  try {
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da';
    
    const testPayload = {
      test: true,
      timestamp: new Date().toISOString(),
      source: "monitor"
    };
    
    const startTime = Date.now();
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });
    const responseTime = Date.now() - startTime;
    
    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      responseData = responseText;
    }
    
    return res.status(200).json({
      status: response.ok ? 'operational' : 'error',
      webhook: {
        url: N8N_WEBHOOK_URL,
        statusCode: response.status,
        responseTime: `${responseTime}ms`,
        response: responseData
      },
      emailFallback: {
        configured: !!process.env.SMTP2GO_API_KEY,
        service: 'SMTP2GO',
        recipientEmail: process.env.NOTIFICATION_EMAIL || 'mattorres@toroins.com'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(200).json({
      status: 'error',
      error: error.message,
      emailFallback: {
        configured: !!process.env.SMTP2GO_API_KEY,
        service: 'SMTP2GO',
        recipientEmail: process.env.NOTIFICATION_EMAIL || 'mattorres@toroins.com'
      },
      timestamp: new Date().toISOString()
    });
  }
}