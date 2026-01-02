
import React, { useState } from 'react';

interface HeaderProps {
  onCtaClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Comparison', id: 'comparison' },
    { name: 'FAQ', id: 'reviews' }
  ];

  return (
    <div className="w-full">
      <div className="bg-[#ef4444] text-white py-2 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-widest overflow-hidden">
        <div className="animate-pulse whitespace-nowrap">
          ⚡ 50% OFF + FREE SHIPPING TODAY - CASH ON DELIVERY ACROSS UAE ⚡
        </div>
      </div>
      
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 gradient-cta rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tighter text-[#111827]">VIBE<span className="text-orange-500">SLIM</span></span>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <nav className="hidden md:flex space-x-8 text-[10px] font-black text-gray-700 uppercase tracking-widest">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="hover:text-orange-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <button 
              onClick={onCtaClick}
              className="gradient-cta px-4 py-2 rounded-lg text-white text-[10px] font-black shadow-md hover:scale-105 transition-transform uppercase tracking-widest"
            >
              Order COD
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        <div className={`fixed inset-0 top-[100px] z-40 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="flex flex-col items-center justify-center space-y-8 p-12 text-2xl font-black text-gray-900 uppercase tracking-tighter">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-12 h-1 bg-orange-100 rounded-full"></div>
            <button 
              onClick={onCtaClick}
              className="w-full max-w-xs py-4 gradient-cta text-white rounded-2xl shadow-xl font-black text-lg uppercase tracking-tight"
            >
              Order Now - Pay on Delivery
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
