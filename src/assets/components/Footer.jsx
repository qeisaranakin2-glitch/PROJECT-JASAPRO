import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        {/* LEFT SIDE */}
<div>
  <div className="mb-6">
    <img
      src="/jasapro.png"
      alt="Jasapro Logo"
      className="h-40 w-75 "
    />
  </div>

  <p className="text-sm text-gray-400 leading-relaxed max-w-md">
    CV Jasapro Total Survei is a professional consulting company
    specializing in geospatial survey, geotechnical investigation,
    and mapping solutions with modern technology and accurate results.
  </p>

  {/* SOCIAL */}
  <div className="flex gap-4 mt-6">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
  >
    <FaInstagram className="text-gray-400 hover:text-white text-lg" />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
  >
    <FaLinkedinIn className="text-gray-400 hover:text-white text-lg" />
  </a>

  <a
    href="mailto:hello@jasapro.com"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
  >
    <HiOutlineMail className="text-gray-400 hover:text-white text-lg" />
  </a>
</div>
</div>

        {/* RIGHT SIDE */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-gray-500">Email:</span><br />
                hello@jasapro.com
              </li>

              <li>
                <span className="text-gray-500">Phone:</span><br />
                +62 812-xxxx-xxxx
              </li>

              <li>
                <span className="text-gray-500">Location:</span><br />
                Bandung, Indonesia
              </li>
            </ul>
          </div>

          {/* MAP */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Our Office
            </h3>

            <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
              <iframe
                title="Jasapro Office Location"
                src="https://www.google.com/maps?q=Bandung&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Jasapro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;