import { ValidationErrors } from "@angular/forms";
import { Authenication, Administrator, LoginCredential  } from "@client/core";
import { AuthenicationInitialState } from "../authenication.state";
import { AuthenicationService } from "../services/authenication.service";


export class AuthenicationActionHandler {
    private static AUTHENICATION_INITIAL_STATE: Authenication = AuthenicationInitialState;

    constructor(private service: AuthenicationService) {}


    failed(errors: ValidationErrors, state: Authenication): Authenication {
        return { ...state, errors };
    }

    success(user: Administrator): Authenication {
        let authenication: Authenication = this.reset();

        authenication.user = { id: user.id };
        authenication.authenicated = true;

        return authenication;
    }

    login(credential: LoginCredential, state: Authenication): Authenication {
        return { ...state, credential, attempts: (state.attempts + 1) };
    }

    logout(state: Authenication): Authenication {     
        return { ...state, isLoggingOut: true };
    }

    loggedOut(state: Authenication): Authenication {
        return this.reset();
    }

    logoutFailed(errors: ValidationErrors, state: Authenication): Authenication {        
        return { ...state, errors };
    }

    private reset(): Authenication {
        return { ...AuthenicationActionHandler.AUTHENICATION_INITIAL_STATE };
    }
}