import { IAuthenication } from "./IAuthenication";
import { IAuthorization } from "./IAuthorization";


export interface ISecurity {
    authenication: IAuthenication;
    authorization: IAuthorization;
}