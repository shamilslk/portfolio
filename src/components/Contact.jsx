import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const contactDetails = [
    { icon: '✉', label: 'Email Me', value: 'shamilslk@gmail.com', href: 'mailto:shamilslk@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Nilambur, Kerala, India', href: null },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    
    // Clear validation error when typing
    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate inputs
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit mock handler
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide Toast
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1800);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section id="contact" className="section py-20 px-6 max-w-6xl mx-auto reveal relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="section-title text-3xl md:text-4xl text-center font-heading font-extrabold relative pb-3 text-white">
          Get In Touch
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </h2>
        <p className="section-subtitle text-center text-slate-400 mt-4 mb-16 max-w-xl mx-auto">
          Have a project idea, college collaboration, or just want to connect? Drop a line!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-10 text-left">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono">&gt;</span> details
          </h3>
          
          <div className="flex flex-col gap-5">
            {contactDetails.map((detail, i) => (
              <motion.div 
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a0d18] border border-slate-850 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-emerald-500/25 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a href={detail.href} className="text-sm font-bold text-slate-200 mt-0.5 hover:text-emerald-400 transition-colors truncate">
                      {detail.value}
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-slate-200 mt-0.5 truncate">
                      {detail.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              // social_networks
            </h4>
            <div className="flex items-center gap-3">
              <motion.a 
                href="https://github.com/shamilslk" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 border border-slate-800 bg-[#0a0d18] rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300 cursor-pointer" 
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.74-.084-.725.084-.725 1.205.08 1.838 1.23 1.838 1.23 1.07 1.83 2.809 1.3 3.495.99.108-.77.417-1.3.76-1.6-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.3-.3-.3-.54-1.52.1-.1.1-.1.85-.3.1.6.2.2.3.4.1.2 3.3.4.1 1.2-.2.9.4.4.9.4.9.4 1 .4.4.4 1 2.2.1 3.2.1.3.1.1.8.8.8.5.5.8.5.8.1.1.2.2 2.2.2.8.8 1.2 1.2 1.2.5.5 1 2.2.1 3.2.1.3.1.1.8.8.8.5.5.8.5.8.1.1.2.2 2.2.2.8.8 1.2 1.2 1.2.5.5 1 2.2.1 3.2.1.3.1.1.8.8.8.5.5.8.5.8.1.1.2.2 2.2.2.8.8 1.2 1.2 1.2.5.5 1.2 2.2.1 3.2.1.3.1.1.8.8.8.5.5.8.5.8.1.1.2.2 2.2.2.8.8 1.2 1.2 1.2.5.5 1 2.2.1 3.2.1.3.1.1.8.8.8.5.5.8.5.8.1.1.2.2 2.2.2.8.8 1.2 1.2 1.2.5.5.2.6.8.8.5.5.8.5.8"/></svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.08, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 border border-slate-800 bg-[#0a0d18] rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300 cursor-pointer" 
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-[#0a0d18] border border-slate-850 p-8 sm:p-10 rounded-3xl shadow-sm text-left flex flex-col gap-6" 
          noValidate
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full bg-[#05070f] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all ${
                errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/5' : ''
              }`}
              placeholder="John Doe"
            />
            {errors.name && <span className="text-xs text-red-400 font-semibold font-mono">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full bg-[#05070f] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all ${
                errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/5' : ''
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <span className="text-xs text-red-400 font-semibold font-mono">{errors.email}</span>}
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full bg-[#05070f] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all ${
                errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/5' : ''
              }`}
              placeholder="Project Collaboration"
            />
            {errors.subject && <span className="text-xs text-red-400 font-semibold font-mono">{errors.subject}</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Message
            </label>
            <textarea 
              id="message" 
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full bg-[#05070f] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all min-h-[120px] resize-y ${
                errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/5' : ''
              }`}
              placeholder="Your message here..."
            />
            {errors.message && <span className="text-xs text-red-400 font-semibold font-mono">{errors.message}</span>}
          </div>

          {/* Submit */}
          <motion.button 
            type="submit" 
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-950 font-extrabold rounded-xl shadow-md transition-all duration-300 gap-2 disabled:opacity-70 disabled:pointer-events-none cursor-pointer text-sm"
          >
            {isSubmitting ? (
              <>
                Sending Message...
                <span className="animate-spin text-sm">⏳</span>
              </>
            ) : (
              <>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </motion.button>
        </motion.form>

      </div>

      {/* Success Toast (AnimatePresence) */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-8 right-8 bg-emerald-500 text-slate-950 px-6 py-4 rounded-xl shadow-lg font-bold flex items-center gap-2 z-50 border border-emerald-400"
          >
            <span>✓</span> Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
