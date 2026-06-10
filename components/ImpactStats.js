"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, MapPin, Users, Mic2, Star } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2, label, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        const nextCount = Math.min(end, Math.floor((progress / (duration * 1000)) * end));
        setCount(nextCount);
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="text-3xl md:text-4xl font-bebas text-bdm-gold mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
        {prefix}{count}{suffix}
      </h4>
      <p className="text-gray-400 uppercase tracking-widest text-xs md:text-sm font-semibold text-center">{label}</p>
    </div>
  );
};

export default function ImpactStats() {
  const [activeTab, setActiveTab] = useState("global");

  const globalStats = [
    { end: 250, label: "Eventos Reg.", suffix: "+" },
    { end: 500, label: "Ciudades", suffix: "+" },
    { end: 100, label: "Participantes", suffix: "k" },
    { end: 27, label: "Campeones Nac.", suffix: "" },
    { end: 4, label: "Continentes", suffix: "" },
    { end: 1, label: "Final Mundial", suffix: "" },
    { end: 151, label: "Millones Views", suffix: "M" },
  ];

  const chileStats = [
    { end: 15, label: "Finales Regionales", suffix: "", icon: <MapPin size={24} /> },
    { end: 4, label: "Selectivos por Reg.", suffix: "", icon: <Star size={24} /> },
    { end: 1500, label: "Competidores", suffix: "+", icon: <Mic2 size={24} /> },
    { end: 8000, label: "Asistentes", suffix: "+", icon: <Users size={24} /> },
    { end: 1, label: "Final Nacional", suffix: "", icon: <Trophy size={24} /> },
  ];

  return (
    <section id="global-impact" className="py-24 bg-bdm-black border-y border-bdm-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-bdm-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bebas text-white mb-6"
          >
            NUESTRO <span className="text-bdm-gold">ALCANCE</span>
          </motion.h2>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("global")}
              className={`px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
                activeTab === "global"
                  ? "bg-bdm-gold text-bdm-black"
                  : "border border-bdm-gold text-bdm-gold hover:bg-bdm-gold/20"
              }`}
            >
              Impacto Global
            </button>
            <button
              onClick={() => setActiveTab("chile")}
              className={`px-6 py-2 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
                activeTab === "chile"
                  ? "bg-bdm-gold text-bdm-black"
                  : "border border-bdm-gold text-bdm-gold hover:bg-bdm-gold/20"
              }`}
            >
              Impacto en Chile
            </button>
          </div>
        </div>

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeTab === "global" && (
              <motion.div
                key="global"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
              >
                {globalStats.map((stat, idx) => (
                  <AnimatedCounter key={`global-${idx}`} end={stat.end} label={stat.label} suffix={stat.suffix} />
                ))}
              </motion.div>
            )}

            {activeTab === "chile" && (
              <motion.div
                key="chile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-6"
              >
                {chileStats.map((stat, idx) => (
                  <div key={`chile-${idx}`} className="bg-bdm-dark/40 border border-bdm-dark hover:border-bdm-gold p-4 text-center group transition-all duration-300 flex flex-col items-center">
                    <div className="text-bdm-gold flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <AnimatedCounter end={stat.end} label={stat.label} suffix={stat.suffix} />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
