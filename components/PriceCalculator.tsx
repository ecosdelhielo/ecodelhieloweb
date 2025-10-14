import React, { useState, useEffect, useMemo } from 'react';
import { Excursion, AgeCategory, Season } from '../types';
import { WHATSAPP_BUSINESS_LINK } from '../constants';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import TrashIcon from './icons/TrashIcon';
import CalendarIcon from './icons/CalendarIcon';
import UserIcon from './icons/UserIcon';

interface PriceCalculatorProps {
  excursion: Excursion;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ excursion }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState<number>(-1);
  const [passengers, setPassengers] = useState<{ id: number; age: number }[]>([]);
  const [includeTransfer, setIncludeTransfer] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [priceBreakdown, setPriceBreakdown] = useState<Record<AgeCategory, number>>({ Adulto: 0, Menor: 0, Infante: 0, Jubilado: 0 });
  
  const [selectedOptionalToggles, setSelectedOptionalToggles] = useState<Record<string, boolean>>({});
  const [selectedOptionalCounts, setSelectedOptionalCounts] = useState<Record<string, number>>({});

  const perPersonOptionals = useMemo(() => excursion.optionalActivities?.filter(o => o.selectionType === 'per-person').sort((a,b) => (b.ageMin || 0) - (a.ageMin || 0)) || [], [excursion.optionalActivities]);
  const toggleOptionals = useMemo(() => excursion.optionalActivities?.filter(o => o.selectionType !== 'per-person') || [], [excursion.optionalActivities]);

  const minAgeForExcursion = useMemo(() => {
    if (!excursion.ageRules || excursion.ageRules.length === 0) {
      return 0;
    }
    return Math.min(...excursion.ageRules.map(rule => rule.ageMin));
  }, [excursion.ageRules]);

  // Reset state when excursion changes
  useEffect(() => {
    const initialToggles: Record<string, boolean> = {};
    toggleOptionals.forEach(opt => {
      initialToggles[opt.id] = false;
    });
    setSelectedOptionalToggles(initialToggles);

    const initialCounts: Record<string, number> = {};
    perPersonOptionals.forEach(opt => {
      initialCounts[opt.id] = 0;
    });
    setSelectedOptionalCounts(initialCounts);
    
    const defaultAge = Math.max(30, minAgeForExcursion);
    setPassengers([{ id: 1, age: defaultAge }]);
    setIncludeTransfer(false);

  }, [excursion.id, toggleOptionals, perPersonOptionals, minAgeForExcursion]);


  const currentSeason = selectedSeasonIndex > -1 ? excursion.seasons[selectedSeasonIndex] : undefined;
  
  // Set initial date and season
  useEffect(() => {
    if (excursion.seasons.length === 0) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeSeasonIndex = excursion.seasons.findIndex(s => {
      const startDate = new Date(s.startDate + 'T12:00:00Z');
      const endDate = new Date(s.endDate + 'T12:00:00Z');
      return today >= startDate && today <= endDate;
    });

    if (activeSeasonIndex !== -1) {
      setSelectedSeasonIndex(activeSeasonIndex);
      setSelectedDate(today.toISOString().split('T')[0]);
      return;
    }
    
    const upcomingSeasons = excursion.seasons
      .map((season, index) => ({ ...season, index }))
      .filter(s => new Date(s.startDate + 'T12:00:00Z') > today)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

    if (upcomingSeasons.length > 0) {
      const firstUpcomingSeason = upcomingSeasons[0];
      setSelectedSeasonIndex(firstUpcomingSeason.index);
      setSelectedDate(firstUpcomingSeason.startDate);
    } else {
      const lastSeason = excursion.seasons[excursion.seasons.length - 1];
      if (lastSeason) {
        setSelectedSeasonIndex(excursion.seasons.length - 1);
        setSelectedDate(lastSeason.startDate);
      }
    }
  }, [excursion.seasons]);
  
  // Handle date change and find corresponding season
  const handleDateChange = (dateString: string) => {
    setSelectedDate(dateString);

    if (!dateString) {
      setSelectedSeasonIndex(-1);
      return;
    }

    const newDate = new Date(dateString + 'T12:00:00Z');
    
    const seasonIndex = excursion.seasons.findIndex(s => {
      const startDate = new Date(s.startDate + 'T12:00:00Z');
      const endDate = new Date(s.endDate + 'T12:00:00Z');
      return newDate >= startDate && newDate <= endDate;
    });

    setSelectedSeasonIndex(seasonIndex);
  };

  const handleAddPassenger = () => {
    const defaultAge = Math.max(30, minAgeForExcursion);
    setPassengers(prev => [...prev, { id: Date.now(), age: defaultAge }]);
  };

  const handleRemovePassenger = (id: number) => {
    if (passengers.length <= 1) return;
    setPassengers(prev => prev.filter(p => p.id !== id));
  };

  const handleAgeChange = (id: number, age: number) => {
    const newAge = Math.max(minAgeForExcursion, age);
    setPassengers(prev => prev.map(p => p.id === id ? { ...p, age: newAge } : p));
  };
  
  const handleToggleChange = (optId: string) => {
    setSelectedOptionalToggles(prev => ({...prev, [optId]: !prev[optId]}));
  };
  
  const handleCountChange = (optId: string, newCount: number) => {
    if (newCount < 0) return;

    // FIX: Explicitly type the accumulator `sum` as a number to resolve a type inference issue.
    const totalSelected = perPersonOptionals.reduce((sum: number, opt) => {
        return sum + (opt.id === optId ? newCount : (selectedOptionalCounts[opt.id] || 0));
    }, 0);

    if (totalSelected > passengers.length) {
        return;
    }

    setSelectedOptionalCounts(prev => ({ ...prev, [optId]: newCount }));
  };


  useEffect(() => {
    if (!currentSeason) {
      setTotalPrice(0);
      setPriceBreakdown({ Adulto: 0, Menor: 0, Infante: 0, Jubilado: 0 });
      return;
    }

    let total = 0;
    const breakdown: Record<AgeCategory, number> = { Adulto: 0, Menor: 0, Infante: 0, Jubilado: 0 };

    passengers.forEach(passenger => {
      const ruleIndex = excursion.ageRules.findIndex(r => passenger.age >= r.ageMin && passenger.age <= r.ageMax);
      if (ruleIndex !== -1) {
        total += currentSeason.prices[ruleIndex] || 0;
        const rule = excursion.ageRules[ruleIndex];
        breakdown[rule.category] = (breakdown[rule.category] || 0) + 1;
      }
    });

    if (excursion.transfer === 'optional' && includeTransfer && currentSeason) {
        if (currentSeason.transferPrices) {
            passengers.forEach(passenger => {
                const ruleIndex = excursion.ageRules.findIndex(r => passenger.age >= r.ageMin && passenger.age <= r.ageMax);
                if (ruleIndex !== -1) {
                    const transferCost = currentSeason.transferPrices[ruleIndex];
                    if (typeof transferCost === 'number') {
                        total += transferCost;
                    }
                }
            });
        } 
        else if (typeof currentSeason.transferPrice === 'number') {
            total += currentSeason.transferPrice * passengers.length;
        }
    }
    
    if (currentSeason.optionalPrices) {
        let availablePassengers = [...passengers];

        for (const opt of perPersonOptionals) {
            const count = selectedOptionalCounts[opt.id];
            if (count > 0) {
                const priceList = currentSeason.optionalPrices[opt.id];
                if (!priceList) continue;

                const eligibleForThisOpt = availablePassengers.filter(p => {
                    const min = opt.ageMin ?? 0;
                    const max = opt.ageMax ?? 150;
                    return p.age >= min && p.age <= max;
                });
                
                const assignedPassengers = eligibleForThisOpt.slice(0, count);

                assignedPassengers.forEach(p => {
                    const ruleIndex = excursion.ageRules.findIndex(r => p.age >= r.ageMin && p.age <= r.ageMax);
                    if (ruleIndex !== -1) {
                        total += priceList[ruleIndex] || 0;
                    }
                });

                const assignedIds = new Set(assignedPassengers.map(p => p.id));
                availablePassengers = availablePassengers.filter(p => !assignedIds.has(p.id));
            }
        }
        
        for (const optId in selectedOptionalToggles) {
            if (selectedOptionalToggles[optId]) {
                passengers.forEach(passenger => {
                    const ruleIndex = excursion.ageRules.findIndex(r => passenger.age >= r.ageMin && passenger.age <= r.ageMax);
                    if (ruleIndex !== -1) {
                        const priceList = currentSeason.optionalPrices[optId];
                        if (priceList) {
                            total += priceList[ruleIndex] || 0;
                        }
                    }
                });
            }
        }
    }

    setTotalPrice(total);
    setPriceBreakdown(breakdown);

  }, [passengers, includeTransfer, excursion, currentSeason, selectedOptionalToggles, selectedOptionalCounts, perPersonOptionals, toggleOptionals]);
  
  const hasOptionals = excursion.transfer === 'optional' || (excursion.optionalActivities && excursion.optionalActivities.length > 0);
  
  // FIX: Explicitly typing the accumulator `sum` as a number to resolve a potential type inference issue where it could be inferred as `unknown`.
  const totalPerPersonSelected = perPersonOptionals.reduce((sum: number, opt) => sum + (selectedOptionalCounts[opt.id] || 0), 0);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-6 rounded-xl shadow-lg sticky top-24">
      <h3 className="text-3xl font-bold mb-5 text-center">Calculá tu tarifa</h3>

      <div className="space-y-5">
        <div>
          <label htmlFor="excursion-date" className="block text-sm font-semibold text-blue-100 mb-1">Fecha de la excursión</label>
          <div className="relative">
            <input
              id="excursion-date"
              type="date"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-white/30 rounded-lg focus:ring-white focus:border-white bg-white/10 text-white appearance-none cursor-pointer"
              style={{ colorScheme: 'dark' }}
              disabled={excursion.seasons.length === 0}
            />
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-200 pointer-events-none"/>
          </div>
        </div>
        
        <div>
           <label className="block text-sm font-semibold text-blue-100 mb-1">Pasajeros</label>
           <p className="text-xs text-blue-200 mb-2 px-1">Indica la edad de cada pasajero.</p>
           <div className="border border-white/30 rounded-lg bg-white/10 p-3">
              <div className="flex flex-wrap gap-3">
                {passengers.map((p, index) => (
                    <div key={p.id} className="bg-white/5 p-2 rounded-lg flex items-center gap-2 flex-grow sm:flex-grow-0">
                        <UserIcon className="h-5 w-5 text-blue-200 flex-shrink-0" />
                        <label htmlFor={`age-${p.id}`} className="font-medium text-sm text-blue-100 whitespace-nowrap">Pas. {index + 1}</label>
                        <input 
                            id={`age-${p.id}`}
                            type="number" 
                            value={p.age} 
                            onChange={e => handleAgeChange(p.id, parseInt(e.target.value) || 0)} 
                            className="w-16 text-center border-white/20 rounded-md py-1 bg-white/10 text-white font-semibold focus:ring-white focus:border-white"
                            placeholder="Edad"
                            min={minAgeForExcursion}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemovePassenger(p.id)}
                          className="p-1.5 text-white hover:bg-red-500/80 rounded-full transition-colors"
                          aria-label={`Eliminar pasajero ${index + 1}`}
                          style={{ opacity: passengers.length > 1 ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}
                          disabled={passengers.length <= 1}
                        >
                            <TrashIcon className="h-5 w-5"/>
                        </button>
                    </div>
                ))}
              </div>
              <button onClick={handleAddPassenger} className="mt-4 text-white font-semibold flex items-center space-x-2 hover:bg-white/20 p-2 rounded-md w-full justify-center transition-colors">
                <PlusIcon className="h-5 w-5" />
                <span>Agregar pasajero</span>
              </button>
           </div>
            <p className="text-xs text-blue-200 mt-3 px-1">
              * Para acceder a los descuentos para menores, se solicitará DNI o pasaporte al momento de reservar para corroborar la edad.
            </p>
        </div>

        {hasOptionals && (
          <div className="pt-4 mt-4 border-t border-white/20">
            <h4 className="text-lg font-bold text-white mb-3 px-1">Opcionales</h4>
            
            {excursion.id === 'cerro-huiliche' && (
              <p className="text-xs text-blue-200 mb-3 px-1">
                Puedes asignar las opciones de descenso entre los pasajeros. El total no puede superar el número de pasajeros.
              </p>
            )}
            
            <div className="space-y-3">
              {excursion.transfer === 'optional' && (
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span className="font-semibold text-white">Traslado desde tu hotel</span>
                  <label htmlFor="transfer-toggle" className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="transfer-toggle" className="sr-only peer" checked={includeTransfer} onChange={() => setIncludeTransfer(!includeTransfer)} />
                    <div className="w-11 h-6 bg-white/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
                  </label>
                </div>
              )}
              
              {perPersonOptionals.map(opt => {
                const count = selectedOptionalCounts[opt.id] || 0;
                const eligiblePassengersForOpt = passengers.filter(p => {
                  const min = opt.ageMin ?? 0;
                  const max = opt.ageMax ?? 150;
                  return p.age >= min && p.age <= max;
                });
                
                const isPlusDisabled = count >= eligiblePassengersForOpt.length || totalPerPersonSelected >= passengers.length || !currentSeason;

                return (
                  <div key={opt.id} className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex-grow pr-2">
                        <span className="font-semibold text-white">{opt.name}</span>
                        <p className="text-xs text-blue-200 mt-1">{opt.description}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 rounded-full p-1 flex-shrink-0">
                        <button onClick={() => handleCountChange(opt.id, count - 1)} disabled={count <= 0 || !currentSeason} className="p-1.5 text-white hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                          <MinusIcon className="h-5 w-5" />
                        </button>
                        <span className="font-bold text-lg w-5 text-center">{count}</span>
                         <button onClick={() => handleCountChange(opt.id, count + 1)} disabled={isPlusDisabled} className="p-1.5 text-white hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                          <PlusIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    {!currentSeason && eligiblePassengersForOpt.length === 0 && (
                      <p className="text-xs text-yellow-300 mt-2">No hay pasajeros con la edad requerida para esta opción.</p>
                    )}
                  </div>
                )
              })}
              
              {toggleOptionals.map(opt => (
                  <div key={opt.id} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div className="flex-grow pr-2">
                      <span className="font-semibold text-white">{opt.name}</span>
                      <p className="text-xs text-blue-200 mt-1">El precio se suma por cada pasajero.</p>
                    </div>
                    <label htmlFor={`opt-${opt.id}`} className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input type="checkbox" id={`opt-${opt.id}`} className="sr-only peer" checked={selectedOptionalToggles[opt.id] || false} onChange={() => handleToggleChange(opt.id)} disabled={!currentSeason} />
                      <div className="w-11 h-6 bg-white/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"></div>
                    </label>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {excursion.seasons.length === 0 ? (
        <div className="bg-yellow-400/20 border border-yellow-400 text-white p-3 rounded-lg my-4 text-center text-sm">
            <p>Actualmente no hay temporadas disponibles para esta excursión.</p>
        </div>
      ) : (selectedDate && !currentSeason) && (
         <div className="bg-yellow-400/20 border border-yellow-400 text-white p-3 rounded-lg my-4 text-center text-sm">
            <p>La fecha seleccionada está fuera de temporada. Por favor, elegí otra fecha.</p>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-white/30">
        <div className="flex justify-between items-center text-3xl font-bold">
          <span>Total</span>
          <span>ARS ${totalPrice.toLocaleString('es-AR')}</span>
        </div>
        <p className="text-xs text-blue-200 text-right mt-1">Precio estimado, sujeto a confirmación.</p>
      </div>

      <a 
        href={WHATSAPP_BUSINESS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 block w-full text-white text-center font-bold py-3 px-4 rounded-lg transition-colors duration-200 text-lg shadow-lg ${!currentSeason ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
        onClick={(e) => !currentSeason && e.preventDefault()}
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
};

export default PriceCalculator;