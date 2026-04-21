import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./ScrollToTop";
import ServiceDetailPage from "./pages/ServicesDetailPage";
import ProjectsDetailPage from "./pages/ProjectsDetailPage";
import Footer from "./assets/components/Footer";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import AdminChat from "./pages/AdminChat";
import AdminLogin from "./pages/AdminLogin";
import ProtectedAdminRoute from "./assets/components/ProtectedAdminRoute";

export default function App() {
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin/login") ||
    location.pathname.startsWith("/admin/chat") ||
    location.pathname === "/admin";

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectsDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/chat"
            element={
              <ProtectedAdminRoute>
                <AdminChat />
              </ProtectedAdminRoute>
            }
          />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </AnimatePresence>

      {!isAdminPage && <Footer />}
    </>
  );
}