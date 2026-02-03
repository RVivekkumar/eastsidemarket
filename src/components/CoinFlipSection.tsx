import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";
import landing from "../assets/Landing_Page.png";
import Group4 from "../assets/Group_4.png";
import Groceryservice1 from "../assets/Groceryservice_1.png";

const ATM_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684266/Group_1000006510_10_g2kgcy.png";

const features = [
  {
    title: "Instant Transactions",
    desc: "Buy Bitcoin and other top cryptos in minutes.",
    icon: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769686309/Layer_1_xsqiki.png",
    alt: "Instant transactions icon",
  },
  {
    title: "Convenient Location",
    desc: "Inside Valero's EASTSIDE MARKET—open late for easy access.",
    icon: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769686309/Layer_1_2_i0tvoy.png",
    alt: "Convenient location icon",
  },
  {
    title: "Secure & Private",
    desc: "Safe transactions through CoinFlip's trusted network.",
    icon: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769685997/Group_1686552582_wgezhn.png",
    alt: "Secure and private icon",
  },
  {
    title: "Cash Accepted",
    desc: "Purchase crypto instantly—no bank or card needed.",
    icon: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769685997/OBJECTS_szclnv.png",
    alt: "Cash accepted icon",
  },
  {
    title: "Easy to Use",
    desc: "Simple on-screen steps for beginners and experts alike.",
    icon: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769685997/Group_1686552596_gnlx7b.png",
    alt: "Easy to use icon",
  },
  {
    title: "24/7 Support",
    desc: "Get help anytime from CoinFlip's dedicated team.",
    icon: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769685997/OBJECTS_szclnv.png",
    alt: "24/7 support icon",
  },
];

const CoinFlipSection = () => {
  return (
    <section
      className="bg-[#F5F5F5] py-14 md:py-20 lg:py-24 font-poppins relative overflow-hidden"
      aria-labelledby="coinflip-overview-heading"
    >
      {/* Background: diagonal lines pattern (Group_3) */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-no-repeat rotate-180"
        style={{ backgroundImage: `url(${Group4})` }}
        aria-hidden
      />
    
      {/* Decorative shapes – bottom-left (Groceryservice_1) */}
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-40 sm:h-52 md:h-64 opacity-20 pointer-events-none" aria-hidden>
        <img
          src={Groceryservice1}
          alt="icon of the store"
          className="w-full h-full object-cover object-left-bottom"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-16 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
        <div className="absolute -z-10 top-1/2 right-0 w-48 sm:w-64 md:w-80 h-40 sm:h-52 md:h-64 opacity-80 pointer-events-none" aria-hidden>
        <img
          src={landing}
          alt="icon of the store"
          className="w-full h-full object-cover object-left-bottom rotate-180"
          loading="lazy"
        />
      </div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            <span className="text-[#FF7A00] text-sm font-semibold">Services</span>
            <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
          </div>
          <h2 id="coinflip-overview-heading" className="text-2xl sm:text-3xl font-bold text-[#0B0E13] mt-2 mb-2">
            CoinFlip Bitcoin Machine – Crypto Made Easy
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Overview</p>
          <div className="flex justify-center mt-2">
            <span className="w-12 h-0.5 bg-[#FF7A00]" aria-hidden />
          </div>
        </motion.div>

        {/* Two-column: image (orange border) + features list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 md:order-1"
          >
            {/* ATM image with thick orange border (Figma) */}
            <img
              src={getOptimizedImageUrl(ATM_IMG)}
              alt="CoinFlip Bitcoin ATM at Eastside Market Valero Houston"
              className="relative z-10 rounded-xl w-full max-w-lg object-cover aspect-[4/3]"
              loading="lazy"
              width={500}
              height={375}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6">
              Inside EASTSIDE MARKET (located within the Valero Gas Station at 10611 East Freeway, Houston, TX),
              customers can instantly buy Bitcoin and other cryptocurrencies using cash through the CoinFlip
              Bitcoin ATM.
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f.title} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <img
                      src={getOptimizedImageUrl(f.icon)}
                      alt={f.alt}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B0E13]">{f.title}:</span>{" "}
                    <span className="text-gray-600 text-sm sm:text-[15px]">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Overview subsection (Figma) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <div className="flex justify-center mb-2">
            <span className="w-12 h-0.5 bg-[#FF7A00]" aria-hidden />
          </div>
          <p className="text-[#FF7A00] text-sm font-semibold mb-2">Overview</p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B0E13] mb-4">
            CoinFlip Bitcoin Machine – Crypto Made Easy
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Instantly purchase your favorite cryptocurrencies with cash. Our secure and user-friendly Bitcoin ATM
            is conveniently located at the Valero Gas Station (Eastside Market) for your everyday needs.
          </p>
        </motion.div>

        {/* Feature cards grid (optional – keep for consistency) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={getOptimizedImageUrl(f.icon)}
                  alt={f.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  loading="lazy"
                  width={56}
                  height={56}
                />
              </div>
              <h4 className="text-sm font-semibold text-[#0B0E13] mb-2">{f.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoinFlipSection;
