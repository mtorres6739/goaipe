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
    const n8nPayload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company || "Not provided",
      insuranceType: data.insuranceType || "Not specified",
      message: data.message || "No message",
      submittedAt: new Date().toISOString(),
      source: "goaipe.com"
    };

    // TODO: Replace with your n8n webhook URL
    // To create a webhook in n8n:
    // 1. Create new workflow
    // 2. Add Webhook node
    // 3. Set to POST method
    // 4. Copy the production webhook URL
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://n8n-u40256.vm.elestio.app/form/a3e78053-e150-4098-b7c2-e7cc8224580e';
    
    // Forward to n8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(n8nPayload)
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      console.error('n8n submission failed:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      return res.status(500).json({ success: false, message: 'Failed to submit form to n8n' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
}