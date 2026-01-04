
import React from 'react';
import { Feature, Review, FaqItem } from './types';

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rana Dabbas',
    rating: 5,
    comment: 'Very good vibration plate. Does the job perfectly but manual is in russian. Not a problem for me since it is very intuitive to use.',
    location: 'United Arab Emirates',
    avatar: 'https://picsum.photos/seed/rana/100/100'
  },
  {
    id: '2',
    name: 'Dody',
    rating: 5,
    comment: 'جيد استخدمة صباحا لتنشيط الدورة الدموية (Used it in the morning to stimulate blood circulation, very effective and simple).',
    location: 'United Arab Emirates',
    avatar: 'https://picsum.photos/seed/dody/100/100'
  },
  {
    id: '3',
    name: 'tanya',
    rating: 5,
    comment: 'Was sitting on buying this for sometime - happy i finally did. Sturdy, well built machine. Good vibrations and settings. Easy to use. Day 4 - and very happy - using 10 minutes in morning and evening, while watching TV.',
    location: 'United Arab Emirates',
    avatar: 'https://picsum.photos/seed/tanya/100/100'
  }
];

export const FEATURES: Feature[] = [
  {
    title: '180 Speed Levels',
    description: 'Find your perfect pace with 180 levels. Can support daily movement goals for everyone.',
    icon: <img src="https://images.supplipure.com/wp-content/uploads/2026/01/Untitled-design.png" className="w-full h-full object-contain" alt="180 Speeds" />
  },
  {
    title: '3 Training Modes',
    description: 'Choose between Walking, Jogging, or Running modes to match your comfort level.',
    icon: <img src="https://images.supplipure.com/wp-content/uploads/2026/01/Untitled-design.png" className="w-full h-full object-contain" alt="3 Modes" />
  },
  {
    title: 'Bluetooth & USB Music',
    description: 'Connect your phone easily. Enjoy your favorite songs through the built-in speakers while you move.',
    icon: <img src="https://images.supplipure.com/wp-content/uploads/2026/01/1761120202_71KVay5qpTL._AC_SL1500.webp" className="w-full h-full object-cover rounded-full" alt="Music" />
  },
  {
    title: 'Silent 400W Motor',
    description: 'Powerful yet quiet. Use it anytime at home without disturbing your family or neighbors.',
    icon: <img src="https://images.supplipure.com/wp-content/uploads/2026/01/Whisk_39d8f2bf76d6e7fad0b4599c9d691e20dr.png" className="w-full h-full object-contain" alt="Silent Motor" />
  }
];

export const COMPARISON_DATA = {
  us: [
    "180 Speed Levels + 3 Modes",
    "Smart Band & Resistance Bands Included",
    "Bluetooth & USB Music Built-in",
    "Silent 400W Motor with Safety Tech",
    "247 AED - Best Value in UAE"
  ],
  them: [
    "Only 1 or 2 Speeds",
    "No Accessories Included",
    "No Music / No Speakers",
    "Noisy & Bulky Design",
    "600+ AED Retail Price"
  ]
};

export const FAQ: FaqItem[] = [
  {
    question: "Is it easy to use?",
    answer: "Yes, it is very simple. Just plug it in, stand on the platform, and use the remote to select your speed. It is perfect for home use."
  },
  {
    question: "Is it good for beginners?",
    answer: "Absolutely. With 180 speed levels, you can start very slowly. It is designed for everyone, even if you do not exercise often."
  },
  {
    question: "Is Cash on Delivery available in UAE?",
    answer: "Yes! We offer Cash on Delivery across all Emirates. You only pay when the driver delivers the machine to your door."
  },
  {
    question: "Does it make noise?",
    answer: "No, it features a 400W ultra-silent motor. You can use it while watching TV or even while others are nearby."
  },
  {
    question: "What comes in the box?",
    answer: "You get the Weight Loss Vibration Machine, a Smart Band (App supported), 2 Resistance Bands for arm movement, and the power cable."
  }
];
