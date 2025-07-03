import React from 'react';
import ImageCard, { type AspectRatio } from '../ImageCard';

interface ImageData {
  id: string;
  imageUrl: string;
  aspectRatio: AspectRatio;
  alt?: string;
}

interface ImageGridProps {
  images: ImageData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.imageUrl}
          aspectRatio={image.aspectRatio}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
export type { ImageData };
