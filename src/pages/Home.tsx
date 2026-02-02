import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/Features";
import Testimonial from "../components/Testimonials";
import SEO from "../components/SEO";

const HERO_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769681717/Group_1686552603_qwusqi.png";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Eastside Market – Your trusted Valero gas station in Houston. Top Tier fuel, fresh groceries, and CoinFlip Bitcoin ATM. Open 24/7 on East Freeway."
        path="/"
      />
      <Hero
        src={HERO_IMG}
        alt="Eastside Market convenience store interior with fuel pumps and services – Houston Valero"
      />
      <Services />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
}
