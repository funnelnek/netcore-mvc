import { IEnumerable } from "../contracts";
import { DataTransferErrorSource, IDataTransferError } from "./contracts";


export class DataTransferError implements IDataTransferError {
    protected _id?: string;
    protected _status?: number;
    protected _code?: number | undefined;    
    protected _title?: string | undefined;    
    protected _detail?: string | undefined;    
    protected _source?: DataTransferErrorSource | undefined;    
    protected _meta?: IEnumerable | undefined;

    
    constructor(error: IDataTransferError) {
        this._id = error.id;
        this._status = error.status;
        this._code = error.code;
        this._title = error.title;
        this._detail = error.detail;
        this._source = error.source;
        this._meta = error.meta;
    }

    set id(value: string | undefined) {
        this._id = value;
    }

    get id(): string | undefined {
        return this._id;
    }

    set status(value: number | undefined) {
        this._status = value;
    }

    get status(): number | undefined {
        return this._status;
    }
    
    get meta(): IEnumerable | undefined {
        return this._meta;
    }

    set meta(value: IEnumerable | undefined) {
        this._meta = value;
    }
    
    get source(): DataTransferErrorSource | undefined {
        return this._source;
    }

    set source(value: DataTransferErrorSource | undefined) {
        this._source = value;
    }

    get detail(): string | undefined {
        return this._detail;
    }

    set detail(value: string | undefined) {
        this._detail = value;
    }

    get title(): string | undefined {
        return this._title;
    }

    set title(value: string | undefined) {
        this._title = value;
    }

    get code(): number | undefined {
        return this._code;
    }

    set code(value: number | undefined) {
        this._code = value;
    }
}