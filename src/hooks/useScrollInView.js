// src/hooks/useScrollInView.js
import { useInView } from "react-intersection-observer";

export const useScrollInView = (threshold = 0.3) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
};
