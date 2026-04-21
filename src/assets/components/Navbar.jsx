import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ autoHideOnScroll = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 36);

      if (autoHideOnScroll) {
        setShowNavbar(currentScrollY <= 10);
      } else {
        setShowNavbar(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoHideOnScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  const headerClass =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-white/78 border-b border-slate-200/70 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl";

  const menu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  const getMenuClass = (href) => {
    return isActive(href)
      ? "relative text-slate-950"
      : "relative text-slate-600 transition hover:text-slate-950";
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -120, opacity: 1 }}
      transition={{ duration: 0.32 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex h-[86px] max-w-7xl items-center px-4 sm:px-6 lg:px-10">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex h-14 w-[200px] items-center overflow-hidden sm:w-[212px] md:w-[208px]"
          >
            <img
              src="/jasapro.png"
              alt="Jasapro Logo"
              className="w-full origin-left scale-[0.92]"
            />
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-10">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={getMenuClass(item.href)}
            >
              <span className="text-[13px] font-medium uppercase tracking-[0.18em]">
                {item.label}
              </span>

              {isActive(item.href) && (
                <span className="absolute left-1/2 top-[calc(100%+10px)] h-[2px] w-8 -translate-x-1/2 rounded-full bg-teal-600" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-slate-900 transition hover:border-teal-500 hover:text-teal-600"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 p-2.5 text-slate-700 transition hover:border-teal-500 hover:text-teal-600 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`py-3 text-sm font-medium uppercase tracking-[0.14em] ${
                  isActive(item.href)
                    ? "text-teal-600"
                    : "text-slate-700 hover:text-teal-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-4 inline-flex justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-900 transition hover:border-teal-500 hover:text-teal-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}