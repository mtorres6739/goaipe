// Debug test for form submission issues
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Test configuration
const config = {
  n8nWebhookUrl: 'https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da',
  aws: {
    region: 'us-west-1',
    accessKeyId: 'AKIA3N45YACXEFDRRP5R',
    secretAccessKey: 'BBH6EpYL6oSi/FpYVyCrocyfTR/b/hM7QTFyXQGDTDl0'
  },
  email: {
    from: 'mail@myaipe.com',
    to: 'mattorres@toroins.com'
  }
};

// Test data
const testData = {
  name: 'Debug Test User',
  email: 'test@example.com',
  phone: '555-1234',
  company: 'Debug Test Company',
  insuranceType: 'property-casualty',
  message: 'This is a debug test to check both n8n and email',
  submittedAt: new Date().toISOString(),
  source: 'debug-test'
};

console.log('Starting form submission debug test...\n');

// Test 1: n8n Webhook
console.log('1. Testing n8n webhook...');
console.log('   URL:', config.n8nWebhookUrl);
console.log('   Data:', JSON.stringify(testData, null, 2));

try {
  const n8nResponse = await fetch(config.n8nWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData)
  });

  console.log('   Status:', n8nResponse.status, n8nResponse.statusText);
  const responseText = await n8nResponse.text();
  console.log('   Response:', responseText);
  
  if (n8nResponse.ok) {
    console.log('   ✅ n8n webhook SUCCESS\n');
  } else {
    console.log('   ❌ n8n webhook FAILED\n');
  }
} catch (error) {
  console.log('   ❌ n8n webhook ERROR:', error.message, '\n');
}

// Test 2: Email via SES
console.log('2. Testing Amazon SES email...');
const sesClient = new SESClient({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
});

try {
  const emailCommand = new SendEmailCommand({
    Destination: {
      ToAddresses: [config.email.to],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Debug Test Email\n\nName: ${testData.name}\nEmail: ${testData.email}\nPhone: ${testData.phone}\nCompany: ${testData.company}\nMessage: ${testData.message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Debug Test - Contact Form Submission",
      },
    },
    Source: config.email.from,
    ReplyToAddresses: [testData.email],
  });

  const emailResponse = await sesClient.send(emailCommand);
  console.log('   Message ID:', emailResponse.MessageId);
  console.log('   ✅ Email send SUCCESS\n');
} catch (error) {
  console.log('   ❌ Email send ERROR:', error.message);
  console.log('   Error details:', error, '\n');
}

console.log('Debug test complete!');
console.log('\nSummary:');
console.log('- Check n8n webhook dashboard for new execution');
console.log('- Check email inbox for test message');