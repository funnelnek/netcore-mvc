import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AdminStoreModule } from './features/admin';
import { AppStoreModule } from './features/app';
import { ProductsStoreModule } from './features/products/products.module';
import { SecurityStoreModule } from './features/security/security-store.module';
import { ShoppingCartStoreModule } from './features/shopping-cart';
import { StageStoreModule } from './features/stage';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    AppStoreModule,
    AdminStoreModule,
    ProductsStoreModule,
    ShoppingCartStoreModule,
    StageStoreModule,
    SecurityStoreModule
  ],
  exports: []
})
export class ApplicationStoreModule { }
