import React from 'react';

interface HeroImageProps {
  imageUrl: string;
  alt?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, alt = "Hero image" }) => {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
          style={{
            backgroundImage: `url("${imageUrl}")`,
          }}
          role="img"
          aria-label={alt}
        />
      </div>
    </div>
  );
};

export default HeroImage;
