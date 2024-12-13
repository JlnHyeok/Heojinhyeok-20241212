import apiClient from "@/api/client";
import { TLureDealResponse } from "@/types/deal/lureDeal";

export const lureDealService = {
  getLureDeals: async () => {
    const { data } = await apiClient.get<TLureDealResponse>(
      `${import.meta.env.VITE_API_URL}/deals/lure-deal`
    );
    return data;
  },
};
