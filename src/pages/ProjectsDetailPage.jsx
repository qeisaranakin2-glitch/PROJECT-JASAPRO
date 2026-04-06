import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "../data/projectsData";
import Navbar from "../assets/components/Navbar";

export default function ProjectsDetailPage() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* ✅ Navbar ditambahkan */}
      <Navbar />

      <section className="relative overflow-hidden bg-[#030712] text-white">
        {/* background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.08),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
          {/* top bar */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-8 flex items-center justify-between"
          >
            <Link
              to="/projects"
              className="inline-flex items-center border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Back to Projects
            </Link>

            <div className="hidden text-sm uppercase tracking-[0.28em] text-white/35 md:block">
              Jasapro Total Survey
            </div>
          </motion.div>
          

          {/* main layout */}
          <div className="grid gap-8 xl:grid-cols-[1.6fr_0.75fr]">
            {/* LEFT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-[420px] overflow-hidden border border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.45)] md:h-[560px] xl:h-[780px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={project.images[currentIndex]}
                    src={project.images[currentIndex]}
                    alt={`${project.title} ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/35 via-transparent to-transparent" />

                {/* top status */}
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5 md:p-6">
                  <div className="flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 transition-all ${
                          currentIndex === index
                            ? "w-12 bg-cyan-400"
                            : "w-5 bg-white/35 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="border border-white/15 bg-black/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                    Live Project Gallery
                  </div>
                </div>

                {/* bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-4xl">
                    <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-cyan-300">
                      {project.category}
                    </p>

                    <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                      {project.title}
                    </h1>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="text-sm text-white/60">
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(project.images.length).padStart(2, "0")}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={prevSlide}
                        className="border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10"
                      >
                        Prev
                      </button>
                      <button
                        onClick={nextSlide}
                        className="border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative"
            >
              <div className="flex h-full flex-col border border-white/10 bg-[#08101d]/96 shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
                <div className="border-b border-white/10 p-7 md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-cyan-300">
                    Project Overview
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="border-b border-white/10 p-7 md:p-8">
                  <h2 className="text-2xl font-semibold text-white">
                    Scope of Work
                  </h2>

                  <ul className="mt-6 space-y-4">
                    {project.scopeOfWork.map((item, index) => (
                      <li key={index} className="flex gap-3 text-slate-300">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-cyan-400" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-7 md:p-8">
                  <h2 className="text-2xl font-semibold text-white">
                    Project Highlights
                  </h2>

                  <ul className="mt-6 space-y-4">
                    {project.highlights.map((item, index) => (
                      <li key={index} className="flex gap-3 text-slate-300">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-teal-400" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-white/10 px-7 py-5 text-sm text-white/45 md:px-8">
                  Engineered field documentation with a professional, safety-first
                  approach.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}