import React, { useState, useMemo } from 'react';
import { useMultipleImageAspectRatios } from '../hooks/useImageAspectRatio';
import { Lens } from './Lens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import type { GalleryImage } from '../types';

interface GalleryLayoutProps {
  images: GalleryImage[];
  title?: string;
  className?: string;
  forceSquare?: boolean;
}

export const GalleryLayout: React.FC<GalleryLayoutProps> = ({ 
  images, 
  title,
  className = '',
  forceSquare = false 
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Memoize image sources to prevent re-creation on every render
  const imageSources = useMemo(() => images.map(img => img.src), [images]);
  const { getDimensions, loading } = useMultipleImageAspectRatios(imageSources);

  const handleImageSelect = (image: GalleryImage) => {
    setSelectedImage(image);
  };



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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-h-[70vh]">
        {/* Left Side: Image Grid */}
        <div className="flex flex-col h-full max-h-[70vh]">
          <h3 className="text-lg font-semibold text-[#141414] mb-4 flex-shrink-0">
            {images.length} photos
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1 overflow-y-auto pr-2 max-h-[calc(70vh-3rem)]">
            {images.map((image) => {
              const dimensions = getDimensions(image.src);
              
              if (!dimensions) {
                return null;
              }
              
              const aspectClass = forceSquare ? 'aspect-square' : dimensions.aspectClass;
              const isSelected = selectedImage?.id === image.id;
              
              return (
                <button
                  key={image.id}
                  onClick={() => handleImageSelect(image)}
                  className={`relative group cursor-pointer transition-all duration-200 ${
                    isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                  }`}
                >
                  <div className={`${aspectClass} overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${
                    isSelected ? 'scale-[0.98]' : 'hover:scale-[1.02]'
                  }`}>
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Featured badge */}
                  {image.isFeatured && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                  
                  {/* Selection overlay */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <div className="bg-blue-500 text-white rounded-full p-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Right Side: Image Lens Preview */}
        <div className="flex flex-col h-full max-h-[70vh]">
          <h3 className="text-lg font-semibold text-[#141414] mb-4 flex-shrink-0">
            {selectedImage ? 'Image Preview' : 'Select an Image'}
          </h3>
          
          {selectedImage ? (
            <div className="w-full h-[calc(70vh-3rem)] flex-shrink-0">
              <Lens
                zoomFactor={2}
                lensSize={150}
              >
              <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[calc(70vh-3rem)] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </Lens>
            </div>
          ) : (
            <div className="flex items-center justify-center bg-gray-50 rounded-xl w-full h-[calc(70vh-3rem)] flex-shrink-0">
              <div className="text-center text-gray-500">
                <FontAwesomeIcon icon={faCamera} className="text-6xl mb-4 text-gray-400" />
                <p className="text-lg">Select an image to preview</p>
                <p className="text-sm">Click on any image from the gallery</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
