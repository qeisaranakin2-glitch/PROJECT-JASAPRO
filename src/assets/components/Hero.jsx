import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// CSS bawaan swiper
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  // simpan instance swiper supaya bisa dipanggil manual
  const swiperRef = useRef(null);
  const [introDone, setIntroDone] = useState(false);

  // DATA SLIDE
  // type bisa "video" atau "image"
  const slides = useMemo(
    () => [
      {
        id: 1,
        label: "Survey & Mapping",
        type: "video",
        src: "/slide-preview/slide-1.mp4",
        eyebrow: "ACCURATE • RELIABLE • TECHNOLOGY-DRIVEN",
        title: "Professional Survey and Mapping Services",
        description:
          "Delivering accurate and reliable topographic survey, control points, and geospatial mapping solutions for infrastructure and land development projects.",
        primaryCta: "View Services",
        secondaryCta: "Get Consultation",
        primaryHref: "#services",
        secondaryHref: "#contact",
      },
      {
        id: 2,
        label: "LiDAR & UAV",
        type: "image",
        src: "/slide-preview/slide-2.jpg",
        eyebrow: "MODERN EQUIPMENT • AERIAL SOLUTIONS",
        title: "LiDAR, UAV, and Aerial Mapping Expertise",
        description:
          "Supporting modern data acquisition through UAV LiDAR, aerial photogrammetry, orthomosaic generation, and 3D terrain mapping.",
        primaryCta: "Explore Solutions",
        secondaryCta: "Contact Our Team",
        primaryHref: "#services",
        secondaryHref: "#contact",
      },
      {
        id: 3,
        label: "Geotechnical",
        type: "video",
        src: "/slide-preview/slide-3.mp4",
        eyebrow: "FIELD INVESTIGATION • ENGINEERING SUPPORT",
        title: "Geotechnical Investigation for Project Confidence",
        description:
          "Providing soil investigation, CPT, SPT, drilling, and field testing services to support planning, construction, and engineering decisions.",
        primaryCta: "See Portfolio",
        secondaryCta: "Request Consultation",
        primaryHref: "#portfolio",
        secondaryHref: "#contact",
      },
    ],
    []
  );

  // state slide aktif
  const [activeIndex, setActiveIndex] = useState(0);

  // function untuk pindah slide saat indikator diklik
  const handleGoToSlide = (index) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideToLoop(index);
  };
  const IntroText = ({ onFinish }) => {
  const text = "WELCOME TO JASAPRO".split("");

  return ( 
   <div>
      {text.map((char, i) => (
        <motion.span
          key={i}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 600 - 300,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            delay: i * 0.05,
            duration: 1,
            ease: "easeOut",
          }}
          className="text-white text-3xl md:text-6xl font-bold"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      {/* trigger selesai */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        onAnimationComplete={onFinish}
        className="absolute inset-0"
      />
    </div>
  );
};

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* BACKGROUND SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Kalau slide berupa video */}
              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                // Kalau slide berupa image
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}

              {/* Overlay umum */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Overlay gradient kiri
                  supaya teks lebih kebaca */}
              <di/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* KONTEN HERO */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl pt-16 md:pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeIndex].id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
            >
              {/* TEKS KECIL */}
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-teal-300 md:text-base">
                {slides[activeIndex].eyebrow}
              </p>

              {/* JUDUL UTAMA
                  kalau masih terlalu besar, ubah md:text-7xl jadi md:text-6xl */}
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] text-white md:text-7xl">
                {slides[activeIndex].title}
              </h1>

              {/* DESKRIPSI */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-xl">
                {slides[activeIndex].description}
              </p>

              {/* BUTTON */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={slides[activeIndex].primaryHref}
                  className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-600 md:text-base"
                >
                  {slides[activeIndex].primaryCta}
                </a>

                <a
                  href={slides[activeIndex].secondaryHref}
                  className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950 md:text-base"
                >
                  {slides[activeIndex].secondaryCta}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* INDIKATOR BAWAH - SUDAH BISA DIKLIK */}
      <div className="absolute bottom-8 left-0 z-30 w-full px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => handleGoToSlide(index)}
              className="group text-left"
            >
              {/* label bawah */}
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? "bg-red-500" : "bg-white/40"
                  }`}
                />
                <span
                  className={`text-sm font-medium transition ${
                    index === activeIndex ? "text-white" : "text-white/70"
                  }`}
                >
                  {slide.label}
                </span>
              </div>

              {/* garis progress */}
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/30">
                <motion.div
                  key={`${slide.id}-${activeIndex}`}
                  initial={{ width: 0 }}
                  animate={{ width: index === activeIndex ? "100%" : "0%" }}
                  transition={{ duration: 6.8, ease: "linear" }}
                  className={`h-full ${
                    index === activeIndex ? "bg-red-500" : "bg-transparent"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      
    </section>
  );
}