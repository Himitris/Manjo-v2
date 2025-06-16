// src/components/sections/InstagramSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Instagram,
  ExternalLink,
  Play,
  Heart,
  MessageCircle,
  Eye,
} from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import { useInstagram } from "@/hooks/useInstagram";

const InstagramSection = () => {
  const { posts, loading, error } = useInstagram();
  const [featuredPost, setFeaturedPost] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    if (posts.length > 0) {
      const videoPost = posts.find((post) => post.media_type === "VIDEO");
      setFeaturedPost(videoPost || posts[0]);
    }
  }, [posts]);

  const handleImageLoad = (postId) => {
    setImageLoaded((prev) => ({ ...prev, [postId]: true }));
  };

  return (
    <Section
      id="instagram"
      className="bg-gradient-to-br from-manjocarn-background via-manjocarn-sand-beige/20 to-manjocarn-pale-gold/30 relative overflow-hidden"
      withDecorations
    >
      {/* Éléments décoratifs Instagram */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-16 right-20 text-manjocarn-sunset-orange/20 text-8xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          📸
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 text-manjocarn-sage-green/15 text-6xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          💫
        </motion.div>

        {/* Icônes sociales flottantes */}
        <motion.div
          className="absolute top-1/3 left-10 text-manjocarn-golden-yellow/25 text-4xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ❤️
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* En-tête amélioré */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center mb-6 card-nature px-8 py-4 rounded-full shadow-warm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Instagram
                className="mr-3 text-manjocarn-sunset-orange"
                size={32}
              />
            </motion.div>
            <span className="text-lg font-semibold text-manjocarn-dark-gray">
              Suivez-nous
            </span>
          </motion.div>

          <h2 className="font-playfair text-4xl md:text-6xl text-gradient-warm mb-6">
            Notre Galerie Instagram
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-manjocarn-sunset-orange via-manjocarn-golden-yellow to-manjocarn-sage-green mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <p className="mt-6 text-lg text-manjocarn-dark-gray max-w-2xl mx-auto leading-relaxed">
            Découvrez l'ambiance unique du Manjocarn à travers nos photos et
            moments partagés.
          </p>
        </motion.div>

        {/* États de chargement et d'erreur améliorés */}
        {loading && (
          <motion.div className="text-center py-20" variants={fadeInUp}>
            <div className="relative inline-block">
              <motion.div
                className="w-16 h-16 border-4 border-manjocarn-sage-green border-t-transparent rounded-full mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-16 h-16 border-4 border-manjocarn-golden-yellow border-b-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="text-manjocarn-dark-gray">
              Chargement de nos souvenirs...
            </p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="text-center py-20 card-nature rounded-2xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📱
            </motion.div>
            <h3 className="text-2xl font-playfair text-gradient-warm mb-4">
              Galerie à venir
            </h3>
            <p className="text-manjocarn-dark-gray mb-6">
              Nous préparons de magnifiques photos pour vous faire découvrir
              l'atmosphère du Manjocarn.
            </p>
            <motion.a
              href="https://www.instagram.com/manjocarn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-warm inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="mr-2" size={20} />
              Suivez-nous en attendant
            </motion.a>
          </motion.div>
        )}

        {/* Contenu Instagram */}
        {posts.length > 0 && (
          <>
            {/* Post vedette amélioré */}
            {featuredPost && (
              <motion.div
                className="card-nature rounded-3xl overflow-hidden shadow-warm-lg mb-16 max-w-4xl mx-auto"
                variants={fadeInUp}
              >
                <div className="md:flex">
                  <div className="md:w-2/3 relative group">
                    {featuredPost.media_type === "VIDEO" ? (
                      <div className="relative">
                        <video
                          controls
                          poster={featuredPost.thumbnail_url}
                          className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                        >
                          <source
                            src={featuredPost.media_url}
                            type="video/mp4"
                          />
                        </video>
                        <div className="absolute top-4 left-4 bg-manjocarn-sunset-orange text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Play
                            size={14}
                            className="mr-1"
                            fill="currentColor"
                          />
                          Vidéo
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={featuredPost.media_url}
                          alt="Post vedette"
                          className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-transform duration-500 group-hover:scale-105"
                          onLoad={() => handleImageLoad(featuredPost.id)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"></div>

                        {/* Badge post vedette */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-manjocarn-golden-yellow to-manjocarn-sunset-orange text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-warm">
                          <Eye size={14} className="mr-2" />
                          Post Vedette
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-manjocarn-background to-manjocarn-sand-beige/50">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-manjocarn-sage-green to-manjocarn-forest-green rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">M</span>
                        </div>
                        <div>
                          <h3 className="font-playfair text-xl text-manjocarn-forest-green font-bold">
                            @manjocarn
                          </h3>
                          <p className="text-sm text-manjocarn-dark-gray/70">
                            Guinguette en pleine nature
                          </p>
                        </div>
                      </div>

                      {featuredPost.caption && (
                        <p className="text-manjocarn-dark-gray mb-6 text-sm leading-relaxed">
                          {featuredPost.caption.slice(0, 200)}
                          {featuredPost.caption.length > 200 && "..."}
                        </p>
                      )}

                      {/* Statistiques fictives */}
                      <div className="flex items-center gap-4 mb-6 text-sm text-manjocarn-dark-gray/70">
                        <div className="flex items-center">
                          <Heart size={16} className="mr-1" />
                          <span>42</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle size={16} className="mr-1" />
                          <span>8</span>
                        </div>
                      </div>

                      <motion.a
                        href={featuredPost.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-warm w-full justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Voir sur Instagram
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grille des autres posts améliorée */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              variants={staggerContainer}
            >
              {posts
                .filter((post) => post.id !== featuredPost?.id)
                .slice(0, 12)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    onClick={() => setSelectedImage(post)}
                  >
                    {/* Image avec skeleton loading */}
                    <div className="relative w-full h-full">
                      {!imageLoaded[post.id] && (
                        <div className="absolute inset-0 bg-manjocarn-sage-green/20 animate-pulse rounded-2xl"></div>
                      )}

                      <img
                        src={post.media_url}
                        alt="Post Instagram"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                        onLoad={() => handleImageLoad(post.id)}
                      />

                      {/* Overlay avec informations */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                        <div className="text-white text-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center">
                              <Heart
                                size={14}
                                className="mr-1"
                                fill="currentColor"
                              />
                              <span>{Math.floor(Math.random() * 50) + 10}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageCircle size={14} className="mr-1" />
                              <span>{Math.floor(Math.random() * 10) + 1}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Indicateur vidéo */}
                      {post.media_type === "VIDEO" && (
                        <div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full">
                          <Play size={14} fill="currentColor" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </>
        )}

        {/* Modal d'image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.media_url}
                alt="Image agrandie"
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <motion.button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {selectedImage.caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm leading-relaxed">
                    {selectedImage.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default InstagramSection;
