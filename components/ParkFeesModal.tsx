import React from 'react';
import Modal from './Modal';
import { parkFees } from '../data/parkFees';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ParkFeesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ParkFeesModal: React.FC<ParkFeesModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Tarifas de Ingreso al Parque Nacional">
      <div className="space-y-4">
        <ul className="divide-y divide-gray-200">
          {parkFees.map(fee => (
            <li key={fee.category} className="py-3 flex justify-between items-start gap-4">
              <div className="flex-1">
                <p className="font-medium text-gray-800">{fee.category}</p>
                {fee.notes && <p className="text-sm text-gray-500">{fee.notes}</p>}
              </div>
              <p className="font-semibold text-gray-900 ml-4 whitespace-nowrap">
                {fee.price > 0 ? `$${fee.price.toLocaleString('es-AR')}` : 'Sin cargo'}
              </p>
            </li>
          ))}
        </ul>
        
        <a
            href="https://ventaweb.apn.gob.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg shadow-md"
        >
            Comprar Entrada Online
            <ExternalLinkIcon className="h-5 w-5 ml-2" />
        </a>

        <p className="text-xs text-gray-500 text-center pt-2">
            Recomendamos comprar la entrada online para agilizar tu ingreso. También podés abonar en la portada de acceso al parque (efectivo o tarjeta).
        </p>
      </div>
    </Modal>
  );
};

export default ParkFeesModal;