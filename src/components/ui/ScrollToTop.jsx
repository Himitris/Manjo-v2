import { ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollToTop = ({ showOnScroll = false }) => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scrollToTop = () => {
    const homeElement = document.getElementById("accueil");
    if (homeElement) {
      homeElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      style={{ opacity: showOnScroll ? opacity : 1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showOnScroll ? undefined : 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToTop}
        className="group relative outline-none focus:outline-none"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.1 },
        }}
      >
        {/* Cercle principal */}
        <div className="w-12 h-12 bg-forest-green/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 flex items-center justify-center overflow-hidden relative">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <ArrowUp className="w-5 h-5 text-pale-gold" />
          </motion.div>

          {/* Effet wavy au clic */}
          <motion.div
            className="absolute inset-0 bg-pale-gold/30 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{
              scale: [0, 1.5, 2],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Ondulations au hover */}
        <motion.div
          className="absolute inset-0 border-2 border-forest-green/40 rounded-full"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{
            scale: [1, 1.4, 1.8],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="absolute inset-0 border border-pale-gold/50 rounded-full"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{
            scale: [1, 1.6, 2.2],
            opacity: [0.4, 0.2, 0],
          }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Petite feuille qui apparaît */}
        <motion.div
          className="absolute -top-2 -right-1 text-green-300 text-sm"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileHover={{
            opacity: 1,
            scale: 1,
            rotate: 20,
            y: -5,
            x: 3,
          }}
          transition={{ duration: 0.3 }}
        >
          🌿
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ScrollToTop;
