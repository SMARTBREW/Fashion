import type { AnnouncementItem, BestSellersData, BrandSectionData, CategoryItem, CollectionItem, HeroSlide } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: "jjv-charms",
    image: "/images/IMG_3816.webp",
    imageAlt: "JJV Charms and Personal Accessories",
    title: "JJV",
    subtitle: "JJ VALAYA ~ KAPURTHALA",
    tagline: "MODERN TRAVEL WITH TRACES OF A",
    taglineScript: "Maharaja's",
    description: "CHARMS & PERSONAL ACCESSORIES",
    cta: "SHOP NOW",
    href: "/collection",
  },
  {
    id: "jjv-hall-of-fame",
    image: "/images/hall_of_fame.webp",
    imageAlt: "JJV Hall of Fame Collection",
    title: "JJV",
    subtitle: "JJ VALAYA ~ KAPURTHALA",
    tagline: "MODERN TRAVEL WITH TRACES OF A",
    taglineScript: "Maharaja's",
    description: "THE HALL OF FAME",
    cta: "SHOP NOW",
    href: "/collection",
  },
  {
    id: "jjv-brand",
    image: "/images/JJV-the-brand_cb572ac3-1824-4772-8d5c-4cacec8ee6fe.webp",
    imageAlt: "JJV Brand Collection",
    title: "JJV",
    subtitle: "JJ VALAYA ~ KAPURTHALA",
    tagline: "MODERN TRAVEL WITH TRACES OF A",
    taglineScript: "Maharaja's",
    description: "BRIDGE TO LUXURY",
    cta: "SHOP NOW",
    href: "/collection",
  },
];

export const announcements: AnnouncementItem[] = [
  { id: "1", text: "NEW ARRIVAL | EAST" },
  { id: "2", text: "CONTACT US | +91 88005 54491" },
  { id: "3", text: "BOOK AN APPOINTMENT | JJ VALAYA" },
];

export const jjvCollections: CollectionItem[][] = [
  [
    {
      id: "fauna-series",
      subtitle: "THE FAUNA",
      title: "SERIES",
      cta: "SHOP NOW",
      href: "#",
      image: "/images/the-fauna-series-featured_4eb2d567-46fe-4b39-bfd4-407ca07bdba6.webp",
      imageAlt: "The Fauna Series",
    },
    {
      id: "shifting-leaves",
      subtitle: "THE SHIFTING LEAVES",
      title: "CHEVRON",
      cta: "SHOP NOW",
      href: "#",
      image: "/images/the-shifting-leaves-chevron-womens-featured_93525f62-eb8d-4a63-8265-4c5182a2ab78.webp",
      imageAlt: "The Shifting Leaves Chevron",
    },
  ],
  [
    {
      id: "art-of-shirt",
      subtitle: "THE ART OF THE",
      title: "SHIRT",
      cta: "SHOP NOW",
      href: "#",
      image: "/images/jjv-art-of-the-shirt_c548f466-a64b-43e6-bc8a-2cb7a806c1fb.webp",
      imageAlt: "The Art of the Shirt",
    },
    {
      id: "chevron-turban",
      subtitle: "THE VALAYA CHEVRON",
      title: "TURBAN",
      cta: "COMING SOON",
      ctaVariant: "outline",
      href: "#",
      image: "/images/chevron-turban_8647afeb-b505-4fc4-92f6-eb28d2902ced.webp",
      imageAlt: "The Valaya Chevron Turban",
    },
  ],
  [
    {
      id: "the-ika",
      subtitle: "THE",
      title: "IKA",
      cta: "SHOP NOW",
      href: "#",
      image: "/images/the-ika-jacket_62f85cc6-14ab-4026-abb9-d7c565e3c9af.webp",
      imageAlt: "The Ika",
    },
    {
      id: "cufflinks",
      subtitle: "JJV",
      title: "CUFFLINKS",
      cta: "SHOP NOW",
      href: "#",
      image: "/images/cufflink-jjv.webp",
      imageAlt: "JJV Cufflinks",
    },
  ],
];

export const brandSection: BrandSectionData = {
  image: "/images/JJV-the-brand_cb572ac3-1824-4772-8d5c-4cacec8ee6fe.webp",
  imageAlt: "JJV The Brand",
  title: "THE BRAND",
  description:
    "In spirit, JJV is a tribute to Punjab and Sikh splendour. More specifically, it stands inspired by the unique travelogues of Maharaja Jagajit Singh of Kapurthala, who travelled the world in the early 1900s, bringing back influences that shaped a new language of luxury.",
  signature: "JJ VALAYA",
};

export const hallOfFame = {
  image: "/images/hall_of_fame.webp",
  imageAlt: "The Hall of Fame",
  title: "THE HALL OF FAME",
  description:
    "Our bestsellers from last seasons enjoy a sense of timeless elegance and demand to remain immortal.",
  cta: "SHOP NOW",
  href: "#",
};

export const shopCategories: CategoryItem[] = [
  {
    id: "new-arrival",
    label: "NEW ARRIVAL",
    href: "/collection",
    image: "/images/hall_of_fame.webp",
    imageAlt: "New Arrival",
  },
  {
    id: "men",
    label: "MEN",
    href: "#",
    image: "/images/jjv-art-of-the-shirt_c548f466-a64b-43e6-bc8a-2cb7a806c1fb.webp",
    imageAlt: "Men",
  },
  {
    id: "women",
    label: "WOMEN",
    href: "#",
    image: "/images/the-shifting-leaves-chevron-womens-featured_93525f62-eb8d-4a63-8265-4c5182a2ab78.webp",
    imageAlt: "Women",
  },
  {
    id: "jjv",
    label: "JJV",
    href: "/collection",
    image: "/images/IMG_3816.webp",
    imageAlt: "JJV",
  },
  {
    id: "accessories",
    label: "ACCESSORIES",
    href: "#",
    image: "/images/cufflink-jjv.webp",
    imageAlt: "Accessories",
  },
  {
    id: "couture",
    label: "COUTURE",
    href: "#",
    image: "/images/the-fauna-series-featured_4eb2d567-46fe-4b39-bfd4-407ca07bdba6.webp",
    imageAlt: "Couture",
  },
  {
    id: "ready-to-ship",
    label: "READY TO SHIP",
    href: "#",
    image: "/images/the-ika-jacket_62f85cc6-14ab-4026-abb9-d7c565e3c9af.webp",
    imageAlt: "Ready to Ship",
  },
  {
    id: "discover",
    label: "DISCOVER",
    href: "#",
    image: "/images/JJV-the-brand_cb572ac3-1824-4772-8d5c-4cacec8ee6fe.webp",
    imageAlt: "Discover",
  },
  {
    id: "sale",
    label: "SALE",
    href: "#",
    image: "/images/chevron-turban_8647afeb-b505-4fc4-92f6-eb28d2902ced.webp",
    imageAlt: "Sale",
  },
];

export const bestSellers: BestSellersData = {
  men: [
    {
      id: "art-of-shirt",
      name: "THE ART OF THE SHIRT",
      price: 48000,
      href: "#",
      image: "/images/jjv-art-of-the-shirt_c548f466-a64b-43e6-bc8a-2cb7a806c1fb.webp",
      imageAlt: "The Art of the Shirt",
    },
    {
      id: "chevron-turban",
      name: "THE VALAYA CHEVRON TURBAN",
      price: 35000,
      href: "#",
      image: "/images/chevron-turban_8647afeb-b505-4fc4-92f6-eb28d2902ced.webp",
      imageAlt: "The Valaya Chevron Turban",
    },
    {
      id: "cufflinks",
      name: "JJV CUFFLINKS",
      price: 18500,
      href: "#",
      image: "/images/cufflink-jjv.webp",
      imageAlt: "JJV Cufflinks",
    },
    {
      id: "hall-of-fame-men",
      name: "THE HALL OF FAME",
      price: 125000,
      href: "#",
      image: "/images/hall_of_fame.webp",
      imageAlt: "The Hall of Fame",
    },
  ],
  women: [
    {
      id: "fauna-series",
      name: "THE FAUNA SERIES",
      price: 185000,
      href: "#",
      image: "/images/the-fauna-series-featured_4eb2d567-46fe-4b39-bfd4-407ca07bdba6.webp",
      imageAlt: "The Fauna Series",
    },
    {
      id: "shifting-leaves",
      name: "THE SHIFTING LEAVES CHEVRON",
      price: 165000,
      href: "#",
      image: "/images/the-shifting-leaves-chevron-womens-featured_93525f62-eb8d-4a63-8265-4c5182a2ab78.webp",
      imageAlt: "The Shifting Leaves Chevron",
    },
    {
      id: "the-ika",
      name: "THE IKA JACKET",
      price: 95000,
      href: "#",
      image: "/images/the-ika-jacket_62f85cc6-14ab-4026-abb9-d7c565e3c9af.webp",
      imageAlt: "The Ika Jacket",
    },
    {
      id: "brand-edit",
      name: "JJV BRIDGE TO LUXURY",
      price: 75000,
      href: "#",
      image: "/images/JJV-the-brand_cb572ac3-1824-4772-8d5c-4cacec8ee6fe.webp",
      imageAlt: "JJV Bridge to Luxury",
    },
  ],
};

export const footerLinks = {
  explore: [
    { label: "JJ VALAYA | Couture", href: "#" },
    { label: "JJV | Bridge to Luxury", href: "#collections" },
  ],
  customerCare: [
    { label: "Contact Us", href: "#" },
    { label: "Book an Appointment", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Our Stores", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export const mainNavLinks = [
  { label: "MEN", href: "#" },
  { label: "WOMEN", href: "#" },
  { label: "READY TO SHIP", href: "#" },
  { label: "SALE", href: "#", highlight: true },
];

export const jjvNavLinks = [
  { label: "JJ VALAYA", href: "/" },
  { label: "JJV", href: "/collection" },
  { label: "DISCOVER", href: "#" },
];
