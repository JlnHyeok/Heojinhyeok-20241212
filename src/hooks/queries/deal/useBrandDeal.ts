import { dealQueryKeys } from "@/api/queryKeys";
import { brandDealService } from "@/api/services/deal/brandDealService";
import { IBrandDealParams, TBrandDealResponse } from "@/types/deal/brandDeal";
import {
  QueryClient,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useSuspenseQuery,
} from "@tanstack/react-query";

// Suspense 지원 쿼리 훅
export const useSuspenseBrandDeals = ({
  params,
  options,
}: {
  params: IBrandDealParams;
  options?: Omit<
    UseQueryOptions<TBrandDealResponse, Error>,
    "queryKey" | "queryFn"
  >;
}) => {
  return useSuspenseQuery({
    queryKey: dealQueryKeys.brandDeal.all,
    queryFn: () => brandDealService.getBrandDeals(params),
    ...options,
  });
};

// 무한 스크롤 지원 쿼리 훅
export const useInfiniteBrandDeals = ({
  params,
  queryClient,
  options,
}: {
  params: IBrandDealParams;
  queryClient?: QueryClient;
  options?: Omit<
    UseInfiniteQueryOptions<TBrandDealResponse, Error>,
    "queryKey" | "queryFn"
  >;
}) => {
  return useInfiniteQuery({
    queryKey: [dealQueryKeys.brandDeal.all],
    queryFn: ({ pageParam = 1 }: { pageParam: number | unknown }) =>
      brandDealService.getBrandDeals({ ...params, page: pageParam }),

    // 초기 데이터를 캐싱하여 사용함으로써, 네트워크 요청을 줄일 수 있음
    initialData: () => {
      const cachedData = queryClient?.getQueryData(
        dealQueryKeys.brandDeal.all
      ) as TBrandDealResponse;
      return cachedData ? { pages: [cachedData], pageParams: [1] } : undefined;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.isLastPage ? undefined : allPages.length + 1;
    },
    ...options,
  });
};
