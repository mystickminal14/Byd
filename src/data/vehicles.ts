import type { Vehicle } from '@/types';

/*
 * Real BYD Nepal lineup (Cimex Inc.), content sourced from byd.com/np and the
 * official Nepal brochures mirrored under /public/pdfs. Prices reflect the
 * published Nepal price list (NPR) at the time of writing — always confirm
 * with the showroom. Imagery is the live byd.com/np material, mirrored under
 * /public/assets for reliable delivery.
 */

export const VEHICLES: Vehicle[] = [
  {
    slug: 'sealion-7',
    name: 'BYD SEALION 7',
    badge: 'Flagship e-SUV',
    category: 'SUV',
    series: 'Ocean',
    tagline: 'Power. Poise. Ocean X.',
    overview:
      'The SEALION 7 is BYD’s flagship sport SUV for Nepal — the innovative “X” design language gives the front fascia a dynamic, assertive presence, while a 230 kW rear motor delivers genuine performance-car acceleration on the ultra-safe Blade Battery.',
    startingPrice: 7999000,
    heroImage: '/assets/home/sealion7.webp',
    cardImage: '/assets/sealion7/pc-1.webp',
    cinematicImage: '/assets/sealion7/pc-v2l.webp',
    interiorImage: '/assets/sealion7/pc-9.webp',
    accent: '#4f7fd9',
    youtubeId: 'Gz2M51oG5Zc',
    highlightStats: [
      { label: 'WLTP Range', value: '482', unit: 'km' },
      { label: 'Max Power', value: '230', unit: 'kW' },
      { label: '0–100 km/h', value: '6.7', unit: 's' },
      { label: 'Blade Battery', value: '82.56', unit: 'kWh' },
    ],
    specs: [
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Motor', value: 'Permanent Magnet Synchronous' },
      { label: 'Max Power', value: '230', unit: 'kW' },
      { label: 'Max Torque', value: '380', unit: 'Nm' },
      { label: 'Battery', value: '82.56', unit: 'kWh Blade (LFP)' },
      { label: 'Range (WLTP)', value: '482', unit: 'km' },
      { label: '0–100 km/h', value: '6.7', unit: 's' },
      { label: 'Top Speed', value: '215', unit: 'km/h' },
      { label: 'DC Fast Charge', value: '30–80% in 24 min (150 kW)' },
      { label: 'Boot Space', value: '500', unit: 'L + front trunk' },
      { label: 'Infotainment', value: '15.6" rotating touchscreen' },
      { label: 'Audio', value: '12-speaker Dynaudio HiFi' },
    ],
    features: [
      {
        title: 'Ocean X Design',
        description:
          'The innovative “X” front fascia and 5 mm ultra-narrow water-drop light strip give the SEALION 7 a truly captivating road presence.',
        icon: 'design',
      },
      {
        title: '2.1 m² Panoramic Canopy',
        description:
          'A super-sized glass canopy with electric sunshades bathes the diamond-quilted cabin in light — 80% of surfaces are soft premium materials.',
        icon: 'comfort',
      },
      {
        title: 'Dynaudio 12-Speaker HiFi',
        description: 'A concert-grade Dynaudio system tuned for the cabin turns every commute into a private auditorium.',
        icon: 'tech',
      },
      {
        title: 'Level 2 Intelligent Driving',
        description: 'Adaptive cruise, lane assistance and intelligent safety systems watch the road with you, not for you.',
        icon: 'safety',
      },
      {
        title: 'Blade Battery + CTB',
        description:
          'The patented Blade Battery is built into the body structure (Cell-to-Body) for class-leading rigidity and safety.',
        icon: 'battery',
      },
      {
        title: 'VTOL Mobile Power Station',
        description: 'Power a projector, an espresso machine or an entire campsite straight from the car with overload-protected V2L.',
        icon: 'charge',
      },
    ],
    story: [
      {
        title: 'Born from the Ocean',
        body: 'Tail lights inspired by high-speed water droplets, a sleek coupé silhouette and the signature X face — the SEALION 7 is Ocean Aesthetics at full maturity.',
        image: '/assets/sealion7/pc-2.webp',
      },
      {
        title: 'A Cabin that Flows',
        body: 'The marine-inspired centre console flows like a current past a 15.6-inch rotating screen. Diamond-quilted seats ripple with the water-drop motif.',
        image: '/assets/sealion7/pc-9.webp',
      },
      {
        title: 'Space for Every Story',
        body: 'A 500-litre electric tailgate boot, a front trunk and clever storage throughout mean the weekend never has to pack light.',
        image: '/assets/sealion7/pc-6.webp',
      },
      {
        title: 'Energy, Anywhere',
        body: 'With VTOL discharge the SEALION 7 becomes a mobile power station — movie nights by the lake, powered by the Blade Battery.',
        image: '/assets/sealion7/pc-v2l.webp',
      },
    ],
    variants: [{ name: 'Premium RWD 82.56 kWh', price: 7999000 }],
    gallery: [
      { src: '/assets/sealion7/pc-1.webp', alt: 'SEALION 7 front three-quarter in studio light' },
      { src: '/assets/sealion7/pc-3.webp', alt: 'SEALION 7 rear with water-drop light strip' },
      { src: '/assets/sealion7/pc-10.webp', alt: 'Panoramic canopy over the rear cabin' },
      { src: '/assets/sealion7/pc-7.webp', alt: 'Diamond-quilted sport seats' },
      { src: '/assets/sealion7/pc-4.webp', alt: 'Driver cockpit with rotating touchscreen' },
      { src: '/assets/sealion7/pc-11.webp', alt: 'Dynaudio A-pillar tweeter' },
      { src: '/assets/sealion7/pc-6.webp', alt: 'Electric tailgate and 500L boot' },
      { src: '/assets/sealion7/pc-v2l.webp', alt: 'V2L powering a lakeside movie night' },
    ],
    brochures: [
      { title: 'SEALION 7 Brochure', file: '/pdfs/sealion7.pdf', kind: 'Brochure', size: '7.8 MB' },
    ],
  },
  {
    slug: 'atto-3',
    name: 'BYD ATTO 3',
    badge: 'C-Segment e-SUV',
    category: 'SUV',
    series: 'Dynasty',
    tagline: 'Rhythm for the Modern Road.',
    overview:
      'Nepal’s favourite electric SUV, rebuilt on e-Platform 3.0. The 2024 ATTO 3 pairs feather-inspired LED lamps and a music-inspired “Rhythm” interior with 7 airbags, ADAS and the ultra-safe Blade Battery — in Advanced and Superior editions.',
    startingPrice: 5690000,
    heroImage: '/assets/atto3/1.webp',
    cardImage: '/assets/home/atto-3-kv.webp',
    cinematicImage: '/assets/atto3/13.webp',
    interiorImage: '/assets/atto3/10.webp',
    accent: '#39c6f2',
    youtubeId: 'JyGROfuXggk',
    highlightStats: [
      { label: 'WLTP Range', value: '420', unit: 'km' },
      { label: 'Max Power', value: '150', unit: 'kW' },
      { label: 'Airbags', value: '7' },
      { label: 'Blade Battery', value: '60.48', unit: 'kWh' },
    ],
    specs: [
      { label: 'Drivetrain', value: 'Front-Wheel Drive' },
      { label: 'Motor', value: 'Permanent Magnet Synchronous' },
      { label: 'Max Power', value: '150', unit: 'kW' },
      { label: 'Max Torque', value: '310', unit: 'Nm' },
      { label: 'Battery', value: '49.92 / 60.48', unit: 'kWh Blade (LFP)' },
      { label: 'Range (WLTP)', value: '345 / 420', unit: 'km' },
      { label: 'DC Fast Charge', value: '0–80% in 50 min' },
      { label: 'Wheels', value: '18" Continental 235/50 R18' },
      { label: 'Airbags', value: '7, incl. far-side' },
      { label: 'Infotainment', value: '15.6" adaptive rotating screen' },
      { label: 'Sunroof', value: 'Panoramic, anti-pinch' },
      { label: 'V2L Output', value: '3.3', unit: 'kW' },
    ],
    features: [
      {
        title: 'Feather LED Headlights',
        description: 'LED combination lamps with a feather-inspired signature make the ATTO 3 unmistakable after dark.',
        icon: 'design',
      },
      {
        title: 'Rhythmic Interior',
        description: 'Guitar-string door pockets, fitness-inspired vents and soft rhythmic lines — a cabin composed like music.',
        icon: 'comfort',
      },
      {
        title: '15.6" Rotating Hover Pad',
        description: 'The adaptive touchscreen rotates between portrait and landscape, with wireless charging and full connectivity below.',
        icon: 'tech',
      },
      {
        title: 'Full ADAS Suite',
        description: 'ACC Stop & Go, AEB, Lane Keeping, Rear Cross-Traffic Alert and Brake — watch the scroll-through demos below.',
        icon: 'safety',
      },
      {
        title: 'e-Platform 3.0',
        description: 'Intelligence, efficiency, safety and aesthetics engineered into one dedicated EV architecture.',
        icon: 'battery',
      },
      {
        title: 'VTOL Mobile Power',
        description: 'A 3.3 kW vehicle-to-load outlet turns the ATTO 3 into a rolling power station for work sites and weekends.',
        icon: 'charge',
      },
    ],
    story: [
      {
        title: 'Light, Reimagined',
        body: 'Feather-inspired LED lamps sweep across the nose, framing the sealed grille of a car that never needed one.',
        image: '/assets/atto3/light-resize.webp',
      },
      {
        title: 'The Rhythm Cabin',
        body: 'A cockpit built around a 15.6-inch rotating hover pad, grip-style door handles with speakers, and 31-colour ambient light that pulses with your music.',
        image: '/assets/atto3/10.webp',
      },
      {
        title: 'Grip Meets Grace',
        body: 'Upgraded 18-inch Continental tyres put e-Platform 3.0’s instant torque to the tarmac with quiet confidence.',
        image: '/assets/atto3/tire-resized.webp',
      },
      {
        title: 'Energy Outward',
        body: 'VTOL discharge powers the campsite while the Blade Battery keeps hundreds of kilometres in reserve.',
        image: '/assets/atto3/vtl-wide.webp',
      },
    ],
    variants: [
      { name: 'Advanced · 49.92 kWh · 345 km', price: 5690000 },
      { name: 'Superior · 60.48 kWh · 420 km', price: 6780000 },
    ],
    colors: [
      { name: 'Surf Blue', hex: '#4f8fca' },
      { name: 'Ski White', hex: '#eef1f4' },
      { name: 'Harbour Grey', hex: '#8b95a1' },
      { name: 'Cosmos Black', hex: '#15181d' },
    ],
    gallery: [
      { src: '/assets/atto3/1.webp', alt: 'ATTO 3 in the studio' },
      { src: '/assets/atto3/13.webp', alt: 'ATTO 3 rear three-quarter' },
      { src: '/assets/atto3/10.webp', alt: 'Rhythm interior and rotating screen' },
      { src: '/assets/atto3/4-3.webp', alt: 'Door speaker detail' },
      { src: '/assets/atto3/4-4.webp', alt: 'Wireless phone charging' },
      { src: '/assets/atto3/4-7.webp', alt: '7 airbags, top view' },
      { src: '/assets/atto3/6.webp', alt: 'e-Platform 3.0 rolling chassis' },
      { src: '/assets/atto3/7.webp', alt: 'Blade Battery test rig' },
    ],
    brochures: [
      { title: '2024 ATTO 3 Brochure', file: '/pdfs/atto3.pdf', kind: 'Brochure', size: '6.0 MB' },
    ],
    adas: [
      {
        id: 'acc',
        label: 'ACC Stop & Go',
        description: 'Adaptive cruise holds a safe gap in flowing traffic and crawls with the jam.',
        video: '/assets/atto3/adas/ACC.mp4',
        poster: '/assets/atto3/adas/ACC.webp',
      },
      {
        id: 'aeb',
        label: 'AEB',
        description: 'Automatic Emergency Braking reacts when a hazard appears faster than you can.',
        video: '/assets/atto3/adas/AEB.mp4',
        poster: '/assets/atto3/adas/AEB.webp',
      },
      {
        id: 'ldw',
        label: 'Lane Keeping',
        description: 'LDW & LDP nudge you back when the car drifts without a signal.',
        video: '/assets/atto3/adas/LDW-LDP.mp4',
        poster: '/assets/atto3/adas/LDW-LDP.webp',
      },
      {
        id: 'rcta',
        label: 'Rear Cross-Traffic',
        description: 'RCTA warns — and RCTB brakes — for traffic crossing behind you while reversing.',
        video: '/assets/atto3/adas/RCTA-RCTB.mp4',
        poster: '/assets/atto3/adas/RCTA-RCTB.webp',
      },
    ],
  },
  {
    slug: 'atto-2',
    name: 'BYD ATTO 2',
    badge: 'B-Segment e-SUV',
    category: 'SUV',
    series: 'Dynasty',
    tagline: 'Lighting Up Your Journey.',
    overview:
      'The newest SUV in the range brings big-car technology to the city: CTB construction, a smart rotating screen, ventilated electric seats and 345 km of WLTP range from the 51.13 kWh Blade Battery.',
    startingPrice: 4595000,
    heroImage: '/assets/atto2/2.webp',
    cardImage: '/assets/atto2/3.webp',
    cinematicImage: '/assets/atto2/3.webp',
    interiorImage: '/assets/atto2/4.webp',
    accent: '#9db97f',
    youtubeId: 'F3mZJ9pCkcI',
    highlightStats: [
      { label: 'WLTP Range', value: '345', unit: 'km' },
      { label: 'Max Power', value: '100', unit: 'kW' },
      { label: '0–100 km/h', value: '7.9', unit: 's' },
      { label: 'Blade Battery', value: '51.13', unit: 'kWh' },
    ],
    specs: [
      { label: 'Drivetrain', value: 'Front-Wheel Drive' },
      { label: 'Motor', value: 'Permanent Magnet Synchronous' },
      { label: 'Max Power', value: '100', unit: 'kW' },
      { label: 'Max Torque', value: '290', unit: 'Nm' },
      { label: 'Battery', value: '51.13', unit: 'kWh Blade (LFP)' },
      { label: 'Range (WLTP)', value: '345', unit: 'km' },
      { label: '0–100 km/h', value: '7.9', unit: 's' },
      { label: 'Top Speed', value: '160', unit: 'km/h' },
      { label: 'DC Fast Charge', value: '30–80% in 28 min (65 kW)' },
      { label: 'AC Charging', value: '7 kW wall charger included' },
      { label: 'Construction', value: 'CTB (Cell-to-Body)' },
      { label: 'Tail Lights', value: 'Möbius-ring LED signature' },
    ],
    features: [
      {
        title: 'Möbius-Ring Tail Lights',
        description: 'Sharp LED headlights and an infinite-loop tail signature light up every journey, front and back.',
        icon: 'design',
      },
      {
        title: 'Smart Rotatable Screen',
        description: 'Navigation, apps and infotainment on a screen that flips to the orientation the moment needs.',
        icon: 'tech',
      },
      {
        title: 'Ventilated Electric Seats',
        description: 'Ergonomic, electrically adjusted and ventilated — with a commanding view over busy traffic.',
        icon: 'comfort',
      },
      {
        title: 'CTB Construction',
        description: 'The battery cover doubles as the body floor: more cabin space, more rigidity, more safety.',
        icon: 'battery',
      },
      {
        title: 'Blade Battery Proof',
        description: 'In nail-penetration tests the Blade Battery peaked at just 30–60 °C — no fire, no explosion.',
        icon: 'safety',
      },
      {
        title: '28-Minute Fast Charge',
        description: '30 to 80% in 28 minutes on DC — or overnight on the included 7 kW home wall charger.',
        icon: 'charge',
      },
    ],
    story: [
      {
        title: 'Urban Adventure',
        body: 'Compact outside, spacious inside — the ATTO 2 threads Kathmandu lanes by day and coastal highways by weekend.',
        image: '/assets/atto2/3.webp',
      },
      {
        title: 'A Screen that Moves with You',
        body: 'The rotating central display keeps navigation portrait in town, cinema-landscape on the open road.',
        image: '/assets/atto2/4.webp',
      },
      {
        title: 'Comfort in Command',
        body: 'Ventilated electric seats and an elevated driving position turn traffic into something you watch, not fight.',
        image: '/assets/atto2/5.webp',
      },
      {
        title: 'Safety in the Structure',
        body: 'Cell-to-Body construction makes the Blade Battery part of the skeleton itself — crash strength you can’t bolt on.',
        image: '/assets/atto2/8.webp',
      },
    ],
    variants: [{ name: 'Premium · 51.13 kWh', price: 4595000 }],
    gallery: [
      { src: '/assets/atto2/2.webp', alt: 'ATTO 2 at golden hour' },
      { src: '/assets/atto2/3.webp', alt: 'ATTO 2 on a coastal road' },
      { src: '/assets/atto2/4.webp', alt: 'Rotating touchscreen cockpit' },
      { src: '/assets/atto2/5.webp', alt: 'Panoramic roof from the cabin' },
      { src: '/assets/atto2/6.webp', alt: 'e-Platform 3.0 rolling chassis' },
      { src: '/assets/atto2/7.webp', alt: 'Blade Battery pack' },
      { src: '/assets/atto2/9.webp', alt: 'ATTO 2 pair in the city' },
    ],
    brochures: [
      { title: 'ATTO 2 Brochure', file: '/pdfs/atto2.pdf', kind: 'Brochure', size: '7.9 MB' },
    ],
  },
  {
    slug: 'dolphin',
    name: 'BYD DOLPHIN',
    badge: 'Ocean Hatchback',
    category: 'Hatchback',
    series: 'Ocean',
    tagline: 'Better in Every Wave.',
    overview:
      'The DOLPHIN made Europe fall for the electric hatch — and Nepal followed. Vegan-leather sport seats, a rotating touchscreen and a 345-to-1,310-litre boot ride on e-Platform 3.0 with 340 km of range.',
    startingPrice: 4115000,
    heroImage: '/assets/dolphin/2.webp',
    cardImage: '/assets/dolphin/2.webp',
    cinematicImage: '/assets/dolphin/1.webp',
    interiorImage: '/assets/dolphin/3.webp',
    accent: '#7fb6d9',
    youtubeId: 'PufBQE8VB3g',
    highlightStats: [
      { label: 'Range', value: '340', unit: 'km' },
      { label: 'Max Power', value: '70', unit: 'kW' },
      { label: 'Boot (max)', value: '1310', unit: 'L' },
      { label: 'Blade Battery', value: '44.9', unit: 'kWh' },
    ],
    specs: [
      { label: 'Drivetrain', value: 'Front-Wheel Drive' },
      { label: 'Motor', value: 'Permanent Magnet Synchronous' },
      { label: 'Max Power', value: '70', unit: 'kW' },
      { label: 'Max Torque', value: '180', unit: 'Nm' },
      { label: 'Battery', value: '44.9', unit: 'kWh Blade (LFP)' },
      { label: 'Range', value: '340', unit: 'km' },
      { label: 'DC Fast Charge', value: '20–80% in 42 min' },
      { label: 'Boot Space', value: '345–1310', unit: 'L' },
      { label: 'Seats', value: 'Vegan leather sport seats' },
      { label: 'Safety', value: '5-star Euro NCAP heritage' },
    ],
    features: [
      {
        title: 'Ocean Aesthetics',
        description: 'A playful, aerodynamic silhouette that swims through city traffic — unmistakably Ocean Series.',
        icon: 'design',
      },
      {
        title: 'See Better',
        description: 'The rotating display is the centre of a connected universe: intelligent voice, apps and connected-car services.',
        icon: 'tech',
      },
      {
        title: 'Ride Better',
        description: 'Sustainable vegan-leather sport seats with lateral support that holds you through the corners.',
        icon: 'comfort',
      },
      {
        title: 'Fit Better',
        description: 'Four 20-inch suitcases swallow into 345 L; fold the 60:40 bench and it grows to 1,310 L.',
        icon: 'design',
      },
      {
        title: 'Travel Better',
        description: 'Short overhangs, a long wheelbase and a flat rear floor — e-Platform 3.0 gives everyone the good seat.',
        icon: 'battery',
      },
      {
        title: 'Organise Better',
        description: 'Door pockets, a central cubby and a concealed tray under the dash keep life’s clutter invisible.',
        icon: 'comfort',
      },
    ],
    story: [
      {
        title: 'Made for the City, Freed by Range',
        body: '340 kilometres per charge means the DOLPHIN commutes all week and still makes Pokhara on the weekend.',
        image: '/assets/dolphin/2.webp',
      },
      {
        title: 'A Connected Cockpit',
        body: 'The rotating touchscreen anchors a cabin of soft curves and clever storage, with intelligent voice control throughout.',
        image: '/assets/dolphin/3.webp',
      },
      {
        title: 'Sport Seats, Vegan Soul',
        body: 'Multiple adjustments and real cornering support, upholstered in sustainable vegan leather.',
        image: '/assets/dolphin/5.webp',
      },
      {
        title: 'The 1,310-Litre Trick',
        body: 'A flat floor and 60:40 split bench turn the friendly hatch into a small cargo van when life demands it.',
        image: '/assets/dolphin/6.webp',
      },
    ],
    variants: [{ name: 'Premium · 44.9 kWh', price: 4115000 }],
    colors: [
      { name: 'Atlantis Grey', hex: '#5c6670' },
      { name: 'Sand White', hex: '#ece9e2' },
      { name: 'Coral Pink', hex: '#e8b4c0' },
      { name: 'Lavender Purple', hex: '#a99ec7' },
    ],
    gallery: [
      { src: '/assets/dolphin/2.webp', alt: 'DOLPHIN pair on a coastal road' },
      { src: '/assets/dolphin/3.webp', alt: 'DOLPHIN interior overview' },
      { src: '/assets/dolphin/4.webp', alt: 'Rotating touchscreen' },
      { src: '/assets/dolphin/5.webp', alt: 'Vegan leather sport seats' },
      { src: '/assets/dolphin/6.webp', alt: 'Boot with seats up' },
      { src: '/assets/dolphin/9.webp', alt: 'Aero wheel detail' },
    ],
    brochures: [
      { title: 'DOLPHIN Brochure', file: '/pdfs/dolphin.pdf', kind: 'Brochure', size: '8.7 MB' },
    ],
  },
  {
    slug: 'm6',
    name: 'BYD M6',
    badge: '7-Seater e-MPV',
    category: 'MPV',
    series: 'Ocean',
    tagline: 'Seven Seats. Zero Emissions.',
    overview:
      'Nepal’s first premium electric MPV. Seven ergonomic seats, a rotating smart screen, a panoramic skylight and up to 440 km WLTP from the 71.8 kWh Blade Battery — the family car, rewritten.',
    startingPrice: 5500000,
    heroImage: '/assets/m6/1.webp',
    cardImage: '/assets/m6/3.webp',
    cinematicImage: '/assets/m6/2.webp',
    interiorImage: '/assets/m6/4.webp',
    accent: '#c9cdd4',
    youtubeId: 'HjIep5QjdbM',
    highlightStats: [
      { label: 'WLTP Range', value: '440', unit: 'km' },
      { label: 'Seats', value: '7' },
      { label: 'Max Power', value: '100', unit: 'kW' },
      { label: 'Blade Battery', value: '71.8', unit: 'kWh' },
    ],
    specs: [
      { label: 'Seating', value: '7 (2+3+2)' },
      { label: 'Drivetrain', value: 'Front-Wheel Drive' },
      { label: 'Motor', value: 'Permanent Magnet Synchronous' },
      { label: 'Max Power', value: '100', unit: 'kW' },
      { label: 'Max Torque', value: '250', unit: 'Nm' },
      { label: 'Battery', value: '55.4 / 71.8', unit: 'kWh Blade (LFP)' },
      { label: 'Range (WLTP)', value: '420 / 440', unit: 'km' },
      { label: 'DC Fast Charge', value: '20–80% in 40 min (115 kW)' },
      { label: 'AC Charging', value: '0–100% in ~11 h (7.2 kW)' },
      { label: 'Boot Space', value: '180–580', unit: 'L' },
      { label: 'Skylight', value: 'Panoramic' },
    ],
    features: [
      {
        title: 'Ergonomic 7-Seat Cabin',
        description: 'Wider, longer cushions that follow the body’s curve — comfort engineered for all three rows.',
        icon: 'comfort',
      },
      {
        title: 'Fold-Flat Versatility',
        description: 'The ingenious fold-down seats create a completely flat load area — an MPV one minute, a cargo hauler the next.',
        icon: 'design',
      },
      {
        title: 'Rotating Smart Screen',
        description: 'The rotatable display opens a new journey of smart travel for the whole family.',
        icon: 'tech',
      },
      {
        title: 'Panoramic Skylight',
        description: 'An expansive glass skylight bathes all seven seats in natural light.',
        icon: 'comfort',
      },
      {
        title: 'Blade Battery Range',
        description: 'Up to 440 km WLTP means school runs all week and the Terai on one charge.',
        icon: 'battery',
      },
      {
        title: 'Sophisticated Interior',
        description: 'Instrument trim flows into technically textured door guards — sophistication without stuffiness.',
        icon: 'design',
      },
    ],
    story: [
      {
        title: 'The Family Flagship',
        body: 'A sleek MPV silhouette hides genuinely usable third-row seats and a panoramic skylight overhead.',
        image: '/assets/m6/1.webp',
      },
      {
        title: 'Every Row First Class',
        body: 'Ergonomic seats conform to the human body’s curve with wider, longer cushioning in all three rows.',
        image: '/assets/m6/4.webp',
      },
      {
        title: 'Flat-Floor Freedom',
        body: 'Fold the seats flat and the M6 becomes a cargo hauler for the family business.',
        image: '/assets/m6/7.webp',
      },
      {
        title: 'Nights that Travel',
        body: 'V2L output and 440 km of range make the M6 the base camp for family adventures.',
        image: '/assets/m6/9.webp',
      },
    ],
    variants: [
      { name: 'Standard · 55.4 kWh · 420 km', price: 5500000 },
      { name: 'Superior · 71.8 kWh · 440 km', price: 5890000 },
    ],
    gallery: [
      { src: '/assets/m6/1.webp', alt: 'M6 studio side profile' },
      { src: '/assets/m6/3.webp', alt: 'M6 front view' },
      { src: '/assets/m6/4.webp', alt: 'Brown ergonomic interior' },
      { src: '/assets/m6/6.webp', alt: 'Rotating smart screen' },
      { src: '/assets/m6/7.webp', alt: 'Seven-seat boot configuration' },
      { src: '/assets/m6/8.webp', alt: 'Panoramic skylight' },
    ],
    brochures: [{ title: 'M6 Brochure', file: '/pdfs/m6.pdf', kind: 'Brochure', size: '7.9 MB' }],
  },
  {
    slug: 'atto-1',
    name: 'BYD ATTO 1',
    badge: 'City e-Hatch',
    category: 'Hatchback',
    series: 'Ocean',
    tagline: 'Small Car. Big Energy.',
    overview:
      'The newest member of the Ocean series is Nepal’s most attainable BYD — World Urban Car energy with up to 300 km WLTP range, a rotating touchscreen and 2.2 kW of V2L power in a footprint made for the city.',
    startingPrice: 2895000,
    heroImage: '/assets/atto1/2.webp',
    cardImage: '/assets/atto1/2.webp',
    cinematicImage: '/assets/atto1/6.webp',
    interiorImage: '/assets/atto1/4.webp',
    accent: '#c8e05a',
    youtubeId: 'zV0LOFXWRz4',
    highlightStats: [
      { label: 'WLTP Range', value: '300', unit: 'km' },
      { label: 'V2L Output', value: '2.2', unit: 'kW' },
      { label: 'Airbags', value: '6' },
      { label: 'Blade Battery', value: '38.88', unit: 'kWh' },
    ],
    specs: [
      { label: 'Drivetrain', value: 'Front-Wheel Drive' },
      { label: 'Motor', value: 'Permanent Magnet Synchronous' },
      { label: 'Max Power', value: '45', unit: 'kW' },
      { label: 'Max Torque', value: '135', unit: 'Nm' },
      { label: 'Battery', value: '30.08 / 38.88', unit: 'kWh Blade (LFP)' },
      { label: 'Range (WLTP)', value: '230 / 300', unit: 'km' },
      { label: 'DC Fast Charge', value: '20–80% in 40 min (30 kW)' },
      { label: 'AC Charging', value: '0–100% in ~5 h (6.6 kW)' },
      { label: 'Airbags', value: '6' },
      { label: 'Infotainment', value: '10.1" rotating touchscreen' },
      { label: 'V2L Output', value: '2.2', unit: 'kW' },
      { label: 'Award', value: '2025 World Urban Car' },
    ],
    features: [
      {
        title: 'Ocean Aesthetic Design',
        description: 'A bright, confident look that revolutionises urban mobility — dynamic design in a city-perfect footprint.',
        icon: 'design',
      },
      {
        title: 'Energy Wherever You Go',
        description: '2.2 kW vehicle-to-load turns the smallest BYD into portable power for picnics and power cuts alike.',
        icon: 'charge',
      },
      {
        title: '10.1" Rotating Screen',
        description: 'Wireless Apple CarPlay and Android Auto on a rotating touchscreen, with OTA updates over the air.',
        icon: 'tech',
      },
      {
        title: '6-Airbag Safety Cell',
        description: 'e-Platform 3.0 brings a 6-airbag system, ABS with EBD and electronic stability control as standard.',
        icon: 'safety',
      },
      {
        title: 'Blade Battery, Downsized Price',
        description: 'The same ultra-safe LFP Blade Battery as the flagships — puncture-tested, crush-tested, heat-tested.',
        icon: 'battery',
      },
      {
        title: '10-Year Warranty',
        description: 'The battery pack and electric motor are covered for a full decade in Nepal.',
        icon: 'safety',
      },
    ],
    story: [
      {
        title: 'The City Is the Ocean',
        body: 'Short overhangs, bright colours and instant torque — the ATTO 1 was designed for exactly the streets you drive every day.',
        image: '/assets/atto1/2.webp',
      },
      {
        title: 'Room Where It Matters',
        body: 'Clever packaging on e-Platform 3.0 frees cabin space no petrol hatch this size can match.',
        image: '/assets/atto1/3.webp',
      },
      {
        title: 'Born on e-Platform 3.0',
        body: 'The same dedicated EV architecture as the flagships, scaled to the city — with the Blade Battery flat in the floor.',
        image: '/assets/atto1/4.webp',
      },
    ],
    variants: [
      { name: 'Dynamic · 30.08 kWh · 230 km', price: 2895000 },
      { name: 'Premium · 38.88 kWh · 300 km', price: 3299000 },
    ],
    gallery: [
      { src: '/assets/atto1/1.webp', alt: 'ATTO 1 World Urban Car artwork' },
      { src: '/assets/atto1/2.webp', alt: 'ATTO 1 front studio' },
      { src: '/assets/atto1/3.webp', alt: 'ATTO 1 at home in the city' },
      { src: '/assets/atto1/4.webp', alt: 'e-Platform 3.0 cutaway' },
      { src: '/assets/atto1/5.webp', alt: 'Blade Battery pack' },
      { src: '/assets/atto1/6.webp', alt: 'ATTO 1 pair under the palms' },
    ],
    brochures: [
      { title: 'ATTO 1 Brochure', file: '/pdfs/atto1.pdf', kind: 'Brochure', size: '3.1 MB' },
    ],
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug === slug);
}

export function getOtherVehicles(slug: string, count = 3): Vehicle[] {
  return VEHICLES.filter((v) => v.slug !== slug).slice(0, count);
}
