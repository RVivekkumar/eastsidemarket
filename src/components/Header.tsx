import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { getOptimizedImageUrl } from "../utils/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gas Station", href: "/gas" },
  { name: "Grocery Service", href: "/grocery" },
  { name: "ATM Service", href: "/atm" },
];

function getActiveName(pathname: string) {
  const item = navItems.find((i) => i.href === pathname || (i.href !== "/" && pathname.startsWith(i.href)));
  return item?.name ?? (pathname === "/" ? "Home" : "");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const active = getActiveName(location.pathname);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <NavLink to="/" className="flex-shrink-0" aria-label="Eastside Market home">
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/dc6cu8ege/image/upload/v1769680456/Group_1000005161_zwajr1.png")}
            alt="Eastside Market logo – Valero gas, grocery, and Bitcoin ATM"
            className="h-8 sm:h-10 w-auto"
            width={160}
            height={40}
            loading="eager"
          />
        </NavLink>

        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center" aria-label="Main navigation">
          {navItems.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              <NavLink
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `relative font-medium text-sm lg:text-base py-2 transition-colors ${
                    isActive ? "text-[#FF7A00]" : "text-[#0B0E13] hover:text-[#FF7A00]"
                  }`
                }
              >
                {item.name}
                {active === item.name && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#FF7A00] rounded"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            </motion.div>
          ))}
          <NavLink
            to="/contact"
            className="bg-[#FF7A00] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#e86f00] transition-all shadow-sm hover:shadow-md"
          >
            Contact Us
          </NavLink>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-[#0B0E13] hover:bg-gray-100"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-4 pb-4 pt-2 flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-3 rounded-lg font-medium transition-colors ${
                        isActive ? "text-[#FF7A00] bg-orange-50" : "text-[#0B0E13] hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center bg-[#FF7A00] text-white py-3 px-4 rounded-lg font-semibold"
              >
                Contact Us
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
