import CoinFlipBenefits from "../components/CoinFlipBenefits";
import CoinFlipSection from "../components/CoinFlipSection";
import Hero from "../components/Hero";
import HowCoinFlipWorks from "../components/HowCoinFlipWorks";
import SEO from "../components/SEO";

const HERO_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769681711/Group_1686552607_g9jhs8.png";

export default function ATMService() {
  return (
    <>
      <SEO
        title="Bitcoin ATM"
        description="CoinFlip Bitcoin ATM at Eastside Market – buy and sell Bitcoin with cash. Secure, easy, 24/7. Valero Houston East Freeway."
        path="/atm"
      />
      <Hero
        src={HERO_IMG}
        alt="Person using CoinFlip Bitcoin ATM at Eastside Market"
      />
      <CoinFlipSection />
      <HowCoinFlipWorks />
      <CoinFlipBenefits />
    </>
  );
}
