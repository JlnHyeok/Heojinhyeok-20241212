import apiClient from "@/api/client";
import { ITimeDealParams, TTimeDealResponse } from "@/types/deal/timeDeal";

export const timeDealService = {
  getTimeDeals: async (params: ITimeDealParams) => {
    const { data } = await apiClient.get<TTimeDealResponse>(
      `${import.meta.env.VITE_API_URL}/deals/time-deal`,
      {
        params,
      }
    );
    return data;
  },
};
