import { IEnumerable } from "../contracts";
import { IDataTransfer } from "./contracts";
import { IDataTransferError } from "./contracts/IDataTransferError";


export class DataTransfer<T = any> implements IDataTransfer<T> {
    protected _type!: string;   
    protected _data?: T;    
    protected _meta?: IEnumerable<any>;    
    protected _errors?: IDataTransferError[];
    

    constructor(data: T, meta?: IEnumerable) {        
        this._data = data;
        this._meta = meta;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get data(): T | undefined {
        return this._data;
    }

    set data(value: T | undefined) {
        this._data = value;
    }

    get meta(): IEnumerable<any> | undefined {
        return this._meta;
    }

    set meta(value: IEnumerable<any> | undefined) {
        this._meta = value;
    }

    get errors(): IDataTransferError[] | undefined {
        return this._errors;
    }

    set errors(value: IDataTransferError[] | undefined) {
        this._errors = value;
    }
}