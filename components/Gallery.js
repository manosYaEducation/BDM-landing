"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
  "/gallery-4.png",
  "/gallery-5.png",
  "/gallery-6.png",
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <section id="gallery" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas text-white mb-4 uppercase"
          >
            Galería de <span className="text-bdm-red">Eventos</span>
          </motion.h2>
          <div className="w-20 h-1 bg-bdm-red mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: 0 }}
          >
            {/* Infinite scroll via CSS animation */}
            <div className="flex gap-4 animate-marquee-gallery min-w-max">
              {[...images, ...images].map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative w-56 h-40 shrink-0 overflow-hidden cursor-pointer group bg-transparent"
                  onClick={() => openLightbox(idx % images.length)}
                >
                  <div className="absolute inset-0 bg-bdm-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={src}
                    alt={`Galeria BDM ${(idx % images.length) + 1}`}
                    fill
                    sizes="224px"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-bdm-red transition-colors z-10"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-bdm-red transition-colors z-10 bg-transparent p-2"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-bdm-red transition-colors z-10 bg-transparent p-2"
            >
              <ChevronRight size={32} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightboxIndex]}
              alt={`Galeria BDM ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain border border-bdm-dark shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              {lightboxIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
