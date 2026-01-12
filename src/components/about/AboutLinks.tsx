import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function AboutLinks() {
    return (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary font-bold">
            <a
                href="https://linkedin.com/in/markryangarcia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-tertiary transition-colors duration-300 ease-in-out hover:-translate-y-0.5"
            >
                <CiLinkedin className="mr-1.5" size={22} />
                LinkedIn
            </a>

            <p>|</p>

            <a
                href="https://github.com/MarkRyanGarcia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-tertiary transition-colors duration-300 ease-in-out hover:-translate-y-0.5"
            >
                <FiGithub className="mr-1.5" />
                GitHub
            </a>

            <p>|</p>

            <NavLink
                to="/projects"
                className="flex space-x-1 transition duration-300 ease-in-out hover:space-x-2 hover:text-tertiary hover:-translate-y-0.5"
            >
                <p className="max-h-6">Projects</p>
                <p className="max-h-6">{"->"}</p>
            </NavLink>
        </div>
    );
}