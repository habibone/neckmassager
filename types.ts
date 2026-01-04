
import React from 'react';

// Fix: Removed manual declaration of 'process' to resolve "Cannot redeclare block-scoped variable" error 
// and comply with guidelines stating that process.env should not be defined manually.
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
  // Using React.ReactNode is safer than JSX.Element for cross-version compatibility
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}
