// src/components/sections/AboutSection.jsx
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const AboutSection = () => {
  return (
    <Section
      id="about"
      className="bg-gradient-to-br from-manjocarn-background to-manjocarn-peach/20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-manjocarn-rusty-orange mb-8"
          variants={fadeInUp}
        >
          Bienvenue à Manjocarn
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <img
              src="/assets/photo/1.jpg"
              alt="Manjocarn vue extérieure"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp}>
            <p className="text-lg text-manjocarn-dark-gray leading-relaxed">
              Lieu atypique en pleine nature qui possède une plage privée et un
              accès rivière. À Manjocarn on se tutoie et on passe un moment.
            </p>

            <p className="text-lg text-manjocarn-dark-gray leading-relaxed">
              On s'y arrête un temps, prendre une glace ou une bière... la
              guinguette est chaleureuse et on vous accueille avec le sourire 😊
            </p>

            <motion.div
              className="bg-manjocarn-forest-green/10 p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-playfair text-xl text-manjocarn-forest-green mb-3">
                Notre Philosophie
              </h3>
              <p className="text-manjocarn-dark-gray">
                Nous privilégions l'authenticité et le bouche-à-oreille pour
                créer une clientèle homogène qui sait apprécier notre lieu
                unique.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
