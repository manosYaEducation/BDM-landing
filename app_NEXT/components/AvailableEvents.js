"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Ticket, Users, Globe2 } from "lucide-react";

const events = [
  {
    title: "Zonal Beatbox",
    ticketPrice: "$3.000.000",
    audience: "300 - 500 personas",
    participants: "16 competidores",
    reach: "Local / Zonal",
    description: "El Zonal Beatbox es la competencia local donde los mejores beatboxers de la zona se enfrentan en batallas de ritmo y sonido vocal. Un evento ideal para instituciones que buscan iniciar su circuito de talento urbano con una propuesta innovadora y de alto impacto juvenil.",
  },
  {
    title: "Selectivo Zonal Freestyle",
    ticketPrice: "$5.000.000",
    audience: "500 - 1.000 personas",
    participants: "32 competidores",
    reach: "Local / Zonal",
    description: "El Selectivo Zonal Freestyle reúne a los mejores freestylers de la región en una competencia de rap improvisado. Con 32 competidores y un formato eliminatorio, es el semillero perfecto para descubrir nuevas voces y talentos del freestyle local.",
  },
  {
    title: "Final Regional",
    ticketPrice: "$7.000.000",
    audience: "1.000 - 2.000 personas",
    participants: "16 campeones zonales",
    reach: "Regional",
    description: "La Final Regional es la instancia decisiva donde los campeones zonales compiten por el título regional. Un evento de gran convocatoria que reúne a los mejores talentos de la zona en una jornada de alto nivel competitivo y artístico.",
  },
  {
    title: "Final Nacional BDM Gold",
    ticketPrice: "$9.000.000",
    audience: "3.000 - 5.000 personas",
    participants: "16 campeones regionales",
    reach: "Nacional + Intl.",
    description: "La Final Nacional BDM Gold es la cumbre del circuito nacional. Los 16 campeones regionales se enfrentan en una producción de primer nivel con alcance internacional. Transmisión en vivo, jurado de elite y premiación especial para el campeón nacional.",
  },
  {
    title: "Final Mundial BDM Deluxe",
    ticketPrice: "$15.000.000",
    audience: "10.000+ personas",
    participants: "20 países",
    reach: "Global",
    description: "La Final Mundial BDM Deluxe es el evento más importante del freestyle global. Representantes de más de 20 países compiten por el título mundial en un espectáculo de clase mundial con producción internacional, transmisión global y un impacto mediático sin precedentes.",
  },
];

export default function AvailableEvents() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (idx) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  return (
    <section id="events" className="py-24 bg-transparent border-t border-bdm-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4 uppercase"
          >
            Eventos <span className="text-bdm-red">Disponibles</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Adquiere los derechos de los eventos oficiales de la marca BDM para tu ciudad o institución.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark text-white transition-all duration-300 rounded-2xl h-full shadow-xl min-h-[340px] hover:-translate-y-2 hover:border-bdm-red"
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
                  className="w-full h-full flex flex-col p-5"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-xl font-bebas mb-1 uppercase leading-tight">{evt.title}</h3>
                  <p className="font-bold mb-4 text-lg text-bdm-red">{evt.ticketPrice}</p>
                  <p className="text-xs text-gray-400 mb-4 italic">* Conversión de precio ajustable para cada país</p>

                  <div className="space-y-2 mb-5 flex-grow">
                    <div className="flex items-center text-xs">
                      <Ticket size={13} className="mr-2 shrink-0 text-gray-500" />
                      <span className="text-gray-300">{evt.audience}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Users size={13} className="mr-2 shrink-0 text-gray-500" />
                      <span className="text-gray-300">{evt.participants}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Globe2 size={13} className="mr-2 shrink-0 text-gray-500" />
                      <span className="text-gray-300">{evt.reach}</span>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 p-5 flex flex-col items-center justify-center bg-bdm-black/30 rounded-2xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-lg font-bebas text-white mb-3 uppercase text-center">{evt.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed text-center mb-4 flex-grow overflow-y-auto">
                    {evt.description}
                  </p>
                  <a
                    href="#contact"
                    className="w-full py-2 text-center text-xs font-bold uppercase tracking-wider bg-bdm-red text-bdm-black hover:bg-white transition-colors duration-300 rounded"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleFlip(idx)}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-bdm-red bg-bdm-black border-t border-bdm-red/30 hover:bg-bdm-red hover:text-white transition-colors duration-300 rounded-b-2xl flex items-center justify-center"
              >
                {flippedIndex === idx ? "Ver precio" : "Ver detalles"} <ArrowRight size={13} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
