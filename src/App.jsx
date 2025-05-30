import { useState, useEffect } from "react";
import Home from "./components/Home";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import ManjocarnSection from "./components/sections/ManjocarnSection";
import RestaurantSection from "./components/sections/RestaurantSection";
import CarteSection from "./components/sections/CarteSection";
import PayerSection from "./components/sections/PayerSection";
import EvenementsSection from "./components/sections/EvenementsSection";
import ActivitesSection from "./components/sections/ActivitesSection";
import InstagramSection from "./components/sections/InstagramSection";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton de retour en haut après avoir scrollé un peu
      setShowScrollButton(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Page d'accueil */}
      <Home />

      {/* Section Manjocarn */}
      <ManjocarnSection />

      {/* Section Restaurant */}
      <RestaurantSection />

      {/* Section La Carte */}
      <CarteSection />

      {/* Section Payer */}
      <PayerSection />

      {/* Section Événements */}
      <EvenementsSection />

      {/* Section Activités */}
      <ActivitesSection />

      {/* Section Instagram */}
      <InstagramSection />

      {/* Indicateur de scroll moderne */}
      <ScrollIndicator />

      {/* Bouton de retour en haut (masqué car redondant avec ScrollIndicator) */}
      {showScrollButton && <ScrollToTop showOnScroll={true} />}
    </div>
  );
}

export default App;
