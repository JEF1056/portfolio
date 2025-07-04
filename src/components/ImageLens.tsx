import React, { useMemo } from 'react';
import { useImageAspectRatio } from '../hooks/useImageAspectRatio';
import type { GalleryImage } from '../types';

interface ImageLensProps {
  image: GalleryImage | null;
  onClose: () => void;
  className?: string;
}

export const ImageLens: React.FC<ImageLensProps> = ({ 
  image, 
  onClose, 
  className = '' 
}) => {
  // Get image dimensions and aspect ratio
  const { dimensions, loading } = useImageAspectRatio(image?.src || '');
  
  // Calculate dynamic container aspect ratio based on image
  const containerAspectRatio = useMemo(() => {
    if (!dimensions) return 'aspect-[4/3]'; // Default fallback
    
    const ratio = dimensions.aspectRatio;
    if (ratio >= 1.5) return 'aspect-[3/2]';  // Wide landscape
    if (ratio >= 1.2) return 'aspect-[4/3]';  // Standard landscape
    if (ratio >= 0.9) return 'aspect-square'; // Square-ish
    if (ratio >= 0.7) return 'aspect-[3/4]';  // Standard portrait
    return 'aspect-[2/3]'; // Tall portrait
  }, [dimensions]);

  if (!image) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 rounded-xl aspect-[4/3] ${className}`}>
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">📷</div>
          <p className="text-lg">Select an image to preview</p>
          <p className="text-sm">Click on any image from the gallery</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl aspect-[4/3] ${className}`}>
        <div className="text-center text-gray-500">
          <div className="animate-spin w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full mb-4"></div>
          <p className="text-sm">Loading preview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-black rounded-xl overflow-hidden ${containerAspectRatio} ${className}`}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
        aria-label="Close preview"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image container */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Image info overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-1">
            {image.category.charAt(0).toUpperCase() + image.category.slice(1)} Photography
          </h3>
          <p className="text-sm text-gray-300">
            {image.filename}
          </p>
          {image.isFeatured && (
            <span className="inline-block mt-2 px-2 py-1 bg-yellow-500 text-black text-xs font-medium rounded">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
