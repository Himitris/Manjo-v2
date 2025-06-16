// src/components/ui/Section.jsx
import { motion } from "framer-motion";
import { useScrollInView } from "@/hooks/useScrollInView";
import { fadeInUp } from "@/utils/animations";

const Section = ({
  id,
  children,
  className = "",
  bgColor = "",
  containerClassName = "",
}) => {
  const { ref, inView } = useScrollInView();

  // Couleurs de fond par défaut si aucune n'est spécifiée
  const defaultBg = !bgColor ? "bg-manjocarn-background" : bgColor;

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`min-h-screen py-20 ${defaultBg} ${className}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
