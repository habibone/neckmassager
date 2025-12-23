
import React from 'react';

const UsageVideoSection: React.FC = () => {
  // Using the high-quality demo video provided in assets
  const videoSrc = "https://supplipure.com/wp-content/uploads/2025/12/neck-messager.mp4";

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter">
            See How It Works <span className="text-orange-600">In Real Life</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Experience the 4D bionic massage technology from every angle.
          </p>
        </div>

        <div className="relative group">
          {/* Decorative frame shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-red-50 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="metadata"
              className="w-full aspect-[16/9] md:aspect-video object-cover"
              poster="https://supplipure.com/wp-content/uploads/2025/12/neckmassager.jpg"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Overlay for mobile readability */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent md:hidden">
               <p className="text-white font-bold text-sm text-center">
                 Designed to feel like real hands.
               </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">
            Designed to feel like real hands. Comfortable heat. Easy to use.
          </p>
          <div className="flex items-center justify-center space-x-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pt-2">
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Home Use</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Office Ready</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Travel Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageVideoSection;
