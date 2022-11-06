import { IProduct } from "../../product";

export interface IQuickPreview extends Partial<IProduct> {
  url: string;    
  sku: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}