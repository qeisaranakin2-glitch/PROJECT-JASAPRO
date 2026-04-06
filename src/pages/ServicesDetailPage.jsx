import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import { servicesData } from "../data/servicesData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#edf2f6]">
        <Navbar />
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-36 lg:px-10">
          <h1 className="text-4xl font-bold text-slate-950">Service not found</h1>
          <Link
            to="/services"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

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
            src={service.heroImage}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-300">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              {service.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Request Consultation
              </a>

              <Link
                to="/services"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-300"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">
                Key Scope
              </p>
              <div className="mt-6 space-y-4">
                {service.previewPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                    <p className="text-base font-medium text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {service.sections.map((section) => (
                <div key={section.title} className="rounded-[28px] bg-white p-8 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-600">
                    Detail
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-300/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[34px] bg-slate-950 px-8 py-10 text-white shadow-xl md:px-12 md:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-300">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to discuss this service for your project?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Tell us your project scope, site condition, or technical need,
              and our team can help recommend the most suitable approach.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Contact Our Team
              </a>

              <Link
                to="/projects"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-teal-400 hover:text-teal-300"
              >
                See Related Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}