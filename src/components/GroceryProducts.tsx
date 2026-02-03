import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";
import Group3 from "../assets/Group.png"

const products = [
  {
    title: "Frozen meats",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684018/Rectangle_818_4_l62efm.png",
    alt: "Frozen meats and fine meat selection at Eastside Market",
  },
  {
    title: "Clothes",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684015/Rectangle_818_5_nf668k.png",
    alt: "Clothes and apparel section in store",
  },
  {
    title: "Pantry staples",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684015/Rectangle_818_6_miihes.png",
    alt: "Pantry staples and household essentials",
  },
  {
    title: "Snacks & Drinks",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684016/Rectangle_818_9_wxmno3.png",
    alt: "Snacks and drinks aisle at Eastside Market",
  },
  {
    title: "Hot food / service",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684016/Rectangle_818_8_hfcvrh.png",
    alt: "Hot food and prepared meals service",
  },
  {
    title: "In-store ATM",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769684016/Rectangle_818_7_zmkmav.png",
    alt: "In-store ATM and convenience services",
  },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1 } };

export default function GroceryProducts() {
  return (
    <section className="py-14 md:py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="grocery-products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm text-[#FF7A00] tracking-widest font-medium">SERVICES</p>
          <h2 id="grocery-products-heading" className="text-xl sm:text-2xl font-semibold text-[#0B0E13] mt-2 relative z-10">
            EASTSIDE MARKET – Grocery&apos;s
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
        >
          <div className="absolute -top-40 -left-10 w-56 h-56 sm:w-80 sm:h-80 
               opacity-80 bg-no-repeat bg-left-top bg-[length:80%] -z-10"
               style={{ backgroundImage: `url(${Group3})` }}
               aria-hidden
             />
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={getOptimizedImageUrl(p.image)}
                alt={p.alt}
                className="rounded-t-xl h-40 sm:h-44 w-full object-cover"
                loading="lazy"
                width={400}
                height={176}
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-[#0B0E13] font-semibold mb-2 flex items-center gap-2">
                  <span className="text-[#FF7A00]" aria-hidden>🍊</span>
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">Grab-and-go snacks, soft drinks and refreshment.</p>
                <button type="button" className="text-sm text-[#FF7A00] font-medium hover:underline">
                  View More →
                </button>
              </div>
            </motion.div>
          ))}
          <div className="absolute bottom-0 md:-bottom-52 -right-24 w-full h-full sm:w-56 sm:h-56 
               opacity-80 bg-no-repeat bg-left-top bg-[length:80%] -z-10"
               style={{ backgroundImage: `url(${Group3})` }}
               aria-hidden
             />
        </motion.div>
        
      </div>
    </section>
  );
}
