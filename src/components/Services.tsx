import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import layer4 from "../assets/vector/Layer_4.png";
import layer5 from "../assets/vector/Layer_5.png";
import cart from "../assets/vector/cart.png";
import formkit_bitcoin from "../assets/vector/formkit_bitcoin.png";
const services = [
  {
    title: "Valero Gas Station",
    subheading: "Premium Fuel",
    desc: "TOP TIER™ certified gasoline and diesel for optimal engine performance and longevity.",
    bullets: ["High-quality fuel", "Multiple grades", "Fast pumps"],
    icon: formkit_bitcoin,
    color: "#3B82F6",
    to: "/gas",
    ariaLabel: "Gas pump icon for Valero gas station services",
  },
  {
    title: "Fresh Grocery",
    subheading: "Fresh Essentials",
    desc: "Quality produce, fresh meats, and everyday essentials available around the clock.",
    bullets: ["Fresh produce", "Daily essentials", "24/7 convenience"],
    icon: cart,
    color: "#22C55E",
    to: "/grocery",
    ariaLabel: "Shopping cart icon for fresh grocery services",
  },
  {
    title: "Bitcoin ATM",
    subheading: "Crypto Made Easy",
    desc: "Secure Bitcoin ATM allowing fast and easy cryptocurrency transactions with cash.",
    bullets: ["Buy & sell Bitcoin", "Quick transactions", "Secure & private"],
    icon: layer4,
    color: "#F97316",
    to: "/atm",
    ariaLabel: "Bitcoin symbol icon for Bitcoin ATM services",
  },
  {
    title: "Full Amenities",
    subheading: "One-Stop Convenience",
    desc: "Everything you need including refreshments, ATM, and clean restrooms.",
    bullets: ["Snacks & drinks", "Clean facilities", "ATM on site"],
    icon: layer5,
    color: "#8B5CF6",
    to: "/gas",
    ariaLabel: "Store icon for full amenities",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Services = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-14 md:py-16 lg:py-20" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
            <span className="text-[#FF7A00] text-sm font-semibold">Services</span>
            <span className="w-6 h-0.5 bg-[#FF7A00]" aria-hidden />
          </div>
          <h2 id="services-heading" className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#111111] mb-3">
            Services We Offered
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto">
            Complete Convenience Everything You Need <br className="hidden sm:block" />
            In One Modern Location
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 border border-[#FF7A00] p-10 rounded-2xl"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col mt-10"
            >
              {/* Top colored section with wave-like curved bottom */}
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
                    <img src={s.icon} alt={s.ariaLabel} className="w-7" loading="lazy" width={32} height={32}   />
                  </span>
                </div>
                <h3 className="relative z-10 text-white font-bold text-base sm:text-lg text-center mt-1 px-2">
                  {s.title}
                </h3>
              </div>

              {/* Bottom off-white section */}
              <div className="relative flex-1 bg-[#FAFAFA] pt-8 sm:pt-10 pb-6 px-5 sm:px-6 rounded-b-2xl border border-t-0 border-gray-100 -mt-4 sm:-mt-5">
                {/* Faint pattern overlay (optional) */}
                <div
                  className="absolute inset-0 opacity-[0.03] rounded-b-2xl pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #0B0E13 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <h4 className="text-[#111111] font-bold text-lg sm:text-xl mb-3">{s.subheading}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {s.desc.includes("TOP TIER™") ? (
                      <>
                        <span className="font-semibold">TOP TIER™</span>{" "}
                        {s.desc.replace("TOP TIER™ ", "").replace("TOP TIER™", "").trim()}
                      </>
                    ) : (
                      s.desc
                    )}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {s.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-gray-700 font-semibold">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.to}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold border-2 bg-white hover:bg-gray-50 transition-colors"
                    style={{ borderColor: s.color, color: s.color }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
