import { useState } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import { navItems } from "../constants/navItems"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const hoverStyle = "hover:text-tertiary transition-colors duration-300 ease-in-out"
    const handleNavMobile = () => setOpen(false)

    return (
        <nav className="sticky top-0 w-full z-50 text-primary font-bold px-0">
            <div className="relative">
                <div
                    className="absolute inset-0 bg-base/90 md:bg-base/70 md:backdrop-blur-md"
                />

                <div className="relative">
                    <div className="flex justify-between h-12 md:h-5 md:space-x-12 md:max-w-7xl mx-auto py-3 md:py-9 text-lg">

                        <div className="hidden md:flex space-x-12 md:-my-3.5">
                            {navItems?.map((item, idx) => (
                                item.route ?
                                    <NavLink key={`nav-${idx}`} to={item.route} target={`${item.open_new_tab ? "_blank" : ""}`} className={`${hoverStyle} flex items-center gap-1`}>
                                        {item.label}
                                        {item.open_new_tab && <HiArrowTopRightOnSquare size={14} className="opacity-60" />}
                                    </NavLink>
                                    : <a key={`nav-${idx}`} href={item.href} target='_blank' className={`${hoverStyle} flex items-center gap-1`}>{item.label}</a>
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
                                    <NavLink key={`nav-${idx}`} to={item.route} target={`${item.open_new_tab ? "_blank" : ""}`} className={`${hoverStyle} flex items-center gap-1`} onClick={handleNavMobile}>
                                        {item.label}
                                        {item.open_new_tab && <HiArrowTopRightOnSquare size={14} className="opacity-60" />}
                                    </NavLink>
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
