import { IEnumerable } from "../../contracts/IEnumerable";
import { DataTransferErrorSource } from "./DataTransferErrorSource";

export interface IDataTransferError {
    id?: string;
    status?: number;
    code?: number;
    title?: string;
    detail?: string;
    source?: DataTransferErrorSource;
    meta?: IEnumerable;
}