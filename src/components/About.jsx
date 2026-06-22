import { motion } from 'framer-motion';

export default function About() {
  const infoCards = [
    { label: 'College', value: 'NSS College of Engineering, Palakkad', detail: 'B.Tech ECE (Aug 2023 – Mar 2027)' },
    { label: 'Location', value: 'Nilambur, Kerala, India', detail: 'Native Place' },
  ];

  const skillGroups = [
    {
      title: 'Hardware & Embedded',
      icon: '⚙️',
      skills: ['Arduino', 'ESP8266/ESP32', 'FPGA (Arty 7)', 'Verilog HDL', 'Xilinx Vivado', 'Proteus', 'UART', 'ILA/VIO']
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['C', 'Python', 'Dart', 'JavaScript']
    },
    {
      title: 'Frameworks & Databases',
      icon: '🧱',
      skills: ['Flutter', 'React', 'Firebase', 'Tkinter', 'Matplotlib', 'MySQL', 'SQLite']
    },
    {
      title: 'IoT, Protocols & Tools',
      icon: '🌐',
      skills: ['MQTT', 'HTTPS', 'WebSocket', 'mDNS', 'Git/GitHub', 'CSV data handling']
    }
  ];

  // Animation variants
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section id="about" className="section py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariants}
      >
        <h2 className="section-title text-3xl md:text-4xl text-center font-heading font-extrabold relative pb-3 text-white">
          About Me
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </h2>
        <p className="section-subtitle text-center text-slate-400 mt-4 mb-16 max-w-xl mx-auto">
          Motivated electronics student bridging the gap between embedded hardware and modern cross-platform software.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Biography Column */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
          className="lg:col-span-5 flex flex-col gap-6 text-left"
        >
          <h3 className="text-xl md:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono">&gt;</span> background_info
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Motivated final-year ECE student with a strong foundation in embedded systems, digital design, and cross-platform development. I bridge hardware and software — from designing microprocessors in Verilog to building Flutter mobile apps and React web apps.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            I enjoy learning in public, building real-world projects, and collaborating with others on challenging hardware-software codesign tasks.
          </p>

          {/* Education & Info Cards */}
          <div className="flex flex-col gap-4 mt-4">
            {infoCards.map((card, i) => (
              <motion.div 
                key={i} 
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="bg-[#0a0d18] border border-slate-800 p-4 rounded-xl shadow-sm text-left hover:border-emerald-500/25 transition-all duration-300"
              >
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">
                  {card.label}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1">
                  {card.value}
                </div>
                <div className="text-[0.7rem] text-slate-400 mt-0.5 font-mono">
                  {card.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Column */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.h3 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
            className="text-xl md:text-2xl font-bold font-heading text-left text-white flex items-center gap-2"
          >
            <span className="text-emerald-400 font-mono">&gt;</span> tech_stack
          </motion.h3>

          <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {skillGroups.map((group, i) => (
              <motion.div 
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="bg-[#0a0d18] border border-slate-850 p-5 rounded-2xl shadow-sm hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.02)] transition-all duration-300 flex flex-col gap-3 group cursor-default"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg bg-emerald-500/10 w-8 h-8 rounded-lg flex items-center justify-center text-emerald-400 font-bold">
                    {group.icon}
                  </span>
                  <h4 className="font-heading font-extrabold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">
                    {group.title}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {group.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-[0.65rem] font-semibold font-mono text-slate-400 border border-slate-800 bg-[#070912] px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
