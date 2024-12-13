import React from "react";

interface priceProps {
  leftText: string;
  rightText: string;
  styles: { [key: string]: string }; // styles 객체를 통째로 props로 받음
}

export const Price: React.FC<priceProps> = ({
  leftText,
  rightText,
  styles,
}) => {
  return (
    <section className={styles.price_wrap}>
      <span className={styles.discount_rate}>{leftText}</span>
      <span className={styles.discount_price}>{rightText}</span>
    </section>
  );
};
