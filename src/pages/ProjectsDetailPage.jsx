import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "../data/projectsData";
import Navbar from "../assets/components/Navbar";

export default function ProjectsDetailPage() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);

  const mediaItems = [
    ...(project?.images || []),
    ...(project?.video ? [project.video] : []),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slug]);

  useEffect(() => {
    if (!mediaItems.length) return;

    const currentItem = mediaItems[currentIndex];
    if (currentItem?.endsWith(".mp4")) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, mediaItems]);

  if (!project) return <Navigate to="/projects" replace />;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#eef6f6] text-slate-900">

        {/* HEADER */}
        <section className="pt-28 md:pt-32">
          <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">

            {/* BACK */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:border-teal-500 hover:text-teal-600 transition"
              >
                ← Back
              </Link>
            </motion.div>

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 max-w-3xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-teal-600 font-semibold">
                {project.category}
              </p>

              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {project.title}
              </h1>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {project.shortDescription || project.fullDescription}
              </p>
            </motion.div>

            {/* SLIDESHOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-[28px] overflow-hidden bg-black shadow-2xl">

                <div className="relative h-[420px] md:h-[520px] xl:h-[600px] flex items-center justify-center">

                  <AnimatePresence mode="wait">
                    {mediaItems[currentIndex]?.endsWith(".mp4") ? (
                      <motion.video
                        key={mediaItems[currentIndex]}
                        src={mediaItems[currentIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-h-full max-w-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    ) : (
                      <motion.img
                        key={mediaItems[currentIndex]}
                        src={mediaItems[currentIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </AnimatePresence>

                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* DOT */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all ${
                          currentIndex === index
                            ? "w-8 h-2 bg-white"
                            : "w-3 h-2 bg-white/40"
                        } rounded-full`}
                      />
                    ))}
                  </div>

                  {/* NAV */}
                  <div className="absolute bottom-5 right-5 flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30 transition"
                    >
                      Prev
                    </button>
                    <button
                      onClick={nextSlide}
                      className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold text-slate-900">
                Project Overview
              </h2>

              <p className="mt-5 text-slate-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* GRID SECTION */}
            <div className="grid md:grid-cols-2 gap-12 mt-12">

              {/* SCOPE */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  Scope of Work
                </h3>

                <ul className="mt-4 space-y-3">
                  {project.scopeOfWork.map((item, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 bg-teal-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* HIGHLIGHTS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  Highlights
                </h3>

                <ul className="mt-4 space-y-3">
                  {project.highlights.map((item, index) => (
                    <li key={index} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}