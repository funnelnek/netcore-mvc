import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, DataTransfer, Application } from '@client/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Service } from '../../../contracts/Service';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends Service {
  private static readonly API_ENDPOINT = "https://localhost:5100/api/v1/products";


  constructor(
    private store: Store<Application>,
    private route: ActivatedRoute,
    http: HttpClient,
  ) {
    super(http);
  }

  find(): Observable<IProduct[]> {
    return this.http.get<DataTransfer<IProduct[]>>(ProductService.API_ENDPOINT).pipe(map(this.onDataTransfer<IProduct[]>));
  }
  
  findOne(): Observable<IProduct> {
    return this.http.get<DataTransfer<IProduct>>(ProductService.API_ENDPOINT).pipe(map(this.onDataTransfer<IProduct>));
  }

  findByCategory(category: string): Observable<IProduct[]> {
    let params = { category };
    return this.http.get<DataTransfer<IProduct[]>>(ProductService.API_ENDPOINT, {}).pipe(map(this.onDataTransfer<IProduct[]>));
  }

  findById(id: string): Observable<IProduct> {
    let endpoint = ProductService.API_ENDPOINT + `/${id}`;
    return this.http.get<DataTransfer<IProduct>>(endpoint).pipe(map(this.onDataTransfer<IProduct>));
  }

  findBySKU(sku: string): Observable<IProduct> {
    let params = { sku };
    return this.http.get<DataTransfer<IProduct>>(ProductService.API_ENDPOINT, {}).pipe(map(this.onDataTransfer<IProduct>));
  }
}
