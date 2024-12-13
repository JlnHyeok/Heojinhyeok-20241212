import { CardImage } from "@/components/ui/cardImage/CardImage";
import { Price } from "@/components/ui/price/Price";
import { IBrandDealProduct } from "@/types/deal/brandDeal";

interface BrandDealCardProps {
  brandDeal: IBrandDealProduct;
  handleIntersection: (entry: IntersectionObserverEntry, id: number) => void;
  inViewProgress: Map<string, boolean>;
  styles: { [key: string]: string };
}

export const BrandDealCard: React.FC<BrandDealCardProps> = ({
  brandDeal,
  handleIntersection,
  inViewProgress,
  styles,
}) => {
  const isInView = inViewProgress.get(brandDeal.id.toString()) ?? false;

  return (
    <article className={styles.brand_deal_page_card}>
      <CardImage
        imageSrc={brandDeal.image}
        imageAlt={brandDeal.title}
        styles={styles}
      />
      <div className={styles.brand_deal_page_card_desc_wrap}>
        <span className={styles.embla__slide__title}>{brandDeal.title}</span>

        {/* Progress Bar */}
        <div style={{ marginTop: 8, position: "relative" }}>
          <progress
            value={isInView ? brandDeal.stockPercentage : 0}
            max={100}
          />
          <span className={styles.progress_text}>
            {brandDeal.stockPercentage}%
          </span>
        </div>

        {/* Price Section */}
        <Price
          leftText="할인가"
          rightText={`${brandDeal.discountedPrice.toLocaleString("kr")}원`}
          styles={styles}
        />

        <span className={styles.sub_text}>
          곧 정상가 {brandDeal.originalPrice.toLocaleString("kr")}원 으로
          돌아갑니다.
        </span>
      </div>
      <div
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) =>
                  handleIntersection(entry, brandDeal.id)
                );
              },
              { root: null, rootMargin: "0px", threshold: 0.5 }
            );
            observer.observe(el);
          }
        }}
      />
    </article>
  );
};
