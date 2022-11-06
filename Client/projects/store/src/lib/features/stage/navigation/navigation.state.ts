import { NavLinkType } from "@client/core";
import { Navigation } from "./types/navigation.type";


export const NavigationInitialState: Navigation = {
    links: [
        {
            label: 'Home',
            type: NavLinkType.LINK,
            permalink: '/'
        },
        {
            label: 'About',
            type: NavLinkType.LINK,
            permalink: '/about'
        },
        {
            label: 'Project',
            type: NavLinkType.LINK,
            permalink: '/projects'
        },
        {
            label: 'Services',
            type: NavLinkType.LINK,
            permalink: '/services'
        },
        {
            label: 'Contact',
            type: NavLinkType.LINK,
            permalink: '/contact'
        }
    ]
};