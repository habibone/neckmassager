import React from 'react';
import { COMPARISON_DATA } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#111827] mb-4 uppercase tracking-tighter">
            The VibeSlim <span className="text-orange-600">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium">Why we are the leading choice for home fitness in the UAE.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-2 text-center">
            <div className="p-6 bg-orange-500 text-white">
              <p className="text-sm md:text-lg font-black uppercase tracking-widest">Weight Loss Vibration Machine</p>
            </div>
            <div className="p-6 bg-gray-100 text-gray-500 border-l border-white/20">
              <p className="text-sm md:text-lg font-black uppercase tracking-widest">Generic Brands</p>
            </div>

            {COMPARISON_DATA.us.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="p-4 md:p-6 border-b border-gray-50 flex items-center justify-center space-x-2 bg-orange-50/20">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-gray-800 text-[10px] md:text-sm uppercase tracking-tight">{item}</span>
                </div>
                <div className="p-4 md:p-6 border-b border-gray-50 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-red-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400 text-[10px] md:text-sm line-through font-medium">{COMPARISON_DATA.them[idx]}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          
          <div className="gradient-cta p-8 text-center">
            <p className="text-white font-black text-xl md:text-2xl uppercase italic tracking-tighter">
              Get Started For Just 247 AED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;