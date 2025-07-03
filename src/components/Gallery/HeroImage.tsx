import React from 'react';

interface HeroImageProps {
  imageUrl: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div className="w-full flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80">
          <img 
            src={imageUrl} 
            alt="Hero image" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
