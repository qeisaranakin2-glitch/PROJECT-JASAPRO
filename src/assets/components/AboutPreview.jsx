import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-52 w-52 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute right-[6%] bottom-0 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
              About Jasapro
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Precision in the field, clarity in every result
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Jasapro Total Survey provides professional services in surveying,
              mapping, LiDAR acquisition, and geotechnical investigation with a
              strong focus on technical accuracy, field reliability, and clear
              deliverables for each project phase.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-teal-500 md:text-base"
              >
                Read More
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-sm transition duration-300 hover:border-teal-500 hover:text-teal-600 md:text-base"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/40 p-4 backdrop-blur-md shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_45%)]" />
              <img
                src="/about-image/about-team.jpeg"
                alt="About Jasapro"
                className="relative z-10 h-full w-full object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl border border-white/70 bg-white/70 px-6 py-5 backdrop-blur-md shadow-[0_12px_30px_rgba(15,23,42,0.08)] md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
                Trusted workflow
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Survey • Mapping • LiDAR • Geotechnical
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}