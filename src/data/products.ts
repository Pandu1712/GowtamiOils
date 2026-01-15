import type { Product, Review, GalleryImage } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Coconut Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 900, price: 700 },
      { label: '500ml', mrp: 480, price: 350 },
      { label: '250ml', mrp: 260, price: 180 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Coconut-Oil_veklkw.png',
    description: 'Pure cold pressed coconut oil extracted from fresh coconuts.',
    inStock: true,
  },

  {
    id: '2',
    name: 'Groundnut Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 380, price: 300 },
      { label: '500ml', mrp: 200, price: 150 },
      { label: '250ml', mrp: 110, price: 80 },
      { label: '5L', mrp: 1800, price: 1500 },
      { label: '15kg', mrp: 5200, price: 4500 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Groundnut_Oil_lcsrh4.webp',
    description: 'Traditional cold pressed groundnut oil.',
    inStock: true,
  },

  {
    id: '3',
    name: 'White Sesame Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 520, price: 400 },
      { label: '500ml', mrp: 270, price: 200 },
      { label: '250ml', mrp: 150, price: 100 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/White_Sesame_Oil_h6dlda.webp',
    description: 'Pure organic white sesame oil.',
    inStock: true,
  },

  {
    id: '4',
    name: 'Black Sesame Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 550, price: 420 },
      { label: '500ml', mrp: 290, price: 220 },
      { label: '250ml', mrp: 160, price: 110 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Black_Sesame_Oi_uijsql.jpg',
    description: 'Pure cold pressed black sesame oil.',
    inStock: true,
  },

  {
    id: '5',
    name: 'Sunflower Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 520, price: 420 },
      { label: '500ml', mrp: 270, price: 210 },
      { label: '250ml', mrp: 150, price: 120 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Sunflower_Oil_z3vjvm.jpg',
    description: 'Pure cold pressed sunflower oil.',
    inStock: true,
  },

  {
    id: '6',
    name: 'Castor Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 480, price: 350 },
      { label: '500ml', mrp: 260, price: 180 },
      { label: '250ml', mrp: 150, price: 100 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469707/Castor_Oil_mxa5ag.jpg',
    description: 'Pure cold pressed castor oil.',
    inStock: true,
  },

  {
    id: '7',
    name: 'Mustard Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 450, price: 280 },
      { label: '500ml', mrp: 260, price: 240 },
      { label: '250ml', mrp: 150, price: 120 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469707/Mustred_Oils_pkcyje.webp',
    description: 'Pure cold pressed mustard oil.',
    inStock: true,
  },

  {
    id: '8',
    name: 'Badam Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 3500, price: 3000 },
      { label: '500ml', mrp: 1800, price: 1500 },
      { label: '250ml', mrp: 900, price: 750 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Badam_Oil_fuk0zu.webp',
    description: 'Pure cold pressed almond oil.',
    inStock: true,
  },

  {
    id: '9',
    name: 'Deepam Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 300, price: 250 },
      { label: '500ml', mrp: 160, price: 130 },
      { label: '250ml', mrp: 90, price: 70 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469707/Deepam_Oil_ppairi.webp',
    description: 'Traditional deepam oil for lamps.',
    inStock: true,
  },

  {
    id: '10',
    name: 'Flax Seed Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 600, price: 550 },
      { label: '500ml', mrp: 260, price: 230 },
      { label: '250ml', mrp: 190, price: 170 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469707/Flax_Seed_Oil_buo9im.avif',
    description: 'Cold pressed flax seed oil.',
    inStock: true,
  },

  {
    id: '12',
    name: 'Saffola Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 900, price: 800 },
      { label: '500ml', mrp: 450, price: 400 },
      { label: '250ml', mrp: 230, price: 200 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469689/Saffola_Oil_okatje.jpg',
    description: 'Healthy cooking oil.',
    inStock: true,
  },

  {
    id: '13',
    name: 'Niger Seed Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 750, price: 700 },
      { label: '500ml', mrp: 380, price: 350 },
      { label: '250ml', mrp: 200, price: 175 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469689/Niger_Seed_Oil_odximh.webp',
    description: 'Pure cold pressed niger seed oil.',
    inStock: true,
  },
  { 
    id: '14',
    name: 'Wood Pressed Groundnut Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 360, price: 320 },
      { label: '500ml', mrp: 180, price: 160 },
      { label: '250ml', mrp: 95, price: 80 },
      { label: '5L', mrp: 1800, price: 1600 },
      { label: '15kg', mrp: 5200, price: 4800 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Groundnut_Oil_lcsrh4.webp',
    description: 'Traditional wood pressed groundnut oil.',
    inStock: true,
  },

  {
    id: '15',
    name: 'Wood Pressed White Sesame Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 480, price: 440 },
      { label: '500ml', mrp: 260, price: 230 },
      { label: '250ml', mrp: 150, price: 130 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/White_Sesame_Oil_h6dlda.webp',
    description: 'Pure wood pressed white sesame oil.',
    inStock: true,
  },

  {
    id: '16',
    name: 'Wood Pressed Black Sesame Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 490, price: 450 },
      { label: '500ml', mrp: 260, price: 230 },
      { label: '250ml', mrp: 150, price: 130 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Black_Sesame_Oi_uijsql.jpg',
    description: 'Pure wood pressed black sesame oil.',
    inStock: true,
  },

  {
    id: '17',
    name: 'Wood Pressed Sunflower Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 490, price: 450 },
      { label: '500ml', mrp: 260, price: 230 },
      { label: '250ml', mrp: 150, price: 130 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469688/Wood_Pressed_Sunflower_Oil_rstq61.webp',
    description: 'Cold extracted wood pressed sunflower oil.',
    inStock: true,
  },

  {
    id: '18',
    name: 'Wood Pressed Badam Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 3300, price: 3000 },
      { label: '500ml', mrp: 1650, price: 1500 },
      { label: '250ml', mrp: 850, price: 750 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Badam_Oil_fuk0zu.webp',
    description: 'Premium wood pressed almond oil.',
    inStock: true,
  },

  {
    id: '19',
    name: 'Wood Pressed Flax Seed Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 660, price: 600 },
      { label: '500ml', mrp: 330, price: 300 },
      { label: '250ml', mrp: 180, price: 150 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469707/Flax_Seed_Oil_buo9im.avif',
    description: 'Pure wood pressed flax seed oil.',
    inStock: true,
  },
  {
    id: '25',
    name: 'Peanut Chikki',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 330, price: 300 },
      { label: '500g', mrp: 170, price: 150 },
      { label: '250g', mrp: 90, price: 75 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469688/Peanut_Chikki_uo8i1i.jpg',
    description: 'Traditional peanut chikki made with pure jaggery.',
    inStock: true,
  },

  {
    id: '26',
    name: 'Sesame Chikki',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 440, price: 400 },
      { label: '500g', mrp: 220, price: 200 },
      { label: '250g', mrp: 120, price: 100 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Sesame_Chikki_ngxp5v.jpg',
    description: 'Healthy sesame chikki prepared with natural jaggery.',
    inStock: true,
  },

  {
    id: '27',
    name: 'Flax Seed Chikki',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 380, price: 350 },
      { label: '500g', mrp: 200, price: 180 },
      { label: '250g', mrp: 110, price: 90 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Flax_Seed_Chikki_qwwopp.jpg',
    description: 'Nutritious flax seed snack made with pure jaggery.',
    inStock: true,
  },

  {
    id: '28',
    name: 'Arisalu',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 600, price: 550 },
      { label: '500g', mrp: 260, price: 230 },
      { label: '250g', mrp: 150, price: 130 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Arisalu_lupehe.webp',
    description: 'Traditional Andhra sweet made with rice flour and jaggery.',
    inStock: true,
  },

  {
    id: '29',
    name: 'Arisalu with Ghee',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 880, price: 800 },
      { label: '500g', mrp: 440, price: 400 },
      { label: '250g', mrp: 230, price: 200 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Arisalu_with_Ghee_p8sxda.jpg',
    description: 'Premium arisalu enriched with pure desi ghee.',
    inStock: true,
  },

  {
    id: '30',
    name: 'Kobbari Boorelu',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 380, price: 350 },
      { label: '500g', mrp: 200, price: 180 },
      { label: '250g', mrp: 110, price: 90 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Kobbari_Boorelu_upbem2.jpg',
    description: 'Coconut filled traditional sweet with jaggery.',
    inStock: true,
  },

  {
    id: '31',
    name: 'Sajja Boorelu',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 400, price: 360 },
      { label: '500g', mrp: 200, price: 180 },
      { label: '250g', mrp: 110, price: 90 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Sajja_Boorelu_nzriqr.webp',
    description: 'Healthy sajja millet boorelu with natural jaggery.',
    inStock: true,
  },

  {
    id: '32',
    name: 'Dry Fruit Laddu',
    category: 'Natural Jaggery Snacks',
    sizes: [
      { label: '1kg', mrp: 880, price: 800 },
      { label: '500g', mrp: 440, price: 400 },
      { label: '250g', mrp: 230, price: 200 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Dry_Fruit_Laddu_gjcjdl.webp',
    description: 'Energy rich laddu made with dry fruits and jaggery.',
    inStock: true,
  },

{
  id: '33',
  name: 'Ragi Laddu (Ghee)',
  category: 'Natural Jaggery Snacks',
  sizes: [
    { label: '1kg', mrp: 880, price: 800 },
    { label: '500g', mrp: 440, price: 400 },
    { label: '250g', mrp: 230, price: 200 },
  ],
  image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Ragi_Laddu_Ghee_llnwzt.jpg',
  description: 'Healthy ragi laddu prepared with ghee and natural jaggery.',
  inStock: true,
},

{
  id: '34',
  name: 'Sunnunda (Ghee)',
  category: 'Natural Jaggery Snacks',
  sizes: [
    { label: '1kg', mrp: 880, price: 800 },
    { label: '500g', mrp: 440, price: 400 },
    { label: '250g', mrp: 230, price: 200 },
  ],
  image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Sunnunda_Ghee_genfpj.jpg',
  description: 'Urad dal laddu made with ghee and pure jaggery.',
  inStock: true,
},

{
  id: '35',
  name: 'Koralu Laddu',
  category: 'Natural Jaggery Snacks',
  sizes: [
    { label: '1kg', mrp: 380, price: 350 },
    { label: '500g', mrp: 200, price: 180 },
    { label: '250g', mrp: 110, price: 90 },
  ],
  image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Koralu_Laddu_x6sjdg.jpg',
  description: 'Koralu (foxtail millet) laddu made with natural jaggery.',
  inStock: true,
},

{
  id: '36',
  name: 'Millet Laddu',
  category: 'Natural Jaggery Snacks',
  sizes: [
    { label: '1kg', mrp: 550, price: 500 },
    { label: '500g', mrp: 280, price: 250 },
    { label: '250g', mrp: 150, price: 130 },
  ],
  image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Millet_Laddu_vhjbop.jpg',
  description: 'Nutritious mixed millet laddu with jaggery.',
  inStock: true,
},



   {
    id: '37',
    name: 'Wheat Flour',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 80, price: 70 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Wheat_Flour_kcobor.webp',
    description: 'Freshly milled wheat flour.',
    inStock: true,
  },

  {
    id: '38',
    name: 'Ragi Flour',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 80, price: 70 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Ragi_maycov.webp',
    description: 'Nutritious stone ground ragi flour.',
    inStock: true,
  },

  {
    id: '39',
    name: 'Jonna Pindi',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 80, price: 70 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Jonna_Pindi_fif1ju.webp',
    description: 'Traditional jowar (jonna) flour.',
    inStock: true,
  },

  {
    id: '25',
    name: 'Jonna Rava',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 110, price: 90 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Jonna_Rava_zavo1i.jpg',
    description: 'Healthy jowar rava.',
    inStock: true,
  },

  {
    id: '40',
    name: 'Mixed Millet Powder',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 230, price: 200 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Mixed_Millet_Powder_piiirg.jpg',
    description: 'Blend of nutritious millets.',
    inStock: true,
  },

  {
    id: '41',
    name: 'Suji (Bombay Rava)',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 70, price: 60 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Suji_Bombay_Rava_nmhlsj.jpg',
    description: 'Fine quality suji rava.',
    inStock: true,
  },

  {
    id: '42',
    name: 'Sajja Rava',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 70, price: 60 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Sajja_Rava_jvyozj.jpg',
    description: 'Healthy pearl millet rava.',
    inStock: true,
  },
    {
    id: '43',
    name: 'Chilli Powder',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 550, price: 500 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Chilli_Powder_trwgnb.webp',
    description: 'Pure red chilli powder.',
    inStock: true,
  },

  {
    id: '44',
    name: 'Turmeric Powder',
    category: 'Flour',
    sizes: [{ label: '1kg', mrp: 450, price: 400 }],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Turmeric_Powder_h7vceo.jpg',
    description: 'Natural turmeric powder.',
    inStock: true,
  },
  {
    id: '45',
    name: 'Natural Jaggery Block',
    category: 'Natural Jaggery',
    sizes: [
      { label: '800–900g', mrp: 120, price: 100 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Natural_Jaggery_Block_jhlhgy.jpg',
    description:
      'Organic natural jaggery block made by Vyna Natural Jaggery, Anakapalli. Rich in minerals and free from chemicals.',
    inStock: true,
  },

  {
    id: '46',
    name: 'Natural Jaggery Cubes',
    category: 'Natural Jaggery',
    sizes: [
      { label: '500g', mrp: 170, price: 150 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Natural_Jaggery_Cubes_oywquq.jpg',
    description:
      'Organic jaggery cubes made by Vyna Natural Jaggery, Anakapalli. Easy to use and naturally sweet.',
    inStock: true,
  },

  {
    id: '47',
    name: 'Natural Jaggery Powder',
    category: 'Natural Jaggery',
    sizes: [
      { label: '1kg', mrp: 280, price: 250 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Natural_Jaggery_Powder_xedkpq.webp',
    description:
      'Organic jaggery powder from Vyna Natural Jaggery, Anakapalli. Pure, chemical-free and healthy sweetener.',
    inStock: true,
  },

 {
    id: '48',
    name: 'Jonna Chekkaralu',
    category: 'Hot',
    sizes: [
      { label: '1kg', mrp: 380, price: 350 },
      { label: '500g', mrp: 180, price: 160 },
      { label: '250g', mrp: 90, price: 80 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469683/Jonna_Chekkaralu_pvd3ng.avif',
    description: 'Crispy jonna chekkaralu prepared traditionally.',
    inStock: true,
  },

  {
    id: '49',
    name: 'Ragi Chekkaralu',
    category: 'Hot',
    sizes: [
      { label: '1kg', mrp: 310, price: 280 },
      { label: '500g', mrp: 160, price: 140 },
      { label: '250g', mrp: 80, price: 70 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Ragi_Chekkaralu_xp1vk2.jpg',
    description: 'Healthy ragi chekkaralu made with natural ingredients.',
    inStock: true,
  },

  {
    id: '50',
    name: 'Beyyapu Pindi Minapugullu',
    category: 'Hot',
    sizes: [
      { label: '1kg', mrp: 270, price: 240 },
      { label: '500g', mrp: 140, price: 120 },
      { label: '250g', mrp: 70, price: 60 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Beyyapu_Pindi_Minapugullu_vzxxxs.jpg',
    description: 'Minapugullu made with jaggery and rice flour.',
    inStock: true,
  },

  {
    id: '51',
    name: 'Hot Mixture',
    category: 'Hot',
    sizes: [
      { label: '1kg', mrp: 270, price: 240 },
      { label: '500g', mrp: 140, price: 120 },
      { label: '250g', mrp: 70, price: 60 },
    ],
    image: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469684/Hot_Mixture_jjmi9p.webp',
    description: 'Spicy and crunchy traditional hot mixture.',
    inStock: true,
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent quality oils!',
    date: '2024-01-10',
  },
  {
    id: '2',
    name: 'Praveen Singh',
    rating: 5,
    comment: 'Very satisfied with the product.',
    date: '2024-01-10',
  },
  {
    id: '3',
    name: 'Pavan Kumar',
    rating: 5,
    comment: 'Excellent quality oils!',
    date: '2024-01-10',
  },
  {
    id: '4',
    name: 'Mani Kumar',
    rating: 5,
    comment: 'Excellent quality oils!',
    date: '2024-01-10',
  },
  {
    id: '5',
    name: 'Mounika Singh',
    rating: 5,
    comment: 'Excellent quality oils!',
    date: '2024-01-10',
  },
];


export const galleryImages: GalleryImage[] = [
  {
    id: '7',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469708/Coconut-Oil_veklkw.png',
    alt: 'Oil Production',
    category: 'oils',
  },
  {
    id: '6',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469688/Peanut_Chikki_uo8i1i.jpg',
    alt: 'Snack Production',
    category: 'oils',
  },
  {
    id: '5',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469687/Arisalu_with_Ghee_p8sxda.jpg',
    alt: 'Arisalu Production',
    category: 'oils',
  },
  {
    id: '1',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Ragi_Laddu_Ghee_llnwzt.jpg',
    alt: 'Laddu Production',
    category: 'oils',
  },
  {
    id: '2',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469686/Dry_Fruit_Laddu_gjcjdl.webp',
    alt: 'Dry Fruiys Production',
    category: 'oils',
  },
  {
    id: '3',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Turmeric_Powder_h7vceo.jpg',
    alt: 'Thurmeric Production',
    category: 'oils',
  },
  {
    id: '4',
    url: 'https://res.cloudinary.com/dyfkwasrl/image/upload/v1768469685/Sunnunda_Ghee_genfpj.jpg',
    alt: 'Sunnunda Production',
    category: 'oils',
  },
];
