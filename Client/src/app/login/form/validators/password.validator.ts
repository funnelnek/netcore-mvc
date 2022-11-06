import { AbstractControl, FormControlOptions, ValidationErrors, Validators } from "@angular/forms";
import { ValidationError } from "@client/core";
import isStrongPassword from "validator/es/lib/isStrongPassword";


const options = { 
    minLength: 8, 
    minLowercase: 1, 
    minUppercase: 1, 
    minNumbers: 1, 
    minSymbols: 1, 
    pointsPerUnique: 1, 
    pointsPerRepeat: 0.5, 
    pointsForContainingLower: 10, 
    pointsForContainingUpper: 10, 
    pointsForContainingNumber: 10, 
    pointsForContainingSymbol: 10 
};

export const isPassword: FormControlOptions = {
    updateOn: "blur",
    validators: [
        Validators.required,
        Validators.maxLength(32),
        (control: AbstractControl): ValidationErrors | null => {
            return !isStrongPassword(control.value, options) ? 
            { password: new ValidationError('Weak password detected! Password not strong enough.') } : null;
        }
    ]
}