
import React from 'react';
import { WHATSAPP_BUSINESS_LINK } from '../constants';

interface BusServiceCardProps {
  destination: string;
  price: number;
  imageUrl: string;
}

const BusServiceCard: React.FC<BusServiceCardProps> = ({ destination, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="block">
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={`Paisaje de ${destination}`} 
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Bus a {destination}</h3>
        <p className="text-gray-600 mb-4 flex-grow">Contratá con nosotros tus pasajes. ¡Consultanos por horarios y disponibilidad!</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500">Desde</span>
              <p className="text-2xl font-bold" style={{color: '#1D2D56'}}>
                ${price.toLocaleString('es-AR')}
              </p>
              <span className="text-xs text-gray-500">por tramo</span>
            </div>
            <a 
              href={WHATSAPP_BUSINESS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-px"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusServiceCard;
