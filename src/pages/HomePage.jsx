import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";
import Hero from "../assets/components/Hero";
import AboutPreview from "../assets/components/AboutPreview";
import ProjectPreview from "../assets/components/ProjectPreview";
import ServicePreview from "../assets/components/ServicePreview";
import clients from "../data/clientsData";
import ClientPreview from "../assets/components/ClientPreview";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <Hero />
      <AboutPreview />
      <ProjectPreview />
      <ServicePreview />

      {/* CLIENT SECTION */}
    <section className="py-24 px-6 text-center">
  <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
    Our Clients
  </h2>
  <p className="text-lg text-gray-500 mb-12">
    Trusted by brands and partners we proudly work with.
  </p>

  <div className="flex justify-center">
    <div className="w-full">
      <ClientPreview clients={clients} />
    </div>
  </div>
</section>
    </motion.main>
  );
}