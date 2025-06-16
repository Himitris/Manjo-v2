// src/hooks/useInstagram.js
import { useState, useEffect } from "react";

export const useInstagram = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Adapter selon votre configuration (Netlify Functions ou API directe)
        const response = await fetch("/.netlify/functions/instagram?limit=12");
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return { posts, loading, error };
};
