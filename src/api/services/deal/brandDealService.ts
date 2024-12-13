import apiClient from "@/api/client";
import { IBrandDealParams, TBrandDealResponse } from "@/types/deal/brandDeal";

export const brandDealService = {
  getBrandDeals: async (params: IBrandDealParams) => {
    const { data } = await apiClient.get<TBrandDealResponse>(
      `${import.meta.env.VITE_API_URL}/deals/brand-deal`,
      {
        params,
      }
    );
    return data;
  },
};
