import React from 'react';
import { SpegazziniMenu } from '../types';

interface SpegazziniMenuDisplayProps {
  menus: SpegazziniMenu[];
}

const MenuCard: React.FC<{ menu: SpegazziniMenu }> = ({ menu }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 w-full">
    <h3 className="text-xl font-bold text-blue-800 mb-1">{menu.title}</h3>
    {menu.notes && <p className="text-sm font-semibold text-amber-600 mb-4">{menu.notes}</p>}
    <div className="space-y-3 text-gray-700 mt-4">
      <p><strong className="font-semibold text-gray-800">Entrada:</strong> {menu.entrée}</p>
      <p><strong className="font-semibold text-gray-800">Principal:</strong> {menu.mainCourse}</p>
      <p><strong className="font-semibold text-gray-800">Postre:</strong> {menu.dessert}</p>
      <p><strong className="font-semibold text-gray-800">Incluye:</strong> {menu.includes}</p>
    </div>
  </div>
);

const SpegazziniMenuDisplay: React.FC<SpegazziniMenuDisplayProps> = ({ menus }) => {
  return (
    <div className="space-y-6">
      {menus.map((menu) => (
        <MenuCard key={menu.title} menu={menu} />
      ))}
    </div>
  );
};

export default SpegazziniMenuDisplay;
