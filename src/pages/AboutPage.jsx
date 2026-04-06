import { useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";

function HeroCardImage({ src, alt, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      animate={{ y: [0, -8, 0] }}
      className={`overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}

function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-md"
    >
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </motion.div>
  );
}

function SectionTab({ label }) {
  const id = useMemo(
    () =>
      label
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/,/g, "")
        .replace(/&/g, "and"),
    [label]
  );

  return (
    <motion.a
      href={`#${id}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex min-h-[68px] items-center justify-center border border-slate-200 bg-white px-5 text-center text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-teal-600"
    >
      {label}
    </motion.a>
  );
}

function LeaderCard({ name, role, image, desc, linkedin, email, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-teal-600">
        {role}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
        >
          LinkedIn
        </a>

        <a
          href={`mailto:${email}`}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
        >
          Contact
        </a>
      </div>
    </motion.div>
  );
}

function ValueCard({ title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
    </motion.div>
  );
}

function AboutPageContent() {
  const tabs = [
    "Jasapro at a Glance",
    "Vision, Mission & Values",
    "Leadership Team",
    "Technology & Equipment",
  ];

  const values = [
    {
      title: "Precision",
      desc: "We prioritize measurement accuracy, methodological discipline, and dependable field execution in every survey assignment.",
    },
    {
      title: "Integrity",
      desc: "We maintain transparent communication, responsible reporting, and professional conduct across all client engagements.",
    },
    {
      title: "Innovation",
      desc: "We continuously adopt modern survey tools, digital workflows, and smarter data delivery to improve project outcomes.",
    },
    {
      title: "Safety",
      desc: "We uphold safe field practices, equipment readiness, and careful site planning for both team members and stakeholders.",
    },
  ];

  const leaders = [
    {
      name: "Raka Pradana",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
      desc: "Leads strategic growth, client partnerships, and business development across surveying, mapping, and geotechnical service lines.",
      linkedin: "https://www.linkedin.com/",
      email: "ceo@jasapro.com",
    },
    {
      name: "Anindya Putri",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
      desc: "Oversees national field operations, project timelines, quality control processes, and cross-team coordination for site delivery.",
      linkedin: "https://www.linkedin.com/",
      email: "operations@jasapro.com",
    },
    {
      name: "Dimas Surya",
      role: "Technical Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      desc: "Responsible for survey methodology, data processing systems, equipment modernization, and technical review standards.",
      linkedin: "https://www.linkedin.com/",
      email: "technical@jasapro.com",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#e7edf3] via-[#eef3f7] to-[#f8f9fb] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pt-36">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute right-[-12%] top-[-18%] h-[420px] w-[720px] rotate-[18deg] bg-gradient-to-br from-teal-400/10 via-cyan-300/5 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="relative flex min-h-[620px] items-center">
            {/* VIDEO RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ml-auto w-full lg:w-[78%]"
            >
              <div className="relative h-[420px] overflow-hidden rounded-[36px] md:h-[520px] lg:h-[620px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source
                    src="/13770638_3840_2160_30fps.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 z-20 max-w-2xl lg:w-[52%]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-teal-400">
                Company Overview
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Reliable Field Services Backed by Modern Technology
              </h1>

              <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />

              <p className="mt-7 text-lg leading-8 text-slate-300">
                Jasapro Total Survey is a professional company specializing in
                topographic survey, mapping, aerial acquisition, bathymetry, and
                geotechnical investigation. We combine field experience with
                modern tools to deliver precise, practical, and decision-ready
                project data.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <StatCard
                  value="120+"
                  label="Projects completed across infrastructure, industrial, and land development sectors"
                  delay={0}
                />
                <StatCard
                  value="25+"
                  label="Survey specialists and support personnel in field and processing teams"
                  delay={0.1}
                />
                <StatCard
                  value="10+"
                  label="Years of experience supporting accurate and efficient site intelligence"
                  delay={0.2}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sticky top-[96px] z-30 border-b border-slate-200 bg-[#f8f9fb]/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-10">
          {tabs.map((tab) => (
            <SectionTab key={tab} label={tab} />
          ))}
        </div>
      </section>

      <section
        id="jasapro-at-a-glance"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight text-slate-950"
          >
            Jasapro at a Glance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-base leading-8 text-slate-600"
          >
            Jasapro was established to provide dependable survey and geospatial
            services for projects that require both field accuracy and efficient
            technical reporting. Our work supports planning, design,
            construction, monitoring, and investigation across a wide range of
            sectors including infrastructure, property development, mining
            support, marine works, and industrial sites.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base leading-8 text-slate-600"
          >
            Our service model is built around responsive project execution,
            disciplined data capture, and clear deliverables. By combining
            experienced personnel with GPS/GNSS systems, total stations,
            UAV-based acquisition, bathymetric tools, and digital data
            processing, we help clients move from raw field conditions to
            actionable project insight with confidence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base leading-8 text-slate-600"
          >
            More than a survey vendor, Jasapro aims to be a long-term technical
            partner. We focus on reliable communication, consistent quality, and
            solutions that fit the actual needs of each site, timeline, and
            stakeholder environment.
          </motion.p>
        </div>
      </section>

      <section
        id="vision-mission-and-values"
        className="border-y border-slate-200 bg-[#edf2f6]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="relative h-[520px] overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
                alt="Jasapro team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />

              <div className="absolute bottom-6 left-6 max-w-xs text-white">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-300">
                  Our Commitment
                </p>
                <p className="mt-2 text-lg font-semibold leading-tight">
                  Precision in the field, clarity in every result.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 lg:-ml-24 xl:-ml-32"
            >
              <div className="rounded-[28px] bg-white/95 p-8 shadow-xl backdrop-blur-md md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">
                  Vision & Mission
                </p>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-950">Vision</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    To become a trusted field and geospatial solutions partner
                    known for precision, reliability, and technology-driven
                    service.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-slate-950">Mission</h3>

                  <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                    <li>
                      Deliver accurate survey and investigation data that
                      supports informed project decisions.
                    </li>
                    <li>
                      Continuously improve field capability through modern
                      equipment and digital workflows.
                    </li>
                    <li>
                      Maintain high standards of safety, responsiveness, and
                      professionalism.
                    </li>
                    <li>
                      Create long-term value through dependable collaboration
                      and reporting.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="leadership-team"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">
              Leadership Team
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              The people behind Jasapro
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            Our leadership structure combines business direction, operational
            readiness, and technical quality control to ensure each project is
            delivered with precision and accountability.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} {...leader} delay={index * 0.12} />
          ))}
        </div>
      </section>

      <section
        id="technology-and-equipment"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">
                Technology & Equipment
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                Modern tools that support reliable results
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                We utilize integrated field and processing systems to support
                data acquisition with speed, consistency, and traceability. Our
                equipment portfolio and workflows are selected to meet varied
                terrain, project scale, and reporting requirements.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ValueCard
                  title="Survey Instruments"
                  desc="GNSS receivers, total stations, digital levels, and support accessories for land-based measurement tasks."
                  delay={0}
                />
                <ValueCard
                  title="Aerial Acquisition"
                  desc="UAV-assisted mapping workflows for efficient area coverage, orthophoto generation, and terrain modeling."
                  delay={0.08}
                />
                <ValueCard
                  title="Marine & Bathymetry"
                  desc="Tools and field methods for underwater depth profiling and shoreline-related data acquisition."
                  delay={0.16}
                />
                <ValueCard
                  title="Digital Processing"
                  desc="CAD, GIS, and reporting workflows that transform field data into usable maps, models, and technical outputs."
                  delay={0.24}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-2 gap-4"
            >
              <HeroCardImage
                src="https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80"
                alt="Survey equipment"
                className="h-[220px]"
                delay={0}
              />
              <HeroCardImage
                src="https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80"
                alt="Drone mapping"
                className="mt-12 h-[220px]"
                delay={0.15}
              />
              <HeroCardImage
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
                alt="Team site check"
                className="col-span-2 h-[240px]"
                delay={0.28}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="min-h-screen bg-[#dce3ea]"
    >
      <Navbar />
      <AboutPageContent />
    </motion.main>
  );
}