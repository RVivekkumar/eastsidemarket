import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";
import regularUnleadedIcon from "../assets/vector/Group.png";
import premiumGasolineIcon from "../assets/vector/Vector.png";
import dieselFuelIcon from "../assets/vector/material-symbols_store.png";
import specialtyFuelsIcon from "../assets/vector/formkit_bitcoin.png";
import engineIcon from "../assets/vector/Layer_2.png";
import performanceIcon from "../assets/vector/Layer_3.png";
import ecoIcon from "../assets/vector/g3180.png";
import trustIcon from "../assets/vector/Layer_1.png";
import Group3 from "../assets/Group_3.png";
import Groceryservice1 from "../assets/Groceryservice_1.png";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const GasStation = () => {
  const fuelTypes = [
    {
      title: "Regular Unleaded",
      subheading: "Premium Fuel",
      desc: "Affordable and efficient for everyday driving. Clean-burning and optimized for performance.",
      tagline: "Meets or exceeds TOP TIER™ standards",
      icon: regularUnleadedIcon,
      color: "#3B82F6",
      ariaLabel: "Regular unleaded fuel – car icon",
    },
    {
      title: "Premium Gasoline",
      subheading: "Premium Fuel",
      desc: "For vehicles requiring higher octane levels – delivers maximum engine efficiency and smooth acceleration.",
      tagline: "Enhanced performance formula",
      icon: premiumGasolineIcon,
      color: "#22C55E",
      ariaLabel: "Premium gasoline – vehicle icon",
    },
    {
      title: "Diesel Fuel",
      subheading: "Premium Fuel",
      desc: "Ultra-low sulfur diesel for trucks and heavy-duty vehicles. Engine protection with cleaner combustion.",
      tagline: "Commercial grade quality",
      icon: dieselFuelIcon,
      color: "#F97316",
      ariaLabel: "Diesel fuel – truck icon",
    },
    {
      title: "Specialty Fuels",
      subheading: "Premium Fuel",
      desc: "Select locations may offer ethanol blends or eco-friendly fuel alternatives.",
      tagline: "Environmentally conscious options",
      icon: specialtyFuelsIcon,
      color: "#8B5CF6",
      ariaLabel: "Specialty fuels – pump icon",
    },
  ];

  const performance = [
    {
      title: "Cleaner Engines",
      desc: "Keeps engine parts deposit-free for optimal performance and longevity.",
      icon: engineIcon,
      ariaLabel: "Cleaner engines icon",
    },
    {
      title: "Better Performance",
      desc: "Improves combustion and efficiency for a smoother driving experience.",
      icon: performanceIcon,
      ariaLabel: "Better performance icon",
    },
    {
      title: "Eco-Friendly",
      desc: "Produces fewer emissions for a cleaner environment and better air quality.",
      icon: ecoIcon,
      ariaLabel: "Eco-friendly icon",
    },
    {
      title: "Trusted Brand",
      desc: "Partnered with Valero, a leader in energy quality and reliability.",
      icon: trustIcon,
      ariaLabel: "Trusted brand icon",
    },
  ];

  const amenities = [
    {
      title: "24/7 Fueling",
      desc: "Always open, every day of the year.",
      image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769586804/Rectangle_818_t8vhby.png",
      alt: "24-hour fuel pumps at Eastside Market Valero gas station",
    },
    {
      title: "Multiple Payments",
      desc: "Cash, cards, and mobile payments accepted.",
      image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769586806/Rectangle_818_1_ewve0f.png",
      alt: "Multiple payment options at gas station",
    },
    {
      title: "Clean Forecourt",
      desc: "Tire air & water station available.",
      image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769586806/Rectangle_818_3_w17kqx.png",
      alt: "Clean forecourt with tire air and water station",
    },
    {
      title: "Inside Store",
      desc: "Snacks, restrooms, ATM, and crypto machine.",
      image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769586807/Rectangle_818_2_ovzxsa.png",
      alt: "Inside Eastside Market convenience store with snacks and ATM",
    },
  ];

  const overviewImg = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769586814/Group_1000006510_1_dv3jyc.png";

  return (
    <>
      {/* EASTSIDE MARKET - Gas Station Overview (Figma: light bg, centered header, image left orange border, text right) */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#F9FAFB] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-[#FF7A00] text-sm font-semibold mb-2">Services</p>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#0B0E13] mb-3">
              EASTSIDE MARKET – Gas Station
            </h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
              <span className="text-[#FF7A00] text-sm font-semibold">Overview</span>
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center order-2 md:order-1"
            >
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 hidden sm:block" aria-hidden />
              <img
                src={getOptimizedImageUrl(overviewImg)}
                alt="Car refueling at Valero gas station pump – Eastside Market Houston"
                className="relative z-10 rounded-2xl md:rounded-3xl w-full max-w-md object-cover aspect-[4/3]"
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
              className="order-1 md:order-2 text-[#0B0E13]"
            >
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                The Valero Gas Station at 7001 East Freeway, Houston, TX 77220 (and 10611 East Freeway, Houston, TX 77029)
                is a trusted and convenient fuel stop serving the local community and travelers along Houston&apos;s busy East
                Freeway corridor.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Known for its TOP TIER™ gasoline, clean facilities, and 24-hour service, this station combines reliable
                fueling options with extra convenience — including an on-site grocery store and CoinFlip crypto ATM.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                EASTSIDE MARKET is a friendly neighborhood grocery store inside the Valero Gas Station offering convenient
                everyday essentials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Fuel Types (Figma: 4 cards with colored icons) */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-[#FF7A00] text-sm font-semibold mb-2">Fuel Types</p>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#0B0E13] mb-3">
              Available Fuel Types
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              Choose the perfect fuel for your vehicle&apos;s needs
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 border border-[#FF7A00] p-10 sm:p-8 md:p-10 rounded-2xl"
          >
            {fuelTypes.map((s) => (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Colored header with title */}
                <div
                className="relative pt-8 pb-6 sm:pb-8 px-4 flex flex-col items-center rounded-t-2xl"
                style={{ backgroundColor: s.color }}
                >
                {/* Icon in white circle with colored outline – protrudes into bottom section */}
                <div
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-white flex items-center justify-center text-2xl sm:text-3xl border-4 shadow-md -mb-7 sm:-mb-8 -top-16"
                  aria-hidden
                  style={{ backgroundColor: s.color }}
                >
                  <span style={{ color: "white" }} aria-label={s.ariaLabel} role="img" >
                    {/* {s.icon} */}
                    <img src={s.icon} alt="icon"loading="lazy" width={32} height={32} />
                  </span>
                </div>
                <h3 className="relative z-10 text-white font-bold text-base sm:text-lg text-center mt-1 px-2">
                  {s.title}
                </h3>
              </div>

                {/* Body: Premium Fuel, description, green tagline */}
                <div className="relative flex-1 bg-white pt-8 sm:pt-10 pb-6 px-5 sm:px-6 rounded-b-2xl border border-t-0 border-gray-100 -mt-4 sm:-mt-5">
                  <div
                    className="absolute inset-0 opacity-[0.03] rounded-b-2xl pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, #0B0E13 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                    }}
                    aria-hidden
                  />
                  <div className="relative">
                    <h4 className="text-[#111111] font-bold text-base sm:text-lg mb-2">{s.subheading}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {s.desc.includes("TOP TIER™") ? (
                        <>
                          <span className="font-semibold text-gray-800">TOP TIER™</span>{" "}
                          {s.desc.replace("TOP TIER™ ", "").replace("TOP TIER™", "").trim()}
                        </>
                      ) : (
                        s.desc
                      )}
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      {s.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance (Figma: 2x2 grid, orange icons) */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-[#F9FAFB] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
<div className="flex justify-center items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
              <span className="text-[#FF7A00] text-sm font-semibold">Performance</span>
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            </div>        
            {/* <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#0B0E13]">
              Why TOP TIER™
            </h2> */}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {performance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF7A00] flex items-center justify-center mb-4 sm:mb-6">
                  <img
                    src={item.icon}
                    alt={item.ariaLabel}
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    loading="lazy"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#0B0E13]">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuel Services & Amenities (Figma: 4 cards with images, Read More) */}
      <section className="relative py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-80 object-reverse rotate-180 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Groceryservice1})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-80 bg-contain bg-no-repeat w-48 object-reverse"
        style={{ backgroundImage: `url(${Group3})` }}
        aria-hidden
      />       
       <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
              <span className="text-[#FF7A00] text-sm font-semibold">Our Services</span>
              <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#0B0E13] mb-3">
              Fuel Services & Amenities
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              Everything you need for a complete stop
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {amenities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col transition-shadow border border-gray-100"
              >
                <div className="p-4">
                  <img
                    src={getOptimizedImageUrl(item.image)}
                    alt={item.alt}
                    className="rounded-xl w-full h-36 sm:h-40 object-cover"
                    loading="lazy"
                    width={400}
                    height={160}
                  />
                </div>
                <div className="px-5 sm:px-6 pb-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B0E13] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-1">{item.desc}</p>
                  <Link
                    to="/gas"
                    className="mt-auto text-[#FF7A00] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-sm"
                  >
                    Read More <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GasStation;
