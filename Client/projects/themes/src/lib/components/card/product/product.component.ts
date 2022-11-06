import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from '@client/core';
import { ProductCardVariation } from '../../../contracts/ProductCardVariation';
import { CardBaseComponent } from '../base/base.component';


@Component({
  selector: 'product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductCardComponent extends CardBaseComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  variant!: ProductCardVariation;

  @Input()
  description!: string;

  @Input()
  url!: string;

  @Input()
  image!: Image;

  @Input()
  rating: number = 0.0;

  @Input()
  showRatings: boolean = true;

  @Input()
  price: number = 0.00;

  @ViewChild("addToCart", {read: ElementRef<HTMLButtonElement>, static: true})
  addToCart!: ElementRef<HTMLButtonElement>;
   
  constructor() {
    super();
  }

  override ngOnInit(): void {
  
  }
}
