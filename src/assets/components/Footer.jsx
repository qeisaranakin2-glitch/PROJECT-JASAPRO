import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative z-20 overflow-hidden bg-gradient-to-b from-slate-950 to-black text-gray-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <img
            src="/jasapro.png"
            alt="Jasapro Logo"
            className="mb-0 h-60 w-auto brightness-110"
          />

          <p className="max-w-md text-sm leading-relaxed text-gray-400">
            Jasapro Total Survei is a professional consulting company specializing
            in geospatial survey, geotechnical investigation, and mapping solutions
            with modern technology and high-precision results.
          </p>

          <div className="relative z-20 mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/jasaprototalsurvei/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-teal-500/20"
            >
              <FaInstagram className="text-lg text-gray-400 hover:text-white" />
            </a>

            <a
              href="https://www.linkedin.com/company/jasapro-total-survei/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-teal-500/20"
            >
              <FaLinkedinIn className="text-lg text-gray-400 hover:text-white" />
            </a>

            <a
              href="mailto:admin@jasaprototalsurvei.co.id"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-teal-500/20"
            >
              <HiOutlineMail className="text-lg text-gray-400 hover:text-white" />
            </a>

            <a
              href="https://x.com/jasapro_?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-teal-500/20"
            >
              <FaXTwitter className="text-lg text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="mb-1 block text-gray-500">Email</span>
                admin@jasaprototalsurvei.co.id
              </li>

              <li>
                <span className="mb-1 block text-gray-500">Phone</span>
                +62 898-191-0600
              </li>

              <li>
                <span className="mb-1 block text-gray-500">Office</span>
                <span className="leading-relaxed">
                  Gedung Wirausaha Lantai 1 Unit 104 <br />
                  Jalan HR Rasuna Said Kav. C-5 <br />
                  Kelurahan Karet, Kecamatan Setia Budi <br />
                  Jakarta Selatan
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Our Office</h3>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg transition hover:shadow-2xl">
              <iframe
                title="Jasapro Office Location"
                src="https://www.google.com/maps?q=HR%20Rasuna%20Said%20Jakarta&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                className="pointer-events-none"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jasapro Total Survei. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;