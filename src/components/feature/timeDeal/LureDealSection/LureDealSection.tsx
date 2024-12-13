import { useSuspenseLureDeals } from "@/hooks/queries/deal/useLureDeal";
import styles from "./LureDealSection.module.css";
import { Title, Carousel, Card } from "@/components/";

// 메인 LureDealSection 컴포넌트
export const LureDealSection = () => {
  const { data: lureDeals } = useSuspenseLureDeals();

  return (
    <section className={styles.lure_deal}>
      <Title
        caption="오늘만 이 가격, 순삭특가!"
        className={styles.lure_deal_title}
      />
      <main className={styles.lure_deal_main}>
        <Carousel
          items={lureDeals}
          styles={styles}
          renderItem={(dealInfo) => (
            <Card
              key={dealInfo.id}
              imageSrc={dealInfo.image}
              imageAlt={dealInfo.title}
              title={dealInfo.title}
              discountRate={dealInfo.discountRate}
              discountedPrice={dealInfo.discountedPrice}
              styles={styles}
            />
          )}
        />
      </main>
    </section>
  );
};
