"use client";

import { motion } from "framer-motion";
import { MapPin, Flag, Globe } from "lucide-react";

const steps = [
  {
    stage: "Etapa 1",
    title: "Circuito Regional",
    icon: <MapPin size={32} />,
    items: ["Batallas locales", "Clasificatorias regionales", "Formación de nuevos talentos"],
  },
  {
    stage: "Etapa 2",
    title: "BDM Gold",
    icon: <Flag size={32} />,
    items: ["Final Nacional", "Campeones regionales", "Clasificación internacional"],
  },
  {
    stage: "Etapa 3",
    title: "BDM Deluxe",
    icon: <Globe size={32} />,
    items: ["Campeonato Mundial", "Representantes de más de 20 países", "Reconocimiento internacional"],
  },
];

export default function PathToChampion() {
  return (
    <section className="py-24 bg-bdm-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4 uppercase"
          >
            El camino del <span className="text-bdm-gold">Campeón</span>
          </motion.h2>
          <div className="w-20 h-1 bg-bdm-gold mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[16%] w-[68%] h-1 bg-bdm-black z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-bdm-gold w-full origin-left"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-bdm-black border-4 border-bdm-gold flex items-center justify-center text-bdm-gold mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  {step.icon}
                </div>
                <h4 className="text-bdm-gold uppercase tracking-widest text-sm font-bold mb-2">{step.stage}</h4>
                <h3 className="text-3xl font-bebas text-white mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
