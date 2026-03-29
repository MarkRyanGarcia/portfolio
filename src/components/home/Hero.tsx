import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { linkStyle } from "../../lib/styles";

export default function Hero() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex flex-col sm:w-[50%] space-y-4">
                    <div className="space-y-1">
                        <p className="text-tertiary text-sm font-semibold tracking-widest uppercase">
                            Backend/FullStack Developer
                        </p>
                        <h1 className="text-primary text-4xl font-bold leading-tight">
                            Mark Garcia
                        </h1>
                    </div>
                    <p className="text-secondary leading-relaxed">
                        Software Developer Intern @<a className={linkStyle}
                            href="https://glenair.com/" target="_blank">Glenair, Inc.</a>
                        4th year CS student at CSU Fullerton
                        and President of{" "}
                        <a className={linkStyle} href="https://acmcsuf.com/" target="_blank">
                            ACM at CSUF
                        </a>.
                    </p>
                </div>
                <div className="flex sm:w-[50%] justify-center sm:justify-end mx-auto">
                    <img
                        src="/mark/mark.png"
                        className="w-44 rounded-full border-4 border-secondary
                        hover:border-tertiary transition-colors duration-200 ease-in-out"
                        alt="Mark Garcia"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-secondary font-bold">
                <a
                    className="flex items-center gap-1.5 hover:text-tertiary transition-colors duration-300 ease-in-out"
                    href="https://linkedin.com/in/markryangarcia/"
                    target="_blank"
                >
                    <CiLinkedin size={22} /> LinkedIn
                </a>
                <span className="text-secondary/40">|</span>
                <a
                    className="flex items-center gap-1.5 hover:text-tertiary transition-colors duration-300 ease-in-out"
                    href="https://github.com/MarkRyanGarcia"
                    target="_blank"
                >
                    <FiGithub size={18} /> GitHub
                </a>
                <span className="text-secondary/40">|</span>
                <NavLink
                    to="/about"
                    className="flex items-center gap-1 transition duration-300 ease-in-out hover:text-tertiary"
                >
                    More about me <span>{"→"}</span>
                </NavLink>
            </div>
        </div>
    );
}
