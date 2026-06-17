"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    stage: "Etapa 1",
    title: "Circuito Regional",
    image: "/BDM-regional.png",
    items: ["Batallas locales", "Clasificatorias regionales", "Formación de nuevos talentos"],
    description: "El Circuito Regional es la puerta de entrada al mundo BDM. Aquí los talentos locales compiten en batallas de freestyle y beatbox, clasificando a instancias superiores. Es la base de la pirámide competitiva donde se forjan los futuros campeones.",
  },
  {
    stage: "Etapa 2",
    title: "BDM Gold",
    image: "/BDM-gold.png",
    items: ["Final Nacional", "Campeones regionales", "Clasificación internacional"],
    description: "BDM Gold reúne a los mejores campeones regionales en una final nacional de alto nivel. Los ganadores obtienen su pase al circuito internacional, representando a su país en el escenario global de BDM.",
  },
  {
    stage: "Etapa 3",
    title: "BDM Deluxe",
    image: "/BDM-deluxe.png",
    items: ["Campeonato Mundial", "Representantes de más de 20 países", "Reconocimiento internacional"],
    description: "BDM Deluxe es la cumbre del campeonato. Los mejores competidores de más de 20 países se enfrentan en una final mundial que otorga reconocimiento internacional y consagra al campeón absoluto de BDM.",
  },
];

export default function PathToChampion() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (idx) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bdm-red/5 blur-[150px] rounded-full pointer-events-none"></div>
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
                className="flex flex-col bg-bdm-black/20 backdrop-blur-sm border border-bdm-red/30 hover:border-bdm-red/40 rounded-2xl transition-all duration-300 group hover:-translate-y-2 h-full shadow-xl"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative flex-grow"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s ease-in-out",
                    transform: flippedIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front Face */}
                  <div
                    className="w-full h-full flex flex-col"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative h-44 w-full bg-transparent flex items-center justify-center p-6 border-b border-bdm-red/30 overflow-hidden rounded-t-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="max-h-28 max-w-full object-contain relative z-20 transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
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
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-transparent rounded-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-xl font-bebas text-white mb-4 uppercase tracking-wider">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleFlip(idx)}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-bdm-red bg-bdm-black border-t border-bdm-red/30 hover:bg-bdm-red hover:text-white transition-colors duration-300 rounded-b-2xl"
                >
                  {flippedIndex === idx ? "Ver menos" : "Ver más"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
