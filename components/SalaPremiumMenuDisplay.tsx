import React from 'react';
import { SalaPremiumDetails } from '../types';
import LeafIcon from './icons/LeafIcon';
import WheatIcon from './icons/WheatIcon';
import ExclamationTriangleIcon from './icons/ExclamationTriangleIcon';

const iconMap = {
  vegetarian: { icon: LeafIcon, color: 'text-green-600' },
  celiac: { icon: WheatIcon, color: 'text-amber-600' },
};

const SalaPremiumMenuDisplay: React.FC<{ details: SalaPremiumDetails }> = ({ details }) => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-gray-700">{details.description}</p>
        <div className="mt-3 pt-3 border-t border-blue-300 flex items-start space-x-2">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 font-semibold">{details.warning}</p>
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-gray-800">Menú Gourmet de 5 Pasos</h3>
        {details.menu.map((item, index) => (
          <div key={index} className="pl-4 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900">{item.category}</h4>
            <p className="text-gray-600">{item.item}</p>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-lg font-bold text-gray-800">{details.beverages.title}</h4>
        <p className="text-gray-600">{details.beverages.description}</p>
      </div>

      {details.notes && details.notes.length > 0 && (
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {details.notes.map((note, index) => {
              const IconComponent = iconMap[note.type].icon;
              const iconColor = iconMap[note.type].color;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <IconComponent className={`h-6 w-6 flex-shrink-0 mt-0.5 ${iconColor}`} />
                  <p className="text-gray-700">{note.text}</p>
                </div>
              );
            })}
          </div>
      )}
    </div>
  );
};

export default SalaPremiumMenuDisplay;
