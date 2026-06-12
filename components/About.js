"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-bdm-red translate-x-4 translate-y-4 z-0"></div>
              <img
                src="/BDM-rap.png"
                alt="Rapper performing"
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-bdm-red z-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-bdm-red z-20"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-bebas text-bdm-white mb-6 uppercase">
              Del barrio al <span className="text-bdm-red">mundo</span>
            </h2>
            <div className="w-20 h-1 bg-bdm-red mb-8"></div>

            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                Batalla de Maestros nació en los sectores populares del sur de Santiago de Chile.
              </p>
              <p>
                Con el paso de los años evolucionó desde competencias locales hacia un circuito internacional presente en más de 20 países, culminando en el campeonato mundial <strong className="text-white">BDM Deluxe</strong>.
              </p>
              <p>
                La organización desarrolla competencias, formación artística, actividades culturales y espacios de desarrollo para jóvenes talentos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
