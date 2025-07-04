
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventGallery from './pages/EventGallery';
import PortraitGallery from './pages/PortraitGallery';
import StreetGallery from './pages/StreetGallery';
import NatureGallery from './pages/NatureGallery';
import ConcertGallery from './pages/ConcertGallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/event" element={<EventGallery />} />
          <Route path="/gallery/portrait" element={<PortraitGallery />} />
          <Route path="/gallery/street" element={<StreetGallery />} />
          <Route path="/gallery/nature" element={<NatureGallery />} />
          <Route path="/gallery/concert" element={<ConcertGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;