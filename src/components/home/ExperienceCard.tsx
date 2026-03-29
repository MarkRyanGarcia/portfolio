interface ExperienceCardProps {
    title: string;
    company: string;
    timeline: string;
    location: string;
    bullets: string[];
}

export default function ExperienceCard({ title, company, timeline, location, bullets }: ExperienceCardProps) {
    return (
        <div className="w-full bg-base-2 border border-secondary rounded-lg p-5">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                        <h2 className="text-primary font-bold text-lg leading-tight">{title}</h2>
                        <h3 className="text-tertiary text-sm font-semibold">{company}</h3>
                    </div>
                    <div className="flex flex-col md:items-end shrink-0">
                        <span className="text-secondary text-sm px-2 py-0.5 w-fit">
                            {timeline}
                        </span>
                        <span className="text-secondary text-xs mt-1">{location}</span>
                    </div>
                </div>
                <ul className="flex flex-col gap-1">
                    {bullets.map((bullet, idx) => (
                        <li key={`bullet-${title}-${idx}`} className="text-secondary text-sm flex gap-2">
                            <span className="text-tertiary shrink-0 mt-0.5">•</span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
