import React, { useMemo } from 'react';
import Divider from '../components/Divider';
import Hero from '../components/Hero';
import PhotoCategory from '../components/PhotoCategory';
import { portraitGallery, eventGallery, concertGallery, miscellaneousGallery, getRandomImages } from '../utils/galleryImports';
import type { GalleryCategory } from '../types';

// Helper function to get images for PhotoCategory component
const getCategoryImages = (category: GalleryCategory) => {
  const featuredImage = category.featuredImage?.src || category.images[0]?.src || null;
  const randomImages = getRandomImages(category, 3);
  const galleryImages = randomImages.map(img => img.src).filter(src => src); // Filter out empty strings
  
  return {
    featuredImage,
    galleryImages
  };
};

const Home: React.FC = () => {
  const portraitImages = useMemo(() => getCategoryImages(portraitGallery), [portraitGallery]);
  const eventImages = useMemo(() => getCategoryImages(eventGallery), [eventGallery]);
  const concertImages = useMemo(() => getCategoryImages(concertGallery), [concertGallery]);
  const miscellaneousImages = useMemo(() => getCategoryImages(miscellaneousGallery), [miscellaneousGallery]);



  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      <Divider />
      
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Portrait Photography Section */}
          <PhotoCategory 
            title="Portrait"
            description="Elevate your personal brand with our professional portrait photography. We focus on capturing your unique personality and style in every frame."
            route="/gallery/portrait"
            featuredImage={portraitImages.featuredImage}
            galleryImages={portraitImages.galleryImages}
            dataAttribute="portrait"
          />

        <Divider />

        {/* Event Photography Section */}
        <PhotoCategory 
          title="Event"
          description="Capture the essence of your special moments with our event photography services. From weddings to corporate gatherings, we specialize in creating timeless memories."
          route="/gallery/event"
          featuredImage={eventImages.featuredImage}
          galleryImages={eventImages.galleryImages}
          dataAttribute="event"
        />

        <Divider />

        {/* Concert Photography Section */}
        <PhotoCategory 
          title="Concert"
          description="Experience the energy and excitement of live music through our concert photography. We capture the dynamic performances and passionate crowds that make each show unforgettable."
          route="/gallery/concert"
          featuredImage={concertImages.featuredImage}
          galleryImages={concertImages.galleryImages}
          dataAttribute="concert"
        />

        <Divider />

        {/* Miscellaneous Photography Section */}
        <PhotoCategory 
          title="Miscellaneous"
          description="Life's beautiful spontaneous moments deserve to be captured too. Explore our collection of creative shots that don't fit in a box but capture the heart perfectly."
          route="/gallery/miscellaneous"
          featuredImage={miscellaneousImages.featuredImage}
          galleryImages={miscellaneousImages.galleryImages}
          dataAttribute="miscellaneous"
        />
        </div>
      </div>
    </>
  );
};

export default Home;
