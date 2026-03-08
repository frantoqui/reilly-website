export interface SocialPost {
  id: string;
  company: string;
  handle: string;
  role: string;
  timeAgo: string;
  theme: string; // editorial theme label
  caption: string;
  credits?: string;
  likes?: number;
  comments: number;
  media: { type: 'image' | 'video'; src: string; alt: string }[];
  accentColor?: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: 'casa-mb-storytelling',
    company: 'Casa MB',
    handle: '@casa.mb',
    role: 'Art Space · São Paulo',
    timeAgo: '2023',
    theme: 'STORYTELLING',
    accentColor: '#8B7355',
    likes: 526,
    comments: 7,
    caption: `Without having to dig very far into the past life of our home, we discovered a beautiful story. Thank you Arquivo Arc (@arquivo.arq.br) for making this knowledge accessible. We are honored to carry on the house's essential nature as a sanctuary for creative minds.

"Designed in 1962 by architect Paulo Mendes da Rocha for the family of artist and art dealer Gaetano Miani. He, who was Italian, lived with his family from 1964 when the house was completed until 1968, when the harshest phase of the military dictatorship began and he returned with his family to Italy. He made trips back and forth to Brazil but never lived in the house again — he died in Rome."

Sem ter que ir muito no passado de nossa casa, descobrimos uma bela história. Obrigado Arquivo Arc (@arquivo.arq.br) por tornar esta história acessível. Temos a honra de continuar verdadeira natureza essencial da casa como um santuário para mentes criativas.

"Projetada em 1962 pelo arquiteto Paulo Mendes da Rocha para família do artista e Marchand Gaetano Miani."

#ArquivoArc #PauloMendesdaRocha`,
    media: [
      { type: 'image', src: '/media/casa-mb/casa-exterior-bw-1.jpg', alt: 'Casa MB — Paulo Mendes da Rocha, 1962' },
      { type: 'image', src: '/media/casa-mb/casa-exterior-pool.jpg', alt: 'Casa MB exterior with pool' },
      { type: 'image', src: '/media/casa-mb/casa-interior-bw-1.jpg', alt: 'Casa MB — vintage interior' },
      { type: 'image', src: '/media/casa-mb/casa-interior-bw-2.jpg', alt: 'Casa MB — archival interior' },
      { type: 'image', src: '/media/casa-mb/casa-exterior-bw-2.jpg', alt: 'Casa MB — archival exterior' },
    ],
  },
  {
    id: 'mb-relationships',
    company: 'M+B',
    handle: '@mblosangeles',
    role: 'Contemporary Art Gallery · Los Angeles',
    timeAgo: '2025',
    theme: 'RELATIONSHIPS',
    accentColor: '#3A5C8C',
    comments: 93,
    caption: `"Very, very early on, when I learned about art as a way of life … I said, 'Well, if there were no means, if there were no physical means, if there were no financial means, I could still go to the lobby of a bank and I'd be able to find a red or a black or a blue pen.' With this very basic survival tool, I'll be able to live." —Oscar Murillo in conversation with curator @Alessandro.Rabottini

Wishing a very happy birthday to Oscar Murillo (@lacachepli). Working across painting, works on paper, installation, live events, and collaborative projects, Murillo's oeuvre demonstrates a sustained emphasis on cultural exchange.

+ On Saturday, March 14, a major exhibition titled Collective Osmosis opens at @DASMINSK and @MuseumBarberini in Potsdam, bringing together Murillo's paintings and installations in dialogue with works by Claude Monet.`,
    credits: `1: Photo by Jason Schmidt · 2: Tate Modern, 2024. Photo by Tim Bowditch and Reinis Lismanis · 3: Castello di Rivoli, 2025. Photo by Tim Bowditch · 4: Museo de Arte Contemporánea de Monterrey, 2025 · 5: Museo Tamayo, Mexico City, 2025 · 6: 36th Bienal de São Paulo, 2025. Photo: Reinis Lismanis`,
    media: [
      { type: 'image', src: '/media/mb/mb-artist-portrait.jpg', alt: 'Oscar Murillo — photo by Jason Schmidt' },
      { type: 'image', src: '/media/domo-damo/domo-tate.jpg', alt: 'Oscar Murillo, The flooded garden, Tate Modern, 2024' },
      { type: 'image', src: '/media/mb/mb-installation-lying.jpg', alt: 'Oscar Murillo, A see of history, Castello di Rivoli, 2025' },
      { type: 'image', src: '/media/mb/mb-installation-chairs.jpg', alt: 'Oscar Murillo, Espirítus en el pantano, Monterrey, 2025' },
      { type: 'image', src: '/media/domo-damo/domo-mural.jpg', alt: 'Oscar Murillo, 36th Bienal de São Paulo, 2025' },
    ],
  },
  {
    id: 'mb-process',
    company: 'M+B',
    handle: '@mblosangeles',
    role: 'Contemporary Art Gallery · Los Angeles',
    timeAgo: '2022',
    theme: 'PROCESS',
    accentColor: '#6B4E3D',
    likes: 286,
    comments: 6,
    caption: `A glimpse into printmaking process from Sarah Faux's 2022 residency at Flying Horse Editions!

The gallery will have works by Sarah Faux on view at M+B Doheny from August 30th to September 16th.

@fauxsarah @mblosangeles @flyinghorseeditions
#sarahfaux #mblosangeles #mbgallery #flyinghorseeditions`,
    media: [
      { type: 'video', src: '/media/videos/video-1.mp4', alt: 'Sarah Faux — printmaking process at Flying Horse Editions' },
      { type: 'video', src: '/media/videos/video-2.mp4', alt: 'Sarah Faux — studio process' },
    ],
  },
  {
    id: 'dz-urgency',
    company: 'David Zwirner',
    handle: '@davidzwirner',
    role: 'International Art Gallery',
    timeAgo: '2022',
    theme: 'URGENCY',
    accentColor: '#1A1A1A',
    likes: 505,
    comments: 14,
    caption: `Didier William is featured in the New York Times: "One of the most noteworthy exhibitions taking place during Miami Art Week is a solo show of work — more than 40 figurative paintings and drawings, as well as a monumental sculpture — from the Philadelphia-based artist Didier William, called 'Nou Kite Tout Sa Dèyè' ('We've Left That All Behind') at the Museum of Contemporary Art North Miami."

Click the link in the bio to read the full article.

@dueyart @mocanomi @nytimes @mblosangeles
#DidierWilliam #MOCANOMI #newyorktimes #mblosangeles #mbgallery`,
    media: [
      { type: 'image', src: '/media/david-zwirner/dz-nyt.jpg', alt: 'New York Times feature — Didier William' },
      { type: 'image', src: '/media/david-zwirner/dz-artwork-1.jpg', alt: 'Didier William — Nou Kite Tout Sa Dèyè' },
      { type: 'image', src: '/media/david-zwirner/dz-artwork-2.jpg', alt: 'Didier William — figurative work' },
      { type: 'image', src: '/media/david-zwirner/dz-article-1.jpg', alt: 'Exhibition press excerpt' },
      { type: 'image', src: '/media/david-zwirner/dz-article-2.jpg', alt: 'Exhibition press excerpt' },
    ],
  },
];

export const webpages = [
  {
    id: 'oscar-murillo-bienal',
    title: 'Oscar Murillo: 36th Bienal de São Paulo',
    subtitle: 'Surge Paintings',
    description:
      'Dedicated webpage for Oscar Murillo\'s monumental contribution to the 36th Bienal de São Paulo, featuring the Surge Paintings series and documentation of the participatory installation.',
    url: 'https://www.davidzwirner.com/oscar-murillo-36th-bienal-de-sao-paulo-surge-paintings',
    domain: 'davidzwirner.com',
    image: '/media/domo-damo/domo-tate.jpg',
    year: '2025',
  },
  {
    id: 'andra-ursuta',
    title: 'Andra Ursuța: Retina Turner',
    subtitle: 'Exhibition Page',
    description:
      'Exhibition webpage for Andra Ursuța\'s solo show Retina Turner at David Zwirner, presenting a new body of figurative sculptural work that explores vision, memory, and bodily experience.',
    url: 'https://www.davidzwirner.com/exhibitions/2025/andra-ursuta',
    domain: 'davidzwirner.com',
    image: '/media/david-zwirner/dz-gallery-1.jpg',
    year: '2025',
  },
];

export const newsletters = [
  {
    id: 'domo-damo-launch',
    brand: 'DOMO DAMO',
    date: 'May 25, 2023',
    subject: 'Welcome to Domo Damo',
    from: 'Benjamin Trigano & David Laloum',
    body: `We are proud to introduce you to Domo Damo, a home for artists created by Benjamin Trigano, owner of M+B, and David Laloum, his friend and partner from São Paulo.

At Domo Damo, we envisioned not only a home, but also a place away from the everyday distractions that domesticity sometimes entangles us. A respite amidst a hurried world, we called it Domo Damo, or the House of Love, because we wanted the space to be cozy, intimate, and welcoming. To feel the ease of home within the magic of this very special house. We desire for people of different generations and places to come here, to unspool, and feel free. To find inspiration within the chaotic refinement and monumental intimacy that is São Paulo.

Iconic architect Paulo Mendes de Rocha's democratic materials dance with concrete acrobatics and breathe with light past tropical plants, secret lily ponds, and cool grays snaking with the soft curls of vivid greens. On the caramel wood floors sits a long table with room for everyone.

Domo Damo is not just a space, but a home that comes with a community of friends from São Paulo, Brazil, and across the world. Ours is a place that is local, human, artisanal, personal, and intimate. A place to move slowly and dig deeply.

Welcome to Domo Damo!`,
    signature: 'With warmth,\nBenjamin and David',
    image: '/media/casa-mb/casa-artist-studio.jpg',
  },
  {
    id: 'casa-mb-launch',
    brand: 'CASA MB',
    date: 'April 19, 2023',
    subject: 'Introducing Casa MB',
    from: 'Casa MB',
    body: `Introducing Casa MB. This is something different. Something new, or renewed perhaps.

We're a gallery but this is not truly a gallery. The elegance and style of Milan beckoned us. We dreamed of a place, the graceful refinement of a Milanese apartment to bring artworks and people together, a place we could call home in all ways. A place we want you to feel at home. We aim to offer a different type of environment that is more welcoming and intimate, and that encourages visitors to engage with art in a new and meaningful way.

So in the Italian capital of fashion and publishing, art and banking, we are having a perpetual open house. With Casa MB we are not inaugurating so much a gallery (though there will be art for you to see and maybe take home yourself) but a place to gather, a salon to bring people together for meals, for conversation, a drink or three, a few laughs even, and most essentially, for art.

We fully believe in the radical gestures of art, and by 2023, another kind of gesture (softer but still sincere) is to return art to our home. Casa MB is a space to see art, to have a moment of exchange, but also one way to imagine art as an everyday part of your life, to weave seamlessly into where we humans live everyday. There is a history all over the world of apartment galleries, home galleries, with examples from Marcel Broodthaers Musée d'Art Moderne, Départment des Aigles (1968) begun in his Brussels house to last week's art school student turning over her basement flat to maybe sell a thing or two.

We want to in a small way invite you into our home.

Welcome to Casa.`,
    signature: '',
    image: '/media/casa-mb/casa-exterior-pool.jpg',
  },
];