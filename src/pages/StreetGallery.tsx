import React from 'react';
import { images } from '../galleryData';

const StreetGallery: React.FC = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#141414] mb-4">Street Photography</h1>
          <p className="text-[#757575] text-lg">
            Urban moments and candid scenes that tell the story of city life.
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img 
                className="w-full aspect-[3/4] object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={image}
                alt={`Street Photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreetGallery;
