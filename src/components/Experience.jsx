import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'FPGA & Digital System Prototyping Intern',
      company: 'National Institute of Electronics & Information Technology (NIELIT)',
      location: 'Kozhikode, India (Hybrid)',
      date: 'Jun 2025 · 1 month',
      desc: 'Acquired hands-on experience in Digital Logic Design and Hardware Prototyping. Developed and debugged digital modules on an Arty 7 FPGA board using Xilinx Vivado.',
      bullets: [
        'Implemented core digital blocks: adders, subtractors, encoders, decoders, and flip-flops using Verilog HDL.',
        'Designed and simulated higher-complexity modules including FIR filters, matrix multipliers, and FIFO memory structures.',
        'Built a custom UART serial communication protocol from scratch to interface the FPGA with external devices.',
        'Performed digital image filtering workflows on FPGA hardware.',
        'Analyzed and debugged hardware design execution paths using Integrated Logic Analyzer (ILA) and Virtual I/O (VIO) cores.'
      ]
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="experience" className="section py-20 px-6 max-w-4xl mx-auto overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="section-title text-3xl md:text-4xl text-center font-heading font-extrabold relative pb-3 text-white mb-20">
          Experience
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="relative pl-6 md:pl-10 border-l border-slate-800 ml-4 md:ml-6 flex flex-col gap-12 text-left">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemVariants}
            className="relative group"
          >
            {/* Timeline Dot */}
            <motion.div 
              whileInView={{ scale: [0.8, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#05070f] border-2 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] z-10" 
            />

            {/* Content Card */}
            <motion.div 
              whileHover={{ y: -3, borderCol: 'rgba(16,185,129,0.25)' }}
              transition={{ duration: 0.2 }}
              className="bg-[#0a0d18] border border-slate-850 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-heading font-extrabold text-slate-100 leading-tight">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-semibold text-emerald-400 mt-1.5 inline-block">
                    {exp.company}
                  </span>
                  <div className="text-xs text-slate-500 font-medium mt-1 font-mono">{exp.location}</div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                <p className="mb-4 leading-relaxed font-medium">{exp.desc}</p>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 leading-relaxed font-mono text-[0.75rem] sm:text-xs">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="hover:text-emerald-400 transition-colors">{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
