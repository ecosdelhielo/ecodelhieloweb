import React, { useState, useEffect, useCallback, useRef } from 'react';
import { reviews } from '../data/reviews';
import ReviewCard from './ReviewCard';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(nextSlide, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, nextSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-white py-16 sm:py-20 pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#1D2D56' }}>
            Lo que dicen nuestros viajeros
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Opiniones reales de quienes confiaron en nosotros para su aventura en la Patagonia.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-1 py-1">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2.5 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition z-10"
            aria-label="Reseña anterior"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2.5 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition z-10"
            aria-label="Siguiente reseña"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-current={currentIndex === index}
                aria-label={`Ir a la reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;