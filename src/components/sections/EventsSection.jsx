// src/components/sections/EventsSection.jsx
import { motion } from "framer-motion";
import { Calendar, Clock, Star } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const EventsSection = () => {
  const events = [
    {
      date: "A venir",
      description: "Saison 2025",
      details: "Restez connectés pour découvrir notre programmation 2025 !",
      icon: "🌟",
    },
  ];

  return (
    <Section id="events" className="bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-manjocarn-rusty-orange mb-12"
          variants={fadeInUp}
        >
          <Calendar className="inline-block mr-4" />
          Événements
        </motion.h2>

        <motion.div className="space-y-6" variants={staggerContainer}>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-manjocarn-background to-manjocarn-pale-gold/20 rounded-xl p-8 shadow-lg border-l-4 border-manjocarn-rusty-orange"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.span
                  className="text-6xl mr-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {event.icon}
                </motion.span>
                <div className="text-center">
                  <div className="text-manjocarn-rusty-orange font-bold text-2xl mb-2">
                    {event.date}
                  </div>
                  <div className="text-manjocarn-dark-gray text-xl font-semibold mb-2">
                    {event.description}
                  </div>
                  <div className="text-manjocarn-dark-gray/80">
                    {event.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-manjocarn-forest-green/10 rounded-xl p-8 border border-manjocarn-forest-green/20"
          variants={fadeInUp}
        >
          <Star className="w-8 h-8 text-manjocarn-rusty-orange mx-auto mb-4" />
          <p className="text-manjocarn-dark-gray text-lg">
            Suivez-nous sur nos réseaux sociaux pour être informé de nos
            prochains événements !
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default EventsSection;
