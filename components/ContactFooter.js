"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // silent fallback — email notification is best-effort
    }
  };

  return (
    <section id="contact">
      {/* Final CTA */}
      <div className="bg-bdm-black py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bebas text-bdm-red mb-4 uppercase"
          >
            ¿Quieres llevar Batalla de Maestros a tu comuna o institución?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-bdm-red/80 max-w-xl mx-auto mb-8 text-sm"
          >
            Organizamos experiencias culturales, competencias y programas de desarrollo artístico con impacto real en las comunidades.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-bdm-red text-bdm-black px-6 py-3 uppercase font-bold tracking-widest text-xs hover:bg-white hover:text-bdm-black transition-colors duration-300">
              Solicitar Cotización
            </button>
            <button className="bg-bdm-red text-bdm-black px-6 py-3 uppercase font-bold tracking-widest text-xs hover:bg-white hover:text-bdm-black transition-colors duration-300">
              Contactar Equipo BDM
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-transparent pt-20 pb-10 border-t border-bdm-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Col */}
            <div className="lg:col-span-1 bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark/50 p-6 rounded-lg">
              <h2 className="text-4xl font-bebas tracking-wider text-bdm-red mb-4">
                BDM <span className="text-bdm-white">MAESTROS</span>
              </h2>
              <p className="text-white text-sm mb-6">
                La red mundial de freestyle, arte urbano y desarrollo cultural nacida en Chile.
              </p>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-bebas text-white mb-6 uppercase tracking-widest">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-400 text-sm hover:text-bdm-red transition-colors">
                  <Mail className="mr-3 text-bdm-red shrink-0" size={18} />
                  <span>contacto@bdmfreestyle.com</span>
                </li>
                <li className="flex items-start text-gray-400 text-sm hover:text-bdm-red transition-colors">
                  <MapPin className="mr-3 text-bdm-red shrink-0" size={18} />
                  <span>Santiago, Chile</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1 bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-bebas text-white mb-6 uppercase tracking-widest">Enlaces</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 text-sm hover:text-bdm-red transition-colors">Inicio</a></li>
                <li><a href="#history" className="text-gray-400 text-sm hover:text-bdm-red transition-colors">Nuestra Historia</a></li>
                <li><a href="#services" className="text-gray-400 text-sm hover:text-bdm-red transition-colors">Servicios</a></li>
                <li><a href="#events" className="text-gray-400 text-sm hover:text-bdm-red transition-colors">Eventos</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1 bg-bdm-black/20 backdrop-blur-sm border border-bdm-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-bebas text-white mb-6 uppercase tracking-widest">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Únete a nuestra red para recibir novedades y eventos.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-transparent border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-bdm-red transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-bdm-red text-bdm-black font-bold uppercase tracking-widest text-sm py-3 hover:bg-bdm-black hover:text-white transition-colors"
                >
                  Suscribirse
                </button>
              </form>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-start gap-2 text-sm text-green-400"
                >
                  <CheckCircle size={16} className="shrink-0 mt-0.5" />
                  <span>Te haz registrado exitosamente para las novedades de BDM</span>
                </motion.div>
              )}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Batalla de Maestros (BDM). Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-bdm-red transition-colors">bdmfreestyle.com</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
