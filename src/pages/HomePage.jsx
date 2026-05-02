import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";
import Hero from "../assets/components/Hero";
import AboutPreview from "../assets/components/AboutPreview";
import ProjectPreview from "../assets/components/ProjectPreview";
import ServicePreview from "../assets/components/ServicePreview";
import ClientPreview from "../assets/components/ClientPreview";
import ChatAssistant from "../assets/components/ChatAssistant";
//import InstagramFeed from "../assets/components/InstagramFeed";
import clients from "../data/clientsData";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="relative min-h-screen overflow-hidden bg-[#eef4f8]"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute right-[-10%] top-[15%] h-[520px] w-[520px] rounded-full bg-teal-200/25 blur-3xl" />
          <div className="absolute left-[20%] bottom-[10%] h-[360px] w-[360px] rounded-full bg-sky-100/40 blur-3xl" />
        </div>

        <div className="relative z-10">
          <Hero />

          <div className="h-24 bg-gradient-to-b from-transparent via-[#eef4f8]/60 to-transparent" />

        {/* <InstagramFeed /> */}

          <AboutPreview />
          <ProjectPreview />
          <ServicePreview />

          <section className="px-6 py-24 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
              Our Clients
            </h2>

            <p className="mb-12 text-lg text-slate-500">
              Trusted by brands and partners we proudly work with.
            </p>

            <div className="flex justify-center">
              <div className="w-full">
                <ClientPreview clients={clients} />
              </div>
            </div>
          </section>
        </div>

        <ChatAssistant />
      </motion.main>
    </>
  );
}