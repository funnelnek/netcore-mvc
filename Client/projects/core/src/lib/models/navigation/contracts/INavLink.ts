import { NavLinkType } from "../../../constants";
import { NavLink } from "../NavLink";


export interface INavLink {
    permalink: string;
    label: string;    
    type: NavLinkType;
    items?: NavLink[];
}