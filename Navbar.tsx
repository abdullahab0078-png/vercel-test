
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', path: '/destinations' },
    { name: 'Concierge', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl py-5 border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="group flex flex-col items-center">
          <span className="text-2xl font-bold tracking-[0.5em] text-white group-hover:text-cyan-400 transition-colors">ZENITH</span>
          <span className="text-[8px] font-black tracking-[0.8em] text-zinc-500 -mt-1 group-hover:text-zinc-300 transition-colors uppercase">Voyages</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:text-cyan-400 ${location.pathname === link.path ? 'text-cyan-400' : 'text-zinc-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-500 hover:text-white transition-all transform active:scale-95">
            Book Journey
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <div className={`h-[1px] bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-[1px] bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-[1px] bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-[90] flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-500">
           {[{name: 'Home', path: '/'}, ...navLinks].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif italic text-white hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
           <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-500"
          >
            Contact Concierge
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
