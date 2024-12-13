import { useEffect } from "react";

// Custom Hook for IntersectionObserver
export const useInfiniteScroll = (
  observerRef: React.RefObject<HTMLDivElement>,
  hasNextPage: boolean,
  fetchNextPage: () => void
) => {
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) fetchNextPage();
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef, hasNextPage, fetchNextPage]);
};
