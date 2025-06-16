// src/components/sections/InstagramSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import Section from "../ui/Section";
import { staggerContainer, fadeInUp } from "@/utils/animations";
import { useInstagram } from "@/hooks/useInstagram";

const InstagramSection = () => {
  const { posts, loading, error } = useInstagram();
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    if (posts.length > 0) {
      const videoPost = posts.find((post) => post.media_type === "VIDEO");
      setFeaturedPost(videoPost || posts[0]);
    }
  }, [posts]);

  return (
    <Section
      id="instagram"
      className="bg-gradient-to-br from-manjocarn-background to-manjocarn-pale-gold/20"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-6xl text-center text-manjocarn-rusty-orange mb-12"
          variants={fadeInUp}
        >
          <Instagram className="inline-block mr-4" />
          Notre Galerie
        </motion.h2>

        {loading && (
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-manjocarn-forest-green border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Chargement des photos...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-manjocarn-rusty-orange">
            <p>A venir</p>
          </div>
        )}

        {posts.length > 0 && (
          <>
            {/* Post vedette */}
            {featuredPost && (
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-2xl mb-12"
                variants={fadeInUp}
              >
                <div className="md:flex">
                  <div className="md:w-2/3">
                    {featuredPost.media_type === "VIDEO" ? (
                      <video
                        controls
                        poster={featuredPost.thumbnail_url}
                        className="w-full h-full object-cover"
                      >
                        <source src={featuredPost.media_url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={featuredPost.media_url}
                        alt="Post vedette"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="md:w-1/3 p-6">
                    <h3 className="font-playfair text-xl text-manjocarn-forest-green mb-4">
                      Post Vedette
                    </h3>
                    {featuredPost.caption && (
                      <p className="text-manjocarn-dark-gray mb-4 text-sm">
                        {featuredPost.caption.slice(0, 150)}...
                      </p>
                    )}
                    <a
                      href={featuredPost.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-manjocarn-rusty-orange hover:underline"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Voir sur Instagram
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grille des autres posts */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerContainer}
            >
              {posts
                .filter((post) => post.id !== featuredPost?.id)
                .slice(0, 8)
                .map((post, index) => (
                  <motion.a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={post.media_url}
                      alt="Post Instagram"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    {post.media_type === "VIDEO" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-b-4 border-t-transparent border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    )}
                  </motion.a>
                ))}
            </motion.div>
          </>
        )}

        {/* Lien vers Instagram */}
        <motion.div className="text-center mt-12" variants={fadeInUp}>
          <a
            href="https://www.instagram.com/manjocarn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-manjocarn-rusty-orange text-white px-8 py-3 rounded-full font-medium hover:bg-manjocarn-rusty-orange/90 transition-colors"
          >
            <Instagram className="mr-2" />
            Suivez-nous sur Instagram
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default InstagramSection;
