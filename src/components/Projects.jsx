import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Embedded & IoT', value: 'iot' },
    { label: 'Software & Web', value: 'software' },
  ];

  const projects = [
    {
      title: 'ESPController — ESP8266/ESP32 Rover System',
      desc: 'Arduino library + Flutter Android app for wireless rover control over WebSockets. Implements a virtual joystick, D-Pad, differential drive, live ESP32-CAM video streaming with adjustable quality, mDNS device discovery, and HTTP fallback protocols. Built in collaboration with Vismaya P.',
      image: '/assets/project2.png',
      tags: ['Arduino', 'ESP32', 'Flutter', 'WebSocket', 'mDNS'],
      category: 'iot',
      repo: 'https://github.com/shamilslk/ESPController',
      demo: null
    },
    {
      title: '8-Bit Microprocessor in Verilog',
      desc: 'A custom 8-bit CPU design written in Verilog HDL and simulated using Xilinx Vivado. Supports core arithmetic, logical operations, register-to-register transfers, and memory accesses. Includes simulation files showcasing a complete instruction fetch-decode-execute hardware cycle.',
      image: '/assets/project1.png',
      tags: ['Verilog HDL', 'Xilinx Vivado', 'CPU Design', 'ModelSim'],
      category: 'iot',
      repo: 'https://github.com/shamilslk',
      demo: null
    },
    {
      title: 'Expense Tracker Dashboard',
      desc: 'A desktop CRUD expense management dashboard featuring a responsive Tkinter GUI, a secure local MySQL database, real-time database filtering, live search queries, budget donut charts generated using Matplotlib, and monthly CSV spreadsheet reports exports.',
      image: '/assets/project1.png',
      tags: ['Python', 'Tkinter', 'MySQL', 'Matplotlib', 'CSV'],
      category: 'software',
      repo: 'https://github.com/shamilslk/expense-tracker',
      demo: null
    },
    {
      title: 'Flutter Web Calculator',
      desc: 'A sleek, responsive, browser-based mathematical calculator application built from scratch with Flutter Web and Dart. Implements custom theme animations and is hosted statically on GitHub Pages.',
      image: '/assets/project2.png',
      tags: ['Flutter Web', 'Dart', 'GitHub Pages'],
      category: 'software',
      repo: 'https://github.com/shamilslk',
      demo: 'https://shamilslk.github.io/Flutter_Calculator'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="section-title text-3xl md:text-4xl text-center font-heading font-extrabold relative pb-3 text-white">
          Featured Projects
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </h2>
        <p className="section-subtitle text-center text-slate-400 mt-4 mb-12 max-w-xl mx-auto">
          A curated selection of hardware, IoT, and application builds I've designed.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-3 mb-16 flex-wrap">
        {filters.map((filter, i) => (
          <motion.button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`px-5 py-2 rounded-full font-semibold text-xs border uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeFilter === filter.value
                ? 'bg-emerald-500 border-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10'
                : 'bg-white/5 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      {/* Grid - using layout property to animate filtering movements */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div 
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-[#0a0d18] border border-slate-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] hover:border-emerald-500/25 transition-all duration-300 flex flex-col group h-full text-left"
            >
              {/* Image Wrap */}
              <div className="relative overflow-hidden aspect-video bg-[#05070f] border-b border-slate-900">
                <motion.img 
                  src={project.image} 
                  alt={`${project.title} Mockup`} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Hover overlay links */}
                <div className="absolute inset-0 bg-[#05070f]/75 backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  {project.repo && (
                    <motion.a 
                      href={project.repo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-[#0a0d18] border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all shadow-md cursor-pointer"
                      title="View Code"
                      aria-label="View Code"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-[#0a0d18] border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all shadow-md cursor-pointer"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[0.65rem] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-heading font-extrabold mb-3 text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow font-normal">
                  {project.desc}
                </p>
                
                {/* Footer Links */}
                <div className="flex gap-4 border-t border-slate-900 pt-4 mt-6">
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
