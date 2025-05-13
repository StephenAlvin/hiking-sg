// Trail Types
export type Difficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';

export type TrailLocation = 'Central' | 'North' | 'South' | 'East' | 'West';

export interface Trail {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  location: TrailLocation;
  difficulty: Difficulty;
  length: number; // in km
  duration: number; // in hours
  elevation: number; // in meters
  imageUrl: string;
  featured: boolean;
  highlights: string[];
  flora: string[];
  fauna: string[];
  bestTimeToVisit: string[];
}

// Package Types
export type PackageTier = 'Basic' | 'Standard' | 'Premium' | 'Custom';

export interface HikingPackage {
  id: string;
  name: string;
  tier: PackageTier;
  price: number;
  description: string;
  duration: string;
  maxGroupSize: number;
  includes: string[];
  excludes?: string[];
  imageUrl: string;
  trailOptions: string[]; // Trail IDs
  featured: boolean;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  imageUrl?: string;
  package: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// Booking Types
export interface BookingSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  trail: string;
  availableSlots: number;
  price: number;
}

// Weather Types
export interface WeatherInfo {
  date: string;
  temperature: number;
  condition: string;
  precipitation: number;
  humidity: number;
  windSpeed: number;
  icon: string;
}