import { NavLink, TrailPackage, TestimonialType, GalleryImage } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { id: "home", title: "Home", href: "#hero" },
  { id: "about", title: "About", href: "#about" },
  { id: "trails", title: "Trails", href: "#trails" },
  { id: "gallery", title: "Gallery", href: "#gallery" },
  { id: "testimonials", title: "Testimonials", href: "#testimonials" },
  { id: "contact", title: "Contact", href: "#contact" },
];

export const TRAIL_PACKAGES: TrailPackage[] = [
  {
    id: "bukit-timah",
    title: "Bukit Timah Nature Reserve",
    description: "Explore Singapore's highest hill with diverse flora and fauna in this pristine nature reserve.",
    price: 85,
    duration: "3 hours",
    difficulty: "Moderate",
    included: [
      "Professional guide",
      "Water bottle",
      "Snacks",
      "Wildlife spotting guide",
      "Photos of your experience"
    ],
    excluded: [
      "Transportation to/from meeting point",
      "Personal insurance",
      "Additional food/drinks"
    ],
    imageUrl: "https://images.pexels.com/photos/773088/pexels-photo-773088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "macritchie",
    title: "MacRitchie TreeTop Walk",
    description: "Walk among the treetops on this iconic suspended bridge and discover hidden wildlife.",
    price: 95,
    duration: "4 hours",
    difficulty: "Moderate",
    included: [
      "Professional guide",
      "Water bottle",
      "Energy bars",
      "Entrance fees",
      "Photos of your experience"
    ],
    excluded: [
      "Transportation to/from meeting point",
      "Personal insurance",
      "Additional food/drinks"
    ],
    imageUrl: "https://images.pexels.com/photos/4673515/pexels-photo-4673515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "pulau-ubin",
    title: "Pulau Ubin Adventure",
    description: "Step back in time on this rustic island and experience Singapore as it was decades ago.",
    price: 120,
    duration: "6 hours",
    difficulty: "Easy",
    included: [
      "Professional guide",
      "Ferry tickets",
      "Bicycle rental",
      "Lunch at local eatery",
      "Photos of your experience"
    ],
    excluded: [
      "Transportation to/from ferry terminal",
      "Personal insurance",
      "Additional activities"
    ],
    imageUrl: "https://images.pexels.com/photos/5241063/pexels-photo-5241063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "southern-ridges",
    title: "Southern Ridges Explorer",
    description: "Connect multiple parks across Singapore's southern ridge with stunning city views.",
    price: 75,
    duration: "3.5 hours",
    difficulty: "Easy",
    included: [
      "Professional guide",
      "Water bottle",
      "Snacks",
      "Architectural insights",
      "Photos of your experience"
    ],
    excluded: [
      "Transportation to/from meeting point",
      "Personal insurance",
      "Additional food/drinks"
    ],
    imageUrl: "https://images.pexels.com/photos/4673748/pexels-photo-4673748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah Chen",
    rating: 5,
    comment: "Stephen made our hike through Bukit Timah so informative and fun! He knew exactly where to spot wildlife and shared fascinating stories about Singapore's nature.",
    trail: "Bukit Timah Nature Reserve",
    imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "2",
    name: "James Wong",
    rating: 5,
    comment: "The TreeTop Walk was magical! Stephen ensured we had the perfect timing to avoid crowds and his knowledge of local wildlife made the experience unforgettable.",
    trail: "MacRitchie TreeTop Walk",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3",
    name: "Melissa Tan",
    rating: 4,
    comment: "Our family had a wonderful day exploring Pulau Ubin with Stephen. He was great with our kids and showed us places we would never have discovered on our own.",
    trail: "Pulau Ubin Adventure",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "4",
    name: "David Lim",
    rating: 5,
    comment: "The Southern Ridges hike offered incredible city views. Stephen knew all the best photo spots and paced the walk perfectly for our group.",
    trail: "Southern Ridges Explorer",
    imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    imageUrl: "https://images.pexels.com/photos/2896432/pexels-photo-2896432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Stunning view from Bukit Timah Summit",
    category: "landscapes"
  },
  {
    id: "2",
    imageUrl: "https://images.pexels.com/photos/2856070/pexels-photo-2856070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Guided group at MacRitchie Reservoir",
    category: "groups"
  },
  {
    id: "3",
    imageUrl: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Wildlife spotting in Singapore's forests",
    category: "wildlife"
  },
  {
    id: "4",
    imageUrl: "https://images.pexels.com/photos/5252553/pexels-photo-5252553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Tranquil boardwalk through Sungei Buloh",
    category: "landscapes"
  },
  {
    id: "5",
    imageUrl: "https://images.pexels.com/photos/753500/pexels-photo-753500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Southern Ridges Henderson Waves",
    category: "landscapes"
  },
  {
    id: "6",
    imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Family adventure on Pulau Ubin trails",
    category: "groups"
  },
  {
    id: "7",
    imageUrl: "https://images.pexels.com/photos/4005049/pexels-photo-4005049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Discovering hidden streams",
    category: "landscapes"
  },
  {
    id: "8",
    imageUrl: "https://images.pexels.com/photos/9147276/pexels-photo-9147276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Birdwatching group in Sungei Buloh",
    category: "groups"
  },
  {
    id: "9",
    imageUrl: "https://images.pexels.com/photos/15031951/pexels-photo-15031951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Singapore's iconic TreeTop Walk",
    category: "landscapes"
  }
];

export const GALLERY_CATEGORIES = [
  { value: "all", label: "All Photos" },
  { value: "landscapes", label: "Landscapes" },
  { value: "groups", label: "Group Adventures" },
  { value: "wildlife", label: "Wildlife" }
];