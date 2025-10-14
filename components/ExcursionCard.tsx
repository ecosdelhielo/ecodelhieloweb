
import React from 'react';
import { Link } from 'react-router-dom';
import { Excursion } from '../types';

interface ExcursionCardProps {
  excursion: Excursion;
  activityText?: string;
}

const ExcursionCard: React.FC<ExcursionCardProps> = ({ excursion, activityText }) => {

  const getStartingPrice = (excursion: Excursion): number | null => {
    const adultIndices = excursion.ageRules
      .map((rule, index) => rule.category === 'Adulto' ? index : -1)
      .filter(index => index !== -1);
    
    if (adultIndices.length === 0) {
      return null;
    }

    // Special case for "Kayak Darwin Experience" to show the price of the main activity
    if (excursion.id === "kayak-darwin-experience") {
        let kayakPrice = Infinity;
        excursion.seasons.forEach(season => {
            if (season.optionalPrices && season.optionalPrices["participante-kayak"]) {
                const priceList = season.optionalPrices["participante-kayak"];
                adultIndices.forEach(index => {
                    if (index < priceList.length) {
                        const price = priceList[index];
                        if (price > 0 && price < kayakPrice) {
                            kayakPrice = price;
                        }
                    }
                });
            }
        });
        if (kayakPrice !== Infinity) {
            return kayakPrice;
        }
    }


    let minPrice = Infinity;

    // First pass: check for a non-zero base price across all seasons.
    excursion.seasons.forEach(season => {
      adultIndices.forEach(index => {
        if (index < season.prices.length) {
          const price = season.prices[index];
          if (price > 0 && price < minPrice) {
            minPrice = price;
          }
        }
      });
    });
    
    // If no base price was found (or it's 0), check optional prices.
    if (minPrice === Infinity) {
      excursion.seasons.forEach(season => {
        if (season.optionalPrices) {
          Object.values(season.optionalPrices).forEach(priceList => {
            adultIndices.forEach(index => {
              if (index < priceList.length) {
                const price = priceList[index];
                if (price > 0 && price < minPrice) {
                  minPrice = price;
                }
              }
            });
          });
        }
      });
    }

    return minPrice === Infinity ? null : minPrice;
  };

  const startingPrice = getStartingPrice(excursion);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/excursion/${excursion.id}`} className="block">
        <img 
          className="w-full h-48 object-cover" 
          src={excursion.images[0]} 
          alt={excursion.title} 
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        {activityText && (
            <div className="flex items-center mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="ml-2 text-xs font-semibold text-red-600 uppercase tracking-wider">{activityText}</span>
            </div>
          )}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{excursion.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excursion.shortDescription}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          {startingPrice !== null ? (
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Desde</span>
                <p className="text-2xl font-bold" style={{color: '#1D2D56'}}>
                  ${startingPrice.toLocaleString('es-AR')}
                </p>
                <span className="text-xs text-gray-500">por adulto</span>
              </div>
              <Link 
                to={`/excursion/${excursion.id}`} 
                className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-px"
              >
                Ver más
              </Link>
            </div>
          ) : (
            <Link 
              to={`/excursion/${excursion.id}`} 
              className="mt-2 block text-center w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Ver detalles
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExcursionCard;
