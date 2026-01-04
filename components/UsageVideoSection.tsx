
import React from 'react';

const UsageVideoSection: React.FC = () => {
  const videoSrc = "https://images.supplipure.com/wp-content/uploads/2026/01/vibration-machine2.mp4";

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter">
            Product <span className="text-orange-600">Unboxing</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            See exactly what arrives at your door. Professional quality packaging and everything you need to start moving immediately.
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
              controls
              preload="metadata"
              onCanPlay={(e) => e.currentTarget.play()}
              className="w-full aspect-[16/9] md:aspect-video object-cover"
              poster="https://images.supplipure.com/wp-content/uploads/2026/01/Whisk_39d8f2bf76d6e7fad0b4599c9d691e20dr.png"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">
            Premium build quality. Ready to use straight out of the box.
          </p>
          <div className="flex items-center justify-center space-x-6 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] pt-2">
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Secure Packaging</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>All Accessories Included</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageVideoSection;
