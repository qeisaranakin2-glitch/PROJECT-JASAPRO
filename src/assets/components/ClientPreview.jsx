import { motion } from "framer-motion";

const ClientPreview = ({ clients }) => {
  const loopClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative w-full py-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-gray-200/80 bg-gradient-to-br from-white via-gray-50 to-white px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_45%)]" />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/90 to-transparent" />

        <motion.div
          className="relative flex w-max items-center gap-12"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {loopClients.map((client, index) => (
            <motion.a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="flex h-[150px] w-[280px] items-center justify-center rounded-[28px] border border-white/70 bg-white/80 px-8 py-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 group-hover:border-gray-200 group-hover:bg-white group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 w-auto object-contain opacity-90 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPreview;