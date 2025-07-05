const N8NFormWrapper = () => {
  // Create a wrapper with the desired styling
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
      <div className="relative w-full overflow-hidden rounded-lg">
        {/* Background overlay to ensure transparency effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm pointer-events-none" />
        
        {/* Iframe container with custom styling */}
        <div className="relative">
          <style>{`
            /* Target the iframe and remove scrollbars */
            .n8n-form-frame {
              width: 100%;
              height: 800px;
              border: none;
              background: transparent;
              overflow: hidden;
            }
            
            /* Hide scrollbars for all browsers */
            .n8n-form-frame::-webkit-scrollbar {
              display: none;
            }
            
            .n8n-form-frame {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            
            /* Container to clip any overflow */
            .form-container {
              overflow: hidden;
              position: relative;
              width: 100%;
              height: 800px;
            }
          `}</style>
          
          <div className="form-container">
            <iframe 
              src="https://n8n-u40256.vm.elestio.app/form/a3e78053-e150-4098-b7c2-e7cc8224580e"
              className="n8n-form-frame"
              title="Contact Form"
              loading="lazy"
              scrolling="no"
              frameBorder="0"
              allowTransparency={true}
            />
          </div>
        </div>
        
        {/* Overlay message about styling limitations */}
        <div className="mt-4 p-4 bg-background-light/50 backdrop-blur rounded-lg">
          <p className="text-sm text-text-muted">
            Note: For the best experience with transparent backgrounds and white text, 
            please configure your n8n form theme settings to match.
          </p>
        </div>
      </div>
    </div>
  );
};

export default N8NFormWrapper;