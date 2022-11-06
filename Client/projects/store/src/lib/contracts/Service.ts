import { HttpClient } from "@angular/common/http";
import { IDataTransfer, IService } from "@client/core";


export abstract class Service implements IService {
    constructor(protected http: HttpClient) {
    }

    protected onDataTransfer<T = any>(res: IDataTransfer<T>): T {
        return res.data as T;
    }
}