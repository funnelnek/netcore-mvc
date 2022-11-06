import { Observable } from 'rxjs';
import { ICriteria } from '../../../contracts/specifications/ICriteria';
import { IProduct } from './IProduct';


export interface IProductService {
  getProducts(): Observable<IProduct[]>;
  getProducts<T>(criteria: ICriteria<T>): Observable<IProduct[]>;
  getProductById(id: number): Observable<IProduct>;
  getProductsByCategory(category: string): Observable<IProduct[]>;
}