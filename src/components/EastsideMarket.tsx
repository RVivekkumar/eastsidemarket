import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";
import Group6 from "../assets/Landing_Page.png" 
import { Award, Clock, Leaf, ShieldCheck, Smile, ThumbsUp } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Card = ({ icon, title, description, className }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={`relative bg-white shadow-lg w-full rounded-bl-[2.5rem] rounded-tl-[2.5rem] rounded-tr-lg rounded-br overflow-visible ${className ?? ""}`}
  >
    <div className="absolute -top-5 sm:-top-6 left-5 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF7A00] flex items-center justify-center shadow-lg border-4 border-white" aria-hidden>
      <span className="text-xl sm:text-2xl">{icon}</span>
    </div>
    <div className="pt-10 sm:pt-11 px-5 pb-5 flex flex-col gap-3">
      <h4 className="font-semibold text-lg text-[#0B0E13]">{title}</h4>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  </motion.div>
);

const IMG_OVERVIEW = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684269/Group_1000006510_7_v6o7es.png";
const IMG_COMMUNITY = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684267/Group_1000006510_8_ik41uo.png";
const IMG_VALERO = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684264/Group_1000006510_9_hz0rpo.png";
const IMG_COINFLIP = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684266/Group_1000006510_10_g2kgcy.png";

const EastsideMarket = () => {
  return (
     <section  className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 overflow-hidden"
  aria-labelledby="eastside-overview-heading"
>   
<div className="absolute top-0 left-0 w-full h-full sm:w-80 sm:h-80 md:w-10/12
     opacity-30 bg-no-repeat bg-left-top bg-[length:80%] -z-10"
     style={{ backgroundImage: `url(${Group6})` }}
     aria-hidden
   />
  <div className="flex justify-center items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
              <span className="text-[#FF7A00] text-sm font-semibold">Services</span>
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
              <span className="text-[#FF7A00] text-sm font-semibold">Overview</span>
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            </div>

       <motion.h1
        id="eastside-overview-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center text-[#0B0E13]"
      >
        EASTSIDE MARKET – Over All
      </motion.h1>
    

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={getOptimizedImageUrl(IMG_OVERVIEW)}
            alt="People shopping for fresh produce at Eastside Market grocery stall"
            className="rounded-xl object-cover w-full max-w-lg aspect-[4/3]"
            loading="lazy"
            width={500}
            height={375}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#0B0E13]">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Your Neighborhood Market, Inside Valero EASTSIDE MARKET is a convenient grocery store located inside the
            Valero Gas Station on East Freeway, Houston.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm sm:text-base">
            We&apos;re more than just a fuel stop — we&apos;re a local destination where you can refuel your vehicle,
            restock your essentials, and recharge yourself, all in one visit.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm sm:text-base">
            <strong>Our Mission:</strong> To make everyday life easier by providing quality products, affordable prices,
            and friendly service — anytime, day or night.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 order-2 lg:order-1"
        >
          <img
            src={getOptimizedImageUrl(IMG_COMMUNITY)}
            alt="Bright grocery store aisle with products at Eastside Market"
            className="rounded-xl object-cover w-full max-w-lg aspect-[4/3]"
            loading="lazy"
            width={500}
            height={375}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 order-1 lg:order-2"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#0B0E13]">Serving the Community with Care</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our goal is to make life simpler for our neighbors and travelers alike. Whether you&apos;re heading to work,
            returning home, or passing through Houston&apos;s Eastside, EASTSIDE MARKET ensures you find everything you
            need under one roof.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl rounded-full p-2 bg-green-200" aria-hidden><Leaf fill="lightgreen"/></span>
              <div>
                <h4 className="font-semibold">Fresh Produce</h4>
                <p className="text-gray-600 text-sm">Sourced for quality and value to bring you the best.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl rounded-full p-2 bg-blue-200" aria-hidden><ThumbsUp/></span>
              <div>
                <h4 className="font-semibold">Friendly Service</h4>
                <p className="text-gray-600 text-sm">Our team is here to make every visit a pleasant one.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl rounded-full p-2 bg-orange-200" aria-hidden><ShieldCheck /></span>
              <div>
                <h4 className="font-semibold">Safe & Clean Environment</h4>
                <p className="text-gray-600 text-sm">Maintaining a safe and hygienic store for everyone.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 order-2 lg:order-2"
        >
          <img
            src={getOptimizedImageUrl(IMG_VALERO)}
            alt="Modern Valero gas station pump with blue and white branding"
            className="rounded-xl w-full max-w-lg object-cover aspect-[4/3] ml-auto"
            loading="lazy"
            width={500}
            height={375}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 order-1 lg:order-1"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#0B0E13]">Powered by Valero – Driven by Trust</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            Our partnership with Valero allows us to combine world-class fuel quality with local market convenience,
            giving our customers both reliability and comfort.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            As part of the trusted Valero network, our station provides TOP TIER gasoline and diesel, ensuring cleaner
            engines and better performance for your vehicle.
          </p>
          <a
            href="https://www.valero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold underline hover:text-blue-800 text-sm"
          >
            Learn more about Valero fuel →
          </a>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={getOptimizedImageUrl(IMG_COINFLIP)}
            alt="CoinFlip Cryptocurrency ATM inside Eastside Market store"
            className="rounded-xl w-full max-w-lg object-cover aspect-[4/3]"
            loading="lazy"
            width={500}
            height={375}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#0B0E13]">
            Modern Convenience – The CoinFlip Advantage
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            Inside the store, we&apos;ve added a CoinFlip Cryptocurrency ATM, allowing customers to buy Bitcoin and other
            cryptocurrencies with cash in minutes.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            This feature brings modern financial access to our local community, making EASTSIDE MARKET not just a
            traditional store, but a hub of innovation and convenience.
          </p>
          <Link
            to="/atm"
            className="inline-block mt-2 bg-[#FF7A00] text-white px-5 py-2.5 rounded-full hover:bg-[#e86f00] font-semibold text-sm transition-colors"
          >
            Explore Crypto Service
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FFCC80] rounded-2xl p-8 sm:p-10 text-center"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#0B0E13]">Our Promise To You</h2>
        <p className="text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
          We believe that even a quick stop should feel welcoming, efficient, and worthwhile. That&apos;s why we continue
          to serve Houston&apos;s Eastside with dedication, honesty, and community spirit — every single day.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 justify-center">
          <Card
            icon={<Clock size={22} color="#FFFFFF" aria-hidden />}
            title="Convenience"
            description="You can count on us 24/7 for all your needs, fast and easy."
          />
          <Card
            icon={<Award size={22} color="#FFFFFF" aria-hidden />}
            title="Quality"
            description="From our fuel to our food, we offer products you can trust."
          />
          <Card
            icon={<Smile size={22} color="#FFFFFF" aria-hidden />}
            title="Service"
            description="Delivered with a smile, because our community matters."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default EastsideMarket;
