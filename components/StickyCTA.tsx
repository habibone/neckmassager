
import React, { useState, useEffect } from 'react';

interface StickyCTAProps {
  onCtaClick?: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full p-4 z-40 md:hidden transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-between">
        <div className="pl-4">
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Flash Sale</p>
          <p className="text-xl font-black text-orange-600">247 AED</p>
        </div>
        <button 
          onClick={onCtaClick}
          className="flex-1 ml-6 py-4 gradient-cta rounded-xl text-white font-bold shadow-lg flex items-center justify-center"
        >
          🧡 Buy Now
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
