"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Users, Mic2, Star } from "lucide-react";

const chileStats = [
  { value: "15", label: "Finales Regionales", icon: <MapPin size={32} /> },
  { value: "4", label: "Selectivos por Región", icon: <Star size={32} /> },
  { value: "1.500+", label: "Competidores", icon: <Mic2 size={32} /> },
  { value: "8.000+", label: "Asistentes", icon: <Users size={32} /> },
  { value: "1", label: "Final Nacional BDM Gold", icon: <Trophy size={32} /> },
];

export default function ImpactChile() {
  return (
    <section className="py-24 bg-transparent border-t border-bdm-dark relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4 uppercase"
          >
            Impacto en <span className="text-bdm-red">Chile</span>
          </motion.h2>
          <div className="w-20 h-1 bg-bdm-red mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            El territorio donde nació todo. Nuestro circuito local sigue siendo la base del talento que luego conquista el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {chileStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-transparent border border-bdm-dark hover:border-bdm-red p-6 text-center group transition-all duration-300"
            >
              <div className="text-bdm-red flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bebas text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
