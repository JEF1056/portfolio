import React from 'react';
import { images } from '../galleryData';
import Divider from '../components/Divider';
import Hero from '../components/Hero';
import PhotoCategory from '../components/PhotoCategory';

const Home: React.FC = () => {
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
            featuredImage={images[1]}
            galleryImages={[images[0], images[1], images[2]]}
            dataAttribute="portrait"
          />

        <Divider />

        {/* Event Photography Section */}
        <PhotoCategory 
          title="Event"
          description="Capture the essence of your special moments with our event photography services. From weddings to corporate gatherings, we specialize in creating timeless memories."
          route="/gallery/event"
          featuredImage={images[0]}
          galleryImages={[images[0], images[1], images[2]]}
          dataAttribute="event"
        />

        <Divider />

        {/* Concert Photography Section */}
        <PhotoCategory 
          title="Concert"
          description="Experience the energy and excitement of live music through our concert photography. We capture the dynamic performances and passionate crowds that make each show unforgettable."
          route="/gallery/concert"
          featuredImage={images[2]}
          galleryImages={[images[0], images[1], images[2]]}
          dataAttribute="concert"
        />

        <Divider />

        {/* Miscellaneous Photography Section */}
        <PhotoCategory 
          title="Miscellaneous"
          description="Life's beautiful spontaneous moments deserve to be captured too. Explore our collection of creative shots that don't fit in a box but capture the heart perfectly."
          route="/gallery/miscellaneous"
          featuredImage={images[0]}
          galleryImages={[images[0], images[1], images[2]]}
          dataAttribute="miscellaneous"
        />
        </div>
      </div>
    </>
  );
};

export default Home;
