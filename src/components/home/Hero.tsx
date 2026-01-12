import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { linkStyle } from "../../lib/styles";


export default function Hero() {
    return (
        <div className="space-y-7 md:-space-y-5">
            <div className="flex flex-col sm:flex-row space-y-3 md:space-y-0">
                <div className="flex flex-col sm:w-[60%] space-y-5">
                    <h1 className="text-primary text-3xl font-bold">
                        Hey, I'm <span className="text-tertiary">Mark Garcia</span>
                    </h1>
                    <p className="text-secondary">
                        I’m a Full-Stack Software Developer Intern @<a className={linkStyle}
                            href="https://glenair.com/" target="_blank">Glenair, Inc.</a>I’m
                        currently a 4th year student at CSU Fullerton, where I am the Fullerton
                        Chapter President of the<a className={linkStyle} href="https://acmcsuf.com/"
                            target="_blank">Association for Computing Machinery (ACM)</a>.
                    </p>
                </div>
                <div className="flex sm:w-[40%] justify-end mx-auto">
                    <img src="/mark/mark.png"
                        className="w-50 rounded-full border-4 border-secondary
                        hover:border-tertiary transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="flex flex-wrap space-x-5 space-y-2 text-secondary font-bold">
                <a className="flex hover:text-tertiary transition-colors duration-300
                    ease-in-out" href="https://linkedin.com/in/markryangarcia/" target="_blank"
                >
                    <CiLinkedin className="mr-1.5" size={22} /> LinkedIn
                </a>
                <p>|</p>
                <a className="flex hover:text-tertiary transition-colors duration-300
                    ease-in-out" href="https://github.com/MarkRyanGarcia" target="_blank"
                >
                    <FiGithub className="translate-y-1 mr-1.5" /> Github
                </a>
                <p>|</p>
                <NavLink to="/about"
                    className="flex space-x-1 transition duration-300 ease-in-out
                    hover:space-x-2 hover:text-tertiary"
                >
                    <p className="max-h-6">
                        More about me
                    </p>
                    <p className="max-h-6">
                        {"->"}
                    </p>
                </NavLink>
            </div>
        </div>
    )
}