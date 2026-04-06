import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="min-h-screen bg-white"
    >
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-28 pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full border border-gray-200 px-4 py-1 text-sm text-gray-600 mb-5">
            Contact Jasapro
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Let’s Discuss Your Project
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
            Reach out to Jasapro for survey, mapping, geotechnical, and geospatial
            solutions. We are ready to help you with accurate data and professional service.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="rounded-[28px] border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:hello@jasapro.com"
                    className="text-lg font-medium text-gray-900 hover:text-teal-600 transition"
                  >
                    hello@jasapro.com
                  </a>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:+6281234567890"
                    className="text-lg font-medium text-gray-900 hover:text-teal-600 transition"
                  >
                    +62 812-3456-7890
                  </a>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-400 mb-1">Office</p>
                  <p className="text-lg font-medium text-gray-900">
                    Bandung, West Java, Indonesia
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-400 mb-1">Business Hours</p>
                  <p className="text-lg font-medium text-gray-900">
                    Monday - Friday, 08:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="mailto:hello@jasapro.com"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Our Office
                </h3>
                <p className="text-gray-500">
                  Visit our office for consultation and project discussion.
                </p>
              </div>

              <iframe
                title="Jasapro Office Location"
                src="https://www.google.com/maps?q=Bandung&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-gray-200 bg-gradient-to-br from-gray-900 to-slate-800 p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-bold mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Tell us about your project, service needs, or consultation request.
              Our team will get back to you as soon as possible.
            </p>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-200">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-teal-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-200">
                  Service Needed
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400">
                  <option className="text-gray-900">Topographic Survey</option>
                  <option className="text-gray-900">LiDAR Survey</option>
                  <option className="text-gray-900">Bathymetry</option>
                  <option className="text-gray-900">Geotechnical Investigation</option>
                  <option className="text-gray-900">GIS & Mapping</option>
                  <option className="text-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-teal-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-gray-200 bg-gradient-to-r from-teal-50 to-white p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Fast Response?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 leading-relaxed mb-8">
            Contact us directly through WhatsApp or email and our team will assist
            you with your survey and mapping requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 px-6 py-3 text-white font-medium hover:bg-black transition"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@jasapro.com"
              className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}