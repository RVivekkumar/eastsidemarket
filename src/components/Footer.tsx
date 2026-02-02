import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/" },
  { label: "Contact", to: "/contact" },
];

const servicePages = [
  { label: "Gas Station", to: "/gas" },
  { label: "Grocery Service", to: "/grocery" },
  { label: "ATM / Bitcoin", to: "/atm" },
  { label: "Contact Us", to: "/contact" },
];

const socialLinks = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.1 },
  }),
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Footer() {
  return (
    <footer
      className="bg-[#0B0E13] text-white pt-16 sm:pt-20 lg:pt-24 pb-8 min-h-0 flex flex-col"
      role="contentinfo"
    >
      {/* CTA strip - prevent collapse on desktop */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="text-center mb-12 md:mb-16 px-4 sm:px-6 md:px-8 flex-shrink-0"
      >
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-3 flex-wrap">
          <span className="w-8 sm:w-12 h-0.5 bg-[#FF7A00]" aria-hidden />
          <h2 className="text-xl sm:text-2xl font-semibold">Ready to Visit? We&apos;re Open 24/7</h2>
          <span className="w-8 sm:w-12 h-0.5 bg-[#FF7A00]" aria-hidden />
        </div>
        <motion.p variants={itemVariants} className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Fuel, groceries, and Bitcoin ATM — all in one stop at Eastside Market on East Freeway, Houston.
        </motion.p>
      </motion.div>

      {/* Main footer grid - min-height so it doesn't collapse */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 pb-12 md:pb-16 lg:pb-20 flex-1"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-[#FF7A00] font-semibold text-sm sm:text-base">EAST SIDE MARKET</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Valero Gas Station <br />
            Your trusted partner in convenience and quality.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm font-medium pt-2">Stay tuned</p>
          <div className="flex gap-3" aria-label="Social media links">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#e86f00] transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-[#FF7A00] font-semibold text-sm sm:text-base mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-[#FF7A00] font-semibold text-sm sm:text-base mb-4">Service Pages</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {servicePages.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-[#FF7A00] font-semibold text-sm sm:text-base mb-4">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-[#FF7A00] flex-shrink-0 mt-0.5" aria-hidden />
              <span>10611 East Fwy, Houston, TX 77029</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-[#FF7A00] flex-shrink-0" aria-hidden />
              <a href="tel:+12103452000" className="hover:text-white transition-colors">(210) 345-2000</a>
            </li>
            <li className="flex gap-3 items-center">
              <Clock size={18} className="text-[#FF7A00] flex-shrink-0" aria-hidden />
              <span>Open 24 Hours</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-gray-800 pt-6 px-4 text-center text-gray-500 text-xs sm:text-sm flex-shrink-0">
        © {new Date().getFullYear()} Eastside Market. All rights reserved.
      </div>
    </footer>
  );
}
