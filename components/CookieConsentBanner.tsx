
import React, { useState, useEffect } from 'react';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem('cookie_consent', String(consent));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm text-white shadow-lg animate-slide-up"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-200 text-center sm:text-left">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar, aceptas nuestro uso de cookies.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleConsent(false)}
              className="px-4 py-2 text-sm font-semibold text-slate-300 rounded-md hover:bg-slate-700 transition-colors"
              aria-label="Rechazar cookies"
            >
              Rechazar
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              aria-label="Aceptar cookies"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieConsentBanner;
