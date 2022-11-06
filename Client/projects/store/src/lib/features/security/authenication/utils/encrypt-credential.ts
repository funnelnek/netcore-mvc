import { LoginCredential } from "@client/core";
import { encode } from 'js-base64';

export const encryptCredential = (credential: LoginCredential): LoginCredential => {
    return {
        email: encode(credential.email as string),
        password: encode(credential.password as string)
    }
}