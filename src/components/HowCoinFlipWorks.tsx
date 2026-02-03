import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Group3 from "../assets/Landing_Page1.png";

const steps = [
  {
    id: "01",
    color: "bg-blue-600",
    buttonColor: "#2563eb",
    title: "Locate the CoinFlip ATM",
    desc: "Find the CoinFlip ATM inside Eastside Market (Valero), 10581 East FWY, Houston TX.",
    action: "Get Direction",
    to: "/contact",
  },
  {
    id: "02",
    color: "bg-[#FF7A00]",
    buttonColor: "#FF7A00",
    title: "Select your cryptocurrency",
    desc: "Choose from Bitcoin, Ethereum or other popular cryptocurrencies right from the ATM.",
    action: "Learn more",
    to: "/atm",
  },
  {
    id: "03",
    color: "bg-green-600",
    buttonColor: "#16a34a",
    title: "Verify your phone number",
    desc: "Enter your phone number to receive a quick verification code for security.",
    action: "Get help",
    to: "/contact",
  },
  {
    id: "04",
    color: "bg-purple-600",
    buttonColor: "#9333ea",
    title: "Scan your wallet QR code",
    desc: "Use your crypto wallet app to scan the QR code displayed on the ATM.",
    action: "Learn more",
    to: "/atm",
  },
  {
    id: "05",
    color: "bg-green-700",
    buttonColor: "#15803d",
    title: "Insert cash & receive Bitcoin",
    desc: "Insert your cash — Bitcoin is delivered to your wallet within minutes.",
    action: "Get Direction",
    to: "/contact",
  },
];

const HowCoinFlipWorks = () => {
  return (
    <section className="bg-[#FAFAFA] py-14 md:py-20 lg:py-24 font-poppins relative overflow-hidden" aria-labelledby="how-coinflip-heading">
          <div className="relative text-center mb-14 sm:mb-20">

{/* Left background image */}
<div
  className="absolute -left-28 top-1/2 -translate-y-1/2 
             w-48 h-48 opacity-80 bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${Group3})` }}
  aria-hidden
/>

{/* Right background image */}
<div
  className="absolute right-20 top-1/2 -translate-y-1/2 
             w-48 h-48 opacity-80 bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${Group3})` }}
  aria-hidden
/>

<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <span className="text-[#FF7A00] text-sm font-semibold tracking-wide">
    CoinFlip works
  </span>

  <h2
    id="how-coinflip-heading"
    className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#0B0E13] mt-2"
  >
    How CoinFlip works
  </h2>

  <p className="mt-3 text-gray-500 text-sm sm:text-[15px] max-w-xl mx-auto">
    Get your crypto in just 5 simple steps. It&apos;s as easy as using a regular ATM.
    Simple, fast and secure.
  </p>
</motion.div>
</div>


      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:26px_26px] opacity-40" aria-hidden />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-[#FF7A00] text-sm font-semibold tracking-wide">CoinFlip works</span>
          <h2 id="how-coinflip-heading" className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#0B0E13] mt-2">
            How CoinFlip works
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-[15px] max-w-xl mx-auto">
            Get your crypto in just 5 simple steps. It&apos;s as easy as using a regular ATM. Simple, fast and secure.
          </p>
        </motion.div> */}

        <div className="relative">
          <div className="absolute left-6 sm:left-[26px] top-0 bottom-0 w-px bg-gray-300" aria-hidden />
          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8"
              >
                <div
                  className={`w-12 h-12 sm:w-[52px] sm:h-[52px] ${step.color} text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0`}
                  aria-hidden
                >
                  {step.id}
                </div>
                <div className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 w-full shadow-sm flex-1 min-w-0 hover:shadow-md transition-shadow">
                  <h4 className="text-base font-medium text-[#0B0E13] mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  {step.action && step.to && (
                    <Link
                      to={step.to}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 hover:brightness-110"
                      style={{ backgroundColor: step.buttonColor }}
                    >
                      {step.action}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCoinFlipWorks;
