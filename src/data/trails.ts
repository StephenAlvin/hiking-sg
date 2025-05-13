import { Trail } from '@/lib/types';

export const trails: Trail[] = [
  {
    id: 'macritchie-treetop-walk',
    name: 'MacRitchie TreeTop Walk',
    description: 'The TreeTop Walk is a 250-meter aerial free-standing suspension bridge spanning the two highest points within MacRitchie and offers a bird\'s eye view of the community of plants and animals that live in the forest canopy. The bridge is about 25 meters above the ground at its highest point, and connects Bukit Peirce and Bukit Kalang, the two highest points in MacRitchie.',
    shortDescription: 'Spectacular aerial walkway through the forest canopy.',
    location: 'Central',
    difficulty: 'Moderate',
    length: 10.5,
    duration: 3,
    elevation: 80,
    imageUrl: 'https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg',
    featured: true,
    highlights: [
      '250m suspended walkway through forest canopy',
      'Panoramic views of Upper Peirce Reservoir',
      'Rich biodiversity with potential wildlife sightings',
      'Peaceful forest setting'
    ],
    flora: ['Tembusu Trees', 'Shorea Trees', 'Rubber Trees', 'Ferns'],
    fauna: ['Long-tailed Macaques', 'Flying Lemur', 'Monitor Lizards', 'Various Bird Species'],
    bestTimeToVisit: ['Early Morning', 'Weekdays']
  },
  {
    id: 'bukit-timah-nature-reserve',
    name: 'Bukit Timah Nature Reserve',
    description: 'Bukit Timah Nature Reserve contains Singapore\'s highest hill, standing at 163.63 meters, and is one of the largest patches of primary rainforest left in Singapore. Despite its small size of 163 hectares, it contains a remarkably diverse ecosystem with more than 840 flowering plants and over 500 animal species.',
    shortDescription: 'Summit trail to Singapore\'s highest point.',
    location: 'Central',
    difficulty: 'Challenging',
    length: 3.2,
    duration: 2,
    elevation: 163,
    imageUrl: 'https://images.pexels.com/photos/2896384/pexels-photo-2896384.jpeg',
    featured: true,
    highlights: [
      'Summit of Singapore\'s highest hill (163.63m)',
      'Primary rainforest ecosystem',
      'Rich biodiversity',
      'Well-marked trails of varying difficulty'
    ],
    flora: ['Seraya Trees', 'Tropical Oak', 'Lianas', 'Dipterocarp Trees'],
    fauna: ['Flying Squirrels', 'Pangolins', 'Colugos', 'Slender Squirrels'],
    bestTimeToVisit: ['Early Morning', 'Weekdays', 'Dry Season']
  },
  {
    id: 'southern-ridges',
    name: 'Southern Ridges',
    description: 'The Southern Ridges is a 10-kilometer trail that connects Mount Faber Park, Telok Blangah Hill Park, HortPark, Kent Ridge Park, and Labrador Nature Reserve. It is a great place to see an unusual combination of natural and architectural wonders. The highlights include Henderson Waves, Forest Walk, and Canopy Walk.',
    shortDescription: 'Spectacular 10km hike connecting five parks.',
    location: 'South',
    difficulty: 'Easy',
    length: 10,
    duration: 4,
    elevation: 100,
    imageUrl: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
    featured: true,
    highlights: [
      'Henderson Waves - Singapore\'s highest pedestrian bridge',
      'Forest Walk elevated walkway',
      'Panoramic views of the city and harbor',
      'Connection of five different parks'
    ],
    flora: ['Tembusu Trees', 'Fishtail Palms', 'Orchids', 'Ferns'],
    fauna: ['Sunbirds', 'Kingfishers', 'Squirrels', 'Butterflies'],
    bestTimeToVisit: ['Late Afternoon', 'Early Evening', 'Weekdays']
  },
  {
    id: 'sungei-buloh-wetland-reserve',
    name: 'Sungei Buloh Wetland Reserve',
    description: 'Singapore\'s first ASEAN Heritage Park, Sungei Buloh Wetland Reserve is known for its rich biodiversity. The reserve is a site of international importance for migratory birds, and is an important stopping point for shorebirds from as far as Siberia on their way to Australia to escape the harsh winter.',
    shortDescription: 'Rich wetland reserve with migratory birds.',
    location: 'North',
    difficulty: 'Easy',
    length: 4.8,
    duration: 2.5,
    elevation: 5,
    imageUrl: 'https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg',
    featured: false,
    highlights: [
      'Mangrove forest ecosystem',
      'Migratory birds (especially from September to March)',
      'Estuarine crocodiles and monitor lizards',
      'Boardwalks over mangroves and wetlands'
    ],
    flora: ['Mangroves', 'Sea Holly', 'Sea Hibiscus', 'Nipah Palm'],
    fauna: ['Estuarine Crocodiles', 'Mudskippers', 'Otters', 'Water Monitor Lizards'],
    bestTimeToVisit: ['Early Morning', 'Migratory Season (September-March)']
  },
  {
    id: 'pulau-ubin-chek-jawa',
    name: 'Pulau Ubin & Chek Jawa',
    description: 'Pulau Ubin is a small island situated in the north east of Singapore, to the west of Pulau Tekong. Chek Jawa is a unique natural area located on the eastern tip of Pulau Ubin. At low tide, up to six different habitats can be seen. These habitats include sandy beach, rocky beach, seagrass lagoon, coral rubble, mangroves and coastal forest.',
    shortDescription: 'Island adventure with coastal wetlands.',
    location: 'East',
    difficulty: 'Moderate',
    length: 8,
    duration: 4,
    elevation: 20,
    imageUrl: 'https://images.pexels.com/photos/127673/pexels-photo-127673.jpeg',
    featured: false,
    highlights: [
      'Coastal boardwalk at Chek Jawa',
      'Diverse marine life at low tide',
      'Rural village atmosphere',
      'Mountain biking opportunities'
    ],
    flora: ['Mangroves', 'Seagrass', 'Coastal Plants', 'Coconut Trees'],
    fauna: ['Wild Boars', 'Hornbills', 'Sea Stars', 'Fiddler Crabs'],
    bestTimeToVisit: ['Weekdays', 'Low Tide Periods', 'Early Morning']
  },
  {
    id: 'coney-island',
    name: 'Coney Island Park',
    description: 'Also known as Pulau Serangoon, Coney Island Park houses a wide variety of habitats, including coastal forests, grasslands, mangroves, and casuarina woodlands. The 50-hectare park boasts several beaches and an extensive network of trails.',
    shortDescription: 'Rustic island park with diverse habitats.',
    location: 'North',
    difficulty: 'Easy',
    length: 5,
    duration: 2,
    elevation: 10,
    imageUrl: 'https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg',
    featured: false,
    highlights: [
      'Rustic natural environment',
      'Beach areas for rest stops',
      'Bird watching opportunities',
      'Casuarina forests'
    ],
    flora: ['Casuarina Trees', 'Beach Morning Glory', 'Sea Almond', 'Coastal Plants'],
    fauna: ['Butterflies', 'Resident Birds', 'Otters', 'Asian Toad'],
    bestTimeToVisit: ['Weekdays', 'Early Morning', 'Late Afternoon']
  },
  {
    id: 'windsor-nature-park',
    name: 'Windsor Nature Park',
    description: 'Windsor Nature Park is a 75-hectare nature park located off Venus Drive. The park has been enhanced with a number of features that provide visitors with a variety of nature-based experiences, like marsh gardens, freshwater streams, and a former rubber plantation trail.',
    shortDescription: 'Freshwater wetland boardwalks and forest trails.',
    location: 'Central',
    difficulty: 'Easy',
    length: 3.5,
    duration: 1.5,
    elevation: 30,
    imageUrl: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
    featured: false,
    highlights: [
      'Dragonfly Pond',
      'Marsh Garden',
      'Hanguana Trail with freshwater streams',
      'Access point to MacRitchie TreeTop Walk'
    ],
    flora: ['Hanguana Malayana', 'Stream Plants', 'Rubber Trees', 'Ferns'],
    fauna: ['Dragonflies', 'Freshwater Fish', 'Butterflies', 'Birds'],
    bestTimeToVisit: ['Early Morning', 'Weekdays', 'Dry Season']
  },
  {
    id: 'dairy-farm-nature-park',
    name: 'Dairy Farm Nature Park',
    description: 'This 63-hectare nature park offers a variety of recreational activities and a learning journey about the natural heritage of Singapore. The park contains the Wallace Trail, named after Alfred Russel Wallace, who collected specimens in the area in the 1800s.',
    shortDescription: 'Forested park with Wallace learning trail.',
    location: 'Central',
    difficulty: 'Moderate',
    length: 6,
    duration: 2.5,
    elevation: 80,
    imageUrl: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg',
    featured: false,
    highlights: [
      'Wallace Education Centre',
      'Singapore Quarry with viewing platform',
      'Varied terrain for different hiking experiences',
      'Rich forest biodiversity'
    ],
    flora: ['Secondary Forest Trees', 'Rubber Trees', 'Climbers', 'Ferns'],
    fauna: ['Birds', 'Butterflies', 'Amphibians', 'Reptiles'],
    bestTimeToVisit: ['Weekdays', 'Early Morning', 'Late Afternoon']
  }
];