export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'portrait' | 'landscape' | 'square';
  aspectClass: string;
}

/**
 * Loads an image and returns its dimensions and aspect ratio information
 */
export const getImageDimensions = (src: string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const aspectRatio = width / height;
      
      let orientation: 'portrait' | 'landscape' | 'square';
      let aspectClass: string;
      
      // Only use 4:3 (landscape) or 3:4 (portrait) ratios
      if (aspectRatio >= 1.0) {
        orientation = 'landscape';
        aspectClass = 'aspect-[4/3]'; // All landscape images crop to 4:3
      } else {
        orientation = 'portrait';
        aspectClass = 'aspect-[3/4]'; // All portrait images crop to 3:4
      }
      
      resolve({
        width,
        height,
        aspectRatio,
        orientation,
        aspectClass
      });
    };
    
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });
};

/**
 * Hook to manage image dimensions for multiple images
 */
export const useImageDimensions = () => {
  const dimensionsCache = new Map<string, ImageDimensions>();
  
  const getDimensions = async (src: string): Promise<ImageDimensions> => {
    if (dimensionsCache.has(src)) {
      return dimensionsCache.get(src)!;
    }
    
    try {
      const dimensions = await getImageDimensions(src);
      dimensionsCache.set(src, dimensions);
      return dimensions;
    } catch (error) {
      console.error('Error loading image dimensions:', error);
      // Return default dimensions for fallback
      const fallbackDimensions = {
        width: 400,
        height: 300,
        aspectRatio: 4/3,
        orientation: 'landscape' as const,
        aspectClass: 'aspect-[4/3]'
      };
      dimensionsCache.set(src, fallbackDimensions);
      return fallbackDimensions;
    }
  };
  
  return { getDimensions };
};
