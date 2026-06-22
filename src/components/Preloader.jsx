import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [text, setText] = useState('');
  const fullPrompt = 'shamil_k@nss_ce:~$ ./init_portfolio.sh';
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // 1. Simulate typing prompt
    let charIndex = 0;
    const typingTimer = setInterval(() => {
      if (charIndex < fullPrompt.length) {
        setText(fullPrompt.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingTimer);
        // 2. Start progress bar after typing is done
        startProgress();
      }
    }, 45);

    return () => clearInterval(typingTimer);
  }, []);

  const startProgress = () => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          // 3. Mark load complete, trigger exit
          setTimeout(() => {
            setLoadingComplete(true);
            setTimeout(onComplete, 600); // Wait for exit animation
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);
  };

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#05070f] flex flex-col justify-center items-center text-left p-6 select-none"
        >
          <div className="w-full max-w-md flex flex-col gap-4 font-mono text-xs sm:text-sm text-emerald-400">
            {/* Terminal Top Bar */}
            <div className="flex items-center gap-1.5 border-b border-slate-900 pb-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-slate-500 text-[0.65rem]">bash - shamil@portfolio</span>
            </div>

            {/* Prompt Typing */}
            <div className="min-h-[1.5rem] tracking-tight">
              {text}
              {!loadingComplete && text !== fullPrompt && (
                <span className="inline-block w-2.5 h-4 ml-0.5 bg-emerald-500 animate-blink" />
              )}
            </div>

            {/* Progress Output */}
            {text === fullPrompt && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col gap-2 mt-2"
              >
                <div className="text-slate-400">
                  Initializing hardware registers... Done.<br />
                  Connecting IoT sockets... Done.<br />
                  Starting application server...
                </div>
                
                {/* Progress bar container */}
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-3 border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center text-[0.7rem] text-slate-500 mt-1 font-mono">
                  <span>LOADING CORE ASSETS</span>
                  <span>{progress}%</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
