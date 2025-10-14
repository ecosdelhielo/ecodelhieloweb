import React from 'react';
import { Difficulty } from '../types';

interface DifficultyChipProps {
  difficulty: Difficulty;
  large?: boolean;
}

const DifficultyChip: React.FC<DifficultyChipProps> = ({ difficulty, large = false }) => {
  const colorClasses = {
    [Difficulty.Baja]: 'bg-green-100 text-green-800',
    [Difficulty.Media]: 'bg-yellow-100 text-yellow-800',
    [Difficulty.Alta]: 'bg-red-100 text-red-800',
  };

  const sizeClasses = large ? 'px-5 py-2 text-base' : 'px-3 py-1 text-sm';

  return (
    <span className={`font-semibold rounded-full whitespace-nowrap ${colorClasses[difficulty]} ${sizeClasses}`}>
      {large ? `Dificultad: ${difficulty}` : difficulty}
    </span>
  );
};

export default DifficultyChip;