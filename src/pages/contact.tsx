import Contact from "../components/contactus";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const HERO_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769680568/Desktop_-_2_odcfeo.png";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Eastside Market – address, phone, hours. Visit us at 10611 East Fwy, Houston TX 77029. Open 24 hours."
        path="/contact"
      />
      <Hero
        src={HERO_IMG}
        alt="Eastside Market exterior – contact and visit us in Houston"
      />
      <Contact />
    </>
  );
}
