
import React from 'react';

const PainAgitation: React.FC = () => {
  const painPoints = [
    { text: "Long Hours At Office?", desc: "Staring at screens causes 'Tech Neck' stiffness.", icon: "💼" },
    { text: "Frequent Headaches?", desc: "Tension in neck muscles often leads to migraines.", icon: "💆‍♂️" },
    { text: "Poor Sleeping Posture?", desc: "Waking up with a stiff, unmovable neck.", icon: "😴" },
    { text: "High Levels of Stress?", desc: "Shoulders carrying the weight of the world.", icon: "⚡" }
  ];

  return (
    <section className="py-24 px-6 bg-[#111827] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 gradient-cta rounded-full blur-[150px] opacity-10"></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            Stop Living With <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">Chronic Stiffness</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Neglecting neck pain today leads to permanent spinal issues tomorrow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point) => (
            <div key={point.text} className="bg-white/5 backdrop-blur p-8 rounded-[2rem] border border-white/10 flex items-start space-x-6 text-left group hover:bg-white/10 transition-colors">
              <span className="text-5xl group-hover:scale-110 transition-transform">{point.icon}</span>
              <div className="space-y-1">
                <span className="text-xl font-black uppercase tracking-tight block">{point.text}</span>
                <span className="text-gray-400 text-sm leading-relaxed">{point.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainAgitation;
