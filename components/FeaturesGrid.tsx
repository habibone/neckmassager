import React from 'react';

const FeaturesGrid: React.FC = () => {
  const benefitPoints = [
    {
      title: "180 Precision Speed Levels",
      desc: "Fine-tune your intensity with 180 levels. Whether you want a relaxing massage or an intense fat-burning workout, you have total control.",
      icon: "⚡"
    },
    {
      title: "Smart Bluetooth Surround Sound",
      desc: "Exercise is better with music. Connect your phone instantly and enjoy high-fidelity sound while you burn calories.",
      icon: "🎵"
    },
    {
      title: "Quiet 400W High-Torque Motor",
      desc: "Engineered for silent performance. Use it in the living room while watching TV or in the bedroom without waking anyone.",
      icon: "🤫"
    },
    {
      title: "3 Pro Training Modes",
      desc: "Choose between Walking, Jogging, or Running modes. The platform mimics different terrains to challenge your muscles effectively.",
      icon: "🏃"
    },
    {
      title: "Reflexology Magnetic Therapy",
      desc: "Built-in therapy magnets target key pressure points on your feet, supporting circulation and helping you feel refreshed.",
      icon: "🧲"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#6149dd] font-black uppercase tracking-[0.3em] text-xs">Premium Features</p>
          <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter leading-tight">
            Everything You Need For <br/>
            <span className="text-gradient">Maximum Results At Home</span>
          </h2>
          <p className="text-[#848693] max-w-2xl mx-auto font-medium text-lg">
            VibeSlim has engineered this Weight Loss Vibration Machine with professional features to ensure your fitness journey is simple, effective, and fun.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image with Badge */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-[#6149dd]/5 rounded-[3rem] blur-2xl z-0"></div>
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-[#6149dd]/10 shadow-2xl bg-white">
              <img 
                src="https://images.supplipure.com/wp-content/uploads/2026/01/Maximum-Results-At-Home.png" 
                alt="Weight Loss Vibration Machine Professional Features" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#6149dd]/10 flex items-center space-x-2">
                <span className="text-[#6149dd] font-black">2026</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#848693]">Official Edition</span>
              </div>
            </div>
          </div>

          {/* Right: Compelling Content List */}
          <div className="flex-1 order-1 lg:order-2 space-y-8">
            <div className="grid gap-8">
              {benefitPoints.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#6149dd]/10 flex items-center justify-center text-2xl shadow-sm border border-[#6149dd]/10 group-hover:scale-110 group-hover:bg-[#6149dd]/20 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-[#111827] uppercase tracking-tight group-hover:text-[#6149dd] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#848693] leading-relaxed text-sm font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-[#6149dd] text-white text-[10px] font-black flex items-center justify-center border-2 border-white">+2K</div>
                </div>
                <p className="text-xs font-bold text-[#848693] uppercase tracking-widest text-right">
                  Joined by 2,000+ <br/>Users in the UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;