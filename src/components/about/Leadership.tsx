import { useResume } from "../../hooks/useResume";

export default function Leadership() {
    const { leadershipItems, isLoading, isSuccess, isError } = useResume();

    const renderItems = () => {
        if (isError) return <p className="text-red-400">Failed to load leadership data.</p>;
        if (!isSuccess) return null;
        if (leadershipItems.length === 0) return <p className="text-secondary">No leadership items found.</p>;

        return leadershipItems.map((item, idx) => (
            <div key={idx} className="w-full bg-base-2 border border-secondary rounded-lg p-5">
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                        <div>
                            <h2 className="text-primary font-bold text-lg leading-tight">{item.title}</h2>
                            <h3 className="text-tertiary text-sm font-semibold">{item.org}</h3>
                        </div>
                        <div className="flex flex-col md:items-end shrink-0">
                            <span className="text-secondary text-sm px-2 py-0.5 w-fit">
                                {item.timeline}
                            </span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-1">
                        {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-secondary text-sm flex gap-2">
                                <span className="text-tertiary shrink-0 mt-0.5">•</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex flex-col space-y-5">
            <h2 className="text-primary text-3xl font-bold">Leadership</h2>

            <div className="flex flex-col w-full space-y-4">
                    {isLoading ? <p className="text-secondary text-sm">Fetching from resume...</p> : renderItems()}
                </div>
        </div>
    );
}
