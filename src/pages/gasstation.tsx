import GasStation from "../components/gasstationpage";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const HERO_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769680534/Desktop_-_2_1_wrt7bn.png";

export default function GasStationPage() {
  return (
    <>
      <SEO
        title="Gas Station"
        description="Valero gas station at Eastside Market Houston – TOP TIER fuel, 24/7 service, clean facilities. 10611 East Freeway."
        path="/gas"
      />
      <Hero
        src={HERO_IMG}
        alt="Valero gas station pumps and canopy at Eastside Market Houston"
      />
      <GasStation />
    </>
  );
}
