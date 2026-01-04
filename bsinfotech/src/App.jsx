import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Actual Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';       // <-- Imported
import Portfolio from './pages/Portfolio'; // <-- Imported
import Contact from './pages/Contact';     // <-- Imported

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-primary text-white selection:bg-brand selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;