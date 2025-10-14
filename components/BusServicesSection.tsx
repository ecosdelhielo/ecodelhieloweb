import React from 'react';
import BusServiceCard from './BusServiceCard';
import TicketIcon from './icons/TicketIcon';

const busServices = [
  {
    destination: 'El Chaltén',
    price: 45000,
    imageUrl: 'https://github.com/juliperruchoud/ecosdelhielo/blob/main/img/excursiones/full-day-el-chalten/chalten-1.jpg?raw=true',
  },
  {
    destination: 'Puerto Natales (Chile)',
    price: 40000,
    imageUrl: 'https://github.com/juliperruchoud/ecosdelhielo/blob/cerro_huiliche/img/excursiones/torresdelpaine/torresdelpaine_1.jpg?raw=true',
  },
  {
    destination: 'Río Gallegos',
    price: 39000,
    imageUrl: 'https://raw.githubusercontent.com/juliperruchoud/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/glaciar-4.jpg',
  }
];

const BusServicesSection: React.FC = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4">
            <TicketIcon className="h-10 w-10 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{color: '#1D2D56'}}>
              Buses Regulares
            </h2>
        </div>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          También podés contratar con nosotros los servicios de buses regulares para moverte por la Patagonia. ¡Consultanos por horarios y disponibilidad para planificar tu viaje!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {busServices.map((service) => (
          <BusServiceCard
            key={service.destination}
            destination={service.destination}
            price={service.price}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BusServicesSection;
