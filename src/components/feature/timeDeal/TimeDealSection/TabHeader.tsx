interface TabHeaderProps {
  hour: number;
  activeTab: number;
  onTabClick: (tab: number) => void;
  styles: { [key: string]: string };
}

const formatHour = (hour: number) =>
  hour > 12 ? `오후 ${hour - 12}시` : `오전 ${hour}시`;

export const TabHeader: React.FC<TabHeaderProps> = ({
  hour,
  activeTab,
  onTabClick,
  styles,
}) => (
  <header className={styles.time_deal_title_after_open}>
    {[hour, hour + 1].map((tab) => (
      <span
        key={tab}
        id={tab === hour ? "currentTab" : "nextTab"}
        className={tab === activeTab ? styles.click : ""}
        onClick={() => onTabClick(tab)}
      >
        {formatHour(tab)}
      </span>
    ))}
  </header>
);
