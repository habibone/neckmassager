import React from 'react';

const SolutionIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1 relative">
           <img 
            src="https://images.supplipure.com/wp-content/uploads/2026/01/Untitled-design.png" 
            alt="Weight Loss Vibration Machine" 
            className="rounded-[2.5rem] shadow-2xl relative z-10 w-full object-contain bg-gray-50 p-8"
          />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 gradient-cta rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 space-y-8">
          <div className="space-y-4">
            <p className="text-[#6149dd] font-black uppercase tracking-[0.3em] text-xs">Easy Home Solution</p>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] leading-[1.1] tracking-tighter uppercase">
              The Beginner-Friendly <br/><span className="text-gradient">Home Fitness Secret</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-[#848693] leading-relaxed font-medium">
            <p>
              This Weight Loss Vibration Machine uses rhythmic vibrations to help move your body while you relax. It is designed to be home-friendly and perfect for beginners who want light daily movement without the stress of a gym.
            </p>
            
            <div className="grid gap-6">
              {[
                { t: 'Gentle Whole Body Vibration', d: 'Safe and rhythmic waves help support your circulation and muscle tone.' },
                { t: 'Perfect for Beginners', d: 'No fitness knowledge needed. Just stand and enjoy.' },
                { t: 'Space-Saving Design', d: 'Slides under your bed or sofa easily when not in use.' }
              ].map(item => (
                <div key={item.t} className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#6149dd]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#6149dd]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 uppercase text-sm tracking-tight">{item.t}</h4>
                    <p className="text-sm text-[#848693]/70">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;