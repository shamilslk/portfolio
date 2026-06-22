export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#05070f] py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        {/* Brand Logo */}
        <a href="#home" className="code-font font-bold text-xl tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-1">
          <span className="text-emerald-500">&lt;</span>
          <span>shamil.k</span>
          <span className="text-emerald-500"> /&gt;</span>
        </a>
        <p className="text-slate-500 text-xs font-semibold">
          &copy; {new Date().getFullYear()} Shamil K. All rights reserved.
        </p>
        <p className="text-slate-500 text-[0.7rem] font-medium mt-1 font-mono">
          // Designed & developed using React & Tailwind CSS v4.
        </p>
      </div>
    </footer>
  );
}
