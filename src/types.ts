export interface Banner {
  id: number;
  title: string;
  imageUrl: string;
  mobileImageUrl: string;
}

export interface Shortcut {
  id: number;
  title: string;
  imageUrl: string;
  mobileImageUrl: string;
}

export interface Collection {}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  price: number;
  discount: number;
  tagsOnImage: string[];
  tagsOnDescription: string[];
  rating: number;
  preface?: string;
  prefaceImageUrl?: string;
}
