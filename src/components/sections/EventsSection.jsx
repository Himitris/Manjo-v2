// src/components/sections/EventsSection.jsx
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";

const EventsSection = () => {
  // Liste simplifiée des événements
  const events = [
    {
      id: 1,
      title: "Ouverture de Saison 2025",
      date: "2025-05-01",
      time: "TimeAllDay",
      description: "Célébrons ensemble l'ouverture de notre nouvelle saison !",
      price: "Gratuit",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <Section
      id="events"
      className="bg-gradient-to-br from-manjocarn-background to-manjocarn-sand-beige/30"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="font-playfair text-4xl md:text-5xl text-gradient-warm mb-4">
            Nos Événements
          </h2>
          <p className="text-lg text-manjocarn-dark-gray max-w-2xl mx-auto">
            Découvrez notre programmation dans un cadre naturel exceptionnel.
          </p>
        </motion.div>

        {/* Liste des événements */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="card-nature rounded-xl p-6 hover:shadow-warm transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {/* Titre */}
              <h3 className="font-playfair text-xl font-bold text-manjocarn-forest-green mb-3">
                {event.title}
              </h3>

              {/* Date et heure */}
              <div className="flex items-center text-manjocarn-sunset-orange mb-2">
                <Calendar size={16} className="mr-2" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>

              <div className="flex items-center text-manjocarn-sunset-orange mb-4">
                <Clock size={16} className="mr-2" />
                <span>
                  {event.time === "TimeAllDay"
                    ? "Toute la journée"
                    : event.time}
                </span>
              </div>

              {/* Description */}
              <p className="text-manjocarn-dark-gray mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Prix et lieu */}
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-manjocarn-forest-green">
                  <MapPin size={14} className="mr-1" />
                  <span>Manjocarn</span>
                </div>
                <span className="bg-manjocarn-golden-yellow/20 text-manjocarn-sunset-orange px-3 py-1 rounded-full font-bold text-sm">
                  {event.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact simple */}
        <motion.div
          className="text-center mt-12 card-nature rounded-xl p-6"
          variants={fadeInUp}
        >
          <h3 className="font-playfair text-xl text-manjocarn-forest-green mb-3">
            Réservations
          </h3>
          <p className="text-manjocarn-dark-gray mb-4">
            Pour réserver
          </p>
          <a href="tel:+33563682585" className="btn-warm inline-block">
            +33 5 63 68 25 85
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default EventsSection;
