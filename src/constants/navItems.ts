import type { NavBarLink } from "../lib/types";

export const navItems: NavBarLink[] = [
    { label: "home", route: "/" },
    { label: "about", route: "/about" },
    { label: "projects", route: "/projects" },
    { label: "resume", route: "/resume", open_new_tab: true },
    { label: "contact", route: "/contact" },
];
