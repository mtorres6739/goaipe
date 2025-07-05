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
    
    // Format data for n8n
    const n8nPayload = [{
      "What is your name?": data.name,
      "What is your phone number?": data.phone,
      "What is your email address?": data.email,
      "Do you have any questions?": data.message || "No",
      "submittedAt": new Date().toISOString(),
      "formMode": "production"
    }];

    // Forward to n8n
    const response = await fetch('https://n8n-u40256.vm.elestio.app/form/a3e78053-e150-4098-b7c2-e7cc8224580e', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(n8nPayload)
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to submit form' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}