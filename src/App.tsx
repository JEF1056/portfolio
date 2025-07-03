// App.tsx component
import Layout from './components/Layout';
import { HeroImage } from './components/Gallery';
import ImageGrid from './components/Gallery/ImageGrid';
import { images } from './galleryData';

// Define data for our gallery grids
const portraitImages1 = [
  { url: images[0], aspectRatio: 'portrait' as const },
  { url: images[1], aspectRatio: 'portrait' as const },
  { url: images[2], aspectRatio: 'portrait' as const }
];

const landscapeImages = [
  { url: images[0], aspectRatio: 'landscape' as const },
  { url: images[1], aspectRatio: 'landscape' as const },
  { url: images[2], aspectRatio: 'landscape' as const }
];

const portraitImages2 = [
  { url: images[0], aspectRatio: 'portrait' as const },
  { url: images[1], aspectRatio: 'portrait' as const },
  { url: images[2], aspectRatio: 'portrait' as const }
];

function App() {
  return (
    <Layout>
      {/* Hero Image */}
      <HeroImage imageUrl={images[0]} />
      
      {/* First row of portrait images */}
      <ImageGrid images={portraitImages1} />
      
      {/* Row of landscape images */}
      <ImageGrid images={landscapeImages} />
      
      {/* Second row of portrait images */}
      <ImageGrid images={portraitImages2} />
    </Layout>
  );
}

export default App;