export interface CollectionItem {
  id: string;
  subtitle: string;
  title: string;
  cta: string;
  ctaVariant?: "ghost" | "outline";
  href: string;
  image: string;
  imageAlt: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  tagline: string;
  taglineScript: string;
  description: string;
  cta: string;
  href: string;
}

export interface AnnouncementItem {
  id: string;
  text: string;
  href?: string;
}

export interface BrandSectionData {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  signature: string;
}

export interface CategoryItem {
  id: string;
  label: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  href: string;
  image: string;
  imageAlt: string;
}

export interface BestSellersData {
  men: ProductItem[];
  women: ProductItem[];
}
