import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape'; // portrait = 3/4, landscape = video (16:9)
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, aspectRatio }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className={`w-full overflow-hidden rounded-xl ${
        aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'
      }`}>
        <img 
          src={imageUrl} 
          alt="Gallery image" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCard;
