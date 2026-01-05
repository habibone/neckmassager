import React from 'react';

const PainAgitation: React.FC = () => {
  const painPoints = [
    { text: "No Time For Gym?", desc: "Work and family keep you busy? Exercise feels impossible.", icon: "⏰" },
    { text: "Tired After Work?", desc: "Feeling lazy or exhausted when you get home?", icon: "😴" },
    { text: "Exercise Feels Hard?", desc: "Traditional workouts are often painful and boring.", icon: "😫" },
    { text: "Want Easy Movement?", desc: "Need a simple way to move your body at home.", icon: "🏠" }
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f3ff] text-[#111827] overflow-hidden relative border-t border-[#6149dd]/10">
      <div className="absolute top-0 right-0 w-96 h-96 gradient-cta rounded-full blur-[150px] opacity-5"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              Is Your <span className="text-[#6149dd] underline decoration-[#6149dd]/30 underline-offset-8">Busy Life</span> <br/>Stopping Your Movement?
            </h2>
            <p className="text-[#848693] text-lg font-medium">In the UAE, long working hours and a sedentary lifestyle can make staying active difficult. We understand how hard it is to start.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {painPoints.map((point) => (
              <div key={point.text} className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-[#6149dd]/20 flex items-start space-x-4 text-left group hover:bg-white transition-colors shadow-sm">
                <span className="text-3xl group-hover:scale-110 transition-transform">{point.icon}</span>
                <div className="space-y-1">
                  <span className="text-md font-black uppercase tracking-tight block text-gray-900">{point.text}</span>
                  <span className="text-[#848693] text-xs leading-relaxed font-medium">{point.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative group overflow-hidden rounded-[3rem]">
            <div className="absolute -inset-1 bg-[#6149dd]/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="https://images.supplipure.com/wp-content/uploads/2026/01/whothevibrationplatefor.png" 
              alt="VibeSlim Machine Lifestyle" 
              className="rounded-[3rem] shadow-2xl relative border border-[#6149dd]/10 w-full object-cover aspect-square bg-white p-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainAgitation;