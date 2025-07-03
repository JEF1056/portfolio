import React from 'react';
import { HeroImage } from '../components/Gallery';
import ImageGrid from '../components/Gallery/ImageGrid';
import { images } from '../galleryData';

const Home: React.FC = () => {
  const portraitImages1 = [
    { url: images[0], aspectRatio: 'portrait' as const },
    { url: images[1], aspectRatio: 'portrait' as const },
    { url: images[2], aspectRatio: 'portrait' as const }
  ];

  const landscapeImages = [
    { url: images[0], aspectRatio: 'landscape' as const },
    { url: images[1], aspectRatio: 'landscape' as const },
    { url: images[2], aspectRatio: 'landscape' as const }
  ];

  const portraitImages2 = [
    { url: images[0], aspectRatio: 'portrait' as const },
    { url: images[1], aspectRatio: 'portrait' as const },
    { url: images[2], aspectRatio: 'portrait' as const }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#141414] mb-4">Jess Fan</h1>
        <p className="text-xl text-gray-600 mb-8">Photography Portfolio</p>
      </div>

      {/* Hero Image */}
      <HeroImage imageUrl={images[0]} />
      
      {/* First row of portrait images */}
      <ImageGrid images={portraitImages1} />
      
      {/* Row of landscape images */}
      <ImageGrid images={landscapeImages} />
      
      {/* Second row of portrait images */}
      <ImageGrid images={portraitImages2} />
    </div>
  );
};

export default Home;
