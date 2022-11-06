import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControlOptions, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { LoginCredential, ValidationError } from "@client/core";
import { AuthenicationService } from "@client/store";
import { filter, map, mergeMap, Observable } from "rxjs";


const isValid: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let email = control.get('email')?.valid;
    let password = control.get('password')?.valid;

    if (email && password) {
        return null;
    }

    let error: ValidationErrors = {};

    if (!email) {
        error['email'] = new ValidationError('Invalid email address');
    }

    if (!password) {
        error['password'] = new ValidationError('Invalid password');
    }

    return error;
}

export const loginValidator: FormControlOptions = {
    validators: isValid,
    updateOn: 'submit',
}