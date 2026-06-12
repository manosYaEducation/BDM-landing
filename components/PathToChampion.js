"use client";
 
import { motion } from "framer-motion";
 
const steps = [
  {
    stage: "Etapa 1",
    title: "Circuito Regional",
    image: "/BDM-regional.png",
    items: ["Batallas locales", "Clasificatorias regionales", "Formación de nuevos talentos"],
  },
  {
    stage: "Etapa 2",
    title: "BDM Gold",
    image: "/BDM-gold.png",
    items: ["Final Nacional", "Campeones regionales", "Clasificación internacional"],
  },
  {
    stage: "Etapa 3",
    title: "BDM Deluxe",
    image: "/BDM-deluxe.png",
    items: ["Campeonato Mundial", "Representantes de más de 20 países", "Reconocimiento internacional"],
  },
];
 
export default function PathToChampion() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4 uppercase"
          >
            El camino del <span className="text-bdm-red">Campeón</span>
          </motion.h2>
          <div className="w-20 h-1 bg-bdm-red mx-auto"></div>
        </div>
 
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col bg-transparent backdrop-blur-sm border border-bdm-red/30 hover:border-bdm-red/40 rounded-2xl overflow-hidden transition-all duration-300 group hover:-translate-y-2 h-full shadow-xl"
              >
                {/* Logo Container */}
                <div className="relative h-44 w-full bg-transparent flex items-center justify-center p-6 border-b border-bdm-red/30 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-h-28 max-w-full object-contain relative z-20 transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-bdm-red font-bold uppercase tracking-widest text-xs block mb-2">
                      {step.stage}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bebas text-white mb-4 tracking-wider group-hover:text-bdm-red transition-colors duration-300">
                      {step.title}
                    </h3>
                    <ul className="space-y-3">
                      {step.items.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-bdm-red inline-block shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
