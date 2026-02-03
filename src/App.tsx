import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Grocery from "./pages/Grocery";
import GasStationPage from "./pages/gasstation";
import ContactPage from "./pages/contact";
import ATMService from "./pages/ATMservice";
import About from "./pages/about";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-900 min-h-screen flex flex-col overflow-x-hidden">

        {/* Common Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/gas" element={<GasStationPage />} />
            <Route path="/atm" element={<ATMService />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Common Footer */}
        <Footer />
        {isVisible && (
          <div className="fixed bottom-24 right-5 z-[100]">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 text-white bg-[#FF7A00] rounded-full shadow-lg hover:bg-[#e86f00] transition-colors"
              aria-label="Scroll to top"
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
              }}
            >
              <ArrowUp className="text-white shrink-0" color="white" size={22} strokeWidth={2.5} aria-hidden />
            </motion.button>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
