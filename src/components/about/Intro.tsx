import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Intro() {
    return (
        <div className="flex flex-col space-y-5">
            <h2 className="text-primary text-3xl font-bold">
                About <span className="text-tertiary">Me</span>
            </h2>
            <div className="flex flex-col w-full md:flex-row md:justify-between space-y-5 md:space-y-0">
                <div className="md:w-85 h-92 bg-secondary rounded-md">
                    image placeholder
                </div>
                <div className="flex flex-col space-y-4 w-full md:w-[60%] md:px-5 text-secondary">
                    <p>
                        Hey! I’m Mark Garcia, a Computer Science student at Cal State
                        Fullerton with a minor in Mathematics, graduating in May 2026.
                        Some of my work includes full stack projects built with React,
                        FastAPI, and SQL, as well as hackathon and club driven projects
                        through ACM.
                    </p>
                    <p>
                        I am also heavily involved in Assocation for Computing Machinery
                        (ACM) at CSUF, currently leading the club as the President for
                        the '25-'26 year. I am also a Co-Director for FullyHacks 2026,
                        CSUF's biggest annual hackathon.
                    </p>
                    <p>
                        Some of my interests include Rubik's Cubes (14.87s PB), Valorant,
                        (Ranked Top 0.1% NA), going out with friends, and eating lots and
                        lots of Mexican food.
                    </p>
                    <div className="flex flex-wrap space-x-5 space-y-2 text-secondary">
                        <a className="flex hover:text-tertiary transition-colors duration-300 ease-in-out" href="https://linkedin.com/in/markryangarcia/" target="_blank">
                            <CiLinkedin className="mr-1.5" size={22} /> LinkedIn
                        </a>
                        <p>|</p>
                        <a className="flex hover:text-tertiary transition-colors duration-300 ease-in-out" href="https://github.com/MarkRyanGarcia" target="_blank">
                            <FiGithub className="translate-y-1 mr-1.5" /> Github
                        </a>
                        <p>|</p>
                        <NavLink to="/resume" className="transition duration-300 ease-in-out hover:text-tertiary">
                            <p className="max-h-6">
                                Resume
                            </p>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}