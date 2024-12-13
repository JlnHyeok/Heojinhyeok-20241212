import { useInfiniteScroll } from "@/hooks/custom/useInfiniteScroll";
import { useIntersectionObserver } from "@/hooks/custom/useIntersectionObserver";
import { useVisibleItems } from "@/hooks/custom/useVisibleItems";
import { useInfiniteBrandDeals } from "@/hooks/queries/deal/useBrandDeal";
import { IInfinityBrandDealsResponse } from "@/types/deal/brandDeal";
import { useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { BrandDealCard } from "./BrandDealCard";
import { InfiniteScrollLoader } from "@/components";

interface BrandDealContentsProps {
  styles: { [key: string]: string };
}

export const BrandDealContents: React.FC<BrandDealContentsProps> = ({
  styles,
}) => {
  const queryClient = useQueryClient();
  const observerRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver 훅
  const { inViewProgress, handleIntersection } = useIntersectionObserver();

  // Infinite scroll 훅
  const {
    data: brandDeals,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteBrandDeals({
    params: { page: 1 },
    queryClient,
  });

  // 현재 보여지는 아이템들을 관리하는 useVisibleItems 훅
  const visibleItems =
    useVisibleItems(brandDeals as unknown as IInfinityBrandDealsResponse) || [];

  // Infinite scroll 연결
  useInfiniteScroll(observerRef, hasNextPage, fetchNextPage);

  return (
    <>
      <main className={styles.brand_deal_page_main}>
        {visibleItems.map((brandDeal) => (
          <BrandDealCard
            key={brandDeal.id}
            brandDeal={brandDeal}
            handleIntersection={handleIntersection}
            inViewProgress={inViewProgress}
            styles={styles}
          />
        ))}
      </main>

      <InfiniteScrollLoader
        className={styles.observer}
        isLoading={isFetchingNextPage}
        ref={observerRef}
      />
    </>
  );
};
