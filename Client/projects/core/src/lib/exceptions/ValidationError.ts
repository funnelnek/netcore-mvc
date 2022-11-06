import { IValidationError } from "../contracts/IValidationError";


export class ValidationError implements IValidationError {
    protected _message: string;

    constructor(message: string) {
        this._message = message;
    }

    set message(value: string) {
        this._message = value;
    }

    get message(): string {
        return this._message;
    }
}