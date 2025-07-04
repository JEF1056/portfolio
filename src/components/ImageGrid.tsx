import React, { useMemo } from "react";
import { aboutImagesList } from "../utils/imageImports";
import { useMultipleImageAspectRatios } from "../hooks/useImageAspectRatio";

interface ImageGridProps {
  className?: string;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ className = "" }) => {
  // Memoize image sources to prevent re-creation on every render
  const imageSources = useMemo(() => aboutImagesList.map((img) => img.src), []);
  const { getDimensions, loading } = useMultipleImageAspectRatios(imageSources);

  if (loading) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500">Loading images...</p>
      </div>
    );
  }

  if (aboutImagesList.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500">
          No about images found. Please add images to the assets/about folder.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {aboutImagesList.map((image) => {
          const dimensions = getDimensions(image.src);

          if (!dimensions) {
            return null;
          }

          // Use the detected aspect ratio class
          const aspectClass = dimensions.aspectClass;

          return (
            <div key={image.id} className="flex-shrink-0">
              <div
                className={`${aspectClass} overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  title={`${dimensions.width} × ${dimensions.height} (${dimensions.orientation})`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
