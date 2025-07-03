import React from 'react';
import { images } from '../galleryData';

const NatureGallery: React.FC = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#141414] mb-4">Nature Photography</h1>
          <p className="text-[#757575] text-base md:text-lg">
            Breathtaking landscapes and wildlife captured in their natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={image}
                alt={`Nature Photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NatureGallery;
