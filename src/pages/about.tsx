import EastsideMarket from "../components/EastsideMarket";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const HERO_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769681726/Group_1686552605_dt4sk3.png";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Eastside Market – your neighborhood Valero gas station with grocery, Bitcoin ATM, and 24/7 convenience on East Freeway Houston."
        path="/about"
      />
      <Hero
        src={HERO_IMG}
        alt="Eastside Market store – Valero gas station and convenience store Houston"
      />
                     
      <EastsideMarket />

    </>
  );
}
