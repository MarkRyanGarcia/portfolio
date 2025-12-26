import type { Project } from "../components/types";
import { MdLanguage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
    const projects: Project[] = [
        {
            title: 'Sudoku Solver',
            description: 'Enter your own puzzle or generate a new one, choose an algorithm, and watch the solution unfold step-by-step.',
            image_path: '../src/static/ProjectImages/sudoku.png',
            links: {
                Github: 'https://github.com/MarkRyanGarcia/cpsc481-sudoku',
                Deployment: 'https://sudoku.markgarcia.dev/',
            }
        },
        {
            title: 'DoodleJump Workshop',
            description: 'As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#.',
            image_path: '../src/static/ProjectImages/doodlejump1.png',
            links: {
                Github: 'https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25'
            }
        },
        {
            title: 'Marktris',
            description: 'A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, and the Super Rotation System. Warning: Use Chrome for best experience.',
            image_path: '../src/static/ProjectImages/marktris.png',
            links: {
                Deployment: 'https://marktris.markgarcia.dev/',
            }
        },
        {
            title: 'NeonChat',
            description: 'Submission for Fullyhacks 2024. Neonchat is a Bluetooth-based direct messaging chatbox that allows seamless communication between devices.',
            image_path: '../src/static/ProjectImages/neonchat.png',
            links: {
                Deployment: 'https://jowen-ster.github.io/FULLYHACKS_NEONCHAT/',
                Github: 'https://github.com/JOwen-ster/FULLYHACKS_NEONCHAT',
            }
        },
        {
            title: 'Portolio Site',
            description: "Hey, what's this doing here?",
            image_path: '../src/static/ProjectImages/portfolio.png',
            links: {
                Deployment: 'https://markgarcia.dev/',
                Github: 'https://github.com/MarkRyanGarcia/Portfolio'
            }
        },
    ];
    return (
        <div className="flex flex-col gap-10 w-full">
            <h2 className="text-primary text-3xl font-bold">
                My <span className="text-tertiary">Projects</span>
            </h2>
            {projects.map((project, index) => {
                const isOdd = index % 2 === 0;

                return (
                    <div className='flex flex-col gap-5 w-full items-center bg-base-2 border-secondary border rounded-lg text-primary'
                        key={`project-${index}`}
                    >
                        <div className={`flex flex-col w-full gap-3 ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-around text-center sm:text-left p-5`}>
                            <div className="flex flex-col gap-2 items-center text-center">
                                <h3 className="text-xl text-tertiary font-bold">{project.title}</h3>
                                <p className="sm:w-110">
                                    {project.description}
                                </p>
                                {project.links && (
                                    <div className="flex gap-2 justify-center">
                                        {project.links.Deployment && (
                                            <a href={project.links.Deployment} target="_blank"
                                                className="flex items-center hover:text-tertiary transition-colors duration-300 ease-in-out border py-0.5 px-1.5 rounded-md"
                                            >
                                                <MdLanguage className="mr-1.5" />
                                                Visit Site 
                                            </a>
                                        )}
                                        {project.links.Github && (

                                            <a href={project.links.Github} target="_blank"
                                                className="flex items-center hover:text-tertiary transition-colors duration-300 ease-in-out border py-0.5 px-1.5 rounded-md"
                                            >
                                                <FiGithub className="mr-1.5" />
                                                GitHub
                                            </a>

                                        )}
                                    </div>
                                )}
                            </div>
                            <img
                                className="w-75 rounded-sm"
                                src={project.image_path}
                                alt={`${project.title} image`}
                            />
                        </div>
                    </div>
                );
            })}
        </div >
    )
}
