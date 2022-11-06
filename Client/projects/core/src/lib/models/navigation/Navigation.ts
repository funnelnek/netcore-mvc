import { INavigation } from "./contracts/INavigation";
import { INavLink } from "./contracts/INavLink";
import { NavLink } from './NavLink';


export class Navigation implements INavigation {
    protected _links!: NavLink[];

    constructor(links: INavLink[]) {
        this._links = links.map(link => new NavLink(link));
    }

    get links(): NavLink[] {
        return this._links;
    }
}