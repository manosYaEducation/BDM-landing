"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.png"
          alt="BDM Freestyle Battle"
          className="w-full h-full object-cover opacity-60 scale-105 transform hover:scale-100 transition-transform duration-10000"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bdm-black/60 via-bdm-black/40 to-bdm-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-bdm-red uppercase tracking-[0.3em] font-semibold mb-4 text-sm md:text-base"
        >
          La red mundial de freestyle, arte urbano y desarrollo cultural nacida en Chile.
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-bebas tracking-wider mb-6 drop-shadow-2xl"
        >
          BATALLA DE <br />
          <span className="text-bdm-red">MAESTROS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Más de 14 años impulsando talentos, conectando comunidades y llevando el freestyle desde los barrios hasta escenarios internacionales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-bdm-red text-bdm-black px-8 py-4 uppercase font-bold tracking-widest hover:bg-white transition-colors duration-300"
          >
            Solicitar Información
          </a>
          <a
            href="#events"
            className="border border-white text-white px-8 py-4 uppercase font-bold tracking-widest hover:bg-white hover:text-bdm-black transition-colors duration-300"
          >
            Ver Eventos
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-bdm-red to-transparent" />
      </motion.div>
    </section>
  );
}
