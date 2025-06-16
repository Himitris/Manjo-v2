// src/components/sections/AboutSection.jsx
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const AboutSection = () => {
  return (
    <Section
      id="about"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/30 to-manjocarn-mint-green/20 floating-elements relative"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Motifs naturels subtils */}
        <motion.div
          className="absolute top-20 left-10 text-manjocarn-sage-green/20 text-8xl"
          animate={{
            rotate: [0, 10, -5, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 text-manjocarn-leaf-green/25 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 text-manjocarn-mint-green/15 text-7xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🌱
        </motion.div>

        {/* Cercles décoratifs */}
        <div className="absolute top-16 right-20 w-24 h-24 bg-manjocarn-golden-yellow/10 rounded-full blur-xl animate-pulse-soft"></div>
        <div className="absolute bottom-40 left-32 w-32 h-32 bg-manjocarn-sage-green/10 rounded-full blur-2xl animate-float"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="font-playfair text-4xl md:text-6xl text-gradient-nature mb-6">
            Bienvenue à Manjocarn
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-golden-yellow mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
        >
          {/* Image avec effet amélioré */}
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-golden-yellow rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <motion.img
              src="/assets/photo/1.jpg"
              alt="Manjocarn vue extérieure"
              className="relative rounded-2xl shadow-nature-lg w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              whileHover={{
                rotateY: 5,
                rotateX: 2,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {/* Overlay décoratif */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-manjocarn-deep-forest/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Contenu textuel amélioré */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <motion.div
              className="card-nature rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icône décorative */}
              <div className="absolute top-4 right-4 text-manjocarn-sage-green/20 text-3xl">
                🏞️
              </div>

              <p className="text-lg text-manjocarn-dark-gray leading-relaxed mb-4 font-medium">
                Lieu atypique en pleine nature qui possède une{" "}
                <span className="text-gradient-nature font-semibold">
                  plage privée
                </span>{" "}
                et un{" "}
                <span className="text-gradient-nature font-semibold">
                  accès rivière
                </span>
                .
              </p>

              <p className="text-lg text-manjocarn-dark-gray leading-relaxed">
                À Manjocarn on se tutoie et on passe un moment. On s'y arrête un
                temps, prendre une glace ou une bière... la guinguette est
                chaleureuse et on vous accueille avec le sourire 😊
              </p>
            </motion.div>

            <motion.div
              className="card-nature rounded-2xl p-8 bg-gradient-to-br from-manjocarn-sage-green/5 to-manjocarn-mint-green/10 border-2 border-manjocarn-sage-green/20 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Effet de brillance au survol */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.span
                    className="text-3xl mr-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🌟
                  </motion.span>
                  <h3 className="font-playfair text-2xl text-gradient-nature font-bold">
                    Notre Philosophie
                  </h3>
                </div>

                <p className="text-manjocarn-dark-gray leading-relaxed">
                  Nous privilégions l'
                  <span className="font-semibold text-manjocarn-forest-green">
                    authenticité
                  </span>{" "}
                  et le{" "}
                  <span className="font-semibold text-manjocarn-forest-green">
                    bouche-à-oreille
                  </span>{" "}
                  pour créer une clientèle homogène qui sait apprécier notre
                  lieu unique.
                </p>

                {/* Points clés */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <motion.div
                    className="flex items-center text-sm text-manjocarn-forest-green"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">🌿</span>
                    <span className="font-medium">Pleine nature</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-sm text-manjocarn-forest-green"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">🏖️</span>
                    <span className="font-medium">Plage privée</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-sm text-manjocarn-forest-green"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">🌊</span>
                    <span className="font-medium">Accès rivière</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-sm text-manjocarn-forest-green"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">😊</span>
                    <span className="font-medium">Accueil chaleureux</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Citation décorative */}
            <motion.div className="text-center relative" variants={fadeInUp}>
              <motion.blockquote
                className="font-amatic text-2xl md:text-3xl text-manjocarn-forest-green italic relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-manjocarn-golden-yellow text-4xl absolute -top-2 -left-4">
                  "
                </span>
                Un endroit où le temps s'arrête
                <span className="text-manjocarn-golden-yellow text-4xl absolute -bottom-6 -right-4">
                  "
                </span>
              </motion.blockquote>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section statistiques amusante */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {[
            { icon: "🍻", number: "∞", label: "Sourires partagés" },
            { icon: "🎣", number: "24/7", label: "Accès rivière" },
            { icon: "❤️", number: "💯", label: "Authenticité" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center card-nature p-6 rounded-xl hover:shadow-nature-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-gradient-nature mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-manjocarn-dark-gray font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
