import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

interface ImageGridProps {
  images: {
    url: string;
    aspectRatio: 'portrait' | 'landscape';
  }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [columns, setColumns] = useState(3); // Default column count
  
  useEffect(() => {
    // Function to update column count based on viewport width
    const updateColumns = () => {
      if (window.innerWidth < 640) { // Small screens
        setColumns(1);
      } else if (window.innerWidth < 1024) { // Medium screens
        setColumns(2);
      } else { // Large screens
        setColumns(3);
      }
    };
    
    // Set initial value
    updateColumns();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateColumns);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  
  return (
    <div 
      className="grid gap-3 p-4" 
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        display: 'grid',
      }}
    >
      {images.map((image, index) => (
        <ImageCard 
          key={index}
          imageUrl={image.url}
          aspectRatio={image.aspectRatio}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
