import type { CollectionFilterGroup, CollectionProduct } from "./collection-types";

export const collectionProducts: CollectionProduct[] = [
  {
    id: "jjv-trunk",
    brand: "JJV",
    name: "THE JJV TRUNK",
    price: 14900,
    href: "#",
    image: "/images/collection/jjv-trunk.jpg",
    imageAlt: "The JJV Trunk",
    type: "Trunk",
    category: "Women",
    color: "Chevron",
    size: "One Size",
  },
  {
    id: "creme-flap-card-holder",
    brand: "JJV",
    name: "CRÈME IVORY PHOENIX DIASUN FLAP CARD HOLDER",
    price: 10900,
    href: "#",
    image: "/images/collection/creme-flap-card-holder.jpg",
    imageAlt: "Crème Ivory Phoenix Diasun Flap Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Ivory",
    size: "One Size",
  },
  {
    id: "tan-flap-card-holder",
    brand: "JJV",
    name: "TAN PHOENIX DIASUN FLAP CARD HOLDER",
    price: 10900,
    href: "#",
    image: "/images/collection/tan-flap-card-holder.jpg",
    imageAlt: "Tan Phoenix Diasun Flap Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Tan",
    size: "One Size",
  },
  {
    id: "chevron-flap-card-holder",
    brand: "JJV",
    name: "CHEVRON FLAP CARD HOLDER",
    price: 10900,
    href: "#",
    image: "/images/collection/chevron-flap-card-holder.jpg",
    imageAlt: "Chevron Flap Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Chevron",
    size: "One Size",
  },
  {
    id: "creme-card-holder",
    brand: "JJV",
    name: "CRÈME IVORY PHOENIX DIASUN CARD HOLDER",
    price: 8900,
    href: "#",
    image: "/images/collection/creme-card-holder.jpg",
    imageAlt: "Crème Ivory Phoenix Diasun Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Ivory",
    size: "One Size",
  },
  {
    id: "chevron-card-holder",
    brand: "JJV",
    name: "CHEVRON CARD HOLDER",
    price: 8900,
    href: "#",
    image: "/images/collection/chevron-card-holder.jpg",
    imageAlt: "Chevron Card Holder",
    type: "Card Holder",
    category: "Women",
    color: "Chevron",
    size: "One Size",
  },
  {
    id: "creme-trifold-wallet",
    brand: "JJV",
    name: "CRÈME IVORY TRIFOLD WALLET",
    price: 14900,
    href: "#",
    image: "/images/collection/creme-trifold-wallet.jpg",
    imageAlt: "Crème Ivory Trifold Wallet",
    type: "Wallet",
    category: "Men",
    color: "Ivory",
    size: "One Size",
  },
  {
    id: "noir-chevron-wallet",
    brand: "JJV",
    name: "NOIR CHEVRON MEN'S WALLET",
    price: 12900,
    href: "#",
    image: "/images/collection/noir-chevron-wallet.jpg",
    imageAlt: "Noir Chevron Men's Wallet",
    type: "Wallet",
    category: "Men",
    color: "Black",
    size: "One Size",
  },
  {
    id: "noir-crossbody",
    brand: "JJV",
    name: "NOIR CROSSBODY BAG",
    price: 22500,
    href: "#",
    image: "/images/collection/noir-crossbody.jpg",
    imageAlt: "Noir Crossbody Bag",
    type: "Bag",
    category: "Women",
    color: "Black",
    size: "Medium",
  },
  {
    id: "signature-chevron-crossbody",
    brand: "JJV",
    name: "SIGNATURE CHEVRON CROSSBODY BAG",
    price: 22500,
    href: "#",
    image: "/images/collection/signature-chevron-crossbody.jpg",
    imageAlt: "Signature Chevron Crossbody Bag",
    type: "Bag",
    category: "Women",
    color: "Chevron",
    size: "Medium",
  },
  {
    id: "creme-micro-bag",
    brand: "JJV",
    name: "CRÈME IVORY MICRO BAG",
    price: 18500,
    href: "#",
    image: "/images/collection/creme-micro-bag.jpg",
    imageAlt: "Crème Ivory Micro Bag",
    type: "Bag",
    category: "Women",
    color: "Ivory",
    size: "Small",
  },
  {
    id: "shifting-leaves-cufflinks",
    brand: "JJV",
    name: "SHIFTING LEAVES CHEVRON CUFFLINKS",
    price: 5000,
    href: "#",
    image: "/images/collection/shifting-leaves-cufflinks.jpg",
    imageAlt: "Shifting Leaves Chevron Cufflinks",
    type: "Accessory",
    category: "Men",
    color: "Gold",
    size: "One Size",
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
    options: ["Black", "Brown", "Ivory", "Tan", "Gold", "Chevron", "Beige"],
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
