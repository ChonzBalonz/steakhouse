import { useState, useEffect, useRef } from "react";

export const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current; // Capture the current ref value
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use the captured value in the cleanup
      }
    };
  }, [ref, options]); // The dependency array is correct as is

  return [ref, isInView];
};
