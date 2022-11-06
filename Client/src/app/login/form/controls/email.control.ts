import { FormControl } from "@angular/forms";
import { isEmail } from "../validators/email.validator";


export const email = new FormControl('', isEmail);