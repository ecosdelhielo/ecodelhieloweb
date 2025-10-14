import React from 'react';
import { Review } from '../data/reviews';
import StarIcon from './icons/StarIcon';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col min-h-[22rem]">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-6 flex-grow">
        "{review.quote}"
      </blockquote>
      <footer className="mt-auto">
        <p className="font-bold text-gray-800">{review.author}</p>
        <p className="text-sm text-gray-500">{review.location}</p>
      </footer>
    </div>
  );
};

export default ReviewCard;