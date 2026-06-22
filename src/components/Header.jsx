import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Mobile menu stagger container variants
  const mobileContainerVariants = {
    hidden: { opacity: 0, x: '100%' },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        ease: [0.22, 1, 0.36, 1],
        duration: 0.45,
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        ease: [0.22, 1, 0.36, 1],
        duration: 0.35,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-md border-emerald-500/10' 
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <motion.a 
          href="#home" 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="code-font font-bold text-xl tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          <span className="text-emerald-500">&lt;</span>
          <span>shamil.k</span>
          <span className="text-emerald-500"> /&gt;</span>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`font-medium text-xs uppercase tracking-wider py-1 transition-colors relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-gradient-to-r before:from-emerald-500 before:to-cyan-500 before:transition-all before:duration-300 ${
                activeSection === link.id
                  ? 'text-emerald-400 before:w-full'
                  : 'text-slate-400 hover:text-white before:w-0'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Nav Actions */}
        <div className="flex items-center gap-4">
          {/* GitHub CTA */}
          <motion.a
            href="https://github.com/shamilslk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white bg-emerald-500/5 hover:bg-emerald-500/15 rounded-lg text-xs font-bold transition-all duration-300 code-font shadow-[0_0_10px_rgba(16,185,129,0.05)] cursor-pointer"
          >
            <span>shamilslk</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </motion.a>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-50 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={mobileContainerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-72 bg-[#090c15] shadow-2xl border-l border-emerald-500/10 flex flex-col justify-center gap-6 p-12 lg:hidden"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                variants={mobileItemVariants}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold text-base py-1 uppercase tracking-wider transition-colors relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-gradient-to-r before:from-emerald-500 before:to-cyan-500 before:transition-all before:duration-300 ${
                  activeSection === link.id
                    ? 'text-emerald-400 before:w-full'
                    : 'text-slate-400 hover:text-white before:w-0'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            {/* Mobile-only GitHub links */}
            <motion.a
              href="https://github.com/shamilslk"
              target="_blank"
              rel="noopener noreferrer"
              variants={mobileItemVariants}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex sm:hidden items-center justify-center gap-1.5 px-4 py-2.5 mt-4 border border-emerald-500/30 text-emerald-400 hover:text-white bg-emerald-500/5 hover:bg-emerald-500/15 rounded-lg text-xs font-bold transition-all duration-300 code-font shadow-[0_0_10px_rgba(16,185,129,0.05)] cursor-pointer"
            >
              <span>shamilslk</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
