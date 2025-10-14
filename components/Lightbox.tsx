
import React, { useState, useEffect, useCallback } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import XIcon from './icons/XIcon';

interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
  altText: string;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, nextImage, prevImage]);

  if (images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 md:top-2 md:right-2 z-20 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 focus:outline-none"
          aria-label="Cerrar galería"
        >
          <XIcon className="h-6 w-6" />
        </button>
        
        {/* Main Image Container */}
        <div className="relative w-full h-full flex items-center justify-center">
             <img
                key={currentIndex} // Add key to force re-render on change for transitions
                src={images[currentIndex]}
                alt={`${altText} - imagen ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain animate-fade-in"
                style={{animation: 'fadeIn 0.3s ease-in-out'}}
            />
        </div>

        {/* Prev/Next Buttons */}
        {images.length > 1 && (
            <>
                <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-3 hover:bg-white/40 focus:outline-none"
                aria-label="Imagen anterior"
                >
                <ChevronLeftIcon className="h-7 w-7" />
                </button>
                <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-3 hover:bg-white/40 focus:outline-none"
                aria-label="Siguiente imagen"
                >
                <ChevronRightIcon className="h-7 w-7" />
                </button>
            </>
        )}
        
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
