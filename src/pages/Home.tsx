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
      
      <div id="portfolio" className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Portrait Photography Section */}
          <PhotoCategory 
            title="Portrait"
            description="Discover your authentic self through intimate portraiture that reveals the essence of who you are. Each session is a collaborative journey to capture your unique personality, creating timeless images that tell your story with artistry and emotion."
            route="/gallery/portrait"
            featuredImage={portraitImages.featuredImage}
            galleryImages={portraitImages.galleryImages}
            dataAttribute="portrait"
          />

        <Divider />

        {/* Event Photography Section */}
        <PhotoCategory 
          title="Event"
          description="From intimate celebrations to grand milestones, I document the authentic emotions and precious connections that make your events unforgettable. Every moment becomes a treasured memory, captured with passion and precision."
          route="/gallery/event"
          featuredImage={eventImages.featuredImage}
          galleryImages={eventImages.galleryImages}
          dataAttribute="event"
        />

        <Divider />

        {/* Concert Photography Section */}
        <PhotoCategory 
          title="Concert"
          description="Feel the pulse of live music through dynamic concert photography that captures the raw energy between artist and audience. From intimate acoustic sets to electrifying arena shows, I freeze those explosive moments that define the magic of live performance."
          route="/gallery/concert"
          featuredImage={concertImages.featuredImage}
          galleryImages={concertImages.galleryImages}
          dataAttribute="concert"
        />

        <Divider />

        {/* Miscellaneous Photography Section */}
        <PhotoCategory 
          title="Miscellaneous"
          description="Sometimes the most captivating images emerge from unexpected moments and creative experiments. This collection celebrates the art of finding beauty everywhere - from street photography to abstract compositions that don't fit in traditional categories."
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
