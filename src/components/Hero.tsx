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
                From intimate portraits to electrifying concerts, memorable events to life's beautiful miscellany.
              </p>
              
              {/* Instagram Handle */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@jessfan.photos</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 hero-fade-up-delay-long">
              <button 
                onClick={() => {
                  const firstCategory = document.querySelector('[data-attribute="portrait"]');
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
