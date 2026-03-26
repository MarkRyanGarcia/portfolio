import type { NavBarLink } from "../lib/types";

export const navItems: NavBarLink[] = [
    { label: "home", route: "/" },
    { label: "about", route: "/about" },
    { label: "projects", route: "/projects" },
    { label: "contact", route: "/contact" },
    { label: "resume", route: "/resume", open_new_tab: true },
];
