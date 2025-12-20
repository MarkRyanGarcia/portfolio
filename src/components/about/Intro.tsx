import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Intro() {
    return (
        <div className="flex flex-col space-y-5">
            <h2 className="text-primary text-3xl font-bold">
                About <span className="text-tertiary">Me</span>
            </h2>
            <div className="flex flex-col w-full gap-6 md:flex-row md:items-center">

                <div className="flex justify-center w-full md:w-[40%]">
                    <img
                        src="/mark/mark.png"
                        className="w-full max-w-xs md:max-w-sm rounded-md bg-secondary object-cover"
                    />
                </div>

                <div className="flex flex-col w-full gap-4 md:w-[60%] md:px-6 text-secondary">
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
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <a href="https://linkedin.com/in/markryangarcia/" target="_blank"
                            className="flex items-center hover:text-tertiary transition-colors duration-300 ease-in-out"
                        >
                            <CiLinkedin className="mr-1.5" size={22} />
                            LinkedIn
                        </a><p>|</p>

                        <a href="https://github.com/MarkRyanGarcia" target="_blank"
                            className="flex items-center hover:text-tertiary transition-colors duration-300 ease-in-out"
                        >
                            <FiGithub className="mr-1.5" />
                            GitHub
                        </a><p>|</p>

                        <NavLink to="/projects" className="flex space-x-1 transition duration-300 ease-in-out hover:space-x-2 hover:text-tertiary">
                            <p className="max-h-6">
                                Projects
                            </p>
                            <p className="max-h-6">
                                {"->"}
                            </p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}