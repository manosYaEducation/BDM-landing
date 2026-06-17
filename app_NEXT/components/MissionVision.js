"use client";

import { motion } from "framer-motion";
import { Handshake, Briefcase, Star, Users, HeartHandshake, Music, Flag, Globe } from "lucide-react";

const values = [
  { name: "Respeto", icon: <Handshake size={24} /> },
  { name: "Trabajo", icon: <Briefcase size={24} /> },
  { name: "Talento", icon: <Star size={24} /> },
  { name: "Inclusión", icon: <HeartHandshake size={24} /> },
  { name: "Diversidad", icon: <Users size={24} /> },
  { name: "Cultura", icon: <Music size={24} /> },
  { name: "Liderazgo", icon: <Flag size={24} /> },
  { name: "Desarrollo Social", icon: <Globe size={24} /> },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-transparent relative border-t border-bdm-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-bdm-dark bg-bdm-black/20 backdrop-blur-sm hover:border-bdm-red transition-colors duration-500"
          >
            <h3 className="text-4xl font-bebas text-bdm-red mb-4">Nuestra Misión</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Crear oportunidades para artistas y jóvenes de cualquier origen mediante herramientas artísticas, educativas y de networking.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-bdm-dark bg-bdm-black/20 backdrop-blur-sm hover:border-bdm-red transition-colors duration-500"
          >
            <h3 className="text-4xl font-bebas text-bdm-red mb-4">Nuestra Visión</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Consolidar una red internacional de desarrollo cultural basada en el talento, el respeto, la diversidad y la excelencia.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bebas text-white tracking-wider">Nuestros Valores</h3>
          <div className="w-16 h-1 bg-bdm-red mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark/50 hover:border-bdm-red hover:bg-bdm-red hover:text-bdm-black text-gray-300 transition-all duration-300 group"
            >
              <div className="mb-4 text-bdm-red group-hover:text-bdm-black transition-colors duration-300">
                {val.icon}
              </div>
              <span className="font-bebas tracking-wider text-xl uppercase">{val.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
