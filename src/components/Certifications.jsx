import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Internet of Things',
      issuer: 'National Programme on Technology Enhanced Learning (NPTEL)',
      date: 'Jul 2025',
      id: 'NPTEL25CS147S1065800343',
      icon: '🌐'
    },
    {
      title: 'Digital System Prototyping using FPGA',
      issuer: 'National Institute of Electronics & Information Technology (NIELIT)',
      date: 'Jul 2025',
      id: 'C 4533',
      icon: '⚙️'
    },
    {
      title: 'AI Projects with Python, TensorFlow & NLTK',
      issuer: 'LinkedIn Learning',
      date: 'Recent',
      id: null,
      icon: '🤖'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section id="certifications" className="section py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="section-title text-3xl md:text-4xl text-center font-heading font-extrabold relative pb-3 text-white mb-16">
          Certifications
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {certifications.map((cert, i) => (
          <motion.div 
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.25)' }}
            className="bg-[#0a0d18] border border-slate-850 p-6 rounded-2xl hover:shadow-[0_0_15px_rgba(16,185,129,0.02)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-2xl bg-emerald-500/5 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-400 mb-5 border border-emerald-500/10">
                {cert.icon}
              </div>
              <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-100 mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mb-4 leading-tight">
                {cert.issuer}
              </p>
            </div>
            
            <div className="border-t border-slate-900 pt-4 mt-4 flex flex-col gap-1 text-[0.7rem] sm:text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-bold uppercase tracking-wider text-[0.65rem]">Date</span>
                <span className="text-slate-300 font-medium font-mono">{cert.date}</span>
              </div>
              {cert.id && (
                <div className="flex justify-between items-center mt-1">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[0.65rem]">Credential ID</span>
                  <span className="text-emerald-400 font-bold font-mono tracking-tighter truncate max-w-[130px]" title={cert.id}>
                    {cert.id}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
