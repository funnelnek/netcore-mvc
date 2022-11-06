import { FormGroup } from "@angular/forms";
import { LoginControl } from "../types";
import { loginValidator } from "../validators/login.validator";
import { email } from "./email.control";
import { password } from './password.control';


export const LoginForm = new FormGroup<LoginControl>({
    email,
    password
}, loginValidator);