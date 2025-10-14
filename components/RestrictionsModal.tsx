
import React from 'react';
import Modal from './Modal';
import { RestrictionDetails } from '../types';

interface RestrictionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  restrictions: RestrictionDetails;
}

const RestrictionsModal: React.FC<RestrictionsModalProps> = ({ isOpen, onClose, restrictions }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={restrictions.title}>
      <div className="text-gray-700 space-y-4">
        <p dangerouslySetInnerHTML={{ __html: restrictions.intro }} />
        <ul className="list-disc list-outside space-y-3 pl-5">
          {restrictions.items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
        {restrictions.note && (
          <p className="pt-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: restrictions.note }} />
        )}
      </div>
    </Modal>
  );
};

export default RestrictionsModal;