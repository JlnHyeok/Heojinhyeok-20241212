import { useEffect, useRef, useState } from "react";
import styles from "./BrandDealSection.module.css";
import { useSuspenseBrandDeals } from "@/hooks/queries/deal/useBrandDeal";
import { calculateTimeDifference } from "@/utils/date";
import { Card, Carousel, Title } from "@/components";

// Remaining time을 업데이트하는 훅
const useRemainingTimes = (brandDeals: any[]) => {
  const [remainingTimes, setRemainingTimes] = useState<string[]>([]);
  const intervalRef = useRef<number>();

  // brandDeals가 업데이트될 때마다 remainingTimes를 업데이트
  useEffect(() => {
    if (!brandDeals) return;

    // 남은 시간을 계산하고 업데이트하는 함수
    const updateTimes = () => {
      const now = new Date().toISOString();
      const updatedTimes = brandDeals.map(
        (deal) =>
          calculateTimeDifference(now, deal.discountEndDate) || "할인 종료"
      );
      setRemainingTimes(updatedTimes);
    };

    updateTimes();

    // 1초마다 updateTimes 함수를 호출
    intervalRef.current = setInterval(updateTimes, 1000);

    // interval 해제
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [brandDeals]);

  return remainingTimes;
};

// 메인 BrandDealSection 컴포넌트
export const BrandDealSection = ({
  handleClickGoToBrandDeal,
}: {
  handleClickGoToBrandDeal: () => void;
}) => {
  const { data: brandDeals } = useSuspenseBrandDeals({
    params: { page: 1 },
  });

  const remainingTimes = useRemainingTimes(brandDeals?.itemList || []);

  return (
    <section className={styles.brand_deal}>
      <Title caption="오늘의 브랜드딜" className={styles.brand_deal_title}>
        <span
          className={styles.brand_deal_all_button}
          onClick={handleClickGoToBrandDeal}
        >
          전체보기
        </span>
      </Title>

      <main className={styles.brand_deal_main}>
        <Carousel
          items={brandDeals.itemList}
          styles={styles}
          renderItem={(dealInfo, index) => (
            <Card
              key={dealInfo.id}
              imageSrc={dealInfo.image}
              imageAlt={dealInfo.title}
              title={dealInfo.title}
              discountRate={dealInfo.discountRate}
              discountedPrice={dealInfo.discountedPrice}
              remainingTime={remainingTimes[index]} // 추가된 데이터
              styles={styles}
            />
          )}
        />
      </main>
    </section>
  );
};
