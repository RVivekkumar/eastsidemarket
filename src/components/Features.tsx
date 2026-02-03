import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";

const features = [
  {
    id: "01",
    title: "Open 24/7 For Your Convenience",
    desc: "No matter the hour — day or night — our store is always open, ensuring you have access to fuel, groceries, snacks, and services whenever you need them.",
    color: "#3B82F6",
  },
  {
    id: "02",
    title: "Clean, Safe & Welcoming",
    desc: "We take pride in maintaining a spotless and secure environment so every visit is comfortable and worry-free.",
    color: "#FF7A00",
  },
  {
    id: "03",
    title: "Quick Stop for Everything",
    desc: "Fuel, food, groceries, and Bitcoin ATM — all in one location designed to save you time.",
    color: "#22C55E",
  },
  {
    id: "04",
    title: "Friendly Local Staff",
    desc: "Our team is always ready to help, providing excellent customer service with a smile.",
    color: "#FACC15",
  },
];

const imageUrl = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769682654/image_akz9o0.png";
const decorativeUrl = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769682637/Group_1686552599_jvtbaa.png";

const WhyChooseUs = () => {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative order-2 md:order-1"
        >
          <img
            src={getOptimizedImageUrl(imageUrl)}
            alt="Valero gas station with car at pump – Eastside Market convenience store"
            className="rounded-2xl sm:rounded-[28px] w-full object-cover aspect-[4/3] lg:aspect-auto"
            loading="lazy"
            width={600}
            height={400}
          />
          <div className="absolute -top-8 sm:-top-20 left-4 sm:left-6 flex gap-2 max-w-[45%] sm:max-w-[50%]">
            <img
              src={getOptimizedImageUrl(decorativeUrl)}
              alt="presentation"
              role="presentation"
              className="rounded-md object-cover w-8/12"
              loading="lazy"
              width={120}
              height={80}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2"
        >
          <span className="text-[#FF7A00] text-sm font-semibold">Services</span>
          <h2 id="why-choose-heading" className="text-2xl sm:text-[28px] font-bold text-[#111111] mt-2 mb-8 sm:mb-10">
            Why Customers Choose Us <br className="hidden sm:block" />
            Valero Gas Station
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  className="absolute left-0 top-0 text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-none select-none"
                  style={{ color: f.color, opacity: 0.15 }}
                  aria-hidden
                >
                  {f.id}
                </span>
                <h3 className="font-semibold text-base mb-2 relative z-10">{f.title}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-[420px]">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
