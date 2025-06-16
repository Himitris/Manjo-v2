// src/components/layout/ScrollIndicator.jsx
import { motion, useScroll } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-manjocarn-pale-gold origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollIndicator;
