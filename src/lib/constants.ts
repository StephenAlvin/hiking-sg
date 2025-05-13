import { NavLink, TrailPackage, TestimonialType, GalleryImage } from "@/types";
import MayaImage from "@/assets/testimonials/maya.jpg";
import PhilipImage from "@/assets/testimonials/philip.jpg";
import JohnImage from "@/assets/testimonials/john.jpg";
import SunRaysImage from "@/assets/gallery/sun-rays.jpg";
import BukitBrownHighwayImage from "@/assets/gallery/bukit-brown-highway.jpg";
import BukitBrownTempleImage from "@/assets/gallery/bukit-brown-temple.jpg";
import LuckyCharmsImage from "@/assets/gallery/lucky-charms.jpg";
import HendersonWavesImage from "@/assets/gallery/henderson-waves.jpg";
import GrayCautionImage from "@/assets/gallery/gray_caution.jpg";
import GrayPuddleJumpImage from "@/assets/gallery/gray_puddle-jump.jpg";
import GrayMrtInForestImage from "@/assets/gallery/gray_mrt-in-forest.jpg";
import GrayTrialBesideHdbImage from "@/assets/gallery/gray_trial-beside-hdb.jpg";
import GrayRailwayFeetImage from "@/assets/gallery/gray_railway-feet.jpg";
import GrayPipelineImage from "@/assets/gallery/gray_pipeline.jpg";
import GrayJurongRailwayTracksOldImage from "@/assets/gallery/gray_jurong-railway-tracks-old.jpg";

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
    description:
      "Explore Singapore's highest hill with diverse flora and fauna in this pristine nature reserve.",
    price: 85,
    duration: "3 hours",
    difficulty: "Moderate",
    included: [
      "Professional guide",
      "Water bottle",
      "Snacks",
      "Wildlife spotting guide",
      "Photos of your experience",
    ],
    excluded: [
      "Transportation to/from meeting point",
      "Personal insurance",
      "Additional food/drinks",
    ],
    imageUrl:
      "https://images.pexels.com/photos/773088/pexels-photo-773088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "macritchie",
    title: "MacRitchie TreeTop Walk",
    description:
      "Walk among the treetops on this iconic suspended bridge and discover hidden wildlife.",
    price: 95,
    duration: "4 hours",
    difficulty: "Moderate",
    included: [
      "Professional guide",
      "Water bottle",
      "Energy bars",
      "Entrance fees",
      "Photos of your experience",
    ],
    excluded: [
      "Transportation to/from meeting point",
      "Personal insurance",
      "Additional food/drinks",
    ],
    imageUrl:
      "https://images.pexels.com/photos/4673515/pexels-photo-4673515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "pulau-ubin",
    title: "Pulau Ubin Adventure",
    description:
      "Step back in time on this rustic island and experience Singapore as it was decades ago.",
    price: 120,
    duration: "6 hours",
    difficulty: "Easy",
    included: [
      "Professional guide",
      "Ferry tickets",
      "Bicycle rental",
      "Lunch at local eatery",
      "Photos of your experience",
    ],
    excluded: [
      "Transportation to/from ferry terminal",
      "Personal insurance",
      "Additional activities",
    ],
    imageUrl:
      "https://images.pexels.com/photos/5241063/pexels-photo-5241063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "southern-ridges",
    title: "Southern Ridges Explorer",
    description:
      "Connect multiple parks across Singapore's southern ridge with stunning city views.",
    price: 75,
    duration: "3.5 hours",
    difficulty: "Easy",
    included: [
      "Professional guide",
      "Water bottle",
      "Snacks",
      "Architectural insights",
      "Photos of your experience",
    ],
    excluded: [
      "Transportation to/from meeting point",
      "Personal insurance",
      "Additional food/drinks",
    ],
    imageUrl:
      "https://images.pexels.com/photos/4673748/pexels-photo-4673748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "1",
    name: "John Lee",
    rating: 5,
    comment:
      "Our hike through Bukit Timah so informative and fun! He knew exactly where to spot wildlife and shared fascinating stories about Singapore's nature.",
    trail: "Bukit Timah Nature Reserve",
    imageUrl: JohnImage,
  },
  {
    id: "2",
    name: "Maya",
    rating: 5,
    comment:
      "The TreeTop Walk was magical! Stephen ensured we had the perfect timing to avoid crowds and his knowledge of local wildlife made the experience unforgettable.",
    trail: "MacRitchie TreeTop Walk",
    imageUrl: MayaImage,
  },
  {
    id: "3",
    name: "Philip Wee",
    rating: 4,
    comment:
      "Our family had a wonderful day exploring Pulau Ubin with Stephen. He was great with our kids and showed us places we would never have discovered on our own.",
    trail: "Pulau Ubin Adventure",
    imageUrl: PhilipImage,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    imageUrl: SunRaysImage,
    caption: "Sunlight filtering through the forest canopy",
    category: "landscapes",
  },
  {
    id: "2",
    imageUrl: BukitBrownHighwayImage,
    caption: "Bukit Brown cemetery with highway overhead",
    category: "landscapes",
  },
  {
    id: "3",
    imageUrl: BukitBrownTempleImage,
    caption: "Traditional temple at Bukit Brown",
    category: "landscapes",
  },
  {
    id: "4",
    imageUrl: LuckyCharmsImage,
    caption: "Lucky charms found along hiking trails",
    category: "wildlife",
  },
  {
    id: "5",
    imageUrl: HendersonWavesImage,
    caption: "The iconic Henderson Waves bridge",
    category: "landscapes",
  },
  {
    id: "6",
    imageUrl: GrayCautionImage,
    caption: "Caution sign along a forest trail",
    category: "landscapes",
  },
  {
    id: "7",
    imageUrl: GrayPuddleJumpImage,
    caption: "Crossing puddles during a rainforest hike",
    category: "groups",
  },
  {
    id: "8",
    imageUrl: GrayMrtInForestImage,
    caption: "MRT train visible through forest foliage",
    category: "landscapes",
  },
  {
    id: "9",
    imageUrl: GrayTrialBesideHdbImage,
    caption: "Urban trail running alongside HDB buildings",
    category: "landscapes",
  },
  {
    id: "10",
    imageUrl: GrayRailwayFeetImage,
    caption: "Walking along abandoned railway tracks",
    category: "groups",
  },
  {
    id: "11",
    imageUrl: GrayPipelineImage,
    caption: "Hiking trail along an old pipeline",
    category: "landscapes",
  },
  {
    id: "12",
    imageUrl: GrayJurongRailwayTracksOldImage,
    caption: "Historic Jurong railway tracks",
    category: "landscapes",
  },
];

export const GALLERY_CATEGORIES = [
  { value: "all", label: "All Photos" },
  { value: "landscapes", label: "Landscapes" },
  { value: "groups", label: "Group Adventures" },
  { value: "wildlife", label: "Wildlife" },
];
