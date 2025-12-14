import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Home() {
    const linkStyle = 'text-tertiary underline font-bold hover:text-base hover:no-underline hover:bg-tertiary transition duration-300 ease-in-out'

    return (
        <div className="w-full p-5 md:py-15">
            <div className="space-y-5 md:space-y-0">
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0">
                    <div className="flex flex-col md:w-[55%] space-y-5">
                        <h1 className="text-primary text-3xl font-bold">
                            Hey, I'm <span className="text-tertiary">Mark Garcia</span>
                        </h1>
                        <p className="text-secondary">
                            I’m a Full-Stack Software Developer Intern @ <a className={linkStyle} href="https://glenair.com/" target="_blank">Glenair, Inc.</a> I’m currently a
                            4th year student at CSU Fullerton, where I am the
                            Fullerton Chapter President of the <a className={linkStyle} href="https://acmcsuf.com/" target="_blank">Association for
                                Computing Machinery (ACM)</a>.
                        </p>
                    </div>
                    <div className="flex w-[45%] justify-center mx-auto">
                        <img src="/mark/mark.png" className="w-50 rounded-full border-4 border-secondary hover:border-tertiary transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <nav className="flex flex-wrap space-x-5 space-y-2 text-secondary">
                    <a className="flex hover:text-tertiary transition-colors duration-300 ease-in-out" href="https://linkedin.com/in/markryangarcia/" target="_blank">
                        <CiLinkedin className="mr-2" size={22} /> LinkedIn
                    </a>
                    <p>|</p>
                    <a className="flex hover:text-tertiary transition-colors duration-300 ease-in-out" href="https://github.com/MarkRyanGarcia" target="_blank">
                        <FiGithub className="translate-y-1 mr-2" /> Github
                    </a>
                    <p>|</p>
                    <NavLink to="/about" className="flex space-x-1 transition duration-300 ease-in-out hover:space-x-2 hover:text-tertiary">
                        <p className="max-h-6">
                            More about me
                        </p>
                        <p className="max-h-6">
                            {"->"}
                        </p>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

