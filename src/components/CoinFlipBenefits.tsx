import { motion } from "framer-motion";
import { Lock, Percent, CalendarSync } from "lucide-react";

const cards = [
  {
    title: "Secured Transactions",
    desc: "Your safety is our top priority. All transactions are encrypted.",
    icon: <Lock size={22} color="#FFFFFF" aria-hidden />,
  },
  {
    title: "Best Rates",
    desc: "We offer competitive rates to maximize the value of your purchase.",
    icon: <Percent size={22} color="#FFFFFF" aria-hidden />,
  },
  {
    title: "Instant Transfer",
    desc: "Your crypto is sent directly to your wallet as soon as the transaction is confirmed.",
    icon: <CalendarSync size={22} color="#FFFFFF" aria-hidden />,
  },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const item = { hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1 } };

export default function CoinFlipBenefits() {
  return (
    <section className="py-14 md:py-20 lg:py-24 font-poppins" aria-labelledby="coinflip-benefits-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 ">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24 justify-items-center"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative w-full max-w-[340px]"
            >
              <div className="absolute -top-5 sm:-top-6 left-5 z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF7A00] flex items-center justify-center shadow-lg border-4 border-white">
                  {card.icon}
                </div>
              </div>
              <div className="bg-white border border-gray-200 shadow-lg rounded-bl-[2.5rem] rounded-tr-[2.5rem] px-5 pb-5 pt-10 sm:pt-11">
                <h3 className="text-base font-semibold text-[#0B0E13] mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
