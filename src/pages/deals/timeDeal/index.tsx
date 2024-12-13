import { useNavigate } from "react-router-dom";
import {
  BrandDealSection,
  ErrorBoundary,
  GlobalFallback,
  Header,
  LureDealSection,
  SectionFallback,
  TimeDealSection,
} from "@/components";
import { webPath } from "@/router";

const TimeDeal = () => {
  const navigate = useNavigate();
  const handleClickGoToBrandDeal = () => {
    navigate(webPath.brandDeal());
  };

  return (
    <div>
      <ErrorBoundary fallback={GlobalFallback()}>
        {/* HEADER SECTION */}
        <Header title="타임특가" isBackButtonVisible={false} />

        {/* LURE DEAL SECTION */}
        <ErrorBoundary fallback={SectionFallback("순삭 특가")}>
          <LureDealSection />
        </ErrorBoundary>

        {/* BRAND DEAL SECTION */}
        <ErrorBoundary fallback={SectionFallback("브랜드 딜")}>
          <BrandDealSection
            handleClickGoToBrandDeal={handleClickGoToBrandDeal}
          />
        </ErrorBoundary>

        {/* TIME DEAL SECTION */}
        <TimeDealSection />
      </ErrorBoundary>
    </div>
  );
};

export default TimeDeal;
