import { useState, useEffect } from "react";
import { getImageDimensions } from "../utils/imageAspectRatio";
import type { ImageDimensions } from "../utils/imageAspectRatio";

interface UseImageAspectRatioResult {
  dimensions: ImageDimensions | null;
  loading: boolean;
  error: string | null;
}

/**
 * React hook to get image dimensions and aspect ratio information
 */
export const useImageAspectRatio = (src: string): UseImageAspectRatioResult => {
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!src) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getImageDimensions(src)
      .then((dims) => {
        setDimensions(dims);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        // Set default dimensions as fallback
        setDimensions({
          width: 400,
          height: 300,
          aspectRatio: 4 / 3,
          orientation: "landscape",
          aspectClass: "aspect-[4/3]",
        });
      });
  }, [src]);

  return { dimensions, loading, error };
};

/**
 * Hook for handling multiple images with aspect ratios
 */
export const useMultipleImageAspectRatios = (sources: string[]) => {
  const [dimensionsMap, setDimensionsMap] = useState<
    Map<string, ImageDimensions>
  >(new Map());
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Map<string, string>>(new Map());
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Only run once when component mounts
    if (initialized || sources.length === 0) {
      if (sources.length === 0) setLoading(false);
      return;
    }

    setInitialized(true);
    setLoading(true);
    const newDimensionsMap = new Map<string, ImageDimensions>();
    const newErrors = new Map<string, string>();

    const loadPromises = sources.map(async (src) => {
      try {
        const dimensions = await getImageDimensions(src);
        newDimensionsMap.set(src, dimensions);
      } catch (error) {
        newErrors.set(
          src,
          error instanceof Error ? error.message : "Unknown error",
        );
        // Set fallback dimensions
        newDimensionsMap.set(src, {
          width: 400,
          height: 300,
          aspectRatio: 4 / 3,
          orientation: "landscape",
          aspectClass: "aspect-[4/3]",
        });
      }
    });

    Promise.all(loadPromises)
      .then(() => {
        setDimensionsMap(newDimensionsMap);
        setErrors(newErrors);
        setLoading(false);
      })
      .catch(() => {
        // Ensure loading is set to false even if something goes wrong
        setLoading(false);
      });
  }, []); // Empty dependency array - only run once

  const getDimensions = (src: string): ImageDimensions | null => {
    return dimensionsMap.get(src) || null;
  };

  const getError = (src: string): string | null => {
    return errors.get(src) || null;
  };

  return { getDimensions, getError, loading, allDimensions: dimensionsMap };
};
