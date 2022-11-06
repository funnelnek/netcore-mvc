import { NavLinkType } from "../../constants";
import { INavLink } from "./contracts/INavLink";


export class NavLink implements INavLink {
    protected _permalink: string;
    protected _label: string;
    protected _type: NavLinkType;
    protected _items?: NavLink[];

    constructor(link: INavLink) {        
        this._permalink = link.permalink;
        this._label = link.label;        
        this._type = link.type;
        this._items = link.items?.map(item => new NavLink(item));
    }

    get permalink(): string {
        return this._permalink;
    }

    get label(): string {
        return this._label;
    }

    get type(): NavLinkType {
        return this._type;
    }

    get isActive(): boolean {
        return window.location.pathname.startsWith(this._permalink);
    }

    get items(): NavLink[] | undefined {
        return this._items;
    }
}