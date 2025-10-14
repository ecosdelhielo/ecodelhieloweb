import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  altText: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const mainImage = images[currentIndex];
  const thumbnails = images;

  return (
    <div>
      <div className="mb-4">
        <img 
          src={mainImage} 
          alt={`${altText} - Imagen principal ${currentIndex + 1}`} 
          className="w-full h-[30rem] object-cover rounded-lg shadow-lg transition-opacity duration-300"
          key={mainImage} 
        />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
        {thumbnails.map((img, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-lg overflow-hidden focus:outline-none focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${currentIndex === index ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'}`}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <img 
              src={img} 
              alt={`${altText} - Miniatura ${index + 1}`} 
              className="w-full h-20 object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
