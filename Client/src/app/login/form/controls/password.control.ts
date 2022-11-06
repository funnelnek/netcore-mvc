import { FormControl } from "@angular/forms";
import { isPassword } from "../validators/password.validator";


export const password = new FormControl('', isPassword);