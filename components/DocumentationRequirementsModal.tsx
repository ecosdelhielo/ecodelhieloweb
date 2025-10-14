import React from 'react';
import Modal from './Modal';
import { parkFeesChile } from '../data/parkFees';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import ExclamationTriangleIcon from './icons/ExclamationTriangleIcon';

interface DocumentationRequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentationRequirementsModal: React.FC<DocumentationRequirementsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Documentación y Requisitos para Cruce de Frontera">
      <div className="space-y-6 text-gray-700">
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-red-800">
                Dado que esta excursión es con cruce internacional de fronteras, es MUY importante poner especial cuidado en verificar que no haya errores ni omisiones en el envío de la información de cada pasajero.
              </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Documentación Esencial (Original y Vigente)</h3>
          <ul className="list-disc list-outside space-y-2 pl-5">
            <li><strong>DNI o Pasaporte vigente (en formato físico y original)</strong>. Debe ser el mismo declarado en la reserva.</li>
            <li><strong>No Residentes en Argentina:</strong> El documento debe ser el mismo con el que ingresaron a Argentina.</li>
            <li><strong>Menores de 18 años:</strong> Consultar requisitos específicos según viajen con uno o ambos padres.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Trámites Anticipados Obligatorios</h3>
          <ul className="list-disc list-outside space-y-3 pl-5">
            <li>
              <strong>Declaración Digital SAG (Ingreso a Chile):</strong> Completar online 24 hs antes del viaje.
              <p className="text-xs text-gray-600 mt-1">
                Control fronterizo: Terrestre / Nombre: Río Don Guillermo / Medio de transporte: Vehículo Particular.
              </p>
            </li>
            <li>
              <strong>Entrada al Parque Nacional Torres del Paine:</strong> Comprar online de forma anticipada. No se vende en el lugar.
               <a href="https://www.pasesparques.cl/es/parks/torres-del-paine" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 font-semibold hover:underline inline-flex items-center">
                Comprar aquí <ExternalLinkIcon className="h-4 w-4 ml-1" />
              </a>
              <p className="text-xs text-red-600 mt-1">Sugerimos comprarla cerca de la fecha del tour, ya que no tiene devolución ni cambio de fecha.</p>
            </li>
             <li>
              <strong>Visa o Autorización de Viaje (AVE):</strong> Es responsabilidad del pasajero verificar si su nacionalidad requiere visa o AVE para ingresar a Chile y/o Argentina.
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Tarifas de Entrada al Parque (Chile)</h3>
           <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg p-3">
              {parkFeesChile.map(fee => (
                <li key={fee.category} className="py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{fee.category}</p>
                  </div>
                  <p className="font-semibold text-gray-900 ml-0 sm:ml-4 whitespace-nowrap text-right w-full sm:w-auto">
                    {fee.price > 0 ? `$${fee.price.toLocaleString('es-CL')} CLP` : 'Sin cargo'}
                  </p>
                </li>
              ))}
            </ul>
        </div>

        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Alimentos y Bebidas</h3>
            <p>La vianda incluida es abundante. Si desea llevar alimentos extra, deben ser secos y envasados de fábrica (ej. galletitas, barras de cereal). Está <strong>prohibido</strong> ingresar a Chile con alimentos frescos como carnes, frutas o verduras.</p>
        </div>

      </div>
    </Modal>
  );
};

export default DocumentationRequirementsModal;
