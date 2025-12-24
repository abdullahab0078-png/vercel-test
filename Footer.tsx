
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-1 space-y-10">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-bold tracking-[0.5em] text-white">ZENITH</span>
              <span className="text-[10px] font-black tracking-[1em] text-zinc-600 uppercase">Voyages</span>
            </Link>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Global architects of rare and private travel. <br/>
              Established in Monaco, operating worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10">Navigation</h4>
            <ul className="space-y-6">
              <li><Link to="/destinations" className="text-zinc-500 text-xs hover:text-cyan-400 transition-colors uppercase tracking-widest font-bold">The Portfolio</Link></li>
              <li><Link to="/contact" className="text-zinc-500 text-xs hover:text-cyan-400 transition-colors uppercase tracking-widest font-bold">Concierge Desk</Link></li>
              <li><span className="text-zinc-500 text-xs hover:text-cyan-400 transition-colors uppercase tracking-widest font-bold cursor-pointer">Member Login</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10">Services</h4>
            <ul className="space-y-6">
              <li><span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Jet Charters</span></li>
              <li><span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Private Villas</span></li>
              <li><span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Security Detail</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10">Newsletter</h4>
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-6">Subscribe for private collection releases.</p>
            <div className="relative border-b border-white/10 group focus-within:border-cyan-500 transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent py-4 text-[10px] font-bold text-white focus:outline-none placeholder:text-zinc-800"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase text-cyan-500 tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12">
          <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mb-6 md:mb-0">
            &copy; 2024 Zenith Voyages S.A.R.L. &bull; All Rights Reserved.
          </span>
          <div className="flex space-x-12">
            <span className="text-[10px] font-bold text-zinc-700 hover:text-zinc-400 cursor-pointer uppercase tracking-widest transition-colors">Privacy</span>
            <span className="text-[10px] font-bold text-zinc-700 hover:text-zinc-400 cursor-pointer uppercase tracking-widest transition-colors">Legal</span>
            <span className="text-[10px] font-bold text-zinc-700 hover:text-zinc-400 cursor-pointer uppercase tracking-widest transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
