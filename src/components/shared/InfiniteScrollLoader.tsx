import { forwardRef } from "react";
import { Loading } from "@/components";

// 공통 컴포넌트 정의
interface InfiniteScrollLoaderProps {
  isLoading: boolean;
  className: string;
}

// forwardRef를 사용해 observer 연결
export const InfiniteScrollLoader = forwardRef<
  HTMLDivElement,
  InfiniteScrollLoaderProps
>(({ isLoading, className }, ref) => (
  <>
    {isLoading && <Loading />}
    <div ref={ref} className={className} />
  </>
));
