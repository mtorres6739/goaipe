export default async function handler(req, res) {
  // Test the n8n webhook directly
  const testPayload = {
    name: "Test from Vercel",
    email: "test@vercel.com",
    phone: "1234567890",
    company: "Vercel Test",
    insuranceType: "property-casualty",
    message: "Testing n8n webhook",
    submittedAt: new Date().toISOString(),
    source: "vercel-test"
  };

  try {
    const N8N_WEBHOOK_URL = 'https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da';
    
    console.log('Testing n8n webhook:', N8N_WEBHOOK_URL);
    console.log('Payload:', JSON.stringify(testPayload));
    
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload)
    });

    const responseText = await response.text();
    console.log('n8n response status:', response.status);
    console.log('n8n response headers:', Object.fromEntries(response.headers.entries()));
    console.log('n8n response body:', responseText);

    // Try to parse as JSON if possible
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      responseData = responseText;
    }

    return res.status(200).json({ 
      success: true,
      n8nStatus: response.status,
      n8nResponse: responseData,
      message: 'Test completed - check Vercel logs for details'
    });
  } catch (error) {
    console.error('Test error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}