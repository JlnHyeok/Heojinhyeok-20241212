import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  styles: { [key: string]: string };
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  renderItem,
  styles,
}) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  return (
    <div
      className={styles.embla}
      ref={emblaRef}
      style={{ width: "100%", height: "100%" }}
    >
      <div className={styles.embla__container}>
        {items?.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};
