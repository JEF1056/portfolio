import React from 'react';

interface HeroImageProps {
  imageUrl: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  return (
    <div className="p-4"> {/* Consistent padding with ImageGrid */}
      <div className="w-full flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-80">
        <img 
          src={imageUrl} 
          alt="Hero image" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
