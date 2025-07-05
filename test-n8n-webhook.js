// Test script to verify n8n webhook
const webhookUrl = 'https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da';

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '555-1234',
  company: 'Test Company',
  message: 'This is a test submission',
  submittedAt: new Date().toISOString(),
  source: 'test-script'
};

console.log('Sending test data to n8n webhook...');
console.log('URL:', webhookUrl);
console.log('Data:', JSON.stringify(testData, null, 2));

fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => {
  console.log('\nResponse Status:', response.status);
  console.log('Response Status Text:', response.statusText);
  return response.text();
})
.then(data => {
  console.log('Response Body:', data);
})
.catch(error => {
  console.error('Error:', error);
});