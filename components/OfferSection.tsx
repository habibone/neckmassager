
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
        <div className="bg-[#fff7ed] text-[#111827] p-8 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl border border-orange-100">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-[100px] opacity-5"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Limited Home Exercise Offer</h2>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-xl text-gray-400 line-through font-bold">Retail Price: 499 AED</span>
              <div className="flex items-baseline space-x-2">
                <span className="text-7xl font-black text-orange-600">247</span>
                <span className="text-2xl font-bold text-orange-600">AED</span>
              </div>
              <p className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em]">Pay Cash on Delivery</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
              <div className="bg-white px-8 py-4 rounded-2xl border border-orange-200 shadow-sm min-w-[140px]">
                <p className="text-[10px] text-gray-400 uppercase font-black mb-1 tracking-widest">Sale Ends In</p>
                <p className="text-3xl font-mono font-black text-orange-600">{formatTime(timeLeft)}</p>
              </div>
              
              <div className="bg-red-50 px-8 py-4 rounded-2xl border border-red-100 shadow-sm min-w-[140px]">
                <p className="text-[10px] text-red-400 uppercase font-black mb-1 tracking-widest">Stock Level</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-xl font-black text-red-600 uppercase">Only 12 Left</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <CountdownTimer className="bg-white border-orange-100 text-orange-600" />
              
              <button 
                onClick={onCtaClick}
                className="w-full py-6 gradient-cta rounded-2xl text-white font-black text-xl shadow-xl shadow-orange-200 hover:scale-105 active:scale-95 transition-all uppercase tracking-tight"
              >
                🔥 Claim 50% Off – Pay at Door
              </button>
            </div>
            
            <div className="pt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['Cash on Delivery', 'Fast UAE Shipping', 'No Credit Card Needed'].map(item => (
                <div key={item} className="flex items-center space-x-2 text-[10px] font-black uppercase text-gray-500 tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
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
