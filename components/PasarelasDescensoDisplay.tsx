import React from 'react';
import { PasarelasDescensoDetails } from '../types';
import QuestionMarkCircleIcon from './icons/QuestionMarkCircleIcon';
import ExclamationTriangleIcon from './icons/ExclamationTriangleIcon';
import InformationCircleIcon from './icons/InformationCircleIcon';

const PasarelasDescensoDisplay: React.FC<{ details: PasarelasDescensoDetails }> = ({ details }) => {
  return (
    <div className="space-y-5">
      {[details.whatYouWillDo, details.scheduleChange, details.idealFor].map((section, index) => (
        <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
          </div>
          <p className="text-gray-700 pl-8">{section.description}</p>
        </div>
      ))}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <InformationCircleIcon className="h-6 w-6 text-yellow-700 mr-2" />
          <h3 className="text-lg font-bold text-yellow-800">{details.considerations.title}</h3>
        </div>
        <p className="text-yellow-800 pl-8 mb-3">{details.considerations.description}</p>
        <div className="pl-8 flex items-start space-x-2 border-t border-yellow-300 pt-3">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 font-semibold">{details.warning}</p>
        </div>
      </div>
    </div>
  );
};

export default PasarelasDescensoDisplay;
