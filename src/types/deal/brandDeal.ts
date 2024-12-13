export interface IBrandDealParams {
  page: number | unknown;
}

export interface IBrandDealProduct {
  id: number;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountRate: number;
  stockPercentage: number;
  image: string;
  discountEndDate: string;
}

export type TBrandDealResponse = {
  itemList: Array<IBrandDealProduct>;
  isLastPage: boolean;
};

// 무한 스크롤을 위한 응답 타입
export interface IInfinityBrandDealsResponse {
  pages: TBrandDealResponse[];
  pageParams: number[];
}
