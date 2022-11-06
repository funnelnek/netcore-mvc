import { Enumerable } from "../../contracts";
import { IEntity } from "./contracts/IEntity";


export class Entity extends Enumerable implements IEntity {
    protected _id!: string;
    
    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }
}