import nodemailer from 'nodemailer';

// Test SMTP configuration
const config = {
  host: 'email-smtp.us-west-1.amazonaws.com',
  port: 587,
  secure: false,
  auth: {
    user: 'AKIA3N45YACXEFDRRP5R',
    pass: 'BBH6EpYL6oSi/FpYVyCrocyfTR/b/hM7QTFyXQGDTDl0'
  }
};

console.log('Testing SMTP connection...');
console.log('Host:', config.host);
console.log('Port:', config.port);
console.log('User:', config.auth.user);

// Create transporter
const transporter = nodemailer.createTransport(config);

// Verify connection
try {
  await transporter.verify();
  console.log('\n✅ SMTP connection successful!');
  
  // Send test email
  console.log('\nSending test email...');
  const info = await transporter.sendMail({
    from: 'mail@myaipe.com',
    to: 'mattorres@toroins.com',
    subject: 'SMTP Test - AIPE Contact Form',
    text: 'This is a test email to verify SMTP configuration is working correctly.',
    html: '<p>This is a test email to verify <strong>SMTP configuration</strong> is working correctly.</p>'
  });
  
  console.log('✅ Email sent successfully!');
  console.log('Message ID:', info.messageId);
  console.log('Response:', info.response);
  
} catch (error) {
  console.error('\n❌ SMTP Error:', error.message);
  console.error('Full error:', error);
}