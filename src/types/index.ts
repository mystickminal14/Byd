export interface Stat {
  label: string;
  value: string;
  unit?: string;
}

export interface Spec {
  label: string;
  value: string;
  unit?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: 'battery' | 'tech' | 'safety' | 'design' | 'comfort' | 'charge';
}

export interface StoryBlock {
  title: string;
  body: string;
  image: string;
}

export interface Variant {
  name: string;
  price: number;
  note?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PaintColor {
  name: string;
  hex: string;
}

export interface Brochure {
  title: string;
  file: string;
  kind: string;
  size: string;
}

export interface AdasClip {
  id: string;
  label: string;
  description: string;
  video: string;
  poster: string;
}

export interface Vehicle {
  slug: string;
  name: string;
  badge: string;
  category: 'Hatchback' | 'SUV' | 'MPV';
  series: 'Ocean' | 'Dynasty';
  tagline: string;
  overview: string;
  startingPrice: number;
  heroImage: string;
  cardImage: string;
  cinematicImage: string;
  interiorImage: string;
  accent: string;
  youtubeId?: string;
  highlightStats: Stat[];
  specs: Spec[];
  features: Feature[];
  story: StoryBlock[];
  variants: Variant[];
  colors?: PaintColor[];
  gallery: GalleryImage[];
  brochures: Brochure[];
  adas?: AdasClip[];
}
