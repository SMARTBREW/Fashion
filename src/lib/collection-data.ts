import type { CollectionFilterGroup, CollectionProduct } from "./collection-types";

export const collectionProducts: CollectionProduct[] = [
  {
    id: "jjv-trunk",
    brand: "JJV",
    name: "THE JJV TRUNK",
    price: 14900,
    href: "#",
    image: "/images/collection/trunk.jpg",
    imageAlt: "The JJV Trunk",
    type: "Trunk",
    category: "Women",
    color: "Brown",
    size: "One Size",
  },
  {
    id: "creme-card-holder",
    brand: "JJV",
    name: "CRÈME IVORY PHOENIX DIASUN FLAP CARD HOLDER",
    price: 7900,
    href: "#",
    image: "/images/collection/ivory-holder.jpg",
    imageAlt: "Creme Ivory Phoenix Diasun Flap Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Ivory",
    size: "One Size",
  },
  {
    id: "brown-card-holder",
    brand: "JJV",
    name: "BROWN PHOENIX DIASUN FLAP CARD HOLDER",
    price: 7900,
    href: "#",
    image: "/images/collection/brown-holder.jpg",
    imageAlt: "Brown Phoenix Diasun Flap Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Brown",
    size: "One Size",
  },
  {
    id: "chevron-crossbody",
    brand: "JJV",
    name: "CHEVRON LEATHER CROSSBODY",
    price: 22500,
    href: "#",
    image: "/images/collection/crossbody.jpg",
    imageAlt: "Chevron Leather Crossbody",
    type: "Bag",
    category: "Women",
    color: "Black",
    size: "Medium",
  },
  {
    id: "maharaja-weekender",
    brand: "JJV",
    name: "MAHARAJA WEEKENDER DUFFLE",
    price: 38500,
    href: "#",
    image: "/images/collection/weekender.jpg",
    imageAlt: "Maharaja Weekender Duffle",
    type: "Bag",
    category: "Men",
    color: "Tan",
    size: "Large",
  },
  {
    id: "kapurthala-briefcase",
    brand: "JJV",
    name: "KAPURTHALA STRUCTURED BRIEFCASE",
    price: 42000,
    href: "#",
    image: "/images/collection/briefcase.jpg",
    imageAlt: "Kapurthala Structured Briefcase",
    type: "Bag",
    category: "Men",
    color: "Brown",
    size: "Large",
  },
  {
    id: "phoenix-clutch",
    brand: "JJV",
    name: "PHOENIX EVENING CLUTCH",
    price: 16500,
    href: "#",
    image: "/images/collection/clutch.jpg",
    imageAlt: "Phoenix Evening Clutch",
    type: "Clutch",
    category: "Women",
    color: "Gold",
    size: "Small",
  },
  {
    id: "heritage-tote",
    brand: "JJV",
    name: "HERITAGE CANVAS TOTE",
    price: 18900,
    href: "#",
    image: "/images/collection/tote.jpg",
    imageAlt: "Heritage Canvas Tote",
    type: "Bag",
    category: "Women",
    color: "Beige",
    size: "Large",
  },
  {
    id: "royal-sling",
    brand: "JJV",
    name: "ROYAL LEATHER SLING BAG",
    price: 19800,
    href: "#",
    image: "/images/collection/sling.jpg",
    imageAlt: "Royal Leather Sling Bag",
    type: "Bag",
    category: "Men",
    color: "Brown",
    size: "Medium",
  },
  {
    id: "diasun-wallet",
    brand: "JJV",
    name: "DIASUN BI-FOLD WALLET",
    price: 6900,
    href: "#",
    image: "/images/collection/wallet.jpg",
    imageAlt: "Diasun Bi-Fold Wallet",
    type: "Wallet",
    category: "Men",
    color: "Black",
    size: "One Size",
  },
  {
    id: "travel-organizer",
    brand: "JJV",
    name: "MODERN TRAVEL ORGANIZER",
    price: 11200,
    href: "#",
    image: "/images/collection/organizer.jpg",
    imageAlt: "Modern Travel Organizer",
    type: "Accessory",
    category: "Unisex",
    color: "Tan",
    size: "Medium",
  },
  {
    id: "mini-trunk",
    brand: "JJV",
    name: "MINI SIGNATURE TRUNK",
    price: 17500,
    href: "#",
    image: "/images/collection/mini-trunk.jpg",
    imageAlt: "Mini Signature Trunk",
    type: "Trunk",
    category: "Women",
    color: "Maroon",
    size: "Small",
  },
];

export const collectionFilters: CollectionFilterGroup[] = [
  {
    id: "price",
    label: "PRICE",
    options: ["Under ₹10,000", "₹10,000 – ₹20,000", "₹20,000 – ₹35,000", "Above ₹35,000"],
  },
  {
    id: "type",
    label: "BY TYPE",
    options: ["Bag", "Trunk", "Card Holder", "Wallet", "Clutch", "Accessory"],
  },
  {
    id: "color",
    label: "COLOR SWATCHES",
    options: ["Black", "Brown", "Ivory", "Tan", "Gold", "Maroon", "Beige"],
  },
  {
    id: "category",
    label: "CATEGORY",
    options: ["Men", "Women", "Unisex"],
  },
  {
    id: "size",
    label: "SIZE",
    options: ["Small", "Medium", "Large", "One Size"],
  },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];

export function formatCollectionPrice(price: number) {
  return `RS. ${price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} INR`;
}

export function matchesPriceRange(price: number, range: string) {
  switch (range) {
    case "Under ₹10,000":
      return price < 10000;
    case "₹10,000 – ₹20,000":
      return price >= 10000 && price <= 20000;
    case "₹20,000 – ₹35,000":
      return price > 20000 && price <= 35000;
    case "Above ₹35,000":
      return price > 35000;
    default:
      return true;
  }
}
