import { motion } from "framer-motion";
import { getOptimizedImageUrl } from "../utils/image";
import { BadgeQuestionMark, Mail, MapPinned, Phone } from "lucide-react";

const CONTACT_IMG = "https://res.cloudinary.com/dc6cu8ege/image/upload/v1769586315/Group_1000006510_z34it2.png";

const Contact = () => {
  return (
    <>
      <section className="w-full bg-white py-10 md:py-14 px-4 sm:px-6 md:px-8 overflow-hidden" aria-labelledby="contact-info-heading">
        <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 id="contact-info-heading" className="sr-only">Contact information</h2>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white flex-shrink-0" aria-hidden>
                <MapPinned/>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg tracking-tight text-gray-900">Address</h4>
                <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                  10611 East FWY,<br />Houston, TX 77029
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white flex-shrink-0" aria-hidden>
                <Phone/>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg tracking-tight text-gray-900">Phone</h4>
                <a href="tel:+12103452000" className="text-gray-500 text-sm sm:text-[15px] leading-relaxed hover:text-[#FF7A00] transition-colors">
                  (210) 345-2000
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white flex-shrink-0" aria-hidden>
                <Mail/>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg tracking-tight text-gray-900">Email</h4>
                <a href="mailto:Office.Alfoc@gmail.com" className="text-gray-500 text-sm sm:text-[15px] leading-relaxed hover:text-[#FF7A00] transition-colors">
                  Office.Alfoc@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white flex-shrink-0" aria-hidden>
                <BadgeQuestionMark/>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg tracking-tight text-gray-900">Have Questions?</h4>
                <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                  Discover more by visiting us or joining our community
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[280px] sm:h-[320px] lg:h-full min-h-[280px] rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <iframe
              title="Eastside Market location on Google Maps – Houston TX"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=10611+East+Fwy+Houston+TX+77029&output=embed"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl sm:rounded-[32px] overflow-hidden">
              <img
                src={getOptimizedImageUrl(CONTACT_IMG)}
                alt="Eastside Market storefront and contact – visit us in Houston"
                className="w-8/12 object-cover object-center"
                loading="lazy"
                width={600}
                height={460}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 max-w-lg"
          >
            <div className="bg-white rounded-2xl sm:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10">
              <h2 id="contact-form-heading" className="text-xl font-semibold mb-6 text-[#0B0E13]">Send us a message</h2>
              <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-shadow"
                  placeholder="Your name"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-shadow"
                  placeholder="Email address"
                  aria-label="Email address"
                />
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-shadow"
                  placeholder="Phone number"
                  aria-label="Phone number"
                />
                <textarea
                  rows={4}
                  placeholder="Type your message"
                  className="w-full border border-gray-300 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-[15px] text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] transition-shadow"
                  aria-label="Your message"
                />
                <button
                  type="submit"
                  className="bg-[#0B0E13] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  Send a message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
