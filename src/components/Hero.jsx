import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const words = [
    'Embedded Systems Engineer',
    'IoT Product Developer',
    'Digital Design & FPGA Developer',
    'Flutter App Developer'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        // Delete characters
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(40);
      } else {
        // Add characters
        setCurrentText((prev) => fullWord.substring(0, prev.length + 1));
        setTypingSpeed(80);
      }

      // Check transitions
      if (!isDeleting && currentText === fullWord) {
        // Pause at the end of word
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500); // Brief delay before next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // Entrance variants
  const elementVariants = {
    hidden: { opacity: 0, y: 25 },
    show: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden bg-[#05070f]"
    >
      {/* Subtle Grid / Matrix Dot overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.03)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* Info Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 order-2 lg:order-1">
          <motion.div 
            variants={elementVariants}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400 font-bold uppercase tracking-widest code-font"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping" />
            Learning & Building in Public
          </motion.div>
          
          <motion.h1 
            variants={elementVariants}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-none text-white"
          >
            Hi, I'm <span className="code-font text-emerald-400">Shamil K</span>
          </motion.h1>
          
          <motion.h2 
            variants={elementVariants}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg sm:text-xl lg:text-2xl font-mono text-slate-300 min-h-[3rem] flex items-center flex-wrap gap-x-2"
          >
            <span>&gt;</span>
            <span className="text-cyan-400">{currentText}</span>
            <span className="inline-block w-2.5 h-5 bg-emerald-500 animate-blink" />
          </motion.h2>
          
          <motion.p 
            variants={elementVariants}
            initial="hidden"
            animate="show"
            custom={3}
            className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
          >
            Final-Year B.Tech ECE Student at NSS College of Engineering, Palakkad. Bridging the gap between hardware and software — from developing CPU logic in Verilog to crafting cross-platform applications in Flutter and React.
          </motion.p>
          
          <motion.div 
            variants={elementVariants}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
          >
            <motion.a 
              href="https://github.com/shamilslk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 gap-2 text-center text-sm cursor-pointer"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub Profile
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 py-3 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 bg-slate-900/60 hover:bg-slate-900 font-extrabold rounded-xl shadow-sm transition-all duration-300 text-center text-sm cursor-pointer"
            >
              Explore Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Media Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2"
        >
          {/* Subtle Cybernetic Glowing Backdrop */}
          <div className="absolute w-[105%] h-[105%] rounded-full bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 blur-3xl pointer-events-none animate-pulse-glow" />
          
          {/* Cyber Card avatar container */}
          <div className="relative z-10 p-1.5 border border-emerald-500/10 bg-[#0a0d18] rounded-3xl shadow-xl hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="overflow-hidden rounded-[1.3rem] relative">
              <img 
                src="/assets/profile.jpg" 
                alt="Shamil K Profile" 
                className="w-full max-w-[260px] sm:max-w-[300px] aspect-square object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-emerald-500/5 mix-blend-color-dodge pointer-events-none" />
            </div>
            
            {/* Embedded Floating Badges */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-[8%] -left-[8%] bg-[#060810] border border-emerald-500/20 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg z-20"
            >
              <span className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xs">⚡</span>
              <div className="flex flex-col text-left">
                <span className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-extrabold">Domain</span>
                <span className="text-[0.7rem] font-bold text-slate-200 mt-0.5">Embedded & IoT</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute top-[12%] -right-[8%] bg-[#060810] border border-cyan-500/20 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg z-20"
            >
              <span className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xs">🚀</span>
              <div className="flex flex-col text-left">
                <span className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-extrabold">Builds</span>
                <span className="text-[0.7rem] font-bold text-slate-200 mt-0.5">Flutter & FPGA</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Mouse indicator */}
      <a 
        href="#about" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-emerald-400 transition-colors duration-300 text-xs font-semibold code-font animate-pulse"
        aria-label="Scroll down"
      >
        <span className="w-5 h-8 border border-slate-700 hover:border-emerald-500 rounded-full relative block">
          <motion.span 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-0.5 h-1.5 bg-slate-500 hover:bg-emerald-500 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2" 
          />
        </span>
        <span>scroll_down()</span>
      </a>
    </section>
  );
}
