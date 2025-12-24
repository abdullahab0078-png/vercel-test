
import React from 'react';
import { Link } from 'react-router-dom';
import { Destination } from '../types';

interface TourCardProps {
  destination: Destination;
}

const TourCard: React.FC<TourCardProps> = ({ destination }) => {
  return (
    <div className="group bg-transparent border-b border-white/5 pb-10 transition-all duration-700">
      <Link to={`/tour/${destination.id}`} className="block relative overflow-hidden rounded-sm aspect-[4/5] mb-8">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-6 left-6 flex space-x-2">
           <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
            {destination.duration}
           </span>
        </div>
      </Link>
      
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-cyan-500 mb-1 block">{destination.country}</span>
            <h3 className="text-3xl font-bold tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
              {destination.name}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-zinc-600 text-[10px] uppercase font-bold block mb-1">From</span>
            <span className="text-2xl font-bold text-white">${destination.price}</span>
          </div>
        </div>
        
        <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-2">
          {destination.description}
        </p>

        <div className="pt-4 flex items-center justify-between">
           <div className="flex gap-4">
              {destination.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-zinc-700 font-bold">
                  {tag}
                </span>
              ))}
           </div>
           <Link 
            to={`/tour/${destination.id}`}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors flex items-center gap-3"
           >
            View Dossier
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
