import { Authenication } from "@client/core";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { AuthenicationInitialState } from "../authenication.state";
import { AuthenicationService } from "../services/authenication.service";
import { AuthenicationActionHandler } from "./authenication.handler";
import { login, loginFailed, loginSuccess, logout, logoutFailed, logoutSuccess } from "../actions";
import { onLoginFailed } from "./login-failed.reducer";
import { onLoginSuccess } from "./login-success.reducer";
import { onLogin } from "./login.reducer";
import { onLogoutFailed } from "./logout-failed.reducer";
import { onLogoutSuccess } from "./logout-success.reducer";
import { onLogout } from "./logout.reducer";
import { ActionPayload } from "projects/store/src/lib/contracts";


export const AuthenicationStoreReducer = (service: AuthenicationService): ActionReducer<Authenication, ActionPayload> => {
    const handler = new AuthenicationActionHandler(service);

    const AuthenicationStore = createReducer(
        AuthenicationInitialState,
        on(login, onLogin(handler)),
        on(loginSuccess, onLoginSuccess(handler)),
        on(loginFailed, onLoginFailed(handler)),
        on(logout, onLogout(handler)),
        on(logoutSuccess, onLogoutSuccess(handler)),
        on(logoutFailed, onLogoutFailed(handler))
    ) as ActionReducer<Authenication, ActionPayload>;

    return AuthenicationStore;
};