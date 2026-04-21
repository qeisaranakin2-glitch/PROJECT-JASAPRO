import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import { servicesData } from "../data/servicesData";

function ServicePreviewBlock({ service, index }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="border-t border-slate-200/80"
    >
      <div
        className={`grid items-stretch lg:grid-cols-[1.05fr_0.95fr] ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[440px] xl:h-[520px]">
          {service.heroImage ? (
            <img
              src={service.heroImage}
              alt={service.title}
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,#0f766e_0%,#14b8a6_45%,#0f172a_100%)]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
        </div>

        <div className="flex items-center bg-[#f6f8fa] px-8 py-10 md:px-12 xl:px-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-teal-600">
              {service.eyebrow}
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl xl:text-[34px] xl:leading-tight">
              {service.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.shortDesc}
            </p>

            <div className="mt-7 space-y-3">
              {service.previewPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" />
                  <p className="text-sm leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-slate-900 transition hover:border-teal-500 hover:text-teal-600"
              >
                Learn More
                <span aria-hidden="true">→</span>
              </Link>

              <span className="text-sm text-slate-400">
                Survey • Mapping • Investigation
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <Navbar />

     {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-300/70">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10">
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="relative z-20 max-w-4xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-600">
                Our Services
              </p>

              <h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl xl:text-7xl xl:leading-[0.98]">
                Services built for real field, engineering, and project demands
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                Jasapro provides focused survey, mapping, marine, geological,
                and geotechnical services designed to help clients plan better,
                measure accurately, and deliver projects with confidence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#service-grid"
                  className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
                >
                  Explore Services
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-600"
                >
                  Request Consultation
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE - FULL / NO CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="relative lg:-ml-24 xl:-ml-32"
            >
              <div className="relative h-[520px] overflow-hidden lg:h-[620px] xl:h-[680px]">
                {/* GANTI ke foto asli tim / alat / lapangan Jasapro */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src="service/drone.mp4" type="video/mp4" />
                  </video>

                <div className="absolute inset-0 bg-gradient-to-r from-[#edf2f6] via-slate-950/10 to-slate-950/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

                {/* accent line */}
                <div className="absolute left-0 top-8 h-[2px] w-40 bg-teal-500/80" />
                <div className="absolute left-0 top-8 h-16 w-16 border-l-2 border-t-2 border-teal-500/70" />

                {/* subtle overlay text block */}
                <div className="absolute bottom-8 right-8 hidden max-w-xs border border-white/15 bg-slate-950/45 p-5 backdrop-blur-md md:block">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-300">
                    Integrated Capability
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/85">
                    Survey, geospatial, marine, geological, and geotechnical
                    services delivered with clear reporting and dependable field execution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="service-grid" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
              Service Categories
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Specialized services presented with clarity and focus
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Each service category is structured to help clients understand
              what Jasapro provides, where it applies, and how it supports real
              field and engineering requirements.
            </p>
          </motion.div>
        </div>

        <div>
          {servicesData.map((service, index) => (
            <ServicePreviewBlock
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
                Need a Custom Scope?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Let’s define the right technical approach for your project
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                From initial site assessment to technical data delivery, Jasapro
                helps clients identify the most effective method, equipment, and
                reporting workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-slate-900 transition hover:border-teal-500 hover:text-teal-600"
              >
                Request Consultation
              </a>

              <Link
                to="/projects"
                className="rounded-full px-2 py-3 text-sm font-medium uppercase tracking-[0.12em] text-slate-500 transition hover:text-teal-600"
              >
                See Project Portfolio →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}