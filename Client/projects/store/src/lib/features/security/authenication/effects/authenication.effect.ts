import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";
import { AuthenicationService } from "../services/authenication.service";
import { authenicate } from "./login.effect";



@Injectable({
    providedIn: 'root'
})
export class AuthenicationEffects {
    login = authenicate(this.actions, this.auth);


    constructor (
        private actions: Actions,
        private auth: AuthenicationService
    ) {
    }
}