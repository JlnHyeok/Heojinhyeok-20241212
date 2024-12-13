interface TitleProps {
  caption: string;
  className: string;
  children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  caption,
  className,
  children,
}) => (
  <header className={className}>
    <h4>{caption}</h4>
    {children}
  </header>
);
