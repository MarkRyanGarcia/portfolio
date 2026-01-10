import { useState } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import type { NavBarLink } from "./types"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const hoverStyle = "hover:text-tertiary transition-colors duration-300 ease-in-out"
    const handleNavMobile = () => setOpen(false)

    const navItems: NavBarLink[] = [
        {
            label: "home",
            route: "/",
        },
        {
            label: "about",
            route: "/about",
        },
        {
            label: "projects",
            route: "/projects",
        },
        {
            label: "resume",
            route: "/resume",
            open_new_tab: true,
        },
        {
            label: "contact",
            route: "/contact",
        },
    ]

    return (
        <nav className="sticky top-0 w-full z-50 text-primary">
            <div className="relative">
                <div
                    className=" absolute inset-0 bg-base md:bg-transparent md:backdrop-blur-md md:mask-[linear-gradient(to_bottom,black,black_60%,transparent)]"
                />

                <div className="relative">
                    <div className="flex justify-between h-12 md:h-5 md:space-x-12 md:max-w-4xl mx-auto py-3 md:py-9 text-lg">

                        <div className="hidden md:flex space-x-12 md:-my-3.5">
                            {navItems?.map((item, idx) => (
                                item.route ?
                                    <NavLink key={`nav-${idx}`} to={item.route} target={`${item.open_new_tab ? "_blank" : ""}`} className={hoverStyle}>{item.label}</NavLink>
                                    : <a key={`nav-${idx}`} href={item.href} target='_blank' className={hoverStyle}>{item.label}</a>
                            ))}
                        </div>

                        <NavLink to="/" className="md:hidden mx-4 font-bold">
                            Mark Garcia
                        </NavLink>

                        <button
                            className="md:hidden mx-4"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            <GiHamburgerMenu size={25} />
                        </button>
                    </div>

                    {/* Mobile dropdown thing */}
                    {open && (
                        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 text-lg">
                            {navItems?.map((item, idx) => (
                                item.route ?
                                    <NavLink key={`nav-${idx}`} to={item.route} className={hoverStyle} onClick={handleNavMobile}>{item.label}</NavLink>
                                    :
                                    <a key={`nav-${idx}`} href={item.href} target='_blank' className={hoverStyle} onClick={handleNavMobile}>{item.label}</a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
