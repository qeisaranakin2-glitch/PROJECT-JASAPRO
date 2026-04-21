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
  image: "/project-image/project-privew3.jpeg", // ← ganti sesuai path foto kamu
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
        className={`grid h-[360px] overflow-hidden lg:grid-cols-2 md:h-[420px] xl:h-[460px] ${
          project.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-full overflow-hidden"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            animate={{ scale: [1, 1.035, 1], y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 z-10 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Project Preview
            </span>
          </div>
        </motion.div>

        <div
          className={`relative flex h-full items-center px-8 py-10 md:px-14 lg:px-20 ${theme.panel}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

          <div className="pointer-events-none absolute right-4 top-2 text-[120px] font-bold leading-none tracking-[-0.06em] md:text-[160px] lg:text-[180px]">
            <span className={theme.number}>{project.number}</span>
          </div>

          <div className="relative z-10 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className={`text-xs font-bold uppercase tracking-[0.38em] ${theme.label}`}
            >
              Selected Project
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-3xl font-bold leading-tight md:text-4xl"
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className={`mt-6 max-w-lg text-sm leading-7 md:text-base ${theme.text}`}
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to={`/projects/${project.slug}`}
                className={`inline-flex items-center gap-3 rounded-full border px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${theme.button}`}
              >
                Read More
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <span className={`text-sm ${theme.text}`}>
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[-5%] h-[320px] w-[620px] rotate-[12deg] bg-gradient-to-br from-teal-200/20 via-cyan-100/15 to-transparent" />

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-600">
              Project Preview
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Selected works that reflect Jasapro&apos;s field capability
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
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