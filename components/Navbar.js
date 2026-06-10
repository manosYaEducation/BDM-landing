"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Historia", href: "#history" },
    { name: "Servicios", href: "#services" },
    { name: "Impacto", href: "#global-impact" },
    { name: "Eventos", href: "#events" },
    { name: "Galería", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bdm-black/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-3xl font-bebas tracking-wider text-bdm-gold">
          BDM <span className="text-bdm-white">MAESTROS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest font-semibold hover:text-bdm-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-bdm-gold text-bdm-gold hover:bg-bdm-gold hover:text-bdm-black transition-colors duration-300 uppercase text-sm font-semibold"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-bdm-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-bdm-black border-t border-bdm-dark md:hidden flex flex-col"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-4 border-b border-bdm-dark uppercase tracking-widest text-sm text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 bg-bdm-gold text-bdm-black uppercase tracking-widest text-sm text-center font-bold"
          >
            Contacto
          </a>
        </motion.nav>
      )}
    </header>
  );
}
