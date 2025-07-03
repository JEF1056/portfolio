import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../galleryData';

const Hero: React.FC = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8 md:py-16">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] lg:min-h-[500px]">
          {/* Mobile: Portrait first, Desktop: Text content on left */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#141414] leading-tight animate-slide-up">
                Jess Fan
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#141414] to-gray-400 animate-expand"></div>
            </div>
            
            <div className="space-y-4 animate-fade-in-up animation-delay-300">
              <h2 className="text-xl md:text-2xl font-medium text-[#757575] leading-relaxed">
                Photographer & Visual Storyteller
              </h2>
              <p className="text-base md:text-lg text-[#757575] leading-relaxed max-w-md">
                Capturing life's most precious moments through the lens of creativity and emotion. 
                Specializing in events, portraits, street photography, nature, and concert photography.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
              <button 
                onClick={() => {
                  const firstCategory = document.querySelector('[data-category="event"]');
                  if (firstCategory) {
                    firstCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-8 py-3 bg-[#141414] text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </button>
              <Link to="/contact">
                <button className="px-8 py-3 border-2 border-[#141414] text-[#141414] rounded-full font-medium hover:bg-[#141414] hover:text-white transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          
          {/* Mobile: Portrait first, Desktop: Portrait on right */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              {/* Floating background element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f2f2f2] to-transparent rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 animate-float"></div>
              
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={images[0]}
                  alt="Jess Fan - Photographer"
                  className="w-64 h-80 md:w-80 md:h-96 object-cover animate-gentle-zoom"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#141414] rounded-full animate-pulse animation-delay-700"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
