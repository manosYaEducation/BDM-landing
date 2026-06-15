"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Briefcase, Star, Users, HeartHandshake, Music, Flag, Globe, Mic, Zap, BookOpen } from "lucide-react";

const services = [
  {
    title: "Competencias",
    icon: <Mic size={40} />,
    items: ["Freestyle", "Beatbox", "Graffiti", "Beats"],
  },
  {
    title: "Activaciones",
    icon: <Zap size={40} />,
    items: ["Intervenciones culturales", "Recuperación de espacios", "Shows artísticos"],
  },
  {
    title: "Formación",
    icon: <BookOpen size={40} />,
    items: ["Cursos", "Talleres", "Seminarios", "Congresos"],
  },
  {
    title: "Desarrollo Social",
    icon: <Users size={40} />,
    items: ["Liderazgo", "Organizaciones sociales", "Investigación", "Proyectos comunitarios"],
  },
];

const values = [
  { name: "Respeto", icon: <Handshake size={28} /> },
  { name: "Trabajo", icon: <Briefcase size={28} /> },
  { name: "Talento", icon: <Star size={28} /> },
  { name: "Inclusión", icon: <HeartHandshake size={28} /> },
  { name: "Diversidad", icon: <Users size={28} /> },
  { name: "Cultura", icon: <Music size={28} /> },
  { name: "Liderazgo", icon: <Flag size={28} /> },
  { name: "Desarrollo Social", icon: <Globe size={28} /> },
];

export default function ServicesValues() {
  const [activeTab, setActiveTab] = useState("values");

  return (
    <section id="services" className="py-24 bg-transparent border-t border-bdm-dark relative">
      <div className="container mx-auto px-6">

        {/* Mission / Vision - ABOVE title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-bdm-dark bg-bdm-black/20 backdrop-blur-sm hover:border-bdm-red transition-colors duration-500"
          >
            <h3 className="text-3xl font-bebas text-bdm-red mb-3">Nuestra Misión</h3>
            <p className="text-gray-400 leading-relaxed">
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
            <h3 className="text-3xl font-bebas text-bdm-red mb-3">Nuestra Visión</h3>
            <p className="text-gray-400 leading-relaxed">
              Consolidar una red internacional de desarrollo cultural basada en el talento, el respeto, la diversidad y la excelencia.
            </p>
          </motion.div>
        </div>

        {/* Header + Tabs */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bebas text-white mb-6"
          >
            LO QUE <span className="text-bdm-red">SOMOS</span>
          </motion.h2>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("values")}
              className={`px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
                activeTab === "values"
                  ? "bg-bdm-red text-bdm-black"
                  : "bg-bdm-black border border-bdm-red text-bdm-red hover:bg-bdm-red hover:text-bdm-black"
              }`}
            >
              Nuestros Valores
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
                activeTab === "services"
                  ? "bg-bdm-red text-bdm-black"
                  : "bg-bdm-black border border-bdm-red text-bdm-red hover:bg-bdm-red hover:text-bdm-black"
              }`}
            >
              Nuestros Servicios
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark hover:border-bdm-red p-8 transition-colors duration-300 relative overflow-hidden"
                  >
                    <div className="text-bdm-red mb-5 group-hover:scale-110 transition-transform duration-300 origin-left relative z-10">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bebas text-white mb-5 relative z-10">{service.title}</h3>
                    <ul className="space-y-2 relative z-10">
                      {service.items.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-bdm-red before:mr-3 before:rounded-full before:shrink-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "values" && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-5"
              >
                {values.map((val, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.07 }}
                    className="flex flex-col items-center justify-center p-6 bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark/50 hover:border-bdm-red hover:bg-bdm-red hover:text-bdm-black text-gray-300 transition-all duration-300 group"
                  >
                    <div className="mb-3 text-bdm-red group-hover:text-bdm-black transition-colors duration-300">
                      {val.icon}
                    </div>
                    <span className="font-bebas tracking-wider text-xl uppercase text-center">{val.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}
