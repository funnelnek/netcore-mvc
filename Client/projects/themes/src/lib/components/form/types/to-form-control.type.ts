import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { IEnumerable } from "@client/core";

export type ToFormControl<T> = T extends object ? 
T extends Array<T> ? AbstractControl<T>[] : 
T extends IEnumerable ? { [K in keyof T]: T[K] extends object ? ToFormControl<T[K]> : FormControl<T[K]> } : never : never;

