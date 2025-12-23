
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // We'll set a daily "Priority Processing" cutoff at 6:00 PM (18:00)
      let cutoff = new Date();
      cutoff.setHours(18, 0, 0, 0);

      // If it's already past 6:00 PM today, the next priority batch cutoff is tomorrow at 6:00 PM
      if (now > cutoff) {
        cutoff.setDate(cutoff.getDate() + 1);
      }

      const difference = cutoff.getTime() - now.getTime();

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center justify-center space-x-1.5 text-orange-600 font-bold bg-orange-50/50 py-2 px-4 rounded-xl border border-orange-100/50 ${className}`}>
      <span className="text-sm">⏰</span>
      <p className="text-[10px] md:text-xs uppercase tracking-tight">
        Order within <span className="font-black text-orange-700">{format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}</span> to get priority processing today
      </p>
    </div>
  );
};

export default CountdownTimer;
