import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../galleryData';

const Hero: React.FC = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8 md:py-16">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] lg:min-h-[500px]">
          {/* Mobile: Portrait first, Desktop: Text content on left */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6 hero-slide-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#141414] leading-tight hero-fade-up">
                Jess Fan
              </h1>
              <div className="gradient-bar fade-up-delayed"></div>
            </div>
            
            <div className="space-y-4 hero-fade-up-delay">
              <h2 className="text-xl md:text-2xl font-medium text-[#757575] leading-relaxed">
                Photographer & Visual Storyteller
              </h2>
              <p className="text-base md:text-lg text-[#757575] leading-relaxed max-w-md">
                Capturing life's most precious moments through the lens of creativity and emotion. 
                Specializing in events, portraits, street photography, nature, and concert photography.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 hero-fade-up-delay-long">
              <button 
                onClick={() => {
                  const firstCategory = document.querySelector('[data-category="event"]');
                  if (firstCategory) {
                    firstCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-3 bg-[#141414] text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </button>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full px-8 py-3 border-2 border-[#141414] text-[#141414] rounded-full font-medium hover:bg-[#141414] hover:text-white transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          
          {/* Mobile: Portrait first, Desktop: Portrait on right */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end hero-slide-right mobile-hero-spacing">
            <div className="relative group">
              {/* First floating background element */}
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl animate-float group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"></div>
              
              {/* Second floating background card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl animate-gentle-float group-hover:-rotate-6 group-hover:scale-110 transition-all duration-700 ease-in-out opacity-60 -z-10"></div>
              
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={images[0]}
                  alt="Jess Fan - Photographer"
                  className="w-64 h-80 md:w-80 md:h-96 object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#141414] rounded-full animate-pulse delay-700"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
