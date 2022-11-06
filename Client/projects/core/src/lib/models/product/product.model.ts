import { ProductType } from "../../constants";
import { Image } from "../../contracts";
import { Entity } from "../entity/entity.model";
import { IProduct } from "./contracts";
import { IProductCategory } from "./contracts/IProductCategory";


export class Product extends Entity implements IProduct {
    protected _sku!: string;
    protected _title!: string;
    protected _price!: number;
    protected _category!: IProductCategory;
    protected _type!: ProductType;
    protected _imageUrl!: Image;
    protected _description!: string;
    protected _rating!: number;
    protected _brand!: string;
    protected _url!: string;


    constructor() {
        super();
    }

    set sku(value: string) {
        this._sku = value;
    }

    set title(value: string) {
        this._title = value;
    }
    
    set category(value: IProductCategory) {
        this._category = value;
    }

    set price(value: number) {
        this._price = value;
    }
    
    set type(value: ProductType) {
        this._type = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set imageUrl(value: Image) {
        this._imageUrl = value;
    }

    set rating(value: number) {
        this._rating = value;
    }

    set brand(value: string) {
        this._brand = value;
    }

    set url(value: string) {
        this._url = value;
    }

    get brand(): string {
        return this._brand;
    }

    get url(): string {
        return this._url;
    }

    get rating(): number {
        return this._rating;
    }

    get title(): string {
        return this._title;
    }

    get sku(): string {
        return this._sku;
    }

    get imageUrl(): Image {
        return this._imageUrl;
    }

    get description(): string {
        return this._description;
    }

    get type(): ProductType {
        return this._type;
    }

    get price(): number {
        return this._price;
    }

    get category(): IProductCategory {
        return this._category;
    }

    async addToWishlist(): Promise<void> {

    }

    async addToCart(): Promise<void> {

    }
}