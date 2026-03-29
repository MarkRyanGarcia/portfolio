import { MdLanguage } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import type { Project } from "../../lib/types";

interface ProjectCardProps {
    project: Project;
    reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
    return (
        <div className="flex flex-col w-full bg-base-2 border border-secondary rounded-lg overflow-hidden hover:border-tertiary/50 transition-colors duration-300">
            <div
                className={`flex flex-col w-full gap-6 ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center p-5`}
            >
                <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-xl text-primary font-bold">{project.title}</h3>

                    <p className="text-secondary text-sm leading-relaxed">{project.description}</p>

                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-tertiary text-xs bg-tertiary/10 border border-tertiary/30 rounded px-2 py-0.5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {project.links && (
                        <div className="flex gap-2 flex-wrap">
                            {project.links.Deployment && (
                                <a
                                    href={project.links.Deployment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-base hover:bg-tertiary transition-all duration-200 border border-secondary/50 py-1 px-2.5 rounded-md hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <MdLanguage size={14} /> Visit Site
                                </a>
                            )}
                            {project.links.Github && (
                                <a
                                    href={project.links.Github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-base hover:bg-tertiary transition-all duration-200 border border-secondary/50 py-1 px-2.5 rounded-md hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <FiGithub size={14} /> GitHub
                                </a>
                            )}
                            {project.links.Devpost && (
                                <a
                                    href={project.links.Devpost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-base hover:bg-tertiary transition-all duration-200 border border-secondary/50 py-1 px-2.5 rounded-md hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <FaLink size={12} /> Devpost
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="w-full md:w-72 shrink-0">
                    <img
                        className="w-full rounded-md object-cover"
                        src={project.image_path}
                        alt={`${project.title} preview`}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
