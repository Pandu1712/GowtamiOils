export interface ProductSize {
  label: '250ml' | '500ml' | '1L' | '5L' | '15kg';
  price: number; // offer price
  mrp: number;   // original price
}

export interface Product {
  id: string;
  name: string;
  category: 'Cold Pressed Oil' | 'Wood Pressed Oil' | 'Ghee' | 'Flour';
  sizes: ProductSize[];
  image: string;
  description: string;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  category: Product['category'];
  sizeLabel: string;
  price: number;
  mrp: number;
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
