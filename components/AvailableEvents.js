"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ticket, Eye, Users, Globe2 } from "lucide-react";

const events = [
  {
    title: "Zonal Beatbox",
    ticketPrice: "$3.000.000",
    audience: "300 - 500 personas",
    participants: "16 competidores",
    reach: "Local / Zonal",
  },
  {
    title: "Selectivo Zonal Freestyle",
    ticketPrice: "$5.000.000",
    audience: "500 - 1.000 personas",
    participants: "32 competidores",
    reach: "Local / Zonal",
  },
  {
    title: "Final Regional",
    ticketPrice: "$7.000.000",
    audience: "1.000 - 2.000 personas",
    participants: "16 campeones zonales",
    reach: "Regional",
  },
  {
    title: "Final Nacional BDM Gold",
    ticketPrice: "$9.000.000",
    audience: "3.000 - 5.000 personas",
    participants: "16 campeones regionales",
    reach: "Nacional + Intl.",
  },
  {
    title: "Final Mundial BDM Deluxe",
    ticketPrice: "$15.000.000",
    audience: "10.000+ personas",
    participants: "20 países",
    reach: "Global",
  },
];

export default function AvailableEvents() {
  return (
    <section id="events" className="py-24 bg-bdm-dark relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/sponsor_bg.png" alt="Events background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
      </div>

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
              className="p-5 flex flex-col h-full bg-bdm-black border border-bdm-dark text-white transition-all duration-300 hover:-translate-y-2 hover:bg-bdm-red hover:text-bdm-black hover:border-bdm-red group"
            >
              <h3 className="text-xl font-bebas mb-1 uppercase leading-tight">{evt.title}</h3>
              <p className="font-bold mb-4 text-lg text-bdm-red group-hover:text-bdm-black">{evt.ticketPrice}</p>

              <div className="space-y-2 mb-5 flex-grow">
                <div className="flex items-center text-xs">
                  <Ticket size={13} className="mr-2 shrink-0 text-gray-500 group-hover:text-bdm-black" />
                  <span className="text-gray-300 group-hover:text-bdm-black group-hover:font-medium">{evt.audience}</span>
                </div>
                <div className="flex items-center text-xs">
                  <Users size={13} className="mr-2 shrink-0 text-gray-500 group-hover:text-bdm-black" />
                  <span className="text-gray-300 group-hover:text-bdm-black group-hover:font-medium">{evt.participants}</span>
                </div>
                <div className="flex items-center text-xs">
                  <Globe2 size={13} className="mr-2 shrink-0 text-gray-500 group-hover:text-bdm-black" />
                  <span className="text-gray-300 group-hover:text-bdm-black group-hover:font-medium">{evt.reach}</span>
                </div>
              </div>

              <button className="w-full py-2 uppercase tracking-wider text-xs font-bold flex items-center justify-center transition-colors duration-300 border border-bdm-red text-bdm-red group-hover:bg-bdm-black group-hover:text-bdm-red hover:bg-neutral-800 hover:text-bdm-red">
                Comprar <ArrowRight size={13} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
