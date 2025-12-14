import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex max-w-3xl mx-auto space-x-12 py-6 text-secondary text-lg">
            <NavLink to="/" className="hover:text-primary">
                home
            </NavLink>
            <NavLink to="/about" className="hover:text-primary">
                about
            </NavLink>
            <NavLink to="/projects" className="hover:text-primary">
                projects
            </NavLink>
            <NavLink to="/resume" className="hover:text-primary">
                resume
            </NavLink>
            <NavLink to="/contact" className="hover:text-primary">
                contact
            </NavLink>
        </nav>
    )
}