import React, { useMemo } from 'react';
import { GalleryLayout } from '../components/GalleryLayout';
import { eventGallery, getAllImagesRandom } from '../utils/galleryImports';

const EventGallery: React.FC = () => {
  // Get all images in random order for the full gallery page
  const randomizedImages = useMemo(() => getAllImagesRandom(eventGallery), []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 sm:px-8 lg:px-40 flex justify-center py-8 lg:py-12">
        <div className="flex flex-col max-w-[960px] w-full">
          <h2 className="text-[#141414] tracking-tight text-2xl sm:text-3xl lg:text-[28px] font-bold leading-tight px-4 text-center pb-6 pt-8">
            Event Photography
          </h2>
          <p className="text-[#141414] text-base sm:text-lg font-normal leading-normal pb-8 pt-1 px-4 text-center max-w-4xl mx-auto">
            Capturing life's most precious celebrations and milestones. From intimate gatherings to grand occasions, 
            I document the authentic emotions, connections, and memories that make each event uniquely yours.
          </p>
        </div>
      </div>
      
      {/* Event Gallery with Lens Preview */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
        <GalleryLayout 
          images={randomizedImages}
          title="Event Gallery"
          forceSquare={true}
        />
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-[#f8f9fa] py-12 sm:py-16">
        <div className="px-4 sm:px-8 lg:px-40">
          <div className="max-w-[960px] mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-4">
              Planning an Event?
            </h3>
            <p className="text-[#141414] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Let me help you preserve every precious moment. Whether it's a wedding, birthday, corporate event, 
              or family celebration, I'll capture the joy and emotion that makes your event unforgettable.
            </p>
            <button className="bg-[#141414] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Book Event Coverage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
