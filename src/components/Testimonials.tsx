import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getOptimizedImageUrl } from "../utils/image";
import image1 from "../assets/Ornament.png"

const AUTO_INTERVAL_MS = 5500;

const testimonials = [
  {
    name: "Tom",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769682991/Ellipse_12_q2jccu.png",
    text: "Stopped for gas and ended up grabbing snacks and trying the Bitcoin ATM. Everything was clean and the staff was friendly. Will definitely come back.",
  },
  {
    name: "Sarah",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769682991/Ellipse_13_ntlxyn.png",
    text: "Convenient location on East Freeway. Open 24/7 is a lifesaver. Fresh groceries and quick fuel — exactly what we needed.",
  },
  {
    name: "Mike",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769682992/Ellipse_11_il2s2b.png",
    text: "Great experience at Eastside Market. Topped off with TOP TIER gas, picked up drinks and used the CoinFlip ATM. One stop for fuel, food, and crypto. Highly recommend.",
  },
  {
    name: "Jessica",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683059/Ellipse_15_giibc5.png",
    text: "Clean store, well stocked, and the team is always helpful. The Valero station is my go-to on this side of Houston.",
  },
  {
    name: "David",
    image: "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769683059/Ellipse_14_t6if0b.png",
    text: "Stopped by for gas and groceries. Fast service, fair prices, and the Bitcoin ATM was easy to use. Eastside Market is a real convenience.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const goNext = useCallback(() => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(goNext, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="py-14 md:py-20 lg:py-28 bg-[#F9FAFB]" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0B0E13] rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-12 py-10 sm:py-14 lg:py-16 text-center overflow-hidden"
        >
          {/* Background decorative elements – responsive */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
            {/* Orange stacked chevrons – left */}
            <div className="absolute left-20 bottom-1/3 -translate-y-1/2 w-8 sm:w-10 md:w-16 opacity-60 flex flex-col gap-0.5">
              <img src={image1} alt="icon" className="text-[#FF7A00] w-full h-auto" />
            </div>
            {/* Orange stacked chevrons – right */}
            <div className="absolute right-20 top-1/4 -translate-y-1/2 w-8 sm:w-10 md:w-16 opacity-60 flex flex-col gap-0.5 rotate-180">
              <img src={image1} alt="icon" className="text-[#FF7A00] w-full h-auto" />
            </div>
           
          </div>

          <h2 id="testimonials-heading" className="relative text-lg sm:text-[22px] font-semibold text-white mb-8 sm:mb-10">
            Here is what our Clients are saying About us
          </h2>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 sm:left-8 lg:left-10 top-1/2 -translate-y-1/2 text-[#FF7A00] p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={26} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 text-[#FF7A00] p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={26} strokeWidth={2.2} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white max-w-[620px] mx-auto rounded-xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 text-gray-800"
            >
              <h3 className="font-semibold mb-3 sm:mb-4">It was a very good experience</h3>
              <p className="text-sm sm:text-base leading-relaxed line-clamp-5 sm:line-clamp-none max-h-32 sm:max-h-none overflow-y-auto text-left">
                {t.text}
              </p>
              {/* Speech bubble tail pointing down */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45"
                aria-hidden
              />
            </motion.div>
          </AnimatePresence>

          {/* Avatar row: order so selected avatar is always in the center; tail points at center */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 mt-8 sm:mt-10 relative z-10">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (active + offset + testimonials.length) % testimonials.length;
              const item = testimonials[index];
              const isSelected = offset === 0;
              return (
                <button
                  key={`${index}-${offset}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:ring-offset-[#0B0E13] flex-shrink-0 ${
                    isSelected
                      ? "w-14 h-14 sm:w-24 sm:h-24 border-2 border-white scale-110 ring-2 ring-white/30"
                      : "w-10 h-10 sm:w-20 sm:h-20 opacity-60 hover:opacity-80"
                  }`}
                  aria-label={`View testimonial by ${item.name}`}
                  aria-pressed={isSelected}
                >
                  <img
                    src={getOptimizedImageUrl(item.image)}
                    alt={`Profile of ${item.name}, satisfied Eastside Market client`}
                    className="w-full h-full rounded-full object-cover"
                    width={isSelected ? 80 : 48}
                    height={isSelected ? 80 : 48}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </button>
              );
            })}
          </div>

          <p className="text-white text-sm font-semibold mt-3 relative z-10">{t.name}</p>
        </motion.div>
      </div>
    </section>
  );
}
