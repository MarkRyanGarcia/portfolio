
interface ExperienceCardProps {
    title: string
    company: string
    timeline: string
    location: string
    bullets: string[]
}

export default function ExperienceCard({ title, company, timeline, location, bullets }: ExperienceCardProps) {

    return (
        <div className="w-full bg-base-2 rounded-md p-3">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-col">
                    <div className="flex w-full justify-between">
                        <h2 className="text-primary font-bold text-lg">{title}</h2>
                        <h3 className="text-secondary text-sm">{timeline}</h3>
                    </div>
                    <div className="flex w-full justify-between">
                        <h3 className="text-tertiary text-md">{company}</h3>
                        <h3 className="text-secondary text-sm">{location}</h3>
                    </div>
                </div>

                <div className="flex flex-col">
                    {bullets.map((bullet, idx) => (
                        <p key={`bullet-${title}-${idx}`} className="text-secondary">• {bullet}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}