
import React from 'react';
import { excursions } from '../data/excursions';
import ExcursionCard from '../components/ExcursionCard';

const ExcursionsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{color: '#1D2D56'}}>
          Todas Nuestras Excursiones
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Descubrí la gama completa de aventuras que ECOS del HIELO tiene para ofrecer. Desde caminatas sobre el glaciar y navegaciones escénicas hasta experiencias culturales en la estepa patagónica.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {excursions.map((excursion) => (
          <ExcursionCard key={excursion.id} excursion={excursion} />
        ))}
      </div>
    </div>
  );
};

export default ExcursionsPage;
