import GroceryOverview from "../components/GroceryOverview";
import GroceryProducts from "../components/GroceryProducts";
import Hero from "../components/Hero";
import GroceryProductsSection from "../components/MarketSection";
import SEO from "../components/SEO";

const HERO_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769681722/Desktop_-_2_2_puwops.png";

export default function Grocery() {
  return (
    <>
      <SEO
        title="Grocery Service"
        description="Eastside Market grocery store – fresh produce, pantry staples, snacks, and daily essentials. Inside Valero Houston, East Freeway."
        path="/grocery"
      />
      <Hero
        src={HERO_IMG}
        alt="Happy shoppers in Eastside Market grocery aisle – Houston"
      />
      <GroceryOverview />
      <GroceryProducts />
      <GroceryProductsSection />
    </>
  );
}
