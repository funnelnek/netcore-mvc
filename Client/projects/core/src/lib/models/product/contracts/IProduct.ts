import { Image } from '../../../contracts';
import { IEntity } from '../../entity/contracts/IEntity';
import { IProductCategory } from './IProductCategory';


export interface IProduct extends IEntity {
  sku: string;
  title: string;
  url: string;
  description: string;
  price: number;
  imageUrl: Image;
  brand: string;
  category: IProductCategory;  
  rating: number;  
}