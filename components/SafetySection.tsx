import React from 'react';

const SafetySection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-50">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 flex-shrink-0 bg-[#6149dd]/10 rounded-3xl flex items-center justify-center">
            <svg className="w-12 h-12 text-[#6149dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <div className="space-y-4 text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight">Safe Home Design</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-bold uppercase tracking-tight">Silent 400W Motor</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-bold uppercase tracking-tight">Overheat Protection</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-bold uppercase tracking-tight">Power Safety Logic</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-bold uppercase tracking-tight">Home-Friendly Use</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <p className="text-xs font-bold text-[#848693] text-center leading-relaxed">
                The Weight Loss Vibration Machine is designed for home relaxation and movement support. It is easy for beginners and safe for daily use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;