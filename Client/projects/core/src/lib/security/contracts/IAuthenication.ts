import { IEnumerable } from "../../contracts/IEnumerable";
import { IAuthenicatedUser } from "./IAuthenicatedUser";
import { LoginCredential } from "./LoginCredential";


export interface IAuthenication {
    attempts: number;
    isLoggingOut: boolean;
    isAuthenicating: boolean;
    authenicated: boolean;
    expiresIn?: number,
    credential?: LoginCredential;
    user?: IAuthenicatedUser;
    errors?: IEnumerable;
}