import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Enforce dark mode class on html node
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  // Set up scroll reveal intersections for major sections
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    reveals.forEach(el => revealObserver.observe(el));
    return () => reveals.forEach(el => revealObserver.unobserve(el));
  }, [loading]); // Re-observe once loading finishes and DOM renders

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors duration-300">
      
      {/* 1. Brand Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 2. Interactive Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* 3. Main Homepage Content */}
      {!loading && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
