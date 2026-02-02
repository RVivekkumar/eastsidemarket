import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";
import Group3 from "../assets/Groceryservice_1.png"

const IMG_URL = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683296/Group_1000006510_2_xy1517.png";

export default function GroceryOverview() {
  return (
    <section className="relative py-14 md:py-20 lg:py-28 bg-[#F9FAFB] overflow-hidden" aria-labelledby="grocery-overview-heading">
       <div
            className="absolute inset-0 opacity-80 bg-cover object-bottom bg-no-repeat w-full"
            style={{ backgroundImage: `url(${Group3})` }}
            aria-hidden
          />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm tracking-widest text-[#FF7A00] font-medium">SERVICES</p>
          <h2 id="grocery-overview-heading" className="text-xl sm:text-2xl font-semibold text-[#0B0E13] mt-2">
            EASTSIDE MARKET – Grocery Store
          </h2>
          <div className="flex justify-center items-center gap-3 mt-3">
            <span className="w-8 sm:w-10 h-0.5 bg-[#FF7A00]" aria-hidden />
            <span className="w-8 sm:w-10 h-0.5 bg-[#2563EB]" aria-hidden />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[390px] mx-auto md:mx-0 order-2 md:order-1"
          >
            <img
              src={getOptimizedImageUrl(IMG_URL)}
              alt="Eastside Market grocery store interior – fresh produce and essentials at Valero Houston"
              className="relative rounded-xl object-cover w-full aspect-[4/3]"
              loading="lazy"
              width={390}
              height={293}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-[#0B0E13] leading-relaxed order-1 md:order-2"
          >
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              EASTSIDE MARKET is a friendly, neighborhood grocery store located inside the Valero Gas Station on East
              Freeway, Houston, TX.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              Designed for everyday convenience, the store offers a carefully selected range of grocery essentials to
              serve both local residents and travelers on the go.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              EASTSIDE MARKET is a friendly neighborhood grocery store inside the Valero Gas Station on East Freeway,
              Houston, offering convenient everyday essentials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
