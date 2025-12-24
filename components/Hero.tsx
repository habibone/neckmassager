
import React, { useState, useEffect } from 'react';
import { ProductOffer } from '../App';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onCtaClick?: (offer: ProductOffer) => void;
}

interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [viewers, setViewers] = useState(42);
  const [stockProgress, setStockProgress] = useState(85);
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  
  const mainVideo = "https://supplipure.com/wp-content/uploads/2025/12/neck-messager.mp4";
  const secondaryImages = [
    "https://supplipure.com/wp-content/uploads/2025/12/Bionic-Heated-Neck15.png",
    "https://supplipure.com/wp-content/uploads/2025/12/Bionic-Heated-Neck14.png",
    "https://supplipure.com/wp-content/uploads/2025/12/neckmassager.jpg",
    "https://supplipure.com/wp-content/uploads/2025/12/Bionic-Heated-Neck3.png"
  ];

  const [activeMedia, setActiveMedia] = useState<MediaItem>({
    type: 'video',
    src: mainVideo
  });

  const offers: ProductOffer[] = [
    {
      id: 'single',
      name: 'ReliefPulse™ Bionic Massager',
      price: 300,
      qty: 1,
      label: 'Standard Pack'
    },
    {
      id: 'bogo',
      name: 'ReliefPulse™ Bionic Massager (Bundle Pack)',
      price: 497,
      qty: 2,
      label: 'Buy 2 & Save Extra'
    }
  ];

  useEffect(() => {
    // Viewer simulation
    const interval = setInterval(() => {
      setViewers(prev => Math.max(30, Math.min(65, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 5000);

    // Dynamic City Detection (IP Based fallback)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setDetectedCity(data.city);
      })
      .catch(() => console.log('Location detection skipped'));

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pt-6 pb-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Media Column */}
          <div className="flex-1 space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-100 group relative flex items-center justify-center">
              {activeMedia.type === 'video' ? (
                <video 
                  key={activeMedia.src}
                  src={activeMedia.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img 
                  key={activeMedia.src}
                  src={activeMedia.src} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  alt="Product view"
                />
              )}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider pointer-events-none">
                {activeMedia.type === 'video' ? 'Live Demo' : 'HD Photo'}
              </div>
            </div>

            {/* Thumbnails Gallery */}
            <div className="grid grid-cols-5 gap-2">
              <div 
                onClick={() => setActiveMedia({ type: 'video', src: mainVideo })}
                className={`aspect-square rounded-lg bg-gray-50 border-2 cursor-pointer overflow-hidden transition-all ${activeMedia.src === mainVideo ? 'border-orange-500' : 'border-transparent'}`}
              >
                <video src={mainVideo} muted playsInline className="w-full h-full object-cover" />
              </div>
              
              {secondaryImages.map((src, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveMedia({ type: 'image', src })}
                  className={`aspect-square rounded-lg bg-gray-50 border-2 cursor-pointer overflow-hidden transition-all flex items-center justify-center ${activeMedia.src === src ? 'border-orange-500' : 'border-transparent hover:border-orange-200'}`}
                >
                   <img src={src} className="w-full h-full object-contain p-1" alt={`Product detail ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Column */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="flex text-orange-400">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <span className="text-sm font-bold text-gray-500">2,482 Reviews | Verified Purchase</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight tracking-tight">
                Electric Pulse Neck Massager with Deep Heating & Pain Relief
              </h1>
              <p className="text-sm text-gray-500 font-medium">Relieve Stress, Fatigue, and Muscle Tension in 15 Minutes.</p>
            </div>

            <div className="flex items-center space-x-4">
               <span className="text-4xl font-black text-[#ef4444]">300.00 AED</span>
               <span className="text-xl text-gray-400 line-through">599.00 AED</span>
               <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Save 50%</span>
            </div>

            {/* Urgency Indicators */}
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-orange-800 font-bold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
                </span>
                <span>{viewers} people are viewing this product right now!</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase text-orange-900 tracking-widest">
                  <span>Hurry! Only 7 Items Left In Stock</span>
                  <span>{stockProgress}%</span>
                </div>
                <div className="h-2 w-full bg-orange-200 rounded-full overflow-hidden">
                  <div className="h-full gradient-cta animate-pulse" style={{width: `${stockProgress}%`}}></div>
                </div>
              </div>
            </div>

            {/* Bundle Options */}
            <div className="space-y-3">
               <p className="text-xs font-black uppercase text-gray-400 tracking-widest">Select Offer</p>
               <div className="grid gap-3">
                  <button 
                    onClick={() => onCtaClick?.(offers[0])} 
                    className="p-4 border-2 border-gray-200 rounded-2xl flex items-center justify-between hover:border-orange-500 transition-colors bg-white text-left group"
                  >
                    <div>
                      <p className="font-bold text-gray-900">1x Massager</p>
                      <p className="text-xs text-gray-500">Standard Pack</p>
                    </div>
                    <span className="font-black text-gray-900">300 AED</span>
                  </button>
                  
                  <button 
                    onClick={() => onCtaClick?.(offers[1])} 
                    className="p-4 border-2 border-orange-500 rounded-2xl flex items-center justify-between bg-orange-50 relative overflow-hidden group text-left"
                  >
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] px-3 py-1 font-black uppercase rounded-bl-xl">Best Value</div>
                    <div>
                      <p className="font-black text-orange-900">2x Massagers (Family Pack)</p>
                      <p className="text-xs text-orange-700">Perfect for Couples</p>
                    </div>
                    <span className="font-black text-orange-600">497 AED</span>
                  </button>
               </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4 pt-2">
               {/* Delivery Countdown Timer */}
               <CountdownTimer />

               <button 
                onClick={() => onCtaClick?.(offers[0])}
                className="w-full py-6 gradient-cta text-white font-black text-xl rounded-2xl shadow-xl shadow-orange-200 transform hover:scale-[1.02] transition-all flex flex-col items-center justify-center uppercase tracking-tight"
              >
                <span>Add To Cart & Pay on Delivery</span>
                <span className="text-[10px] opacity-80 mt-1 font-bold">
                  {detectedCity 
                    ? `🚚 Delivering to ${detectedCity} in 2-4 business days` 
                    : "🚚 Fast Cash on Delivery across UAE"}
                </span>
              </button>
              
              <div className="flex flex-wrap justify-center gap-6 pt-2 grayscale opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                {[
                  { label: 'Free Delivery', icon: '🚚' },
                  { label: 'Cash On Delivery', icon: '💵' },
                  { label: '7-Day Return', icon: '♻️' },
                  { label: 'Safe Payment', icon: '🔒' }
                ].map(item => (
                  <div key={item.label} className="flex items-center space-x-2 text-xs font-bold text-gray-600">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
