import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#edf2f6] py-20 md:py-24"
    >
      {/* 🔥 GARIS ATAS */}
    <svg
  className="pointer-events-none absolute left-0 top-0 h-full w-full"
  viewBox="0 0 1440 500"
  fill="none"
  preserveAspectRatio="none"
>
  {/* GARIS ATAS */}
  <path
    d="M0 20 
       L1000 20 
       L1150 150"
    stroke="#38bdf8"
    strokeWidth="3"
    strokeLinecap="round"
  />
  <path
    d="M0 35 
       L980 35 
       L1125 160"
    stroke="#38bdf8"
    strokeWidth="3"
    strokeLinecap="round"
  />

  {/* GARIS BAWAH */}
  <path
    d="M0 480 
       L1000 480 
       L1150 350"
    stroke="#38bdf8"
    strokeWidth="3"
    strokeLinecap="round"
  />
  <path
    d="M0 465 
       L980 465 
       L1125 340"
    stroke="#38bdf8"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative flex min-h-[420px] items-center">
          {/* IMAGE RIGHT */}
          <div className="absolute right-6 top-1/2 h-[260px] w-[36%] -translate-y-1/2 md:right-8 md:h-[320px] md:w-[38%] lg:right-10 lg:h-[380px] lg:w-[40%]">
            <img
              src="about-image/about-image.png"
              alt="About Jasapro"
              className="h-full w-full object-contain object-right scale-200"
            />

            <div className="absolute inset-0 bg-gradient-to-r " />
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-xl lg:w-[45%]"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
              About Jasapro
            </p>

            <h2 className="text-5xl font-bold text-slate-950 md:text-6xl">
              About Us
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Jasapro Total Survey provides professional services in surveying,
              mapping, LiDAR acquisition, and geotechnical investigation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-600 md:text-base"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}