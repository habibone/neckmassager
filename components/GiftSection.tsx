import React from 'react';

const WhoForSection: React.FC = () => {
  const audiences = [
    { label: 'Home Users', icon: '🏠' },
    { label: 'Busy Professionals', icon: '💼' },
    { label: 'Beginners', icon: '🌱' },
    { label: 'Men & Women', icon: '👫' },
    { label: 'Movement Seekers', icon: '🚶' },
    { label: 'Office Workers', icon: '👨‍💻' }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] uppercase tracking-tight leading-tight">
            Who Is This <span className="text-[#6149dd]">Perfect For?</span>
          </h2>
          <p className="text-lg text-[#848693] leading-relaxed font-medium">
            Designed to fit perfectly into the UAE lifestyle. Whether you work long hours or just want to move more at home, VibeSlim is for you.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {audiences.map(item => (
              <div key={item.label} className="flex items-center space-x-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-gray-700 text-sm uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
           <div className="absolute inset-0 bg-[#6149dd]/10 rounded-full blur-3xl opacity-30 transform scale-150"></div>
           <div className="rounded-[3rem] shadow-2xl relative z-10 w-full overflow-hidden bg-white aspect-square flex items-center justify-center p-0 border border-gray-100">
             <img 
                src="https://images.supplipure.com/wp-content/uploads/2026/01/Weight-Loss-Vibration-plate-plateform.png" 
                alt="Who is it for"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;