export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  featured?: boolean;
  wide?: boolean;
  tall?: boolean;
}

export interface Project {
  id: string;
  client: string;
  role: string;
  year: string;
  description: string;
  badge?: string;
  media: MediaItem[];
  achievements: string[];
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: 'david-zwirner',
    client: 'DAVID ZWIRNER',
    role: 'Social Media · Web Development',
    year: '2022–2023',
    description:
      'Crafted editorial social media content for Didier William\'s landmark solo exhibition "Nou Kite Tout Sa Dèyè" ("We\'ve Left That All Behind") at the Museum of Contemporary Art North Miami. The campaign earned a New York Times feature. Also developed two dedicated artist webpages for the gallery.',
    badge: 'NEW YORK TIMES FEATURED',
    achievements: [
      'New York Times press coverage',
      '2 dedicated artist webpages',
      'Solo exhibition campaign across platforms',
    ],
    media: [
      { type: 'image', src: '/media/david-zwirner/dz-gallery-1.jpg', alt: 'Didier William exhibition installation at MOCA North Miami', featured: true, wide: true },
      { type: 'image', src: '/media/david-zwirner/dz-artwork-1.jpg', alt: 'Didier William — figurative work', tall: true },
      { type: 'image', src: '/media/david-zwirner/dz-artwork-2.jpg', alt: 'Didier William — figurative work' },
      { type: 'image', src: '/media/david-zwirner/dz-gallery-2.jpg', alt: 'Exhibition installation view' },
      { type: 'image', src: '/media/david-zwirner/dz-nyt.jpg', alt: 'New York Times feature' },
      { type: 'image', src: '/media/david-zwirner/dz-article-1.jpg', alt: 'Exhibition editorial copy' },
      { type: 'image', src: '/media/david-zwirner/dz-article-2.jpg', alt: 'Exhibition editorial copy' },
      { type: 'image', src: '/media/david-zwirner/dz-gallery-3.jpg', alt: 'Exhibition installation view' },
    ],
  },
  {
    id: 'casa-mb',
    client: 'CASA MB',
    role: 'Content Strategy · Inaugural Newsletter',
    year: '2023',
    description:
      'Developed the inaugural newsletter and content strategy for Casa MB, an innovative art space housed within a landmark modernist Brutalist residence. The content bridged the space\'s rich architectural heritage with its contemporary programming and emerging artist roster.',
    badge: 'INAUGURAL NEWSLETTER',
    achievements: [
      'Inaugural newsletter launch',
      'Architectural heritage storytelling',
      'Content strategy from zero',
    ],
    media: [
      { type: 'image', src: '/media/casa-mb/casa-exterior-pool.jpg', alt: 'Casa MB exterior with pool', featured: true, wide: true },
      { type: 'image', src: '/media/casa-mb/casa-studio.jpg', alt: 'Interior with artworks' },
      { type: 'image', src: '/media/casa-mb/casa-artist-studio.jpg', alt: 'Artist in studio', tall: true },
      { type: 'image', src: '/media/casa-mb/casa-exterior-color.jpg', alt: 'Casa MB facade' },
      { type: 'image', src: '/media/casa-mb/casa-staircase.jpg', alt: 'Interior staircase' },
      { type: 'image', src: '/media/casa-mb/casa-exterior-bw-1.jpg', alt: 'Vintage exterior archival' },
      { type: 'image', src: '/media/casa-mb/casa-interior-bw-1.jpg', alt: 'Interior mezzanine archival' },
      { type: 'image', src: '/media/casa-mb/casa-hallway-bw.jpg', alt: 'Interior hallway archival' },
      { type: 'image', src: '/media/casa-mb/casa-interior-bw-2.jpg', alt: 'Archival interior' },
      { type: 'image', src: '/media/casa-mb/casa-exterior-bw-2.jpg', alt: 'Archival exterior' },
    ],
  },
  {
    id: 'mb',
    client: 'M+B',
    role: 'Gallery Content · Social Media',
    year: '2023',
    description:
      'Produced social media content for M+B Gallery, a leading contemporary art gallery in Los Angeles, spotlighting major artist exhibitions, studio visits, and large-scale immersive installations across the US and internationally.',
    achievements: [
      'Gallery exhibition campaigns',
      'Studio visit editorial content',
      'International show coverage',
    ],
    media: [
      { type: 'image', src: '/media/mb/mb-artist-portrait.jpg', alt: 'Artist portrait at M+B Gallery', featured: true },
      { type: 'image', src: '/media/mb/mb-installation-chairs.jpg', alt: 'M+B Gallery installation', wide: true },
      { type: 'image', src: '/media/mb/mb-installation-lying.jpg', alt: 'Immersive installation view' },
      { type: 'video', src: '/media/videos/video-1.mp4', alt: 'Gallery content video' },
      { type: 'video', src: '/media/videos/video-2.mp4', alt: 'Gallery content video' },
    ],
  },
  {
    id: 'domo-damo',
    client: 'DOMO DAMO',
    role: 'Content · Inaugural Newsletter',
    year: '2023',
    description:
      'Spearheaded content creation and the inaugural newsletter launch for Domo Damo, a contemporary art platform presenting participatory and large-scale installations at major international venues including Tate Modern, London.',
    badge: 'INAUGURAL NEWSLETTER',
    achievements: [
      'Inaugural newsletter from scratch',
      'Tate Modern Turbine Hall coverage',
      'International participatory project content',
    ],
    media: [
      { type: 'image', src: '/media/domo-damo/domo-tate.jpg', alt: 'Tate Modern Turbine Hall installation', featured: true, wide: true },
      { type: 'image', src: '/media/domo-damo/domo-mural.jpg', alt: 'Participatory community mural project' },
      { type: 'video', src: '/media/videos/video-3.mp4', alt: 'Domo Damo installation video' },
      { type: 'video', src: '/media/videos/video-4.mp4', alt: 'Domo Damo installation video' },
    ],
  },
];