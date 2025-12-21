
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Position", desc: "Place on neck or shoulders" },
    { title: "Secure", desc: "Adjust straps for comfort" },
    { title: "Power", desc: "Long-press power (3s)" },
    { title: "Mode", desc: "Select your preferred intensity" },
    { title: "Relax", desc: "Auto-shuts off in 15 min" }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">Recovery in 5 Simple Steps</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 relative">
          {/* Progress Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 flex flex-row md:flex-col items-center md:text-center w-full md:w-auto space-x-6 md:space-x-0 group">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-orange-600 font-bold text-lg shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {index + 1}
              </div>
              <div className="md:mt-6">
                <h3 className="font-bold text-[#111827] text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
