import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const headerClass = scrolled
    ? "bg-slate-900/80 backdrop-blur-lg shadow-md border-b border-white/10"
    : "bg-slate-900/60 backdrop-blur-md";

  const textClass = "text-white";
  const activeClass = "text-teal-400";
  const normalClass = "text-white transition hover:text-teal-300";

  const menu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact" },
  ];

  const getMenuClass = (href) => {
    if (href === "/" && location.pathname === "/") return activeClass;
    if (href === "/about" && location.pathname === "/about") return activeClass;
    if (href === "/projects" && location.pathname === "/projects") return activeClass;
    if (href === "/services" && location.pathname === "/services") return activeClass;
    if (href === "/career" && location.pathname === "/career") return activeClass;
    if (href === "/contact" && location.pathname === "/contact") return activeClass;
    return normalClass;
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex h-16 w-[210px] items-center overflow-hidden sm:h-16 sm:w-[220px] md:h-16 md:w-[210px]">
            <img
              src="/jasapro.png"
              alt="Jasapro Logo"
              className="w-full scale-95 origin-left"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden flex-1 items-center justify-center gap-6 text-sm font-semibold md:flex lg:gap-8 ${textClass}`}
        >
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={getMenuClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex justify-end">
          <Link
            to="/contact"
            className="rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto inline-flex items-center justify-center rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-900/95 backdrop-blur-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`py-3 text-base font-semibold ${
                  location.pathname === item.href
                    ? "text-teal-400"
                    : "text-white hover:text-teal-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-4 inline-flex justify-center rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}