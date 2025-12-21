
import React, { useState, useEffect } from 'react';

const SolutionIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1 relative">
           <img 
            src="https://supplipure.com/wp-content/uploads/2025/12/Bionic-Heated-Neck-1.png" 
            alt="ReliefPulse Technology" 
            className="rounded-[2.5rem] shadow-2xl relative z-10 w-full object-cover"
          />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 gradient-cta rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="flex-1 order-1 md:order-2 space-y-8">
          <div className="space-y-4">
            <p className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Modern Recovery</p>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] leading-[1.1] tracking-tighter uppercase">
              How TENS Technology <br/><span className="text-gradient">Ends Your Pain</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-medium">
            <p>
              Traditional massagers only rub the surface. ReliefPulse uses low-frequency electrical pulses to reach deep into the nerve endings and block pain signals before they reach your brain.
            </p>
            
            <div className="grid gap-6">
              {[
                { t: 'Release Endorphins', d: 'Natural pain-killing chemicals released by your body.' },
                { t: 'Improve Microcirculation', d: 'Enhances blood flow to damaged tissues for faster healing.' },
                { t: 'Reduce Inflammation', d: 'Gently relaxes tense muscle fibers and reduces swelling.' }
              ].map(item => (
                <div key={item.t} className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 uppercase text-sm tracking-tight">{item.t}</h4>
                    <p className="text-sm text-gray-500">{item.d}</p>
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
