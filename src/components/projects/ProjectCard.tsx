import { MdLanguage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import type { Project } from "../../lib/types";

interface ProjectCardProps {
    project: Project;
    reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-5 w-full items-center bg-base-2 border-secondary border rounded-lg text-primary">
            <div
                className={`flex flex-col w-full gap-3 ${reverse ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center justify-around text-center sm:text-left p-5`}
            >
                <div className="flex flex-col gap-2 items-center text-center">
                    <h3 className="text-xl text-tertiary font-bold">
                        {project.title}
                    </h3>

                    <p className="max-w-xl">
                        {project.description}
                    </p>

                    {project.links && (
                        <div className="flex gap-2 justify-center">
                            {project.links.Deployment && (
                                <a
                                    href={project.links.Deployment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-base hover:bg-tertiary transition-all duration-300 ease-in-out border py-0.5 px-1.5 rounded-md hover:-translate-y-0.5"
                                >
                                    <MdLanguage className="mr-1.5" />
                                    Visit Site
                                </a>
                            )}

                            {project.links.Github && (
                                <a
                                    href={project.links.Github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-base hover:bg-tertiary transition-all duration-300 ease-in-out border py-0.5 px-1.5 rounded-md hover:-translate-y-0.5"
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
                    loading="lazy"
                />
            </div>
        </div>
    );
}