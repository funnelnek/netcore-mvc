import { ISocialLink } from "../../social-link";


export interface IUser {
    firstname: string;
    lastname: string;
    title: string;
    socialLinks?: ISocialLink[];
    description?: string;
    bio?: string;
}