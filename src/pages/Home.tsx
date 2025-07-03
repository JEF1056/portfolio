import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../galleryData';
import Divider from '../components/Divider';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      <Divider />
      
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Event Photography Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <Link to="/gallery/event">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Event Photography"
              />
            </Link>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">Event</p>
              <p className="text-[#757575] text-sm font-normal leading-normal">
                Capture the essence of your special moments with our event photography services. From weddings to corporate gatherings, we specialize in creating timeless memories.
              </p>
            </div>
          </div>
        </div>
        
        {/* Event Gallery Preview */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <Link to="/gallery/event">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Event Photo 1"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/event">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Event Photo 2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/event">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[2]}
                alt="Event Photo 3"
              />
            </Link>
          </div>
        </div>

        <Divider />

        {/* Portrait Photography Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <Link to="/gallery/portrait">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Portrait Photography"
              />
            </Link>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">Portrait</p>
              <p className="text-[#757575] text-sm font-normal leading-normal">
                Elevate your personal brand with our professional portrait photography. We focus on capturing your unique personality and style.
              </p>
            </div>
          </div>
        </div>
        
        {/* Portrait Gallery Preview */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <Link to="/gallery/portrait">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Portrait Photo 1"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/portrait">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Portrait Photo 2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/portrait">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[2]}
                alt="Portrait Photo 3"
              />
            </Link>
          </div>
        </div>

        <Divider />

        {/* Street Photography Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <Link to="/gallery/street">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[2]}
                alt="Street Photography"
              />
            </Link>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">Street</p>
              <p className="text-[#757575] text-sm font-normal leading-normal">
                Explore the vibrant tapestry of urban life through our street photography. We document the candid moments and raw beauty of cityscapes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Street Gallery Preview */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <Link to="/gallery/street">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Street Photo 1"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/street">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Street Photo 2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/street">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[2]}
                alt="Street Photo 3"
              />
            </Link>
          </div>
        </div>

        <Divider />

        {/* Nature Photography Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <Link to="/gallery/nature">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Nature Photography"
              />
            </Link>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">Nature</p>
              <p className="text-[#757575] text-sm font-normal leading-normal">
                Immerse yourself in the breathtaking wonders of the natural world with our nature photography. We capture the serene landscapes and diverse wildlife.
              </p>
            </div>
          </div>
        </div>
        
        {/* Nature Gallery Preview */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <Link to="/gallery/nature">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Nature Photo 1"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/nature">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Nature Photo 2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/nature">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[2]}
                alt="Nature Photo 3"
              />
            </Link>
          </div>
        </div>

        <Divider />

        {/* Concert Photography Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <Link to="/gallery/concert">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Concert Photography"
              />
            </Link>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">Concert</p>
              <p className="text-[#757575] text-sm font-normal leading-normal">
                Experience the energy and excitement of live music through our concert photography. We capture the dynamic performances and passionate crowds.
              </p>
            </div>
          </div>
        </div>
        
        {/* Concert Gallery Preview */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <Link to="/gallery/concert">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[0]}
                alt="Concert Photo 1"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/concert">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[1]}
                alt="Concert Photo 2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery/concert">
              <img 
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={images[2]}
                alt="Concert Photo 3"
              />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
