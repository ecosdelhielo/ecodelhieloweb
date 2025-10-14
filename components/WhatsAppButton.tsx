import React from 'react';
import { WHATSAPP_BUSINESS_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_BUSINESS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full py-3 px-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <span className="font-bold text-lg">Hablemos!</span>
    </a>
  );
};

export default WhatsAppButton;