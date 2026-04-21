import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Land Survey & Mapping",
    desc: "Topographic survey, contour mapping, stake out, and spatial data support for infrastructure, industrial, and land development projects.",
    image: "", // kosongin kalau belum ada
  },
  {
    title: "Aerial Survey, LiDAR & Photogrammetry",
    desc: "Drone-based acquisition, orthomosaic production, LiDAR data capture, and terrain modeling with efficient aerial workflows.",
    image:"/service/tes.jpeg",
  },
  {
    title: "Hydrographic & Bathymetric Survey",
    desc: "Water-depth measurement, underwater terrain profiling, shoreline observation, and survey support for river, lake, reservoir, and coastal environments.",
    image: "",
  },
  {
    title: "Geo Hazard & Geological Survey",
    desc: "Hazard mapping, slope evaluation, terrain assessment, and geological structure identification for safer planning and project execution.",
    image: "",
  },
  {
    title: "Onshore & Offshore Geotechnical Investigation",
    desc: "Subsurface investigation, soil sampling, and in-situ testing services for onshore and offshore projects to support reliable engineering analysis and construction planning.",
    image: "/service/pertamina4.jpeg",
  },
];

export default function ServicePreview() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-transparent py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADING */}
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Technical services built for real field requirements
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Jasapro provides practical survey, mapping, geospatial, and field
            investigation services designed to support reliable execution,
            accurate reporting, and better technical decision-making.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={900}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="h-[420px] w-full md:h-[500px] xl:h-[560px]"
          >
            {services.map((item, index) => (
              <SwiperSlide key={item.title}>
                <div className="relative h-full w-full overflow-hidden">
                  
                  {/* IMAGE / FALLBACK */}
                  {item.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f766e_0%,#14b8a6_50%,#0f172a_100%)]">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
                    </div>
                  )}

                  {/* CLEAN OVERLAY */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* CONTENT */}
                  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-xl"
                    >
                      <div className="inline-flex border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur-sm">
                        Jasapro Services
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold leading-snug text-white md:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                        {item.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          to="/services"
                          className="rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-400"
                        >
                          Explore
                        </Link>

                        <Link
                          to="/contact"
                          className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
                        >
                          Contact
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* PAGINATION STYLE */}
      <style>{`
        #services .swiper-pagination {
          bottom: 18px !important;
        }

        #services .swiper-pagination-bullet {
          width: 20px;
          height: 4px;
          border-radius: 0;
          background: rgba(255,255,255,0.4);
          opacity: 1;
          transition: all 0.3s ease;
        }

        #services .swiper-pagination-bullet-active {
          background: #14b8a6;
          width: 36px;
        }
      `}</style>
    </section>
  );
}