"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2, label, suffix = "" }) => {
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
    <div className="flex flex-col items-center p-6">
      <h4 className="text-5xl md:text-7xl font-bebas text-bdm-red mb-2 drop-shadow-[0_0_15px_rgba(168,28,36,0.4)]">
        {count}{suffix}
      </h4>
      <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-semibold text-center">{label}</p>
    </div>
  );
};

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-bdm-black border-y border-bdm-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-bdm-red/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4"
          >
            NUESTRO <span className="text-bdm-red">ALCANCE</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Números que respaldan el impacto de BDM en la cultura y el entretenimiento a nivel global.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <AnimatedCounter end={250} label="Eventos Reg." suffix="+" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <AnimatedCounter end={500} label="Ciudades" suffix="+" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <AnimatedCounter end={100} label="Participantes" suffix="k" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <AnimatedCounter end={27} label="Campeones Nac." />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <AnimatedCounter end={4} label="Continentes" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <AnimatedCounter end={1} label="Final Mundial" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
            <AnimatedCounter end={151} label="Millones Views" suffix="M" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
