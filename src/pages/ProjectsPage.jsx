import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../assets/components/Navbar";

const projects = [
  {
    id: "geotechnical-investigation-tarakan",
    title: "Geotechnical Investigation in Tarakan",
    category: "Geotechnical",
    market: "geotechnical",
    service: "geotechnical",
    image: "project-image/project-1.jpeg",
    location: "Tarakan, Indonesia",
    locationKey: "tarakan",
    description:
      "Onshore geotechnical investigation support for site assessment, subsurface understanding, and engineering planning.",
    status: "active",
  },
  {
    id: "regional-infrastructure-mapping",
    title: "Regional Infrastructure Mapping",
    category: "Infrastructure & Geospatial",
    market: "infrastructure",
    service: "mapping",
    image: "/project-2.jpg",
    location: "Makassar, Indonesia",
    locationKey: "makassar",
    description:
      "Geospatial support for settlement planning, corridor development, and regional infrastructure analysis.",
    status: "active",
  },
  {
    id: "coastal-topographic-study",
    title: "Coastal Topographic Study for Port Expansion",
    category: "Marine & Topographic",
    market: "marine",
    service: "survey",
    image: "/project-3.jpg",
    location: "Surabaya, Indonesia",
    locationKey: "surabaya",
    description:
      "Topographic and coastal survey support for development planning, terrain understanding, and site preparation.",
    status: "active",
  },
  {
    id: "coming-soon-project",
    title: "New Project Coming Soon",
    category: "Upcoming Project",
    market: "all",
    service: "all",
    image: "",
    location: "Indonesia",
    locationKey: "indonesia",
    description:
      "A new Jasapro project showcase will be added here soon. Stay tuned for more field stories and project updates.",
    status: "coming-soon",
  },
];

function Filters({
  draftSearch,
  setDraftSearch,
  draftMarket,
  setDraftMarket,
  draftService,
  setDraftService,
  draftLocation,
  setDraftLocation,
  onSubmit,
  onReset,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[180px_180px_180px_minmax(260px,1fr)_140px]">
        <select
          value={draftMarket}
          onChange={(e) => setDraftMarket(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-teal-500"
        >
          <option value="all">All Markets</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="marine">Marine</option>
          <option value="geotechnical">Geotechnical</option>
        </select>

        <select
          value={draftService}
          onChange={(e) => setDraftService(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-teal-500"
        >
          <option value="all">All Services</option>
          <option value="survey">Survey</option>
          <option value="mapping">Mapping</option>
          <option value="geotechnical">Geotechnical</option>
        </select>

        <select
          value={draftLocation}
          onChange={(e) => setDraftLocation(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-700 outline-none transition focus:border-teal-500"
        >
          <option value="all">All Locations</option>
          <option value="indonesia">Indonesia</option>
          <option value="tarakan">Tarakan</option>
          <option value="makassar">Makassar</option>
          <option value="surabaya">Surabaya</option>
        </select>

        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            value={draftSearch}
            onChange={(e) => setDraftSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-12 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
          />
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </div>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-teal-600"
        >
          Search
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
        >
          Reset Filters
        </button>
      </div>
    </form>
  );
}

function ComingSoonCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[26px] bg-slate-950"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_35%)]" />

      <div className="relative flex min-h-[340px] flex-col justify-end p-6 text-white">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-300">
          {project.category}
        </p>

        <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight">
          COMING SOON
        </h3>

        <p className="mt-3 max-w-xs text-xl font-medium text-white/90">
          {project.title}
        </p>

        <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
          Stay tuned for updates and upcoming field documentation.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-white/65">
          <span>📍</span>
          <span>{project.location}</span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }) {
  if (project.status === "coming-soon") {
    return <ComingSoonCard project={project} index={index} />;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[26px]"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <div className="relative h-[340px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
              {project.category}
            </p>

            <h3 className="mt-2 max-w-[280px] text-2xl font-semibold leading-snug tracking-tight">
              {project.title}
            </h3>

            <p className="mt-3 max-w-[300px] text-xs leading-5 text-white/75">
              {project.description}
            </p>

            <div className="mt-4 flex items-center justify-between gap-4 text-xs text-white/75">
              <span className="flex items-center gap-2">
                <span>📍</span>
                <span>{project.location}</span>
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [draftSearch, setDraftSearch] = useState("");
  const [draftMarket, setDraftMarket] = useState("all");
  const [draftService, setDraftService] = useState("all");
  const [draftLocation, setDraftLocation] = useState("all");

  const [search, setSearch] = useState("");
  const [market, setMarket] = useState("all");
  const [service, setService] = useState("all");
  const [location, setLocation] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(draftSearch.trim());
    setMarket(draftMarket);
    setService(draftService);
    setLocation(draftLocation);
  };

  const handleReset = () => {
    setDraftSearch("");
    setDraftMarket("all");
    setDraftService("all");
    setDraftLocation("all");

    setSearch("");
    setMarket("all");
    setService("all");
    setLocation("all");
  };

  const filteredProjects = useMemo(() => {
    const keyword = search.toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !keyword ||
        project.title.toLowerCase().includes(keyword) ||
        project.category.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.location.toLowerCase().includes(keyword);

      const matchesMarket = market === "all" || project.market === market;
      const matchesService = service === "all" || project.service === service;
      const matchesLocation =
        location === "all" || project.locationKey === location;

      return matchesSearch && matchesMarket && matchesService && matchesLocation;
    });
  }, [search, market, service, location]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#edf2f6]"
    >
      <Navbar />

      <section className="relative overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="project-image/project-hero.png"
      alt="Jasapro Project"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 " />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* label */}
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8fb3d9]">
          Our Projects
        </p>

        {/* title */}
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-white md:text-7xl">
          Projects
        </h1>

        {/* desc */}
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          A selection of Jasapro work across survey, mapping, marine,
          geological, and geotechnical services. Each project reflects our
          commitment to precision, clarity, and dependable field results.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      <section className="border-b border-slate-300/60 bg-[#edf2f6]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <Filters
            draftSearch={draftSearch}
            setDraftSearch={setDraftSearch}
            draftMarket={draftMarket}
            setDraftMarket={setDraftMarket}
            draftService={draftService}
            setDraftService={setDraftService}
            draftLocation={draftLocation}
            setDraftLocation={setDraftLocation}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[28px] border border-slate-300 bg-white px-8 py-14 text-center shadow-sm"
            >
              <p className="text-lg font-semibold text-slate-900">
                Project not found
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Try another keyword like survey, marine, mapping, or geotechnical.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[30px] bg-slate-950 px-8 py-10 text-white shadow-xl md:px-12 md:py-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-300">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build it with accurate data and reliable fieldwork.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Contact Our Team
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            More projects coming soon. Follow our journey.
          </p>
        </div>
      </section>
    </motion.main>
  );
}