"use client";

import { motion } from "framer-motion";

const logos = [
  "MUNICIPALIDAD",
  "SPONSOR BRAND 1",
  "SPONSOR BRAND 2",
  "INSTITUCIÓN CULTURAL",
  "PRODUCCIÓN",
  "MEDIA PARTNER"
];

export default function TrustCarousel() {
  // Duplicate array for infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-bdm-gold overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bebas text-bdm-black uppercase">Confían en BDM</h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center mx-12">
              <span className="font-bebas text-3xl md:text-4xl text-bdm-black/60 tracking-wider hover:text-bdm-black transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
