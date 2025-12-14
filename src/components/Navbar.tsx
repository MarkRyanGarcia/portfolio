import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex max-w-3xl mx-auto space-x-12 py-6 text-secondary text-lg">
            <NavLink to="/">
                home
            </NavLink>
            <NavLink to="/about">
                about
            </NavLink>
            <NavLink to="/projects">
                projects
            </NavLink>
            <NavLink to="/resume">
                resume
            </NavLink>
            <NavLink to="/contact">
                contact
            </NavLink>
        </nav>
    )
}