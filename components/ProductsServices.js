"use client";

import { motion } from "framer-motion";
import { Mic, Zap, BookOpen, Users } from "lucide-react";

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

export default function ProductsServices() {
  return (
    <section id="services" className="py-24 bg-bdm-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4 uppercase"
          >
            Nuestros <span className="text-bdm-gold">Servicios</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            El ecosistema completo de BDM para desarrollar el talento y la cultura urbana desde todos los ángulos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group bg-bdm-dark/30 border border-bdm-dark hover:border-bdm-gold p-8 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-bdm-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-bdm-gold mb-6 group-hover:scale-110 transition-transform duration-300 origin-left relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-bebas text-white mb-6 relative z-10">{service.title}</h3>
              
              <ul className="space-y-3 relative z-10">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-bdm-gold before:mr-3 before:rounded-full">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
