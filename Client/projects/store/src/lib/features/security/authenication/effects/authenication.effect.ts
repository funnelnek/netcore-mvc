import { Actions } from "@ngrx/effects";
import { AuthenicationService } from "../services/authenication.service";
import { authenicate } from "./login.effect";


export class AuthenicationEffects {
    login = authenicate(this.actions, this.auth);


    constructor(
        private actions: Actions,
        private auth: AuthenicationService
    ) {
    }
}