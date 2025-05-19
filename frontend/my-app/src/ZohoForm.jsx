import { useEffect, useRef } from 'react';

const ZohoForm = ({ formId, divId, height, width = '90%' }) => {
  const formContainerRef = useRef(null);
  
  useEffect(() => {
    // Skip if running on server-side
    if (!formContainerRef.current) return;
    
    // Clear any existing content
    formContainerRef.current.innerHTML = '';
    
    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = `https://forms.zohopublic.in/aflynkmedia1/form/${formId}/formperma/${divId}?zf_rszfm=1`;
    iframe.style.border = 'none';
    iframe.style.height = height;
    iframe.style.width = width;
    iframe.style.transition = 'all 0.5s ease';
    
    // Add iframe to the DOM
    formContainerRef.current.appendChild(iframe);
    
    // Add event listener for iframe height adjustments
    const handleMessage = (event) => {
      const eventData = event.data;
      if (eventData && eventData.constructor === String) {
        const zf_ifrm_data = eventData.split('|');
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + 'px';
          
          if (formContainerRef.current) {
            const iframe = formContainerRef.current.getElementsByTagName('iframe')[0];
            if (iframe && iframe.src.indexOf('formperma') > 0 && iframe.src.indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              const zf_tout = zf_ifrm_data.length === 3;
              
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      }
    };
    
    window.addEventListener('message', handleMessage, false);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage, false);
    };
  }, [formId, divId, height, width]);
  
  return <div ref={formContainerRef} className="zoho-form-container"></div>;
};

export default ZohoForm;