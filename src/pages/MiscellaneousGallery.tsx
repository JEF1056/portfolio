import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { GalleryLayout } from "../components/GalleryLayout";
import {
  miscellaneousGallery,
  getAllImagesRandom,
} from "../utils/galleryImports";

const MiscellaneousGallery: React.FC = () => {
  // Get all images in random order for the full gallery page
  const randomizedImages = useMemo(
    () => getAllImagesRandom(miscellaneousGallery),
    [],
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="px-4 sm:px-8 lg:px-40 flex justify-center py-6 lg:py-8">
        <div className="flex flex-col max-w-[960px] w-full">
          <h2 className="text-[#141414] tracking-tight text-2xl sm:text-3xl lg:text-[28px] font-bold leading-tight px-4 text-center pb-4 pt-4">
            Miscellaneous Photography
          </h2>
          <p className="text-[#141414] text-base sm:text-lg font-normal leading-normal pb-6 pt-1 px-4 text-center max-w-4xl mx-auto">
            Life's beautiful spontaneous moments that don't fit in a box but
            capture the heart perfectly. From creative experiments to unexpected
            discoveries, these images celebrate the art of seeing beauty
            everywhere.
          </p>
        </div>
      </div>

      {/* Miscellaneous Gallery with Lens Preview */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-4 flex-1">
        <GalleryLayout images={randomizedImages} forceSquare={true} />
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#f8f9fa] py-8 sm:py-12 mt-auto">
        <div className="px-4 sm:px-8 lg:px-40">
          <div className="max-w-[960px] mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-4">
              Have a Unique Vision?
            </h3>
            <p className="text-[#141414] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Sometimes the best shots come from the most unexpected moments.
              Let's collaborate on something creative and capture images that
              tell your unique story in your own distinctive way.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#141414] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousGallery;
