import React, { useMemo } from 'react';
import { useMultipleImageAspectRatios } from '../hooks/useImageAspectRatio';
import type { GalleryImage } from '../types';

interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
  title?: string;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  images, 
  className = '',
  title 
}) => {
  // Memoize image sources to prevent re-creation on every render
  const imageSources = useMemo(() => images.map(img => img.src), [images]);
  const { getDimensions, loading } = useMultipleImageAspectRatios(imageSources);

  if (loading) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500">Loading images...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500">No images found for this gallery.</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-center mb-8 text-[#141414]">
          {title}
        </h2>
      )}
      
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {images.map((image) => {
          const dimensions = getDimensions(image.src);
          
          if (!dimensions) {
            return null;
          }
          
          // Use the detected aspect ratio class
          const aspectClass = dimensions.aspectClass;
          
          return (
            <div
              key={image.id}
              className="flex-shrink-0"
            >
              <div className={`${aspectClass} overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 ${image.isFeatured ? 'ring-2 ring-yellow-400' : ''}`}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  title={`${dimensions.width} × ${dimensions.height} (${dimensions.orientation})${image.isFeatured ? ' - Featured' : ''}`}
                />
              </div>
              {image.isFeatured && (
                <div className="text-center mt-2">
                  <span className="text-xs text-yellow-600 font-medium">Featured</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
