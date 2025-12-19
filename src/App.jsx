// src/App.jsx
import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

// Import immédiat pour la section hero (above the fold)
import HeroSection from "./components/sections/HeroSection";
import ModernScrollIndicator from "./components/layout/ModernScrollIndicator";
import ScrollToTop from "./components/ui/ScrollToTop";

// Lazy loading pour les autres sections (optimisation des performances)
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const MenuSection = lazy(() => import("./components/sections/MenuSection"));
const RestaurantSection = lazy(() => import("./components/sections/RestaurantSection"));
const ActivitiesSection = lazy(() => import("./components/sections/ActivitiesSection"));
const EventsSection = lazy(() => import("./components/sections/EventsSection"));
const InstagramSection = lazy(() => import("./components/sections/InstagramSection"));
const PaymentSection = lazy(() => import("./components/sections/PaymentSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

// Composant de chargement simple
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-manjocarn-sage-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
      transition={{ duration: 0.6 }}
    >
      <ModernScrollIndicator />
      <ScrollToTop />

      {/* Hero Section avec navigation intégrée - chargé immédiatement */}
      <HeroSection />

      {/* Sections principales - chargées à la demande */}
      <main>
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MenuSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <RestaurantSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ActivitiesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <InstagramSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PaymentSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
    </motion.div>
  );
}

export default App;
