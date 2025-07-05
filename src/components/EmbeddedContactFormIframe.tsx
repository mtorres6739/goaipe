import { useEffect, useRef } from 'react';

const EmbeddedContactFormIframe = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Apply custom styles to the iframe content once loaded
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        try {
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          if (iframeDoc) {
            // Inject custom styles into the iframe
            const customStyles = iframeDoc.createElement('style');
            customStyles.innerHTML = `
              /* Hide scrollbars */
              body {
                overflow: hidden !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              
              /* Root container styles */
              :root {
                --color-background: transparent !important;
                --color-card-bg: transparent !important;
                --color-input-border: #ffffff !important;
                --color-input-text: #ffffff !important;
                --color-label: #ffffff !important;
                --color-header: #ffffff !important;
                --color-placeholder: rgba(255, 255, 255, 0.6) !important;
              }
              
              /* Container and form background */
              .n8n-form-container,
              .n8n-form,
              .form-container,
              form,
              body > div {
                background: transparent !important;
                background-color: transparent !important;
              }
              
              /* Card/form wrapper */
              .n8n-form-card,
              form > div {
                background: transparent !important;
                background-color: transparent !important;
                box-shadow: none !important;
                border: none !important;
              }
              
              /* Input fields */
              input[type="text"],
              input[type="email"],
              input[type="tel"],
              input[type="number"],
              textarea,
              select {
                background: transparent !important;
                background-color: transparent !important;
                border: 1px solid #ffffff !important;
                color: #ffffff !important;
                padding: 12px !important;
                border-radius: 8px !important;
              }
              
              /* Input placeholders */
              input::placeholder,
              textarea::placeholder {
                color: rgba(255, 255, 255, 0.6) !important;
              }
              
              /* Labels */
              label {
                color: #ffffff !important;
              }
              
              /* Select dropdown styling */
              select {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E") !important;
                background-repeat: no-repeat !important;
                background-position: right 12px center !important;
                background-size: 20px !important;
                padding-right: 40px !important;
              }
              
              select option {
                background: #1f2937 !important;
                color: #ffffff !important;
              }
              
              /* Focus states */
              input:focus,
              textarea:focus,
              select:focus {
                outline: none !important;
                border-color: #3b82f6 !important;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
              }
              
              /* Hide any overflow */
              * {
                max-width: 100% !important;
              }
              
              /* Ensure no horizontal scroll */
              html, body {
                overflow-x: hidden !important;
                overflow-y: hidden !important;
              }
            `;
            iframeDoc.head.appendChild(customStyles);
          }
        } catch (e) {
          console.log('Cannot access iframe content - cross-origin');
        }
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
      <iframe 
        ref={iframeRef}
        src="https://n8n-u40256.vm.elestio.app/form/a3e78053-e150-4098-b7c2-e7cc8224580e"
        className="w-full min-h-[700px] border-0 bg-transparent"
        style={{ 
          border: 'none',
          overflow: 'hidden'
        }}
        title="Contact Form"
        loading="lazy"
      />
    </div>
  );
};

export default EmbeddedContactFormIframe;