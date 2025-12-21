
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter">Engineered for <span className="text-orange-600">Total Comfort</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Why ReliefPulse is the #1 choice for recovery in the UAE.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center space-y-6 group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full border border-gray-100 shadow-lg flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-[#111827] uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
