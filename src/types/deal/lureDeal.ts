export interface ILureDealProduct {
  id: number;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountRate: number;
  image: string;
}

export type TLureDealResponse = Array<ILureDealProduct>;
