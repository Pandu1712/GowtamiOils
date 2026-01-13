export interface Product {
  id: string;
  name: string;
  category: 'Oil' | 'Snacks' | 'Hot' | 'Sweet';
  price: number;
  originalPrice: number;
  description: string;
  howToUse: string;
  image: string;
  weight: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}
