
import React, { useState, useEffect } from 'react';
import { ProductOffer } from '../App';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onCtaClick?: (offer: ProductOffer) => void;
}

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumb?: string;
}

const offers: ProductOffer[] = [
  {
    id: 'single',
    name: 'Weight Loss Vibration Machine (SKU: WB-UA1734)',
    price: 247,
    qty: 1,
    label: 'Standard Pack'
  }
];

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [viewers, setViewers] = useState(42);
  const [stockProgress, setStockProgress] = useState(85);
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  
  const productMedia: MediaItem[] = [
    {
      type: 'image',
      src: "https://images.supplipure.com/wp-content/uploads/2026/01/viberation-palate-new.webp"
    },
    {
      type: 'video',
      src: 'https://images.supplipure.com/wp-content/uploads/2026/01/vibration-machine3.mp4',
      thumb: 'https://images.supplipure.com/wp-content/uploads/2026/01/vibration-machine-4.jpeg'
    },
    {
      type: 'image',
      src: "https://images.supplipure.com/wp-content/uploads/2026/01/1761120202_71KVay5qpTL._AC_SL1500.webp"
    },
    {
      type: 'image',
      src: "https://images.supplipure.com/wp-content/uploads/2026/01/Whisk_39d8f2bf76d6e7fad0b4599c9d691e20dr.png"
    },
    {
      type: 'image',
      src: "https://images.supplipure.com/wp-content/uploads/2026/01/Untitled-design.png"
    }
  ];

  const [activeMedia, setActiveMedia] = useState<MediaItem>(productMedia[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => Math.max(30, Math.min(65, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 5000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setDetectedCity(data.city);
      })
      .catch(() => {});

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pt-6 pb-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-100 group relative flex items-center justify-center">
              {activeMedia.type === 'video' ? (
                <video
                  key={activeMedia.src}
                  src={activeMedia.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  poster={activeMedia.thumb}
                  onCanPlay={(e) => e.currentTarget.play()}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  key={activeMedia.src}
                  src={activeMedia.src} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  alt="Weight Loss Vibration Machine"
                />
              )}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider pointer-events-none">
                {activeMedia.type === 'video' ? 'Product Video' : 'Official Photo'}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {productMedia.map((media, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveMedia(media)}
                  className={`aspect-square rounded-lg bg-gray-50 border-2 cursor-pointer overflow-hidden transition-all flex items-center justify-center relative ${activeMedia.src === media.src ? 'border-orange-500' : 'border-transparent hover:border-orange-200'}`}
                >
                   <img src={media.thumb || media.src} className="w-full h-full object-contain p-1" alt={`Product detail ${idx + 1}`} />
                   {media.type === 'video' && (
                     <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.33-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                       </svg>
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="flex text-orange-400">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <span className="text-sm font-bold text-gray-500">2,400+ Orders in UAE</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  Beginner-Friendly
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-[#111827] leading-[1.1] tracking-tighter uppercase">
                  Weight Loss Vibration Machine <br/>
                  <span className="text-orange-600">with Bluetooth</span>
                </h1>
              </div>
              
              <p className="text-sm text-gray-500 font-medium">Support your wellness goals with just 10 minutes a day. Simple movement for a healthier lifestyle.</p>
              
              <ul className="mt-4 space-y-2 text-sm font-bold text-gray-600">
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span>Fast Free Delivery Across UAE</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span>Pay Cash on Delivery (COD)</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span>Complete Home Set with Accessories</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
               <span className="text-4xl font-black text-[#ef4444]">247.00 AED</span>
               <span className="text-xl text-gray-400 line-through">499.00 AED</span>
               <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Flash Sale</span>
            </div>

            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-orange-800 font-bold">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                <span>{viewers} people are viewing this machine now!</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase text-orange-900 tracking-widest">
                  <span>Hurry! Only 12 Units Left In Stock</span>
                  <span>{stockProgress}%</span>
                </div>
                <div className="h-2 w-full bg-orange-200 rounded-full overflow-hidden">
                  <div className="h-full gradient-cta animate-pulse" style={{width: `${stockProgress}%`}}></div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
               <CountdownTimer />

               <button 
                onClick={() => onCtaClick?.(offers[0])}
                className="w-full py-6 gradient-cta text-white font-black text-xl rounded-2xl shadow-xl shadow-orange-200 transform hover:scale-[1.02] transition-all flex flex-col items-center justify-center uppercase tracking-tight"
              >
                <span>Order Now – Pay on Delivery</span>
                <span className="text-[10px] opacity-80 mt-1 font-bold">
                  {detectedCity 
                    ? `🚚 Delivering to ${detectedCity} in 2 business days` 
                    : "🚚 Fast Cash on Delivery across UAE"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
