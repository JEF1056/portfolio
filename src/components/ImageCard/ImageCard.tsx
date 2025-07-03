import React from 'react';

export type AspectRatio = 'portrait' | 'landscape';

interface ImageCardProps {
  imageUrl: string;
  aspectRatio: AspectRatio;
  alt?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  imageUrl, 
  aspectRatio, 
  alt = "Gallery image" 
}) => {
  const aspectClass = aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';

  return (
    <div className="flex flex-col gap-3">
      <div
        className={`w-full bg-center bg-no-repeat bg-cover rounded-xl ${aspectClass}`}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
};

export default ImageCard;
