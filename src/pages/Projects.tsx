import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../constants/projects";

export default function Projects() {

    return (
        <div className="flex flex-col gap-10 w-full">
            <h2 className="text-primary text-3xl font-bold">
                My <span className="text-tertiary">Projects</span>
            </h2>

            {projects.map((project, index) => (
                <ProjectCard
                    key={`project-${index}`}
                    project={project}
                    reverse={index % 2 === 0}
                />
            ))}
        </div>
    );
}