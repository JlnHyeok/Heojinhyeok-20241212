import { dealQueryKeys } from "@/api/queryKeys";
import { lureDealService } from "@/api/services/deal/lureDealService";
import { TLureDealResponse } from "@/types/deal/lureDeal";
import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

// Suspense 지원 쿼리 훅
export const useSuspenseLureDeals = (
  options?: Omit<
    UseQueryOptions<TLureDealResponse, Error>,
    "queryKey" | "queryFn"
  >
) => {
  return useSuspenseQuery({
    queryKey: dealQueryKeys.lureDeal.all,
    queryFn: lureDealService.getLureDeals,
    ...options,
  });
};
