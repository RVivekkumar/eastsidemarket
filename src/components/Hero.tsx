import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";

type HeroProps = {
  src: string;
  alt?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

const defaultContent = {
  badge: "Your Premier 24/7 Convenience",
  title: "Destination Featuring Top Tier Fuel, Fresh Groceries, And Cutting-Edge Bitcoin ATM Services",
  description: "Fresh groceries, premium fuel, and secure Bitcoin ATM services — all in one modern location.",
  primaryCta: { label: "Explore Service", to: "/gas" },
  secondaryCta: { label: "Get Direction", to: "/contact" },
};

const Hero = ({
  src,
  alt = "Eastside Market – Valero gas station convenience store with fuel pumps and services",
  badge = defaultContent.badge,
  title = defaultContent.title,
  description = defaultContent.description,
  primaryCta = defaultContent.primaryCta,
  secondaryCta = defaultContent.secondaryCta,
}: HeroProps) => {
  const optimizedSrc = getOptimizedImageUrl(src);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "clamp(320px, 50vh, 520px)",
      }}
    >
      <div className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[520px] flex flex-col">
        <img
          src={optimizedSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-left lg:object-left-center"
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E13]/80 via-[#0B0E13]/50 to-transparent" />

        <div className="relative flex-1 flex items-center min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[520px]">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-14 md:py-16">
            <div className="max-w-xl md:max-w-lg lg:max-w-[520px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative py-6 border-t border-l border-[#FF7A00] pl-5 pt-5 sm:pl-6 sm:pt-6 rounded-sm"
              >
                <span className="absolute left-0 bottom-0 h-0.5 w-24 sm:w-32 bg-[#FF7A00]" />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-[#FF7A00] text-xs sm:text-sm font-semibold mb-2"
                >
                  {badge}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] font-bold leading-tight mb-3"
                >
                  {title}
                </motion.h1>

                {description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="text-gray-300 text-sm sm:text-base mb-5 max-w-md"
                  >
                    {description}
                  </motion.p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex flex-wrap items-center gap-3 sm:gap-4"
                >
                  <Link
                    to={primaryCta.to}
                    className="bg-[#FF7A00] text-white text-sm font-semibold px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full hover:bg-[#e86f00] transition-all shadow-lg hover:shadow-xl"
                  >
                    {primaryCta.label}
                  </Link>
                  <Link
                    to={secondaryCta.to}
                    className="border border-white text-white text-sm px-4 py-2.5 sm:px-5 rounded-full hover:bg-white hover:text-[#0B0E13] transition-all"
                  >
                    {secondaryCta.label}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
