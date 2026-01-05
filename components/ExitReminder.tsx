import React, { useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

const ExitReminder: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // 1. Check if already shown this session
    const alreadyShown = sessionStorage.getItem('reliefpulse_exit_reminder_shown');
    if (alreadyShown || hasDismissed) return;

    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const scrollThreshold = 800; // Only trigger after some scrolling

      // Trigger if scrolling up significantly after being deep in the page
      if (isScrollingUp && currentScrollY > scrollThreshold && !isVisible) {
        triggerReminder();
      }
      lastScrollY = currentScrollY;
    };

    const handleVisibilityChange = () => {
      // Trigger if user comes back to the tab
      if (document.visibilityState === 'visible' && !isVisible) {
        triggerReminder();
      }
    };

    const triggerReminder = () => {
      setIsVisible(true);
      sessionStorage.setItem('reliefpulse_exit_reminder_shown', 'true');
      trackEvent('cta_click', { location: 'exit_reminder_view' }); // Reuse trackEvent with custom property
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible, hasDismissed]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setHasDismissed(true);
  };

  const handleClaim = () => {
    setIsVisible(false);
    const element = document.getElementById('offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:bottom-10 md:left-10 md:right-auto z-[60] animate-in slide-in-from-bottom-10 duration-500 max-w-sm">
      <div 
        onClick={handleClaim}
        className="bg-[#111827] text-white p-5 rounded-[2rem] shadow-2xl border border-white/10 relative cursor-pointer group overflow-hidden"
      >
        {/* Animated Background Pulse */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6149dd] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start space-x-4 pr-6">
          <div className="w-12 h-12 bg-[#6149dd] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#6149dd]/20">
            <span className="text-2xl animate-bounce">🎁</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black uppercase tracking-tighter text-[#6149dd]">Wait! Don't Miss Out</h4>
            <p className="text-xs font-bold leading-relaxed text-gray-300">
              We noticed you're leaving. Order within the next <span className="text-white">5 minutes</span> and we'll add a <span className="text-emerald-400">FREE Replacement Warranty</span> to your delivery!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full py-3 bg-white text-[#111827] font-black rounded-xl text-[10px] uppercase tracking-[0.2em] group-hover:bg-[#6149dd] group-hover:text-white transition-all">
            Claim My Free Gift Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitReminder;