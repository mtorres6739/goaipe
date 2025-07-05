import { useEffect } from 'react';

const EmbeddedContactForm = () => {
  useEffect(() => {
    // Create and inject the custom styles
    const styleId = 'n8n-form-custom-styles';
    
    // Remove existing custom styles if any
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const customStyles = document.createElement('style');
    customStyles.id = styleId;
    customStyles.innerHTML = `
      /* Custom styles for n8n embedded form to match AIPE site */
      #n8n-form-container {
        --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        --font-weight-normal: 400;
        --font-weight-bold: 600;
        --font-size-body: 14px;
        --font-size-label: 14px;
        --font-size-test-notice: 12px;
        --font-size-input: 16px;
        --font-size-header: 24px;
        --font-size-paragraph: 16px;
        --font-size-link: 14px;
        --font-size-error: 14px;
        --font-size-subheader: 16px;

        /* Colors matching AIPE dark theme */
        --color-background: transparent;
        --color-test-notice-text: #f59e0b;
        --color-test-notice-bg: rgba(245, 158, 11, 0.1);
        --color-test-notice-border: rgba(245, 158, 11, 0.2);
        --color-card-bg: rgba(31, 41, 55, 0.5);
        --color-card-border: rgba(75, 85, 99, 0.3);
        --color-card-shadow: rgba(0, 0, 0, 0.3);
        --color-link: #9ca3af;
        --color-header: #f3f4f6;
        --color-label: #d1d5db;
        --color-input-border: rgba(75, 85, 99, 0.5);
        --color-input-text: #e5e7eb;
        --color-focus-border: #3b82f6;
        --color-submit-btn-bg: #3b82f6;
        --color-submit-btn-text: #ffffff;
        --color-error: #ef4444;
        --color-required: #ef4444;
        --color-clear-button-bg: #6b7280;
        --color-html-text: #d1d5db;
        --color-html-link: #3b82f6;
        --color-header-subtext: #9ca3af;

        /* Border Radii */
        --border-radius-card: 12px;
        --border-radius-input: 8px;
        --border-radius-clear-btn: 50%;
        --card-border-radius: 12px;

        /* Spacing */
        --padding-container-top: 0;
        --padding-card: 32px;
        --padding-test-notice-vertical: 12px;
        --padding-test-notice-horizontal: 24px;
        --margin-bottom-card: 0;
        --padding-form-input: 12px;
        --card-padding: 32px;
        --card-margin-bottom: 0;

        /* Dimensions */
        --container-width: 100%;
        --submit-btn-height: 48px;
        --checkbox-size: 20px;

        /* Others */
        --box-shadow-card: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --opacity-placeholder: 0.5;
      }

      /* Override iframe styles for seamless integration */
      #n8n-form-container {
        background: transparent !important;
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
      }

      #n8n-form-container .n8n-form {
        background: var(--color-card-bg) !important;
        backdrop-filter: blur(10px) !important;
        border: 1px solid var(--color-card-border) !important;
      }

      #n8n-form-container input,
      #n8n-form-container textarea,
      #n8n-form-container select {
        background: rgba(17, 24, 39, 0.5) !important;
        border-color: var(--color-input-border) !important;
        color: var(--color-input-text) !important;
      }

      #n8n-form-container input:focus,
      #n8n-form-container textarea:focus,
      #n8n-form-container select:focus {
        border-color: var(--color-focus-border) !important;
        outline: none !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
      }

      #n8n-form-container button[type="submit"] {
        background: var(--color-submit-btn-bg) !important;
        transition: all 0.2s ease-in-out !important;
        font-weight: 600 !important;
      }

      #n8n-form-container button[type="submit"]:hover {
        background: #2563eb !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
      }

      /* Hide any scrollbars */
      #n8n-form-container::-webkit-scrollbar,
      #n8n-form-container *::-webkit-scrollbar {
        display: none !important;
      }

      #n8n-form-container {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }

      /* Ensure form fills container */
      #n8n-form-container > div {
        height: auto !important;
        min-height: auto !important;
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

  useEffect(() => {
    // Load the n8n form script
    const script = document.createElement('script');
    script.src = 'https://n8n-u40256.vm.elestio.app/form/a3e78053-e150-4098-b7c2-e7cc8224580e';
    script.async = true;
    
    // Add the script to the container
    const container = document.getElementById('n8n-form-container');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div id="n8n-form-container" className="min-h-[600px]" />
    </div>
  );
};

export default EmbeddedContactForm;