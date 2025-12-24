
import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

interface OfferSectionProps {
  onCtaClick?: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 3600);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="offer" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-[#111827] text-white p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
          {/* Decorative Sparkle */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold">Limited-Time Comfort Offer</h2>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-xl text-gray-400 line-through">Original Price: 599 AED</span>
              <div className="flex items-baseline space-x-2">
                <span className="text-6xl font-black text-orange-500">300</span>
                <span className="text-2xl font-bold text-orange-500">AED</span>
              </div>
              <p className="text-sm font-medium text-green-400 uppercase tracking-widest">You Save 50% Today</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
              <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">Offer Ends In</p>
                <p className="text-3xl font-mono font-bold text-white">{formatTime(timeLeft)}</p>
              </div>
              
              <div className="bg-red-500/10 px-6 py-3 rounded-2xl border border-red-500/20">
                <p className="text-xs text-red-400 uppercase font-bold mb-1">Stock Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-xl font-bold text-red-400">Only 7 Left</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <CountdownTimer className="bg-white/5 border-white/10 text-orange-400" />
              
              <button 
                onClick={onCtaClick}
                className="w-full max-w-md py-6 gradient-cta rounded-2xl text-white font-black text-xl shadow-2xl hover:scale-105 transition-transform"
              >
                🔥 Order Now – Feel Relief Today
              </button>
            </div>
            
            <div className="pt-4 flex flex-wrap justify-center gap-6">
              {['Cash on Delivery', 'Free Shipping', '7-Day Guarantee'].map(item => (
                <div key={item} className="flex items-center space-x-1 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
