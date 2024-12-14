import { TabHeader } from "./TabHeader";
import { Title, Card, InfiniteScrollLoader } from "@/components";
import { getCurrentTime } from "@/utils/date";
import { useVisibleItems } from "@/hooks/custom/useVisibleItems";
import { useInfiniteScroll } from "@/hooks/custom/useInfiniteScroll";
import { useInfiniteTimeDeals } from "@/hooks/queries/deal/useTimeDeal";
import { IInfinityTimeDealsResponse } from "@/types/deal/timeDeal";
import { useEffect, useRef, useState } from "react";
import styles from "./TimeDealSection.module.css";

export const TimeDealSection = () => {
  const { hour: initialHour } = getCurrentTime();
  const [currentHour, setCurrentHour] = useState(initialHour);
  const [activeTab, setActiveTab] = useState(initialHour);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isTimeForTabs = initialHour >= 7 && initialHour < 22;

  // 무한 스크롤을 위한 useInfiniteTimeDeals 훅
  const {
    data: timeDeals,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteTimeDeals({
    params: { page: 1, time: activeTab === currentHour ? "current" : "next" },
  });

  // 현재 보여지는 아이템들을 관리하는 useVisibleItems 훅
  const visibleItems = useVisibleItems(
    timeDeals as unknown as IInfinityTimeDealsResponse
  );

  // 무한 스크롤을 위한 useInfiniteScroll 훅
  useInfiniteScroll(observerRef, hasNextPage, fetchNextPage);

  // 탭 클릭 시 activeTab을 업데이트하고 timeDealContainer에 fade Effect 적용
  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
    const container = document.getElementById("timeDealContainer");
    container?.classList.add(styles.fade);
    setTimeout(() => container?.classList.remove(styles.fade), 500);
  };

  // 매 초마다 현재 시간을 체크하여 currentHour를 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      const { hour } = getCurrentTime();
      setCurrentHour(hour);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className={styles.time_deal}>
      {!isTimeForTabs ? (
        <Title
          caption={`${
            currentHour >= 22
              ? "11시에 끝나는 오늘의 마지막 타임특가!"
              : "7시에 시작되는 오늘의 타임특가!"
          }`}
          className={styles.time_deal_title_before_open}
        />
      ) : (
        <TabHeader
          hour={currentHour}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          styles={styles}
        />
      )}

      <div id="timeDealContainer" className={styles.time_deal_container}>
        {visibleItems.map((item) => (
          <Card
            key={item.id}
            imageSrc={item.image}
            imageAlt={item.title}
            title={item.title}
            discountRate={item.discountRate}
            discountedPrice={item.discountedPrice}
            isLocked={isTimeForTabs ? currentHour !== activeTab : true}
            isTimeDeal={true}
            originalPrice={item.originalPrice}
            styles={styles}
          />
        ))}
      </div>

      <InfiniteScrollLoader
        className={styles.observer}
        isLoading={isFetchingNextPage}
        ref={observerRef}
      />
    </section>
  );
};
