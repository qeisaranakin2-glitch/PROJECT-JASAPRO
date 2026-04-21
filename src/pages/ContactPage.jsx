import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="min-h-screen overflow-x-hidden bg-[#f6f8fb]"
    >
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.10),transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-5 inline-block rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-sm text-slate-600 shadow-sm backdrop-blur">
            Contact Jasapro
          </span>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Let’s Discuss Your Project
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-500">
            Reach out to Jasapro Total Survei for geospatial survey, mapping,
            LiDAR, and geotechnical solutions. Our team is ready to support your
            project with accurate data, dependable field services, and
            professional consultation.
          </p>
        </div>
      </section>

      <section className="overflow-x-hidden px-6 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm md:p-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">
                Contact Information
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Get in Touch With Our Team
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
                We are available to discuss project requirements, consultation
                requests, and technical service inquiries.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <HiOutlineMail className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 text-sm text-slate-400">Email</p>
                    <a
                      href="mailto:admin@jasaprototalsurvei.co.id"
                      className="break-words text-base font-semibold text-slate-900 transition hover:text-teal-600 md:text-lg"
                    >
                      admin@jasaprototalsurvei.co.id
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <HiOutlinePhone className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 text-sm text-slate-400">Phone</p>
                    <a
                      href="tel:08981910600"
                      className="break-words text-base font-semibold text-slate-900 transition hover:text-teal-600 md:text-lg"
                    >
                      0898-1910-600
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <HiOutlineLocationMarker className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 text-sm text-slate-400">Office Address</p>
                    <p className="break-words text-base font-semibold leading-7 text-slate-900">
                      Gedung Wirausaha Lantai 1 Unit 104,
                      <br />
                      Jalan HR Rasuna Said Kav. C-5,
                      <br />
                      Kelurahan Karet, Kecamatan Setiabudi,
                      <br />
                      Jakarta Selatan 12920
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <p className="mb-1 text-sm text-slate-400">Business Hours</p>
                <p className="text-base font-semibold text-slate-900">
                  Monday - Friday, 08:00 - 17:00
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/628981910600?text=Halo%20Tim%20Jasapro,%20saya%20ingin%20berkonsultasi%20terkait%20layanan%20survey."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:admin@jasaprototalsurvei.co.id"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Send Email
              </a>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://x.com/jasapro_?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
              Send Message
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Tell Us About Your Project
            </h2>
            <p className="mb-8 mt-3 max-w-2xl leading-7 text-slate-300">
              Share your project scope, service needs, timeline, or consultation
              request. Our team will review your message and get back to you as
              soon as possible.
            </p>

            <form
              action="https://formsubmit.co/admin@jasaprototalsurvei.co.id"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Message - Jasapro Website"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400"
                >
                  <option className="text-slate-900">Topographic Survey</option>
                  <option className="text-slate-900">LiDAR Survey</option>
                  <option className="text-slate-900">Bathymetry</option>
                  <option className="text-slate-900">Geotechnical Investigation</option>
                  <option className="text-slate-900">GIS & Mapping</option>
                  <option className="text-slate-900">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
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

      <section className="overflow-x-hidden px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
          <div className="border-b border-slate-100 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">
              Office Location
            </p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">
              Visit Our Office
            </h3>
            <p className="mt-2 max-w-2xl text-base leading-7 text-slate-500">
              Meet our team for consultation, technical discussion, and project
              coordination at our Jakarta office.
            </p>
          </div>

          <iframe
            title="Jasapro Office Location"
            src="https://www.google.com/maps?q=Gedung%20Wirausaha%20Jakarta%2012920&z=18&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full max-w-full"
          />

          <div className="flex flex-wrap items-center justify-between gap-4 p-6 md:p-8">
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              Gedung Wirausaha Lantai 1 Unit 104, Jalan HR Rasuna Said Kav. C-5,
              Kelurahan Karet, Kecamatan Setiabudi, Jakarta Selatan 12920.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gedung+Wirausaha+Jakarta+12920"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-gradient-to-r from-teal-50 via-white to-slate-50 p-10 text-center shadow-sm md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-600">
            Quick Response
          </p>
          <h2 className="mb-4 mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Need a Faster Discussion?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-slate-500">
            Contact us directly through WhatsApp or email and our team will
            assist you with your survey, mapping, and geotechnical requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/628981910600?text=Halo%20Tim%20Jasapro,%20saya%20ingin%20berkonsultasi%20terkait%20layanan%20survey."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-medium text-white transition hover:bg-black"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
            <a
              href="mailto:admin@jasaprototalsurvei.co.id"
              className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}