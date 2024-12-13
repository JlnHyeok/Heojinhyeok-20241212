interface CardImageProps {
  imageSrc: string;
  imageAlt: string;
  styles: { [key: string]: string };
}

export const CardImage: React.FC<CardImageProps> = ({
  imageSrc,
  imageAlt,
  styles,
}) => {
  return <img className={styles.card_img} src={imageSrc} alt={imageAlt} />;
};
