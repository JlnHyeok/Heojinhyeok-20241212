import { ErrorBoundary, GlobalFallback, Header } from "@/components";
import styles from "./index.module.css";
import { BrandDealContents } from "@/components/feature/brandDeal/BrandDealContents";

// BrandDeal 컴포넌트
const BrandDeal = () => {
  return (
    <ErrorBoundary fallback={GlobalFallback()}>
      <Header title="오늘의 브랜드딜" isBackButtonVisible={true} />
      <BrandDealContents styles={styles} />
    </ErrorBoundary>
  );
};

export default BrandDeal;
