// src/App.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import MenuSection from "./components/sections/MenuSection";
import RestaurantSection from "./components/sections/RestaurantSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import EventsSection from "./components/sections/EventsSection";
import InstagramSection from "./components/sections/InstagramSection";
import PaymentSection from "./components/sections/PaymentSection";
import ContactSection from "./components/sections/ContactSection";
import ModernScrollIndicator from "./components/layout/ModernScrollIndicator";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-manjocarn-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <ModernScrollIndicator />
      <ScrollToTop />

      {/* Hero Section avec navigation intégrée */}
      <HeroSection />

      {/* Sections principales */}
      <main>
        <AboutSection />
        <MenuSection />
        <RestaurantSection />
        <ActivitiesSection />
        <EventsSection />
        <InstagramSection />
        <PaymentSection />
        <ContactSection />
      </main>
    </motion.div>
  );
}

export default App;
