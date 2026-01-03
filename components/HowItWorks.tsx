
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Position", desc: "Stand or sit on the machine", icon: "👤" },
    { title: "Select", desc: "Select mode and speed on remote", icon: "⚙️" },
    { title: "Enjoy", desc: "Relax with music and vibration", icon: "🎵" }
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter leading-tight">
              Start Your Workout in <br/>
              <span className="text-orange-600">3 Easy Steps</span>
            </h2>
            <p className="mt-4 text-gray-500 font-medium">Getting started with your Weight Loss Vibration Machine is as simple as pressing a button. No complicated setups, just pure results.</p>
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-orange-200 shrink-0 transform group-hover:rotate-6 transition-transform">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-black text-[#111827] text-lg uppercase tracking-tight group-hover:text-orange-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-500 text-sm font-medium mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-orange-100/30 rounded-[3rem] blur-2xl z-0"></div>
          <div className="relative z-10 rounded-[3rem] shadow-2xl overflow-hidden border border-orange-100 bg-white p-0">
            <img 
              src="http://images.supplipure.com/wp-content/uploads/2026/01/vibration-plate-for-home.png" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              alt="Start your workout session" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
