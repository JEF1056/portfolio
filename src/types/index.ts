export interface ContactConfig {
  email: {
    address: string;
  };
  instagram: {
    username: string;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  filename: string;
  category: string;
  isFeatured?: boolean;
}

export interface GalleryCategory {
  name: string;
  images: GalleryImage[];
  featuredImage?: GalleryImage;
}
