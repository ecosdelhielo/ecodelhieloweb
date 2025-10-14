import React from 'react';
import Modal from './Modal';
import { MenuDetails } from '../types';
import LeafIcon from './icons/LeafIcon';
import WheatIcon from './icons/WheatIcon';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  menu: MenuDetails;
}

const MenuSection: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div>
    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const iconMap = {
  vegetarian: {
    icon: LeafIcon,
    color: 'text-green-600',
  },
  celiac: {
    icon: WheatIcon,
    color: 'text-amber-600',
  }
};


const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, menu }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Menú de la Excursión">
      <div className="space-y-6">
        <MenuSection title={menu.entrée.title} description={menu.entrée.description} />
        <MenuSection title={menu.mainCourse.title} description={menu.mainCourse.description} />
        <MenuSection title={menu.dessert.title} description={menu.dessert.description} />
        <MenuSection title={menu.beverages.title} description={menu.beverages.description} />
        
        {menu.notes && menu.notes.length > 0 && (
          <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
            {menu.notes.map((note, index) => {
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
    </Modal>
  );
};

export default MenuModal;