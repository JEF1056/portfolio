import React from 'react';
import ImageCard from './ImageCard';

interface ImageGridProps {
  images: {
    url: string;
    aspectRatio: 'portrait' | 'landscape';
  }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {images.map((image, index) => (
        <ImageCard 
          key={index}
          imageUrl={image.url}
          aspectRatio={image.aspectRatio}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
