import { useEffect } from 'react';

const EmbeddedContactFormIframe = () => {
  useEffect(() => {
    // Apply custom styles to the page for dark theme
    const styleId = 'n8n-form-iframe-styles';
    
    // Remove existing custom styles if any
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const customStyles = document.createElement('style');
    customStyles.id = styleId;
    customStyles.innerHTML = `
      .n8n-form-iframe {
        width: 100%;
        min-height: 700px;
        border: none;
        background: transparent;
        border-radius: 12px;
      }
    `;

    document.head.appendChild(customStyles);

    // Cleanup on unmount
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []);

  return (
    <div className="w-full bg-background-light rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <iframe 
        src="https://n8n-u40256.vm.elestio.app/form/a3e78053-e150-4098-b7c2-e7cc8224580e"
        className="n8n-form-iframe"
        title="Contact Form"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default EmbeddedContactFormIframe;