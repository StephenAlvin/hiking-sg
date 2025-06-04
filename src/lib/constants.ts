import { NavLink, TrailPackage, TestimonialType, GalleryImage } from "@/types";

// Testimonials
import MayaImage from "@/assets/testimonials/maya.jpg";
import PhilipImage from "@/assets/testimonials/philip.jpg";
import JohnImage from "@/assets/testimonials/john.jpg";

// Gallery
import SunRaysImage from "@/assets/gallery/sun-rays.jpg";
import BukitBrownHighwayImage from "@/assets/gallery/bukit-brown-highway.jpg";
import BukitBrownTempleImage from "@/assets/gallery/bukit-brown-temple.jpg";
import TalismansImage from "@/assets/gallery/talismans-bukit-brown.jpg";
import HendersonWavesImage from "@/assets/gallery/henderson-waves.jpg";
import MonkeyMacritchieImage from "@/assets/gallery/monkey-macritchie.jpg";
import ThompsonParkImage from "@/assets/gallery/thompson-park.jpg";
import AbandonedCarBukitBrownImage from "@/assets/gallery/abandoned-car-bukit-brown.jpg";
import ClementiForestTrailImage from "@/assets/gallery/clementi-forest-trail-backview.jpg";
import MtFaberKeppelHillImage from "@/assets/gallery/mt-faber-keppel-hill.jpg";
import BukitTimahTrialImage from "@/assets/gallery/bukit-timah-trial.webp";
// Gray images
import OldJurongRailwayImage from "@/assets/gallery/gray_old-jurong-railway.jpg";
import FormerBukitTimahRailwayImage from "@/assets/gallery/gray_former-bukit-timah-railway.jpg";
import GrayPipelineImage from "@/assets/gallery/gray_pipeline.jpg";
import TampinesEcoGreenImage from "@/assets/gallery/gray_tampines-eco-green.jpg";

// Packages
import GrayPuddleJumpImage from "@/assets/packages/gray_puddle-jump.jpg";
import PulauUbinImage from "@/assets/packages/pulau-ubin-puaka-hill.jpg";
import ClementiForestImage from "@/assets/packages/clementi-forest.jpg";
import KeppelHillImage from "@/assets/packages/keppel-hill.jpg";
import AvatarTreesImage from "@/assets/packages/avatar-trees.jpg";
import MandaiT15Image from "@/assets/packages/mandai-t15.jpg";
import ChestnutNatureParkImage from "@/assets/packages/chestnut-tower.jpg";
import PipelineTrailImage from "@/assets/packages/pipeline-trail.jpg";

export const NAV_LINKS: NavLink[] = [
  { id: "home", title: "Home", href: "#hero" },
  { id: "about", title: "About", href: "#about" },
  { id: "trails", title: "Trails", href: "#trails" },
  { id: "gallery", title: "Gallery", href: "#gallery" },
  { id: "testimonials", title: "Testimonials", href: "#testimonials" },
  { id: "contact", title: "Contact", href: "#contact" },
];

const defaultIncluded = [
  "Professional guide",
  "Water bottle",
  "Insect repellent",
  "Hiking pole",
  "Photos from the hike",
];

const defaultExcluded = [
  "Transportation to/from meeting point",
  "Personal insurance",
  "Additional food/drinks",
];

export const TRAIL_PACKAGES: TrailPackage[] = [
  {
    id: "personalized-experience",
    title: "🎁 Custom Made",
    description:
      "Highly recommended! I will tailor a hike to your interests and fitness level, uniquely for you.",
    price: "50~",
    duration: "Custom",
    difficulty: "Custom",
    included: defaultIncluded,
    excluded: defaultExcluded,
    imageUrl: GrayPuddleJumpImage,
  },
  // {
  //   id: "bukit-brown",
  //   title: "Bukit Brown Avatar Trees",
  //   description:
  //     "Discover Singapore's historic cemetery with cultural heritage and abundant nature.",
  //   price: 45,
  //   duration: "3 hours",
  //   difficulty: "Moderate",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: AvatarTreesImage,
  // },
  // {
  //   id: "clementi-forest",
  //   title: "Clementi Forest",
  //   description:
  //     "Venture through this untouched secondary forest with lush greenery and diverse ecosystems.",
  //   price: 45,
  //   duration: "3-4 hours",
  //   difficulty: "Moderate",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: ClementiForestImage,
  // },
  // {
  //   id: "keppel-hill",
  //   title: "Keppel Hill",
  //   description:
  //     "Discover the hidden gems of Keppel Hill including a forgotten reservoir, abandoned swimming pool, and mysterious tombstone amidst lush greenery.",
  //   price: 50,
  //   duration: "1 hour",
  //   difficulty: "Moderate",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: KeppelHillImage,
  // },
  // {
  //   id: "mandai-t15",
  //   title: "Mandai T15",
  //   description:
  //     "Explore the hidden Mandai T15 trail with unique wildlife and peaceful forest surroundings.",
  //   price: 65,
  //   duration: "4 hours",
  //   difficulty: "Easy",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: MandaiT15Image,
  // },
  // {
  //   id: "chestnut-nature-park",
  //   title: "Chestnut Nature Park",
  //   description:
  //     "Experience Singapore's largest nature park with dedicated mountain biking and hiking trails.",
  //   price: 55,
  //   duration: "3 hours",
  //   difficulty: "Easy",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: ChestnutNatureParkImage,
  // },
  // {
  //   id: "pipeline-trail",
  //   title: "Pipeline Trail",
  //   description:
  //     "Walk along this unique trail following Singapore's historic water pipeline through lush greenery.",
  //   price: 45,
  //   duration: "4 hours",
  //   difficulty: "Moderate",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: PipelineTrailImage,
  // },
  // {
  //   id: "pulau-ubin",
  //   title: "Pulau Ubin Island",
  //   description:
  //     "Step back in time on this rustic island and experience Singapore as it was decades ago.",
  //   price: 85,
  //   duration: "6 hours",
  //   difficulty: "Moderate",
  //   included: defaultIncluded,
  //   excluded: defaultExcluded,
  //   imageUrl: PulauUbinImage,
  // },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "1",
    name: "John Lee",
    rating: 5,
    comment:
      "Our hike through Clementi Forest was so informative and fun! Stephen shared fascinating stories about Singapore's history",
    trail: "Clementi Forest",
    imageUrl: JohnImage,
  },
  {
    id: "2",
    name: "Maya",
    rating: 5,
    comment:
      "Keppel Hill was a great hike! It was a decently tough but rewarding, especially the first steep bit, but Stephen was very patient and helped me up",
    trail: "Keppel Hill",
    imageUrl: MayaImage,
  },
  {
    id: "3",
    name: "Philip Wee",
    rating: 4,
    comment:
      "Pulau Ubin was really nice and peaceful. We got to do a bit of hiking and ended with a picnic by the beach.",
    trail: "Pulau Ubin Island",
    imageUrl: PhilipImage,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    imageUrl: SunRaysImage,
    caption: "Sunlight streaming through forest canopy",
    category: "landscapes",
  },
  {
    id: "2",
    imageUrl: BukitBrownHighwayImage,
    caption: "Bukit Brown cemetery with PIE highway overhead",
    category: "landscapes",
  },
  {
    id: "3",
    imageUrl: BukitBrownTempleImage,
    caption: "Ancient temple in Bukit Brown cemetery",
    category: "landscapes",
  },
  {
    id: "4",
    imageUrl: TalismansImage,
    caption: "Traditional talismans at Bukit Brown graves",
    category: "wildlife",
  },
  {
    id: "5",
    imageUrl: HendersonWavesImage,
    caption: "The iconic Henderson Waves pedestrian bridge",
    category: "landscapes",
  },
  {
    id: "9",
    imageUrl: MonkeyMacritchieImage,
    caption: "Monkey sighting at MacRitchie Reservoir",
    category: "wildlife",
  },
  {
    id: "10",
    imageUrl: ThompsonParkImage,
    caption: "Scenic views at Thompson Nature Park",
    category: "landscapes",
  },
  {
    id: "11",
    imageUrl: AbandonedCarBukitBrownImage,
    caption: "Abandoned car in Bukit Brown forest",
    category: "landscapes",
  },
  {
    id: "12",
    imageUrl: ClementiForestTrailImage,
    caption: "Lush trail through Clementi Forest",
    category: "landscapes",
  },
  {
    id: "13",
    imageUrl: MtFaberKeppelHillImage,
    caption: "Scenic path at Mount Faber - Keppel Hill",
    category: "landscapes",
  },
  {
    id: "14",
    imageUrl: BukitTimahTrialImage,
    caption: "Trail at Bukit Timah Nature Reserve",
    category: "landscapes",
  },
  {
    id: "6",
    imageUrl: OldJurongRailwayImage,
    caption: "Remnants of old Jurong Railway Line",
    category: "landscapes",
  },
  {
    id: "7",
    imageUrl: FormerBukitTimahRailwayImage,
    caption: "Former Bukit Timah Railway corridor",
    category: "landscapes",
  },
  {
    id: "15",
    imageUrl: TampinesEcoGreenImage,
    caption: "Biodiversity at Tampines Eco Green",
    category: "landscapes",
  },
  {
    id: "8",
    imageUrl: GrayPipelineImage,
    caption: "Pipeline trail through Singapore's green corridor",
    category: "landscapes",
  },
];

export const GALLERY_CATEGORIES = [
  { value: "all", label: "All Photos" },
  { value: "landscapes", label: "Landscapes" },
  { value: "groups", label: "Group Adventures" },
  { value: "wildlife", label: "Wildlife" },
];
