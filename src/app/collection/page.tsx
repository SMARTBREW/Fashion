import { Footer } from "@/components/layout/Footer";
import { JJVNavbar } from "@/components/layout/JJVNavbar";
import { CollectionPageContent } from "@/components/collection/CollectionPageContent";

export default function CollectionPage() {
  return (
    <>
      <JJVNavbar />
      <main>
        <CollectionPageContent />
      </main>
      <Footer />
    </>
  );
}
