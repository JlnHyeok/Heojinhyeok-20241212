import { useState, useCallback } from "react";

export const useIntersectionObserver = () => {
  const [inViewProgress, setInViewProgress] = useState<Map<string, boolean>>(
    new Map()
  );

  const handleIntersection = useCallback(
    (entry: IntersectionObserverEntry, id: number) => {
      if (entry.isIntersecting) {
        setInViewProgress((prevState) =>
          new Map(prevState).set(id.toString(), true)
        );
      }
    },
    []
  );

  return {
    inViewProgress,
    handleIntersection,
  };
};
