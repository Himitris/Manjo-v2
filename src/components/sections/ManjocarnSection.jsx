import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollToTop from "../ui/ScrollToTop";

const ManjocarnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="manjocarn"
      className="scroll-section bg-gradient-to-br from-background-color via-peach/10 to-pale-gold/20 flex items-center justify-center py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Titre principal */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-3xl md:text-5xl font-playfair text-rusty-orange mb-6 relative">
              Bienvenue à la Guinguette de Manjocarn !
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h1>
          </motion.div>

          {/* Description principale */}
          <motion.div
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-pale-gold/20"
          >
            <div className="space-y-4 text-dark-gray leading-relaxed">
              <p className="text-lg md:text-xl font-medium">
                Lieu atypique en pleine nature qui possède une plage privée et
                un accès rivière. À Manjocarn on se tutoie et on passe un
                moment.
              </p>
              <p className="text-base md:text-lg">
                On s'y arrête un temps, prendre une glace ou une bière... la
                guinguette est chaleureuse et on vous accueille avec le sourire
                😊 Les enfants sont les bienvenus.
              </p>
            </div>
          </motion.div>

          {/* Section Notre philosophie */}
          <motion.div
            variants={itemVariants}
            className="bg-forest-green/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-forest-green/20"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-playfair text-forest-green flex items-center">
                <span className="text-2xl mr-3">🌿</span>
                Notre philosophie
              </h2>

              <div className="space-y-4 text-dark-gray leading-relaxed">
                <p className="text-base md:text-lg">
                  Nous n'apprécions pas l'hypocrisie des réseaux et la
                  publicité: nous préférons fidéliser nos clients en se
                  souvenant d'eux, de leur passage et de leurs habitudes... et
                  favorisons le bouche à oreille qui génère une clientèle
                  homogène, capable d'apprécier le site.
                </p>
                <p className="text-base md:text-lg">
                  Nous sommes conscients de ne pouvoir satisfaire tout le monde
                  mais nous faisons le maximum pour contenter une majorité qui
                  sait nous le rendre ❤ et nous les remercions de leur fidélité
                  et gentillesse.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carte de contact/info rapide */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-4 mt-8"
          >
            <div className="bg-rusty-orange/10 rounded-xl p-4 text-center border border-rusty-orange/20">
              <div className="text-2xl mb-2">🏖️</div>
              <h3 className="font-semibold text-dark-gray mb-1">
                Plage privée
              </h3>
              <p className="text-sm text-dark-gray/80">
                Accès direct à la rivière
              </p>
            </div>

            <div className="bg-forest-green/10 rounded-xl p-4 text-center border border-forest-green/20">
              <div className="text-2xl mb-2">🌳</div>
              <h3 className="font-semibold text-dark-gray mb-1">
                Pleine nature
              </h3>
              <p className="text-sm text-dark-gray/80">Sous les châtaigniers</p>
            </div>

            <div className="bg-pale-gold/20 rounded-xl p-4 text-center border border-pale-gold/30">
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <h3 className="font-semibold text-dark-gray mb-1">Familles</h3>
              <p className="text-sm text-dark-gray/80">Enfants bienvenus</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bouton retour en haut */}
        <div className="mt-12 flex justify-center">
          <ScrollToTop />
        </div>
      </div>
    </section>
  );
};

export default ManjocarnSection;
