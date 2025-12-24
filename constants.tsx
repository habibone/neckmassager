
import React from 'react';
import { Feature, Review, FaqItem } from './types';

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    comment: 'Literally saved my neck after long office hours. The heat function is heavenly.',
    location: 'Dubai, UAE',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Ahmed K.',
    rating: 5,
    comment: 'Better than a real massage because I can use it while watching TV. Worth every fils.',
    location: 'Abu Dhabi, UAE',
    avatar: 'https://picsum.photos/seed/ahmed/100/100'
  },
  {
    id: '3',
    name: 'Jessica L.',
    rating: 4,
    comment: 'Super portable. I take it on flights and it makes traveling so much more comfortable.',
    location: 'Sharjah, UAE',
    avatar: 'https://picsum.photos/seed/jess/100/100'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'TENS + EMS Pulse',
    description: 'Advanced dual-pulse technology targets deep muscle tissue to block pain signals instantly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: '42°C Constant Heat',
    description: 'Built-in thermostat provides soothing warmth to improve circulation and melt away stiffness.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    )
  },
  {
    title: '360° Ergonomic Fit',
    description: 'U-shaped suspension design adapts to any neck size for maximum contact and comfort.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'USB Fast Charge',
    description: 'One charge gives you 15 days of use (15 mins/day). Conveniently charge anywhere.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const COMPARISON_DATA = {
  us: [
    "TENS + EMS Technology",
    "42°C Intelligent Heating",
    "15 Intensity Levels",
    "Lightweight (160g)",
    "300 AED Sale Price"
  ],
  them: [
    "Simple Vibration Only",
    "No Heat / Slow Heat",
    "2-3 Basic Modes",
    "Bulky & Heavy",
    "599+ AED Retail"
  ]
};

export const FAQ: FaqItem[] = [
  {
    question: "Does it hurt or shock?",
    answer: "The TENS technology uses gentle electrical pulses. You may feel a slight tingling sensation, which is normal and indicates the muscles are being stimulated. Always start at intensity level 1."
  },
  {
    question: "How long should I use it?",
    answer: "We recommend 15 minutes per session. The device has an automatic shut-off timer for your safety."
  },
  {
    question: "Is it suitable for everyone?",
    answer: "Most people can use it safely. However, people with pacemakers or pregnant women should consult a doctor first."
  }
];
