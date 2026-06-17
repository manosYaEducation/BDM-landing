import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesValues from "@/components/ServicesValues";
import PathToChampion from "@/components/PathToChampion";
import ImpactStats from "@/components/ImpactStats";
import AvailableEvents from "@/components/AvailableEvents";
import CulturalExperience from "@/components/CulturalExperience";
import Gallery from "@/components/Gallery";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <ServicesValues />
      <PathToChampion />
      <ImpactStats />
      <AvailableEvents />
      <CulturalExperience />
      <Gallery />
      <ContactFooter />
    </main>
  );
}
