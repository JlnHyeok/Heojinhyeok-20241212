import React from "react";
import { CardImage, Price } from "@/components";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  discountRate: number;
  discountedPrice: number;
  remainingTime?: string;
  isLocked?: boolean; // TimeDealCard의 locked 상태를 추가
  originalPrice?: number; // TimeDealCard의 원래 가격을 추가
  styles: { [key: string]: string };
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  discountRate,
  discountedPrice,
  remainingTime,
  isLocked,
  originalPrice,
  styles,
}) => {
  return (
    <article className={isLocked ? styles.time_deal_item : styles.embla__slide}>
      {/* Locked 상태 처리 */}
      {isLocked && <div className={styles.locked_overlay}>오픈 예정</div>}

      <CardImage imageSrc={imageSrc} imageAlt={imageAlt} styles={styles} />

      <div
        className={
          isLocked
            ? styles.time_deal_item_info_wrapper
            : styles.embla__slide_desc_wrap
        }
      >
        {/* Remaining Time */}
        {remainingTime && (
          <span className={styles.remaining_time}>{remainingTime}</span>
        )}

        {/* Title */}
        <section
          className={
            isLocked ? styles.time_deal_item_title : styles.embla__slide__title
          }
        >
          {title}
        </section>

        {/* Original Price (optional) */}
        {originalPrice && isLocked && (
          <section className={styles.original_price}>
            <span>{originalPrice.toLocaleString("kr")}원</span>
          </section>
        )}

        {/* Price */}
        <Price
          leftText={`${discountRate}%`}
          rightText={`${discountedPrice.toLocaleString("kr")}원`}
          styles={styles}
        />
      </div>
    </article>
  );
};
