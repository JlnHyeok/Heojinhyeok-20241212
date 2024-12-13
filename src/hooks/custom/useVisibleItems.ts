import { IBrandDealProduct } from "@/types/deal/brandDeal";
import { ITimeDealProduct } from "@/types/deal/timeDeal";
import { useState, useEffect } from "react";

// 공통 타입 정의
interface IInfinityResponse<T> {
  pages: T[];
  pageParams: number[];
}

interface ItemList {
  itemList: Array<ITimeDealProduct> | Array<IBrandDealProduct>;
}

// Custom Hook
export const useVisibleItems = <T extends ItemList>(
  deals: IInfinityResponse<T> | undefined
): T["itemList"][number][] => {
  const [visibleItems, setVisibleItems] = useState<T["itemList"][number][]>([]);

  useEffect(() => {
    if (!deals) return;
    const allItems = deals.pages.flatMap((page) => page.itemList);
    setVisibleItems(allItems);
  }, [deals]);

  return visibleItems;
};
