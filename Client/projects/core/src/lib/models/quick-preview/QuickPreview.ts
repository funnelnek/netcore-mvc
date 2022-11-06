import { IQuickPreview } from "./contracts";


export class QuickPreview implements IQuickPreview {
  protected _url: string;
  protected _title: string;
  protected _price: number;
  protected _image: string;
  protected _rating: number;
  protected _description: string;
  protected _sku: string;

  constructor(state: IQuickPreview) {
    this._url = state.url;
    this._sku = state.sku;
    this._price = state.price;
    this._image = state.image;
    this._title = state.title;
    this._rating = state.rating;
    this._description = state.description;
  }

  get url(): string {
    return this._url;
  }

  get sku(): string {
    return this._sku;
  }

  get title(): string {
    return this._title;
  }

  get price(): number {
    return this._price;
  }

  get image(): string {
    return this._image;
  }

  get rating(): number {
    return this._rating;
  }

  get description(): string {
    return this._description;
  }
}