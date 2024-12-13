import { dealQueryKeys } from "@/api/queryKeys";
import { timeDealService } from "@/api/services/deal/timeDealService";
import { ITimeDealParams, TTimeDealResponse } from "@/types/deal/timeDeal";
import {
  QueryClient,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

// 무한 스크롤 지원 쿼리 훅
export const useInfiniteTimeDeals = ({
  params,
  options,
}: {
  params: ITimeDealParams;
  queryClient?: QueryClient;
  options?: Omit<
    UseInfiniteQueryOptions<TTimeDealResponse, Error>,
    "queryKey" | "queryFn"
  >;
}) => {
  return useInfiniteQuery({
    queryKey: [dealQueryKeys.timeDeal.all, params.time],
    queryFn: ({ pageParam = 1 }: { pageParam: number | unknown }) =>
      timeDealService.getTimeDeals({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.isLastPage ? undefined : allPages.length + 1;
    },
    ...options,
  });
};
