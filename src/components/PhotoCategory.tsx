import React from "react";
import { Link } from "react-router-dom";

interface PhotoCategoryProps {
  title: string;
  description: string;
  route: string;
  featuredImage: string | null;
  galleryImages: string[];
  dataAttribute?: string;
}

const PhotoCategory: React.FC<PhotoCategoryProps> = ({
  title,
  description,
  route,
  featuredImage,
  galleryImages,
  dataAttribute,
}) => {
  return (
    <>
      {/* Mobile: Section header above grid */}
      <div className="md:hidden mb-4 px-2">
        <h2 className="text-xl font-bold text-[#141414] mb-2">
          {title} Photography
        </h2>
        <p className="text-[#757575] text-sm">{description}</p>
      </div>

      {/* Desktop: Large featured image separate from grid */}
      <div
        className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 p-2 md:p-4"
        data-category={dataAttribute}
      >
        <div className="flex flex-col gap-3 pb-3">
          {featuredImage && (
            <Link to={route}>
              <img
                className="w-full aspect-[4/3] object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={featuredImage}
                alt={`${title} Photography`}
              />
            </Link>
          )}
          <div>
            <p className="text-[#141414] text-base font-medium leading-normal">
              {title}
            </p>
            <p className="text-[#757575] text-sm font-normal leading-normal">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile & Desktop: Gallery grid with featured image integrated on mobile */}
      <div
        className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 p-2 md:p-4"
        data-category={dataAttribute}
      >
        {/* Mobile: Featured image as first grid item (no text to avoid breaking grid) */}
        {featuredImage && (
          <div className="md:hidden flex flex-col gap-3">
            <Link to={route}>
              <img
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={featuredImage}
                alt={`${title} Photography`}
              />
            </Link>
          </div>
        )}

        {/* Gallery preview images */}
        {galleryImages.map((image, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Link to={route}>
              <img
                className="w-full aspect-square object-cover rounded-xl hover:opacity-90 transition-opacity"
                src={image}
                alt={`${title} Photo ${index + 1}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoCategory;
