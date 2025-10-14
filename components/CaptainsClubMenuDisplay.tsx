import React from 'react';
import { CaptainsClubDetails } from '../types';

const CaptainsClubMenuDisplay: React.FC<{ details: CaptainsClubDetails }> = ({ details }) => {
  return (
    <div className="space-y-6">
      <div className="text-gray-700 space-y-4">
        {details.description.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <div className="space-y-5 pt-5 mt-5 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Menú Exclusivo Captain's Club</h3>
        {details.menu.map((section, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-blue-800 mb-2">{section.title}</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaptainsClubMenuDisplay;