export interface ITimeDealParams {
  time: string;
  page: number | unknown;
}

export interface ITimeDealProduct {
  id: number;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountRate: number;
  image: string;
  discountEndDate: string;
}

// 일반 호출 응답 타입
export type TTimeDealResponse = {
  itemList: Array<ITimeDealProduct>;
  isLastPage: boolean;
};

// 무한 스크롤을 위한 응답 타입
export interface IInfinityTimeDealsResponse {
  pages: TTimeDealResponse[];
  pageParams: number[];
}
