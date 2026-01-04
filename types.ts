
import React from 'react';

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  avatar: string;
}

export interface Feature {
  title: string;
  description: string;
  // Replaced JSX.Element with React.ReactNode to resolve the JSX namespace error
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}
