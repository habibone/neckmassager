
import React from 'react';

const UsageVideoSection: React.FC = () => {
  const videoSrc = "http://images.supplipure.com/wp-content/uploads/2026/01/viberation-palate.mp4";

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter">
            Easy Movement <span className="text-orange-600">In Real Life</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            See how the 180 speed levels and silent motor work perfectly at home.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-red-50 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="metadata"
              className="w-full aspect-[16/9] md:aspect-video object-cover"
              poster="http://images.supplipure.com/wp-content/uploads/2026/01/Whisk_39d8f2bf76d6e7fad0b4599c9d691e20dr.png"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">
            Designed for home users who want simple daily movement.
          </p>
          <div className="flex items-center justify-center space-x-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pt-2">
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>10 Mins Daily</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Music Ready</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Silent Motor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageVideoSection;
