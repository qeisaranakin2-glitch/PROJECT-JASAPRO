import { motion } from "framer-motion";

export default function AboutPageContent() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Company Overview
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Reliable Field Services Backed by Modern Technology
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Jasapro Total Survey is a professional company specializing in topographic
            survey, mapping, aerial acquisition, bathymetry, and geotechnical investigation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          <img
            src="/about-1.jpg"
            alt="Jasapro field team"
            className="h-72 w-full rounded-3xl object-cover shadow-sm"
          />
          <img
            src="/about-2.jpg"
            alt="Jasapro equipment"
            className="mt-8 h-72 w-full rounded-3xl object-cover shadow-sm sm:mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}