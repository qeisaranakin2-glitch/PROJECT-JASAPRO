import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Land Survey & Mapping",
    desc: "Topographic survey, contour mapping, and stake out services for infrastructure and development projects.",
  },
  {
    title: "Aerial Survey & LiDAR",
    desc: "Drone photogrammetry, orthomosaic, LiDAR acquisition, and terrain modeling with modern UAV technology.",
  },
  {
    title: "Hydrographic & Bathymetric",
    desc: "Depth measurement and water-level observation for river, lake, reservoir, and coastal environments.",
  },
  {
    title: "Geo Hazard & Geological Survey",
    desc: "Hazard mapping, slope analysis, and geological structure identification for safer project planning.",
  },
];

function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
        0{index + 1}
      </div>

      <h3 className="mt-5 text-xl font-bold leading-tight text-slate-950">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {item.desc}
      </p>

      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-slate-900"
      >
        Learn More
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </motion.div>
  );
}

export default function ServicePreview() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#dfe5ec] to-[#edf2f6] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Integrated Surveying & Geospatial Solutions
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            We provide accurate field services across land survey, aerial
            mapping, bathymetry, and geological investigation with modern tools
            and dependable reporting.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/services"
            className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}