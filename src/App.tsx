import { Header, HeroImage, ImageGrid } from './components';
import type { ImageData } from './components';

function App() {
  // Sample portfolio data
  const portfolioImages: ImageData[] = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'portrait',
      alt: 'Code on laptop screen'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'landscape',
      alt: 'Developer workspace'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'portrait',
      alt: 'Computer setup'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'portrait',
      alt: 'Programming code'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'landscape',
      alt: 'Team collaboration'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'portrait',
      alt: 'AI and robotics'
    }
  ];

  const heroImageUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative">
          <HeroImage 
            imageUrl={heroImageUrl} 
            alt="Technology and programming hero image" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
              <p className="text-lg opacity-90">Showcasing creativity and technical excellence</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#141414] mb-6">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate developer who loves creating beautiful and functional digital experiences. 
              My portfolio showcases a range of projects that demonstrate my skills in modern web technologies, 
              design principles, and problem-solving approaches.
            </p>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#141414] mb-4">My Work</h2>
              <p className="text-lg text-gray-600">
                A collection of projects that showcase my technical skills and creative vision
              </p>
            </div>
            <ImageGrid images={portfolioImages} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#141414] mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Let's connect and discuss how we can work together.
            </p>
            <button className="bg-[#141414] text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#141414] text-white py-8">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
