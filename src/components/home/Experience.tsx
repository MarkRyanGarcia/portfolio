import ExperienceCard from "./ExperienceCard";
import { useResume } from "../../hooks/useResume";
import { linkStyle } from "../../lib/styles";
import { NavLink } from "react-router-dom";

export default function Experience() {
    const { expItems, isLoading, isSuccess, isError } = useResume();

    const renderExperience = () => {
        if (isError) return <p className="text-red-400">Failed to load experience data.</p>;
        if (!isSuccess) return null;
        if (expItems.length === 0) return <p>No experience items found.</p>;

        return expItems.map((expItem, idx) => (
            <ExperienceCard
                key={`expCard-${idx}`}
                title={expItem.title}
                company={expItem.company}
                timeline={expItem.timeline}
                location={expItem.location}
                bullets={expItem.bullets}
            />
        ));
    };

    return (
        <div className="flex flex-col space-y-5">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-primary text-3xl font-bold">Experience</h2>
                <NavLink
                    to="/resume"
                    target="_blank"
                    className="flex transition duration-300 ease-in-out hover:text-tertiary"
                >
                    <p className={linkStyle}>{"View Full Resume ->"}</p>
                </NavLink>
            </div>

            <div className="flex flex-col w-full space-y-4">
                    {isLoading ? (
                        <p className="text-secondary text-sm">Fetching from resume...</p>
                    ) : renderExperience()}
                </div>
        </div>
    );
}
