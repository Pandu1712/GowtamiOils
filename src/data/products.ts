import type { Product, Review, GalleryImage } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cold Pressed Coconut Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 900, price: 700 },
      { label: '500ml', mrp: 450, price: 350 },
      { label: '250ml', mrp: 230, price: 180 },
    ],
    image: 'https://images.pexels.com/photos/4202390/pexels-photo-4202390.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Pure cold pressed coconut oil extracted from fresh coconuts.',
    inStock: true,
  },

  {
    id: '2',
    name: 'Cold Pressed Groundnut Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 380, price: 300 },
      { label: '500ml', mrp: 190, price: 150 },
      { label: '250ml', mrp: 100, price: 80 },
      { label: '5L', mrp: 1800, price: 1500 },
      { label: '15kg', mrp: 5200, price: 4500 },
    ],
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'Traditional cold pressed groundnut oil.',
    inStock: true,
  },

  {
    id: '3',
    name: 'Cold Pressed White Sesame Oil',
    category: 'Cold Pressed Oil',
    sizes: [
      { label: '1L', mrp: 500, price: 400 },
      { label: '500ml', mrp: 250, price: 200 },
      { label: '250ml', mrp: 130, price: 100 },
    ],
    image: 'https://images.pexels.com/photos/4198918/pexels-photo-4198918.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Pure organic white sesame oil.',
    inStock: true,
  },

  {
    id: '4',
    name: 'Wood Pressed Groundnut Oil',
    category: 'Wood Pressed Oil',
    sizes: [
      { label: '1L', mrp: 400, price: 320 },
      { label: '500ml', mrp: 200, price: 160 },
      { label: '250ml', mrp: 100, price: 80 },
      { label: '5L', mrp: 1900, price: 1600 },
      { label: '15kg', mrp: 5500, price: 4800 },
    ],
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'Traditional wood pressed groundnut oil.',
    inStock: true,
  },

  {
    id: '5',
    name: 'Murukku Mix Snacks',
    category: 'Flour',
    sizes: [{ label: '500ml', mrp: 220, price: 180 }],
    image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Crispy murukku snacks.',
    inStock: true,
  },

  {
    id: '6',
    name: 'Pure Jaggery',
    category: 'Ghee',
    sizes: [{ label: '500ml', mrp: 100, price: 80 }],
    image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Natural jaggery rich in minerals.',
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
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/4202390/pexels-photo-4202390.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Oil Production',
    category: 'oils',
  },
];
