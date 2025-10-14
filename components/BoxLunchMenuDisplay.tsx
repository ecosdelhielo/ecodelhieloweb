import React from 'react';
import { BoxLunchDetails } from '../types';
import LeafIcon from './icons/LeafIcon';
import WheatIcon from './icons/WheatIcon';

const iconMap = {
  vegetarian: { icon: LeafIcon, color: 'text-green-600' },
  celiac: { icon: WheatIcon, color: 'text-amber-600' },
};

const BoxLunchMenuDisplay: React.FC<{ details: BoxLunchDetails }> = ({ details }) => {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 font-medium text-center bg-blue-50 p-3 rounded-lg">{details.intro}</p>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{details.optionsTitle}</h3>
        {details.options.map((option, index) => (
          <div key={index} className="pl-4 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900">{option.title}</h4>
            <p className="text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-lg font-bold text-gray-800">{details.sideDish.title}</h4>
        <p className="text-gray-600">{details.sideDish.description}</p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-gray-800">{details.dessert.title}</h4>
        <p className="text-gray-600">{details.dessert.description}</p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-gray-800">{details.beverages.title}</h4>
        <p className="text-gray-600">{details.beverages.description}</p>
      </div>

      {details.notes && details.notes.length > 0 && (
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
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

export default BoxLunchMenuDisplay;
