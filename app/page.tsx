import Hero from "@/components/hero";
import CategoryRow from "@/components/category-row";
import CuratedFavorites from "@/components/curated-favorites";
import EditorialGrid from "@/components/editorial-grid";
import Newsletter from "@/components/newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryRow />
      <CuratedFavorites />
      <EditorialGrid />
      <Newsletter />
    </>
  );
}
