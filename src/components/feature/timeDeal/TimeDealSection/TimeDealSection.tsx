import { useEffect, useRef, useState } from "react";
import { TabHeader } from "./TabHeader";
import { Title, Card, InfiniteScrollLoader } from "@/components";
import { useVisibleItems } from "@/hooks/custom/useVisibleItems";
import { useInfiniteScroll } from "@/hooks/custom/useInfiniteScroll";
import { useInfiniteTimeDeals } from "@/hooks/queries/deal/useTimeDeal";
import { IInfinityTimeDealsResponse } from "@/types/deal/timeDeal";
import styles from "./TimeDealSection.module.css";
import { getCurrentTime } from "@/utils/date";

/**
 * 현재 시간을 주기적으로 업데이트하는 커스텀 훅
 * @param setCurrentHour 상태 업데이트 함수
 */
const useCurrentTimeUpdater = (
  setCurrentHour: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const { hour } = getCurrentTime();
      setCurrentHour(hour);
    }, 1000);

    return () => clearInterval(interval); // 정리 함수
  }, [setCurrentHour]);
};

/**
 * 현재 시간에 따라 활성 탭을 동기화하는 커스텀 훅
 * @param currentHour 현재 시간
 * @param setActiveTab 활성 탭 상태 업데이트 함수
 */
const useActiveTabSync = (
  currentHour: number,
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    setActiveTab(currentHour);
  }, [currentHour, setActiveTab]);
};

export const TimeDealSection = () => {
  const { hour: initialHour } = getCurrentTime();
  const [currentHour, setCurrentHour] = useState(initialHour);
  const [activeTab, setActiveTab] = useState(initialHour);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isTimeForTabs = initialHour >= 7 && initialHour < 22;

  const {
    data: timeDeals,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteTimeDeals({
    params: { page: 1, time: activeTab === currentHour ? "current" : "next" },
  });

  const visibleItems = useVisibleItems(
    timeDeals as unknown as IInfinityTimeDealsResponse
  );

  // 커스텀 훅 사용
  useCurrentTimeUpdater(setCurrentHour);
  useActiveTabSync(currentHour, setActiveTab);
  useInfiniteScroll(observerRef, hasNextPage, fetchNextPage);

  // 탭 클릭 핸들러
  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
    const container = document.getElementById("timeDealContainer");
    if (container) {
      container.classList.add(styles.fade);
      setTimeout(() => container.classList.remove(styles.fade), 500);
    }
  };

  return (
    <section className={styles.time_deal}>
      {!isTimeForTabs ? (
        <Title
          caption={
            currentHour === 22
              ? "11시에 끝나는 오늘의 마지막 타임특가!"
              : "7시에 시작되는 오늘의 타임특가!"
          }
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
            isLocked={
              isTimeForTabs ? currentHour !== activeTab : currentHour !== 22
            }
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
