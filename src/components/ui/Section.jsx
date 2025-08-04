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
  variant = "default", // default, nature, warm, dark
  withParallax = false,
  withDecorations = false,
}) => {
  const { ref, inView } = useScrollInView();

  // Variants de style selon le type de section
  const getVariantClasses = () => {
    switch (variant) {
      case "nature":
        return "bg-gradient-to-br from-manjocarn-sage-green/10 via-manjocarn-background to-manjocarn-mint-green/20";
      case "warm":
        return "bg-gradient-to-br from-manjocarn-golden-yellow/20 via-manjocarn-sand-beige/30 to-manjocarn-sunset-orange/10";
      case "dark":
        return "bg-gradient-to-br from-manjocarn-deep-forest via-manjocarn-forest-green to-manjocarn-pine-green";
      default:
        return "bg-manjocarn-background";
    }
  };

  // Couleurs de fond par défaut si aucune n'est spécifiée
  const sectionBg = bgColor || getVariantClasses();

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden ${sectionBg} ${className}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {/* Texture de fond subtile */}
      {variant !== "default" && (
        <div className="absolute inset-0 bg-texture-paper opacity-20 pointer-events-none"></div>
      )}

      {/* Décorations géométriques subtiles sans émojis */}
      {withDecorations && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Formes géométriques flottantes au lieu d'émojis */}
          <motion.div
            className="absolute top-20 left-[10%] w-4 h-4 bg-manjocarn-sage-green/15 rounded-full hidden md:block"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-32 right-[15%] w-6 h-6 bg-manjocarn-leaf-green/20 rounded-full hidden lg:block"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-[5%] w-3 h-3 bg-manjocarn-mint-green/10 rounded-full hidden xl:block"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Bulles lumineuses */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-manjocarn-golden-yellow/10 rounded-full blur-xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/3 left-1/5 w-20 h-20 md:w-32 md:h-32 bg-manjocarn-sage-green/10 rounded-full blur-2xl animate-float"></div>

          {/* Formes géométriques supplémentaires */}
          <motion.div
            className="absolute top-1/3 right-1/5 w-2 h-16 bg-manjocarn-sage-green/10 rounded-full hidden lg:block"
            animate={{
              rotate: [0, 5, -5, 0],
              scaleY: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-8 h-2 bg-manjocarn-mint-green/15 rounded-full hidden md:block"
            animate={{
              rotate: [0, -5, 5, 0],
              scaleX: [1, 1.3, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      )}

      {/* Effet parallax optionnel */}
      {withParallax && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-manjocarn-sage-green/5 to-transparent"
          style={{
            y: withParallax ? "-50%" : "0%",
          }}
        />
      )}

      {/* Contenu principal */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full ${containerClassName}`}
      >
        {children}
      </div>
    </motion.section>
  );
};

// Composant spécialisé pour les sections avec hero
export const HeroSection = ({ children, className = "", ...props }) => (
  <Section
    className={`min-h-screen flex items-center justify-center ${className}`}
    variant="dark"
    withDecorations
    {...props}
  >
    {children}
  </Section>
);

// Composant spécialisé pour les sections de contenu
export const ContentSection = ({ children, className = "", ...props }) => (
  <Section
    className={`min-h-auto py-16 md:py-24 ${className}`}
    variant="nature"
    withDecorations
    {...props}
  >
    {children}
  </Section>
);

// Composant spécialisé pour les sections d'accent
export const AccentSection = ({ children, className = "", ...props }) => (
  <Section
    className={`min-h-auto py-12 md:py-20 ${className}`}
    variant="warm"
    {...props}
  >
    {children}
  </Section>
);

export default Section;
