import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";

const IMG1 = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683302/Group_1000006510_3_tzektk.png";
const IMG2 = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683298/Group_1000006510_4_bdigmj.png";
const IMG3 = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683298/Group_1000006510_5_dgwtbb.png";
const IMG4 = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683296/Group_1000006510_6_jccgeh.png";

const GroceryProductSection = () => {
  return (
    <section className="bg-[#fefefe] py-14 md:py-20 font-poppins overflow-hidden" aria-labelledby="market-section-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-16 md:space-y-24">
        {/* BLOCK 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#FF7A00]/5 hidden sm:block" aria-hidden />
            <img
              src={getOptimizedImageUrl(IMG1)}
              alt="Fresh produce and essentials at Eastside Market grocery store"
              className="relative rounded-2xl z-10 w-full max-w-lg object-cover aspect-[4/3]"
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
            className="order-1 lg:order-2"
          >
            <h3 id="market-section-heading" className="text-[#2b6f4f] text-lg sm:text-xl font-semibold flex items-center gap-2 mb-4">
              <span aria-hidden>🌿</span> Fresh Produce & Essentials
            </h3>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              EASTSIDE MARKET takes pride in offering fresh, high-quality groceries to the community. Fresh fruits,
              vegetables, and meats are delivered regularly to ensure excellent taste, nutrition, and value. The store
              is well-stocked with everyday essentials, including pantry staples, dairy products, frozen foods, snacks,
              and beverages, making it easy for customers to find everything they need in one stop. With convenient
              access inside the Valero Gas Station, EASTSIDE MARKET provides a friendly shopping experience, saving
              customers time and eliminating the need to travel to a large supermarket.
            </p>
          </motion.div>
        </div>

        {/* BLOCK 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h3 className="text-[#1f2937] text-lg sm:text-xl font-semibold flex items-center gap-2 mb-4">
              <span aria-hidden>🛒</span> Product Range Includes
            </h3>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              EASTSIDE MARKET offers a convenient and friendly shopping experience with a wide range of everyday
              essentials for the community. Customers can find fresh fruits, vegetables, and quality meat and poultry
              items delivered regularly for great taste and freshness. The store also provides dairy products, eggs,
              and bread for daily needs, along with a variety of packaged snacks and beverages for quick bites and
              refreshments. Frozen and ready-to-eat foods offer easy meal solutions, while basic home and personal
              essentials ensure a complete one-stop shopping experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-2"
          >
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[#FF7A00]/5 hidden sm:block" aria-hidden />
            <img
              src={getOptimizedImageUrl(IMG2)}
              alt="Product range and grocery shopping at Eastside Market"
              className="relative rounded-2xl z-10 w-full max-w-lg object-cover aspect-[4/3] ml-auto"
              loading="lazy"
              width={500}
              height={375}
            />
          </motion.div>
        </div>

        {/* BLOCK 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#FF7A00]/5 hidden sm:block" aria-hidden />
            <img
              src={getOptimizedImageUrl(IMG3)}
              alt="Affordable and convenient shopping at Eastside Market"
              className="relative rounded-2xl z-10 w-full max-w-lg object-cover aspect-[4/3]"
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
            className="order-1 lg:order-2"
          >
            <h3 className="text-[#1f2937] text-lg sm:text-xl font-semibold flex items-center gap-2 mb-4">
              <span aria-hidden>💲</span> Affordable & Convenient
            </h3>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              EASTSIDE MARKET focuses on affordable pricing, quick service, and everyday convenience, making it the
              perfect choice for quick grocery runs or last-minute purchases. Whether you&apos;re stopping by to pick up
              ingredients for dinner, grabbing snacks and drinks for the road, or restocking essential home supplies,
              the store ensures everything is easy to find and access. With a well-organized layout, helpful service,
              and a wide range of daily-need products, EASTSIDE MARKET saves customers time while providing a smooth,
              hassle-free shopping experience for individuals, families, and on-the-go travelers.
            </p>
          </motion.div>
        </div>

        {/* BLOCK 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-2"
          >
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[#FF7A00]/5 hidden sm:block" aria-hidden />
            <img
              src={getOptimizedImageUrl(IMG4)}
              alt="Happy customers and great experience at Eastside Market"
              className="relative rounded-2xl z-10 w-full max-w-lg object-cover aspect-[4/3] ml-auto"
              loading="lazy"
              width={500}
              height={375}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <h3 className="text-[#1f2937] text-lg sm:text-xl font-semibold flex items-center gap-2 mb-4">
              <span aria-hidden>😊</span> Customer Experience
            </h3>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              EASTSIDE MARKET provides a clean, organized, and welcoming shopping environment, ensuring customers feel
              comfortable from the moment they walk in. The store is neatly arranged, making it easy to locate products
              quickly without hassle. Friendly and attentive staff members are always ready to assist with inquiries,
              product suggestions, or checkout support, ensuring every visit is smooth, pleasant, and satisfying.
              Whether you&apos;re stopping by for a quick pick-up or doing a small grocery run, EASTSIDE MARKET&apos;s warm
              atmosphere and customer-focused service make shopping convenient and enjoyable for everyone.
            </p>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
};

export default GroceryProductSection;
