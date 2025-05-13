import { HikingPackage } from '@/lib/types';

export const packages: HikingPackage[] = [
  {
    id: 'basic-half-day',
    name: 'Basic Half-Day Adventure',
    tier: 'Basic',
    price: 45,
    description: 'Perfect for beginners and families, this guided half-day hike introduces you to Singapore\'s accessible natural wonders. Our experienced guides will lead you through easy trails while sharing fascinating insights about local flora and fauna.',
    duration: '3-4 hours',
    maxGroupSize: 15,
    includes: [
      'Professional guide',
      'Nature interpretation',
      'Bottled water',
      'Basic first aid',
      'Trail snacks'
    ],
    excludes: [
      'Transportation to/from trail',
      'Meals',
      'Personal hiking gear'
    ],
    imageUrl: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    trailOptions: ['southern-ridges', 'windsor-nature-park', 'coney-island'],
    featured: true
  },
  {
    id: 'standard-full-day',
    name: 'Standard Full-Day Experience',
    tier: 'Standard',
    price: 85,
    description: 'Immerse yourself in Singapore\'s diverse ecosystems with our full-day hiking experience. This package offers more challenging trails and comprehensive nature interpretation, perfect for active hikers seeking deeper knowledge of Singapore\'s natural heritage.',
    duration: '6-8 hours',
    maxGroupSize: 12,
    includes: [
      'Professional guide',
      'In-depth nature interpretation',
      'Bottled water and electrolyte drinks',
      'Nutritious trail lunch',
      'Snacks and energy bars',
      'First aid kit',
      'Insect repellent',
      'Digital photo package'
    ],
    excludes: [
      'Transportation to/from trail',
      'Personal hiking gear'
    ],
    imageUrl: 'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg',
    trailOptions: ['macritchie-treetop-walk', 'bukit-timah-nature-reserve', 'pulau-ubin-chek-jawa', 'dairy-farm-nature-park'],
    featured: true
  },
  {
    id: 'premium-adventure',
    name: 'Premium Adventure Package',
    tier: 'Premium',
    price: 135,
    description: 'Our signature experience offers the ultimate hiking adventure in Singapore. Enjoy personalized guiding with smaller groups, gourmet meals, transportation, and access to less-traveled trails. This all-inclusive package ensures a memorable, hassle-free nature experience.',
    duration: '8-10 hours',
    maxGroupSize: 8,
    includes: [
      'Expert naturalist guide',
      'Pick-up and drop-off service',
      'Gourmet picnic lunch',
      'Premium trail snacks and drinks',
      'Hiking poles (if needed)',
      'Professional photography',
      'Comprehensive first aid',
      'Rain protection gear',
      'Cooling towels',
      'Souvenir gift pack'
    ],
    imageUrl: 'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg',
    trailOptions: ['macritchie-treetop-walk', 'bukit-timah-nature-reserve', 'pulau-ubin-chek-jawa', 'southern-ridges', 'sungei-buloh-wetland-reserve'],
    featured: true
  },
  {
    id: 'custom-expedition',
    name: 'Custom Expedition',
    tier: 'Custom',
    price: 200,
    description: 'Design your perfect hiking experience with our fully customizable expedition package. Choose your trails, timing, group size, and special interests. Ideal for special occasions, team-building events, or serious nature enthusiasts seeking a tailored adventure.',
    duration: 'Flexible',
    maxGroupSize: 20,
    includes: [
      'Fully customized itinerary',
      'Multiple specialist guides as needed',
      'Transportation options',
      'Meal and refreshment options',
      'Specialized equipment rental',
      'Photography/videography services',
      'Custom educational focus',
      'Celebration arrangements (if requested)'
    ],
    imageUrl: 'https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg',
    trailOptions: ['macritchie-treetop-walk', 'bukit-timah-nature-reserve', 'pulau-ubin-chek-jawa', 'southern-ridges', 'sungei-buloh-wetland-reserve', 'coney-island', 'windsor-nature-park', 'dairy-farm-nature-park'],
    featured: false
  },
  {
    id: 'sunset-special',
    name: 'Sunset Special Hike',
    tier: 'Standard',
    price: 75,
    description: 'Experience Singapore\'s natural landscapes transformed by the golden hour. This evening hike offers spectacular sunset views and transitions into early evening when different wildlife emerges. Perfect for photography enthusiasts and romantic occasions.',
    duration: '3-4 hours',
    maxGroupSize: 10,
    includes: [
      'Expert guide',
      'Sunset viewpoint selection',
      'Headlamps/torches for return journey',
      'Light refreshments',
      'Evening picnic setup',
      'Photography tips',
      'Safety equipment'
    ],
    excludes: [
      'Transportation to/from trail',
      'Full dinner',
      'Personal hiking gear'
    ],
    imageUrl: 'https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg',
    trailOptions: ['southern-ridges', 'coney-island', 'pulau-ubin-chek-jawa'],
    featured: false
  },
  {
    id: 'wildlife-photography',
    name: 'Wildlife Photography Trek',
    tier: 'Premium',
    price: 150,
    description: 'Designed specifically for wildlife and nature photography enthusiasts. Explore Singapore\'s biodiversity hotspots with guides who know exactly where and when to find fascinating subjects. Includes specialized guidance on nature photography techniques.',
    duration: '6-8 hours',
    maxGroupSize: 6,
    includes: [
      'Naturalist guide with photography expertise',
      'Transportation to multiple locations',
      'Extended time at wildlife hotspots',
      'Photography skill workshops',
      'Tripod loan (if needed)',
      'Refreshments and lunch',
      'Photography review session'
    ],
    imageUrl: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
    trailOptions: ['sungei-buloh-wetland-reserve', 'pulau-ubin-chek-jawa', 'macritchie-treetop-walk'],
    featured: false
  }
];