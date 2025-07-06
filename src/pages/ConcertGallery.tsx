import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { GalleryLayout } from "../components/GalleryLayout";
import { concertGallery, getAllImagesRandom } from "../utils/galleryImports";

const ConcertGallery: React.FC = () => {
  // Get all images in random order for the full gallery page
  const randomizedImages = useMemo(
    () => getAllImagesRandom(concertGallery),
    [],
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="px-4 sm:px-8 lg:px-40 flex justify-center py-6 lg:py-8">
        <div className="flex flex-col max-w-[960px] w-full">
          <h2 className="text-[#141414] tracking-tight text-2xl sm:text-3xl lg:text-[28px] font-bold leading-tight px-4 text-center pb-4 pt-4">
            Concert Photography
          </h2>
          <p className="text-[#141414] text-base sm:text-lg font-normal leading-normal pb-6 pt-1 px-4 text-center max-w-4xl mx-auto">
            Capturing the raw energy and electric atmosphere of live music. From
            intimate acoustic sets to arena rock shows, I freeze the explosive
            moments that define the connection between artist and audience.
          </p>
        </div>
      </div>

      {/* Concert Gallery with Lens Preview */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-4 mb-8">
        <GalleryLayout images={randomizedImages} forceSquare={true} />
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#f8f9fa] py-8 sm:py-12">
        <div className="px-4 sm:px-8 lg:px-40">
          <div className="max-w-[960px] mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-4">
              Need Concert Coverage?
            </h3>
            <p className="text-[#141414] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              From local venues to major festivals, I capture the intensity and
              passion of live music. Let's document your show and create images
              that amplify the energy of your performance.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#141414] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Book Concert Shoot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertGallery;
