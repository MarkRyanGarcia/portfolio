import { NavLink } from "react-router-dom";
import { projects } from "../../constants/projects";
import ProjectCard from "../projects/ProjectCard";
import { linkStyle } from "../../lib/styles";

export default function FeaturedProjects() {
    const featured = projects.filter((p) => p.featured);

    if (featured.length === 0) return null;

    return (
        <div className="flex flex-col space-y-5">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-primary text-3xl font-bold">Featured Projects</h2>
                <NavLink
                    to="/projects"
                    className="flex transition duration-300 ease-in-out hover:text-tertiary"
                >
                    <p className={linkStyle}>{"View All Projects ->"}</p>
                </NavLink>
            </div>

            <div className="flex flex-col gap-5">
                {featured.map((project, idx) => (
                    <ProjectCard key={`featured-${idx}`} project={project} reverse={idx % 2 === 0} />
                ))}
            </div>
        </div>
    );
}
