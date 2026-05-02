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
      className="min-h-screen w-full overflow-x-clip bg-[#f6f8fb]"
    >
      <Navbar />

      <section className="relative overflow-hidden px-[clamp(1rem,3vw,1.5rem)] pb-[clamp(3rem,6vw,4rem)] pt-[clamp(6rem,10vw,7rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.10),transparent_30%)]" />

        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-block rounded-full border border-teal-200 bg-white/80 px-[clamp(0.75rem,2.5vw,1rem)] py-1 text-[clamp(0.7rem,1.8vw,0.9rem)] text-slate-600 shadow-sm backdrop-blur">
            Contact Jasapro
          </span>

          <h1 className="mb-5 text-[clamp(2rem,6vw,3.75rem)] font-bold tracking-tight text-slate-950">
            Let’s Discuss Your Project
          </h1>

          <p className="mx-auto max-w-3xl text-[clamp(0.95rem,2.2vw,1.125rem)] leading-[1.8] text-slate-500">
            Reach out to Jasapro Total Survei for geospatial survey, mapping,
            LiDAR, and geotechnical solutions. Our team is ready to support your
            project with accurate data, dependable field services, and
            professional consultation.
          </p>
        </div>
      </section>

      <section className="overflow-x-hidden px-[clamp(1rem,3vw,1.5rem)] pb-[clamp(2.5rem,5vw,3rem)]">
        <div className="mx-auto grid max-w-7xl gap-[clamp(1rem,2.5vw,2rem)] xl:grid-cols-[0.95fr_1.05fr]">
          <div className="min-w-0 rounded-[clamp(1.25rem,2.5vw,2rem)] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-[clamp(1.25rem,3vw,2.5rem)] shadow-sm">
            <div className="mb-[clamp(1.5rem,3vw,2rem)]">
              <p className="text-[clamp(0.7rem,1.8vw,0.9rem)] font-bold uppercase tracking-[0.24em] text-teal-600">
                Contact Information
              </p>
              <h2 className="mt-3 text-[clamp(1.5rem,4vw,1.9rem)] font-bold text-slate-950">
                Get in Touch With Our Team
              </h2>
              <p className="mt-3 max-w-xl text-[clamp(0.92rem,2vw,1rem)] leading-[1.8] text-slate-500">
                We are available to discuss project requirements, consultation
                requests, and technical service inquiries.
              </p>
            </div>

            <div className="space-y-[clamp(0.9rem,2vw,1.25rem)]">
              <div className="rounded-2xl border border-slate-100 bg-white p-[clamp(1rem,2.2vw,1.25rem)] shadow-sm">
                <div className="flex items-start gap-[clamp(0.75rem,2vw,1rem)]">
                  <div className="flex h-[clamp(2.75rem,5vw,3rem)] w-[clamp(2.75rem,5vw,3rem)] shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <HiOutlineMail className="text-[clamp(1rem,2.5vw,1.25rem)]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-sm text-slate-400">Email</p>
                    <a
                      href="mailto:admin@jasaprototalsurvei.co.id"
                      className="block w-full min-w-0 break-all text-[clamp(0.95rem,2vw,1.1rem)] font-semibold text-slate-900 transition hover:text-teal-600"
                    >
                      admin@jasaprototalsurvei.co.id
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-[clamp(1rem,2.2vw,1.25rem)] shadow-sm">
                <div className="flex items-start gap-[clamp(0.75rem,2vw,1rem)]">
                  <div className="flex h-[clamp(2.75rem,5vw,3rem)] w-[clamp(2.75rem,5vw,3rem)] shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <HiOutlinePhone className="text-[clamp(1rem,2.5vw,1.25rem)]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-sm text-slate-400">Phone</p>
                    <a
                      href="tel:08981910600"
                      className="block w-full min-w-0 break-words text-[clamp(0.95rem,2vw,1.1rem)] font-semibold text-slate-900 transition hover:text-teal-600"
                    >
                      0898-1910-600
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-[clamp(1rem,2.2vw,1.25rem)] shadow-sm">
                <div className="flex items-start gap-[clamp(0.75rem,2vw,1rem)]">
                  <div className="flex h-[clamp(2.75rem,5vw,3rem)] w-[clamp(2.75rem,5vw,3rem)] shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <HiOutlineLocationMarker className="text-[clamp(1rem,2.5vw,1.25rem)]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-sm text-slate-400">Office Address</p>
                    <p className="block w-full min-w-0 break-words text-[clamp(0.92rem,2vw,1rem)] font-semibold leading-[1.8] text-slate-900">
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

              <div className="rounded-2xl border border-slate-100 bg-white p-[clamp(1rem,2.2vw,1.25rem)] shadow-sm">
                <p className="mb-1 text-sm text-slate-400">Business Hours</p>
                <p className="text-[clamp(0.92rem,2vw,1rem)] font-semibold text-slate-900">
                  Monday - Friday, 08:00 - 17:00
                </p>
              </div>
            </div>

            <div className="mt-[clamp(1.5rem,3vw,2rem)] flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://wa.me/628981910600?text=Halo%20Tim%20Jasapro,%20saya%20ingin%20berkonsultasi%20terkait%20layanan%20survey."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-[clamp(1.1rem,2.6vw,1.5rem)] py-3 text-[clamp(0.85rem,1.9vw,0.95rem)] font-semibold text-white transition hover:bg-teal-600 sm:w-auto"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:admin@jasaprototalsurvei.co.id"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-[clamp(1.1rem,2.6vw,1.5rem)] py-3 text-[clamp(0.85rem,1.9vw,0.95rem)] font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
              >
                Send Email
              </a>
            </div>

            <div className="mt-[clamp(1.5rem,3vw,2rem)] border-t border-slate-200 pt-6">
              <p className="mb-4 text-[clamp(0.72rem,1.8vw,0.9rem)] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[clamp(2.5rem,4.8vw,2.75rem)] w-[clamp(2.5rem,4.8vw,2.75rem)] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[clamp(2.5rem,4.8vw,2.75rem)] w-[clamp(2.5rem,4.8vw,2.75rem)] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://x.com/jasapro_?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[clamp(2.5rem,4.8vw,2.75rem)] w-[clamp(2.5rem,4.8vw,2.75rem)] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-[clamp(1.25rem,2.5vw,2rem)] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-[clamp(1.25rem,3vw,2.5rem)] text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)]">
            <p className="text-[clamp(0.7rem,1.8vw,0.9rem)] font-bold uppercase tracking-[0.24em] text-teal-300">
              Send Message
            </p>

            <h2 className="mt-3 text-[clamp(1.5rem,4vw,1.9rem)] font-bold">
              Tell Us About Your Project
            </h2>

            <p className="mb-[clamp(1.5rem,3vw,2rem)] mt-3 max-w-2xl text-[clamp(0.92rem,2vw,1rem)] leading-[1.8] text-slate-300">
              Share your project scope, service needs, timeline, or consultation
              request. Our team will review your message and get back to you as
              soon as possible.
            </p>

            <form
              action="https://formsubmit.co/admin@jasaprototalsurvei.co.id"
              method="POST"
              className="space-y-[clamp(1rem,2vw,1.25rem)]"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Message - Jasapro Website"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-[clamp(1rem,2vw,1.25rem)] md:grid-cols-2">
                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[clamp(0.92rem,2vw,1rem)] text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Your phone number"
                    className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[clamp(0.92rem,2vw,1rem)] text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[clamp(0.92rem,2vw,1rem)] text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                />
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[clamp(0.92rem,2vw,1rem)] text-white outline-none transition focus:border-teal-400"
                >
                  <option className="text-slate-900">Topographic Survey</option>
                  <option className="text-slate-900">LiDAR Survey</option>
                  <option className="text-slate-900">Bathymetry</option>
                  <option className="text-slate-900">
                    Geotechnical Investigation
                  </option>
                  <option className="text-slate-900">GIS & Mapping</option>
                  <option className="text-slate-900">Other</option>
                </select>
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[clamp(0.92rem,2vw,1rem)] text-white placeholder:text-slate-400 outline-none transition focus:border-teal-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-[clamp(1.25rem,2.8vw,1.75rem)] py-3 text-[clamp(0.85rem,1.9vw,0.95rem)] font-semibold text-white transition hover:bg-teal-600 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden px-[clamp(1rem,3vw,1.5rem)] pb-[clamp(4rem,6vw,6rem)]">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[clamp(1.25rem,2.5vw,2rem)] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
          <div className="border-b border-slate-100 p-[clamp(1.25rem,3vw,2.5rem)]">
            <p className="text-[clamp(0.7rem,1.8vw,0.9rem)] font-bold uppercase tracking-[0.24em] text-teal-600">
              Office Location
            </p>

            <h3 className="mt-3 text-[clamp(1.45rem,4vw,1.9rem)] font-bold text-slate-950">
              Visit Our Office
            </h3>

            <p className="mt-2 max-w-2xl text-[clamp(0.92rem,2vw,1rem)] leading-[1.8] text-slate-500">
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
            className="block h-[clamp(18rem,45vw,26.25rem)] w-full max-w-full"
          />

          <div className="flex flex-col gap-4 p-[clamp(1.25rem,3vw,2rem)] md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-[clamp(0.9rem,2vw,1rem)] leading-[1.8] text-slate-500">
              Gedung Wirausaha Lantai 1 Unit 104, Jalan HR Rasuna Said Kav. C-5,
              Kelurahan Karet, Kecamatan Setiabudi, Jakarta Selatan 12920.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gedung+Wirausaha+Jakarta+12920"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-[clamp(1.1rem,2.5vw,1.3rem)] py-3 text-[clamp(0.85rem,1.9vw,0.95rem)] font-semibold text-white transition hover:bg-slate-800"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden px-[clamp(1rem,3vw,1.5rem)] pb-[clamp(4rem,6vw,6rem)]">
        <div className="mx-auto max-w-6xl rounded-[clamp(1.25rem,2.5vw,2rem)] border border-slate-200 bg-gradient-to-r from-teal-50 via-white to-slate-50 p-[clamp(1.5rem,4vw,3.5rem)] text-center shadow-sm">
          <p className="text-[clamp(0.7rem,1.8vw,0.9rem)] font-bold uppercase tracking-[0.24em] text-teal-600">
            Quick Response
          </p>

          <h2 className="mb-4 mt-3 text-[clamp(1.5rem,4.4vw,2.25rem)] font-bold text-slate-950">
            Need a Faster Discussion?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-[clamp(0.92rem,2vw,1rem)] leading-[1.8] text-slate-500">
            Contact us directly through WhatsApp or email and our team will
            assist you with your survey, mapping, and geotechnical requirements.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://wa.me/628981910600?text=Halo%20Tim%20Jasapro,%20saya%20ingin%20berkonsultasi%20terkait%20layanan%20survey."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-[clamp(1.2rem,2.6vw,1.5rem)] py-3 text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-white transition hover:bg-black"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            <a
              href="mailto:admin@jasaprototalsurvei.co.id"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-[clamp(1.2rem,2.6vw,1.5rem)] py-3 text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}