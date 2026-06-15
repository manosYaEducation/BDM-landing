"use client";

import { motion } from "framer-motion";

// SVG silhouettes - representativas de cada disciplina
const silhouettes = {
  "Rap Freestyle": (
    <svg viewBox="0 0 80 100" fill="currentColor" className="w-16 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head */}
      <circle cx="40" cy="12" r="9" />
      {/* Body holding mic */}
      <path d="M28 28 Q40 25 52 28 L55 55 Q50 52 40 53 Q30 52 25 55 Z" />
      {/* Arm holding mic up */}
      <path d="M52 30 L62 18 L65 22 L55 34 Z" />
      {/* Mic */}
      <ellipse cx="66" cy="15" rx="5" ry="7" />
      {/* Other arm */}
      <path d="M28 30 L18 45 L22 46 L32 32 Z" />
      {/* Legs */}
      <path d="M34 53 L30 80 L36 80 L40 62 L44 80 L50 80 L46 53 Z" />
    </svg>
  ),
  "Beatbox": (
    <svg viewBox="0 0 80 100" fill="currentColor" className="w-16 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head */}
      <circle cx="40" cy="12" r="9" />
      {/* Open mouth detail */}
      <ellipse cx="40" cy="16" rx="4" ry="2.5" fill="rgba(0,0,0,0.4)" />
      {/* Body */}
      <path d="M28 28 Q40 25 52 28 L54 55 Q40 57 26 55 Z" />
      {/* Both arms raised to face (beatboxing pose) */}
      <path d="M28 32 L18 25 L20 21 L30 28 Z" />
      <path d="M52 32 L62 25 L60 21 L50 28 Z" />
      {/* Sound waves */}
      <path d="M12 30 Q8 35 12 40" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 26 Q2 35 8 44" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Legs */}
      <path d="M34 55 L31 80 L37 80 L40 65 L43 80 L49 80 L46 55 Z" />
    </svg>
  ),
  "Break Dance": (
    <svg viewBox="0 0 100 90" fill="currentColor" className="w-20 h-18 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Headstand / windmill pose */}
      {/* Head at bottom */}
      <circle cx="50" cy="80" r="9" />
      {/* Body inverted */}
      <path d="M42 70 Q50 67 58 70 L60 48 Q50 45 40 48 Z" />
      {/* Left leg up-right */}
      <path d="M56 50 L75 30 L78 34 L60 54 Z" />
      {/* Right leg up-left */}
      <path d="M44 50 L25 28 L22 32 L40 54 Z" />
      {/* Arms spread on floor */}
      <path d="M42 66 L15 60 L15 55 L42 61 Z" />
      <path d="M58 66 L85 60 L85 55 L58 61 Z" />
    </svg>
  ),
  "Graffiti": (
    <svg viewBox="0 0 80 100" fill="currentColor" className="w-16 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head */}
      <circle cx="35" cy="12" r="9" />
      {/* Body leaning forward */}
      <path d="M24 28 Q35 24 46 28 L50 52 Q35 55 22 52 Z" />
      {/* Arm extended holding spray can */}
      <path d="M46 32 L68 38 L67 43 L45 37 Z" />
      {/* Spray can */}
      <rect x="68" y="34" width="8" height="13" rx="2" />
      <path d="M74 33 L77 28 L79 29 L76 34 Z" />
      {/* Other arm */}
      <path d="M24 32 L14 46 L18 48 L28 35 Z" />
      {/* Legs */}
      <path d="M32 52 L28 80 L34 80 L36 65 L40 80 L46 80 L44 52 Z" />
      {/* Spray dots */}
      <circle cx="76" cy="26" r="2" opacity="0.5" />
      <circle cx="74" cy="23" r="1.5" opacity="0.3" />
      <circle cx="78" cy="24" r="1" opacity="0.4" />
    </svg>
  ),
  "DJ": (
    <svg viewBox="0 0 90 100" fill="currentColor" className="w-18 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head with headphones */}
      <circle cx="45" cy="14" r="9" />
      {/* Headphones */}
      <path d="M36 10 Q36 2 45 2 Q54 2 54 10" stroke="currentColor" strokeWidth="3.5" fill="none" />
      <rect x="33" y="9" width="6" height="8" rx="2" />
      <rect x="51" y="9" width="6" height="8" rx="2" />
      {/* Body leaning over decks */}
      <path d="M32 30 Q45 27 58 30 L58 52 Q45 55 32 52 Z" />
      {/* Arms on turntable */}
      <path d="M32 34 L14 38 L14 43 L32 39 Z" />
      <path d="M58 34 L76 38 L76 43 L58 39 Z" />
      {/* Turntable / deck surface */}
      <rect x="10" y="44" width="70" height="8" rx="1" opacity="0.6" />
      {/* Record */}
      <circle cx="28" cy="48" r="6" opacity="0.5" />
      <circle cx="28" cy="48" r="2" />
      <circle cx="62" cy="48" r="6" opacity="0.5" />
      <circle cx="62" cy="48" r="2" />
      {/* Legs */}
      <path d="M38 52 L34 80 L40 80 L45 64 L50 80 L56 80 L52 52 Z" />
    </svg>
  ),
  "Formación artística": (
    <svg viewBox="0 0 80 100" fill="currentColor" className="w-16 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head */}
      <circle cx="40" cy="12" r="9" />
      {/* Body */}
      <path d="M28 28 Q40 25 52 28 L52 55 Q40 57 28 55 Z" />
      {/* Arm raised (teaching) */}
      <path d="M52 30 L65 18 L68 22 L55 34 Z" />
      {/* Chalk/pen in hand */}
      <rect x="66" y="14" width="4" height="10" rx="1" transform="rotate(-30 66 14)" />
      {/* Other arm */}
      <path d="M28 34 L18 48 L22 50 L32 36 Z" />
      {/* Board lines (teaching) */}
      <line x1="70" y1="20" x2="78" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="70" y1="25" x2="76" y2="25" stroke="currentColor" strokeWidth="1.5" />
      {/* Legs */}
      <path d="M34 55 L30 80 L36 80 L40 65 L44 80 L50 80 L46 55 Z" />
    </svg>
  ),
  "Producción audiovisual": (
    <svg viewBox="0 0 90 100" fill="currentColor" className="w-18 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head */}
      <circle cx="38" cy="12" r="9" />
      {/* Body */}
      <path d="M26 28 Q38 25 50 28 L50 54 Q38 57 26 54 Z" />
      {/* Arms holding camera */}
      <path d="M26 34 L14 30 L14 35 L26 39 Z" />
      <path d="M50 32 L60 28 L60 33 L50 37 Z" />
      {/* Camera body */}
      <rect x="56" y="24" width="22" height="16" rx="2" />
      {/* Lens */}
      <circle cx="67" cy="32" r="6" opacity="0.7" />
      <circle cx="67" cy="32" r="3.5" opacity="0.4" />
      {/* Viewfinder */}
      <rect x="72" y="24" width="6" height="5" rx="1" opacity="0.8" />
      {/* Record light */}
      <circle cx="60" cy="27" r="2" opacity="0.9" />
      {/* Legs */}
      <path d="M32 54 L28 80 L34 80 L38 65 L42 80 L48 80 L44 54 Z" />
    </svg>
  ),
  "Turismo cultural": (
    <svg viewBox="0 0 80 100" fill="currentColor" className="w-16 h-20 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
      {/* Head */}
      <circle cx="40" cy="12" r="9" />
      {/* Hat */}
      <ellipse cx="40" cy="5" rx="12" ry="3" />
      <rect x="33" y="2" width="14" height="5" rx="1" />
      {/* Body with backpack */}
      <path d="M28 28 Q40 25 52 28 L52 54 Q40 57 28 54 Z" />
      {/* Backpack */}
      <rect x="42" y="26" width="14" height="22" rx="3" opacity="0.8" />
      <rect x="44" y="30" width="10" height="6" rx="1" opacity="0.6" />
      {/* Strap */}
      <path d="M42 27 Q40 30 40 35" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Arm with map */}
      <path d="M28 32 L16 28 L16 33 L28 37 Z" />
      {/* Map */}
      <rect x="10" y="24" width="10" height="10" rx="1" opacity="0.7" />
      <line x1="12" y1="28" x2="18" y2="28" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
      <line x1="12" y1="31" x2="16" y2="31" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
      {/* Legs walking */}
      <path d="M34 54 L28 80 L34 80 L40 64 Z" />
      <path d="M46 54 L52 80 L46 80 L40 64 Z" />
    </svg>
  ),
};

const items = [
  "Rap Freestyle",
  "Beatbox",
  "Break Dance",
  "Graffiti",
  "DJ",
  "Formación artística",
  "Producción audiovisual",
  "Turismo cultural",
];

export default function CulturalExperience() {
  return (
    <section className="py-24 bg-transparent border-t border-bdm-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:pt-4">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bebas text-white mb-6 uppercase leading-none"
            >
              Experiencia <br />
              <span className="text-bdm-red">Cultural</span>
            </motion.h2>
            <div className="w-16 h-1 bg-bdm-red mb-8"></div>
            <p className="text-gray-400">
              BDM es un ecosistema 360º que abarca todas las disciplinas de la cultura Hip Hop y urbana, impulsando no solo competencias, sino toda una industria alrededor del talento.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="aspect-square bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark flex flex-col items-center justify-center p-4 text-center hover:border-bdm-red hover:bg-bdm-red hover:text-bdm-black text-gray-300 transition-all duration-300 group cursor-default overflow-hidden"
                >
                  <span className="font-bebas tracking-wider text-lg uppercase mb-2 leading-tight">{item}</span>
                  <div className="text-gray-500 group-hover:text-bdm-black transition-colors duration-300">
                    {silhouettes[item]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
