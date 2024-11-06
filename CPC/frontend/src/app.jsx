import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Testimonials from './components/testimonials';
import PropertyListing from './components/propertylisting';
import Team from './components/team';
import Blog from './components/blog';
import YoutubePage from './components/youtubepage';
import FindAgent from './components/findagent';
import Contact from './components/contact';
import ParallaxSection from './components/parallaxsection';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <PropertyListing />
              <Team />
              <YoutubePage />
              <FindAgent />
              <Blog />
              <Contact />
              <ParallaxSection />
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
