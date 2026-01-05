import React, { useState, useEffect } from 'react';

const CITIES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain", "Fujairah", "Ras Al Khaimah"];

const SocialProofNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('translate-y-0 opacity-100');

  const notifications = [
    { icon: "💜", text: "17 people ordered this in the last 24 hours" },
    { icon: "👀", text: `Someone from ${CITIES[Math.floor(Math.random() * CITIES.length)]} just placed an order` },
    { icon: "✅", text: "COD orders are being dispatched today" },
    { icon: "📦", text: "Free 2-3 Day Express Shipping active for your region" },
    { icon: "⭐", text: "4.9/5 average rating based on 2,482 reviews" },
    { icon: "⚡", text: "Stock Alert: Only 7 units remaining at 50% discount" }
  ];

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      // Start exit animation
      setAnimationClass('translate-y-4 opacity-0');
      
      setTimeout(() => {
        // Change content and start entry animation
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setAnimationClass('-translate-y-4 opacity-0');
        
        setTimeout(() => {
          setAnimationClass('translate-y-0 opacity-100');
        }, 50);
      }, 500); // Wait for exit animation to finish
      
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(rotationInterval);
  }, [notifications.length]);

  return (
    <div className={`fixed bottom-28 md:bottom-8 left-4 right-4 md:left-8 md:right-auto z-40 pointer-events-none transition-all duration-700 ease-in-out ${animationClass}`}>
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl py-3 px-5 flex items-center space-x-3 max-w-fit mx-auto md:mx-0">
        <span className="text-xl shrink-0">{notifications[currentIndex].icon}</span>
        <p className="text-[11px] md:text-xs font-black text-gray-800 uppercase tracking-tight">
          {notifications[currentIndex].text}
        </p>
        <div className="w-1.5 h-1.5 bg-[#6149dd] rounded-full animate-pulse shrink-0"></div>
      </div>
    </div>
  );
};

export default SocialProofNotification;