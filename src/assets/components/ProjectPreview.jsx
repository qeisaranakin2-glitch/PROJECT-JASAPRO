import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Geotechnical Investigation – Tarakan",
    description:
      "This project focuses on geotechnical field investigation in Tarakan, involving soil drilling, sampling, and in-situ testing to support engineering design and construction planning.",
    image: "project-image/project-privew1.jpeg",
    slug: "geotechnical-investigation-tarakan",
    reverse: false,
    theme: "teal",
    number: "01",
  },
  {
    id: 2,
    title: "Test Pit Activity – Mettana for Medco Tarakan",
    description:
      "Jasapro supported PT Mettana in Test Pit activities for Medco Tarakan, assisting with permit processing and providing on-site field support to ensure smooth, safe, and compliant operations.",
    image: "project-image/project-privew2.jpeg",
    slug: "test-pit-mettana-medco-tarakan",
    reverse: true,
    theme: "dark",
    number: "02",
  },
  {
    id: 3,
    title: "Cone Penetration Test (CPT) – Garuda Indonesia Building",
    description:
      "Jasapro conducted Cone Penetration Test (CPT) activities at the Garuda Indonesia Building as part of an onshore geotechnical investigation. This work supports subsurface analysis and provides essential data for engineering design and ground evaluation.",
    image: "/project-image/project-privew3.jpeg",
    slug: "cpt-garuda-indonesia",
    reverse: false,
    theme: "light",
    number: "03",
  },
];

function getThemeClasses(theme) {
  switch (theme) {
    case "teal":
      return {
        panel:
          "bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 text-white",
        label: "text-white/70",
        text: "text-white/85",
        button:
          "border-white/60 text-white hover:bg-white hover:text-teal-600",
        number: "text-white/10",
      };
    case "light":
      return {
        panel:
          "bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900",
        label: "text-teal-600",
        text: "text-slate-600",
        button:
          "border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white",
        number: "text-slate-200",
      };
    case "dark":
    default:
      return {
        panel:
          "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white",
        label: "text-teal-300",
        text: "text-white/80",
        button:
          "border-white/50 text-white hover:bg-white hover:text-slate-900",
        number: "text-white/10",
      };
  }
}

function ProjectPreviewCard({ project, index }) {
  const theme = getThemeClasses(project.theme);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.85,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div
        className={`grid overflow-hidden grid-cols-1 min-h-[560px] sm:min-h-[620px] md:min-h-[700px] lg:min-h-[420px] lg:grid-cols-2 xl:min-h-[460px] ${
          project.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative min-h-[240px] sm:min-h-[300px] md:min-h-[360px] lg:h-full overflow-hidden"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            animate={{ scale: [1, 1.035, 1], y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs sm:tracking-[0.25em]">
              Project Preview
            </span>
          </div>
        </motion.div>

        <div
          className={`relative flex h-full items-center px-5 py-8 sm:px-7 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-10 xl:px-20 ${theme.panel}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

          <div className="pointer-events-none absolute right-3 top-3 text-[72px] font-bold leading-none tracking-[-0.06em] sm:right-4 sm:top-2 sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[180px]">
            <span className={theme.number}>{project.number}</span>
          </div>

          <div className="relative z-10 max-w-xl pr-6 sm:pr-8 md:pr-10 lg:pr-12">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className={`text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.34em] md:tracking-[0.38em] ${theme.label}`}
            >
              Selected Project
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-2xl font-bold leading-tight sm:mt-5 sm:text-3xl md:text-4xl"
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className={`mt-4 max-w-lg text-sm leading-6 sm:mt-5 sm:text-[15px] sm:leading-7 md:mt-6 md:text-base ${theme.text}`}
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Link
                to={`/projects/${project.slug}`}
                className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-7 sm:py-3 sm:text-sm sm:tracking-[0.2em] ${theme.button}`}
              >
                Read More
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <span className={`text-xs sm:text-sm ${theme.text}`}>
                Survey • Mapping • Geospatial
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AnimatedLinesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <motion.div
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-teal-400/70 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute left-0 bottom-1/3 h-px w-full bg-gradient-to-r from-transparent via-blue-400/35 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl" />
    </div>
  );
}

export default function ProjectPreview() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-[#eef3f7] via-[#f7fafc] to-white"
    >
      <AnimatedLinesBackground />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[-5%] h-[220px] w-[320px] rotate-[12deg] bg-gradient-to-br from-teal-200/20 via-cyan-100/15 to-transparent sm:h-[260px] sm:w-[420px] lg:h-[320px] lg:w-[620px]" />

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-600 sm:text-sm sm:tracking-[0.35em]">
              Project Preview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:mt-4 sm:text-4xl md:text-5xl">
              Selected works that reflect Jasapro&apos;s field capability
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
              Explore a selection of survey, mapping, environmental, and
              infrastructure-related project scopes that show how Jasapro
              combines technical accuracy, dependable field execution, and
              modern geospatial workflows.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectPreviewCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}