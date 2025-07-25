import { useState } from 'react';

const CustomContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to our API endpoint which handles both n8n webhook and SES email
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        
        // Log which methods succeeded for debugging
        console.log('Form submission methods:', result.methods);
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Get in Touch</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
          <p className="text-green-500 font-medium">Thank you for your message! We'll get back to you within 24 hours.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg">
          <p className="text-red-500 font-medium">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-primary">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-surface border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-muted"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-surface border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-muted"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-text-primary">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-surface border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-muted"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 text-text-primary">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-surface border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-muted"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-primary">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-surface border border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-text-primary placeholder-text-muted"
            placeholder="Tell us about your insurance needs..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            isSubmitting 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary-dark text-white'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default CustomContactForm;