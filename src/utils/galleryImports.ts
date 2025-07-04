import type { GalleryImage, GalleryCategory } from '../types';

// Direct imports for each category - more reliable than dynamic filtering
const portraitImagesModules = import.meta.glob('../assets/portrait/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const portraitFeaturedModules = import.meta.glob('../assets/portrait/featured/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const eventImagesModules = import.meta.glob('../assets/event/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const eventFeaturedModules = import.meta.glob('../assets/event/featured/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const concertImagesModules = import.meta.glob('../assets/concert/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const concertFeaturedModules = import.meta.glob('../assets/concert/featured/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const miscellaneousImagesModules = import.meta.glob('../assets/misc/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

const miscellaneousFeaturedModules = import.meta.glob('../assets/misc/featured/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true,
  as: 'url'
});

/**
 * Helper function to create gallery category from modules
 */
const createCategoryFromModules = (
  categoryName: string, 
  imagesModules: Record<string, string>, 
  featuredModules: Record<string, string>
): GalleryCategory => {
  // Process regular images
  const images: GalleryImage[] = Object.entries(imagesModules).map(([path, src]) => {
    const filename = path.split('/').pop() || '';
    const name = filename.replace(/\.(png|jpe?g|svg|webp)$/i, '');
    
    return {
      id: `${categoryName}-${name}`,
      src: src as string,
      alt: `${categoryName} photography - ${name}`,
      filename,
      category: categoryName,
      isFeatured: false
    };
  });

  // Process featured image
  let featuredImage: GalleryImage | undefined;
  const featuredEntries = Object.entries(featuredModules);
  if (featuredEntries.length > 0) {
    const [path, src] = featuredEntries[0]; // Take the first featured image
    const filename = path.split('/').pop() || '';
    const name = filename.replace(/\.(png|jpe?g|svg|webp)$/i, '');
    
    featuredImage = {
      id: `${categoryName}-featured-${name}`,
      src: src as string,
      alt: `${categoryName} photography - featured - ${name}`,
      filename,
      category: categoryName,
      isFeatured: true
    };
  }

  return {
    name: categoryName,
    images,
    featuredImage
  };
};

/**
 * Get random images from a category (excluding featured)
 */
export const getRandomImages = (category: GalleryCategory, count: number): GalleryImage[] => {
  const shuffled = [...category.images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get all images from a category (including featured) in random order
 */
export const getAllImagesRandom = (category: GalleryCategory): GalleryImage[] => {
  const allImages = [...category.images];
  if (category.featuredImage) {
    allImages.push(category.featuredImage);
  }
  return allImages.sort(() => 0.5 - Math.random());
};

// Pre-create gallery categories using direct imports
export const portraitGallery = createCategoryFromModules('portrait', portraitImagesModules, portraitFeaturedModules);
export const eventGallery = createCategoryFromModules('event', eventImagesModules, eventFeaturedModules);
export const concertGallery = createCategoryFromModules('concert', concertImagesModules, concertFeaturedModules);
export const miscellaneousGallery = createCategoryFromModules('misc', miscellaneousImagesModules, miscellaneousFeaturedModules);

// Helper to get all available galleries
export const allGalleries = {
  portrait: portraitGallery,
  event: eventGallery,
  concert: concertGallery,
  miscellaneous: miscellaneousGallery
};
