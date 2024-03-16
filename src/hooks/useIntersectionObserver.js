import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options, limit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);

      if (limit && entry.isIntersecting) {
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, limit]);

  return [ref, isVisible];
};

export default useIntersectionObserver;
