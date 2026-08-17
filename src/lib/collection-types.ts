export interface CollectionProduct {
  id: string;
  brand: string;
  name: string;
  price: number;
  href: string;
  image: string;
  imageAlt: string;
  type: string;
  category: string;
  color: string;
  size: string;
}

export interface CollectionFilterGroup {
  id: string;
  label: string;
  options: string[];
}
