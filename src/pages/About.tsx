import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 sm:px-8 lg:px-40 flex justify-center py-8 lg:py-12">
        <div className="flex flex-col max-w-[960px] w-full">
          <h2 className="text-[#141414] tracking-tight text-2xl sm:text-3xl lg:text-[28px] font-bold leading-tight px-4 text-center pb-6 pt-8">
            About Jess Fan
          </h2>
          <p className="text-[#141414] text-base sm:text-lg font-normal leading-normal pb-8 pt-1 px-4 text-center max-w-4xl mx-auto">
            As a dedicated photographer with over a decade of experience, I specialize in capturing the raw emotions and 
            authentic moments that make life extraordinary. From the electric energy of live concerts to the quiet intimacy 
            of portrait sessions, I believe every frame should tell a story worth remembering. My passion lies in transforming 
            fleeting moments into timeless art, whether I'm documenting the vibrant pulse of street life, the serene beauty 
            of nature, or the celebration of life's most precious events.
          </p>
          
          {/* Image Gallery Grid */}
          <div className="flex w-full bg-white p-4">
            <div className="w-full gap-1 sm:gap-2 overflow-hidden bg-white aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
              <img 
                src="https://images.unsplash.com/photo-1606721977440-052e7c7a1d4c?w=600&h=800&fit=crop&crop=center"
                alt="Photography work sample"
                className="w-full h-full object-cover rounded-none row-span-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=300&fit=crop&crop=center"
                alt="Concert photography sample"
                className="w-full h-full object-cover rounded-none col-span-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop&crop=center"
                alt="Nature photography sample"
                className="w-full h-full object-cover rounded-none col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-[#f8f9fa] py-12 sm:py-16">
        <div className="px-4 sm:px-8 lg:px-40">
          <div className="max-w-[960px] mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-4">
              Ready to Capture Your Story?
            </h3>
            <p className="text-[#141414] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Let's work together to create images that you'll treasure for a lifetime. 
              Every project is unique, and I'd love to hear about your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="bg-[#141414] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-center min-w-[160px]"
              >
                Get In Touch
              </a>
              <a 
                href="/" 
                className="text-[#141414] px-8 py-3 border border-[#141414] rounded-full font-medium hover:bg-[#141414] hover:text-white transition-all duration-200 text-center min-w-[160px]"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
