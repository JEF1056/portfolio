import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#141414] mb-6">About Jess Fan</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm Jess, a passionate photographer with a love for capturing life's most meaningful moments. 
            My journey in photography began over a decade ago, and since then, I've had the privilege of 
            documenting everything from intimate portraits to grand celebrations.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            I believe that every photograph tells a story, and my goal is to help you preserve your most 
            cherished memories with artistic vision and technical excellence. Whether it's the energy of 
            a live concert, the beauty of nature, or the quiet moments of everyday life, I strive to 
            capture the essence of each subject.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not behind the camera, you can find me exploring new locations, studying light and 
            composition, or working with clients to bring their creative visions to life.
          </p>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
              alt="Jess Fan - Photographer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold text-[#141414] mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-[#141414] mb-2">Event Photography</h3>
            <p className="text-gray-600">Weddings, parties, corporate events, and special celebrations</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#141414] mb-2">Portrait Sessions</h3>
            <p className="text-gray-600">Individual, family, and professional headshot photography</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#141414] mb-2">Concert Photography</h3>
            <p className="text-gray-600">Live music events, festivals, and venue documentation</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#141414] mb-2">Nature Photography</h3>
            <p className="text-gray-600">Landscape, wildlife, and environmental photography</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
