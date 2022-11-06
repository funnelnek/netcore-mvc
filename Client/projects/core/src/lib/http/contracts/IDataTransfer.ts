import { IEnumerable } from "../../contracts";
import { IDataTransferError } from "./IDataTransferError";


export interface IDataTransfer<T = any> {
    type: string;
    data?: T;
    meta?: IEnumerable;    
    errors?: IDataTransferError[];
}