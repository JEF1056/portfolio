
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventGallery from './pages/EventGallery';
import Portrait from './pages/Portrait';
import ConcertGallery from './pages/ConcertGallery';
import MiscellaneousGallery from './pages/MiscellaneousGallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/event" element={<EventGallery />} />
          <Route path="/gallery/portrait" element={<Portrait />} />
          <Route path="/gallery/concert" element={<ConcertGallery />} />
          <Route path="/gallery/miscellaneous" element={<MiscellaneousGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;