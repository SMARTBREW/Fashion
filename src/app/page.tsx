import { ChevronDivider } from "@/components/layout/ChevronDivider";
import { Footer } from "@/components/layout/Footer";
import { MainNavbar } from "@/components/layout/MainNavbar";
import { BestSellers } from "@/components/home/BestSellers";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { BrandSection } from "@/components/jjv/BrandSection";
import { CollectionGrid } from "@/components/jjv/CollectionGrid";
import { HallOfFameSection } from "@/components/jjv/HallOfFameSection";
import {
  brandSection,
  bestSellers,
  hallOfFame,
  heroSlides,
  jjvCollections,
  shopCategories,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <main>
        <HeroCarousel slides={heroSlides} />
        <div className="bg-cream pb-4">
          <CollectionGrid id="collections" items={jjvCollections[0]} priority />
          <BrandSection {...brandSection} />
          <ShopByCategory categories={shopCategories} />
          <BestSellers data={bestSellers} />
          <CollectionGrid items={jjvCollections[1]} />
          <HallOfFameSection {...hallOfFame} />
          <CollectionGrid items={jjvCollections[2]} />
          <ChevronDivider />
        </div>
      </main>
      <Footer />
    </>
  );
}
