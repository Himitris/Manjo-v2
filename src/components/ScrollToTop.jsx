import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = ({ showOnScroll = false }) => {
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
    <motion.button
      className="scroll-to-top group"
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={showOnScroll ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </motion.button>
  );
};

export default ScrollToTop;
