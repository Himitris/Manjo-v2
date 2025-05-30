import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import ScrollToTop from "../ui/ScrollToTop";

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  // Posts Instagram fictifs - en attendant l'intégration de l'API
  const instagramPosts = [
    {
      id: 1,
      image: "/assets/photo/1.jpg", // Utilise tes photos existantes
      caption: "Belle journée à la guinguette ! ☀️",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      image: "/assets/photo/2.jpg",
      caption: "Nos spécialités du terroir 🍖",
      likes: 38,
      comments: 5,
    },
    {
      id: 3,
      image: "/assets/photo/3.jpg",
      caption: "Ambiance détente au bord de l'eau 🌊",
      likes: 55,
      comments: 12,
    },
    {
      id: 4,
      image: "/assets/photo/4.jpg",
      caption: "Sous les châtaigniers 🌳",
      likes: 31,
      comments: 6,
    },
    {
      id: 5,
      image: "/assets/photo/5.jpg",
      caption: "Moment convivial en famille 👨‍👩‍👧‍👦",
      likes: 48,
      comments: 9,
    },
    {
      id: 6,
      image: "/assets/photo/6.jpg",
      caption: "Notre terrasse avec vue sur la rivière 🏞️",
      likes: 62,
      comments: 15,
    },
  ];

  return (
    <section
      id="instagram"
      className="scroll-section bg-gradient-to-br from-dark-gray/10 via-background-color to-pale-gold/20 py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Titre principal */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-playfair text-dark-gray mb-6 relative">
              Notre galerie Instagram
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pale-gold rounded-full"></div>
            </h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto mb-8">
              Découvrez l'ambiance de la guinguette à travers nos publications
            </p>

            {/* Lien vers Instagram */}
            <motion.a
              href="https://www.instagram.com/manjocarn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="mr-2 w-5 h-5" />
              Suivez-nous sur Instagram
              <ExternalLink className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Grille des posts */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-pale-gold/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Image du post */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Post Instagram ${post.id}`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 mr-1" />
                          <span className="text-sm font-semibold">
                            {post.likes}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-5 h-5 mr-1" />
                          <span className="text-sm font-semibold">
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu du post */}
                <div className="p-4">
                  <p className="text-dark-gray text-sm leading-relaxed">
                    {post.caption}
                  </p>

                  {/* Stats du post */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-pale-gold/20">
                    <div className="flex items-center space-x-4 text-dark-gray/70">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-500" />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                    </div>
                    <Instagram className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section engagement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 text-center shadow-lg border border-pale-gold/30"
          >
            <div className="space-y-4">
              <div className="flex justify-center space-x-2 text-3xl mb-4">
                <span>📸</span>
                <span>🌟</span>
                <span>❤️</span>
                <span>📱</span>
              </div>
              <h4 className="text-xl md:text-2xl font-playfair text-dark-gray mb-4">
                Partagez vos moments à Manjocarn !
              </h4>
              <p className="text-dark-gray leading-relaxed max-w-2xl mx-auto">
                N'hésitez pas à nous taguer dans vos publications et à utiliser
                le hashtag
                <span className="font-semibold text-purple-600">
                  {" "}
                  #Manjocarn
                </span>{" "}
                pour partager vos plus beaux souvenirs à la guinguette.
              </p>

              {/* Hashtags populaires */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {[
                  "#Manjocarn",
                  "#Guinguette",
                  "#Aveyron",
                  "#Nature",
                  "#Détente",
                  "#Terroir",
                ].map((hashtag, index) => (
                  <motion.span
                    key={hashtag}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {hashtag}
                  </motion.span>
                ))}
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

export default InstagramSection;
