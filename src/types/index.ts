export type NavLink = {
  id: string;
  title: string;
  href: string;
};

export type TrailPackage = {
  id: string;
  title: string;
  description: string;
  price: number | string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult' | 'Depends' | 'Custom';
  included: string[];
  excluded: string[];
  imageUrl: string;
  duration: string;
};

export type TestimonialType = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  trail: string;
  imageUrl: string;
};

export type GalleryImage = {
  id: string;
  imageUrl: string;
  caption: string;
  category: string;
  size?: 'small' | 'medium' | 'large' | 'tall' | 'wide';
};