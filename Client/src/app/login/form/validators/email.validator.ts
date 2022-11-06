import { AbstractControl, FormControlOptions, ValidationErrors, Validators } from "@angular/forms";


export const isEmail: FormControlOptions = {
    updateOn: "blur",
    validators: [
        Validators.required,
        Validators.maxLength(150),
        Validators.email
    ]
};