import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock } from "lucide-react";
import ScrollToTop from "../ui/ScrollToTop";

const EvenementsSection = () => {
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

  const events = [{ date: "A venir", description: "Saison 2025" }];

  return (
    <section
      id="evenements"
      className="scroll-section bg-gradient-to-br from-rusty-orange/10 via-background-color to-peach/20 py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Titre principal */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-playfair text-rusty-orange mb-6 relative">
              Événements
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Découvrez les événements et festivités organisés à la guinguette
            </p>
          </motion.div>

          {/* Liste des événements */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-rusty-orange/20"
          >
            <div className="flex items-center mb-6">
              <Calendar className="text-rusty-orange mr-3 w-7 h-7" />
              <h3 className="text-2xl font-playfair text-forest-green">
                Prochains événements
              </h3>
            </div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-pale-gold pl-6 py-4 bg-gradient-to-r from-pale-gold/10 to-transparent rounded-r-lg hover:from-pale-gold/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-rusty-orange/10 p-2 rounded-full flex-shrink-0">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 text-rusty-orange mr-2" />
                        <span className="text-rusty-orange font-bold text-lg uppercase tracking-wide">
                          {event.date}
                        </span>
                      </div>
                      <p className="text-dark-gray text-lg leading-relaxed border-l-2 border-pale-gold/30 pl-4">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Invitation à suivre */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-forest-green/10 to-rusty-orange/10 rounded-2xl p-6 md:p-8 text-center shadow-lg border border-pale-gold/30"
          >
            <div className="space-y-4">
              <div className="flex justify-center space-x-2 text-3xl mb-4">
                <span>🎪</span>
                <span>🎵</span>
                <span>🍻</span>
                <span>🎊</span>
              </div>
              <h4 className="text-xl md:text-2xl font-playfair text-forest-green mb-4">
                Restez informés !
              </h4>
              <p className="text-dark-gray leading-relaxed max-w-2xl mx-auto">
                Pour ne manquer aucun événement, suivez-nous ou appelez-nous
                directement. Nous organisons régulièrement des soirées
                thématiques, des concerts et des animations pour tous les âges !
              </p>
              <div className="mt-6">
                <motion.a
                  href="tel:+33563682585"
                  className="inline-flex items-center bg-rusty-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-rusty-orange/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Nous contacter
                </motion.a>
              </div>
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

export default EvenementsSection;
