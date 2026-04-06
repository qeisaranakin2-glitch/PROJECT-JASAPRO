import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";

export default function CareerPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-white"
    >
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-28 pb-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Your Career at Jasapro
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Join a team of professionals in geospatial, geotechnical, and survey engineering.
            Work on real projects with modern technology and deliver accurate data that matters.
          </p>
        </div>
      </section>

      {/* ABOUT WORK */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border bg-gray-50">
            <h3 className="font-semibold text-xl mb-3">Real Field Projects</h3>
            <p className="text-gray-500">
              Work directly on real-world projects such as topographic surveys,
              LiDAR mapping, bathymetry, and soil investigation.
            </p>
          </div>

          <div className="p-8 rounded-3xl border bg-gray-50">
            <h3 className="font-semibold text-xl mb-3">Modern Technology</h3>
            <p className="text-gray-500">
              Use advanced tools such as GNSS, UAV LiDAR, sonar systems,
              and geotechnical equipment.
            </p>
          </div>

          <div className="p-8 rounded-3xl border bg-gray-50">
            <h3 className="font-semibold text-xl mb-3">Professional Growth</h3>
            <p className="text-gray-500">
              Develop your skills with training, certifications,
              and hands-on experience in engineering projects.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Open Positions
          </h2>

          <div className="space-y-6">

            {/* JOB 1 */}
            <div className="p-8 border rounded-3xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">
                Surveyor / Geodesy Engineer
              </h3>
              <p className="text-gray-500 mb-4">
                Conduct field surveys, mapping, and data processing using GNSS and Total Station.
              </p>

              <ul className="text-gray-500 space-y-2 mb-6">
                <li>• Background in Geodesy / Geomatics</li>
                <li>• Experience with survey equipment</li>
                <li>• Willing to work on field projects</li>
              </ul>

              <a
                href="mailto:hello@jasapro.com"
                className="bg-gray-900 text-white px-5 py-2 rounded-full"
              >
                Apply Now
              </a>
            </div>

            {/* JOB 2 */}
            <div className="p-8 border rounded-3xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">
                Geotechnical Engineer
              </h3>
              <p className="text-gray-500 mb-4">
                Handle soil investigation, drilling supervision, and geotechnical analysis.
              </p>

              <ul className="text-gray-500 space-y-2 mb-6">
                <li>• Background in Civil / Geology</li>
                <li>• Understand SPT, CPT, and lab testing</li>
                <li>• Able to analyze soil data</li>
              </ul>

              <a
                href="mailto:hello@jasapro.com"
                className="bg-gray-900 text-white px-5 py-2 rounded-full"
              >
                Apply Now
              </a>
            </div>

            {/* JOB 3 */}
            <div className="p-8 border rounded-3xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">
                GIS & Data Analyst
              </h3>
              <p className="text-gray-500 mb-4">
                Process spatial data, mapping, and analysis using GIS software.
              </p>

              <ul className="text-gray-500 space-y-2 mb-6">
                <li>• Familiar with ArcGIS / QGIS</li>
                <li>• Data visualization skills</li>
                <li>• Understanding of geospatial data</li>
              </ul>

              <a
                href="mailto:hello@jasapro.com"
                className="bg-gray-900 text-white px-5 py-2 rounded-full"
              >
                Apply Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-gray-900 text-white p-12 rounded-[32px]">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Team
          </h2>

          <p className="text-gray-300 mb-6">
            Send your CV and portfolio to start your career with Jasapro.
          </p>

          <a
            href="mailto:hello@jasapro.com"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium"
          >
            Send Your CV
          </a>
        </div>
      </section>

    </motion.main>
  );
}