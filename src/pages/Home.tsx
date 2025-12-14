import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Home() {
    const linkStyle = 'text-tertiary underline font-bold hover:text-base hover:no-underline hover:bg-tertiary transition-colors duration-200 ease-in-out'

    return (
        <div className="w-full py-15">
            <div className="flex">
                <div className="flex flex-col w-[55%] space-y-5">
                    <h1 className="text-primary text-3xl font-bold">
                        Hey, I'm <span className="text-tertiary">Mark Garcia</span>
                    </h1>
                    <p className="text-secondary text-base">
                        I’m a part-time SWE @ <a className={linkStyle} href="https://glenair.com/" target="_blank">Glenair, Inc.</a> I’m currently a
                        4th year student at CSU Fullerton, where I am the
                        Fullerton Chapter President of the <a className={linkStyle} href="https://acmcsuf.com/" target="_blank">Association for
                            Computing Machinery (ACM)</a>.
                    </p>
                </div>
                <div className="flex w-[45%] justify-center">
                    <img src="/mark/mark.png" className="w-50 rounded-full border-4 border-secondary hover:border-tertiary transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <nav className="flex space-x-5 text-secondary">
                <a className="flex hover:text-primary" href="https://linkedin.com/in/markryangarcia/" target="_blank">
                    <CiLinkedin className="mr-2" size={22} /> LinkedIn
                </a>
                <p>|</p>
                <a className="flex hover:text-primary" href="https://github.com/MarkRyanGarcia" target="_blank">
                    <FiGithub className="translate-y-1 mr-2" /> Github
                </a>
                <p>|</p>
                <NavLink to="/about" className="hover:text-primary">
                    {"More about me ->"}
                </NavLink>
            </nav>
        </div>
    )
}

