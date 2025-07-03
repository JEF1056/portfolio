import React from 'react';
import { images } from '../../galleryData';


interface GalleryPageProps {
  title: string;
  description?: string;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ title, description }) => {
  // For now, using sample images - in a real app, you'd filter by category
  const galleryImages = [
    { url: images[0], aspectRatio: 'portrait' as const },
    { url: images[1], aspectRatio: 'landscape' as const },
    { url: images[2], aspectRatio: 'portrait' as const },
    { url: images[0], aspectRatio: 'landscape' as const },
    { url: images[1], aspectRatio: 'portrait' as const },
    { url: images[2], aspectRatio: 'landscape' as const },
    { url: images[0], aspectRatio: 'portrait' as const },
    { url: images[1], aspectRatio: 'landscape' as const },
    { url: images[2], aspectRatio: 'portrait' as const },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Gallery Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#141414] mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={image.url} 
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
