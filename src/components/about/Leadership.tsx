import { useResume } from "../../hooks/useResume";

export default function Leadership() {
    const { leadershipItems, isLoading, isSuccess, isError } = useResume();

    const renderItems = () => {
        if (isError) return <p className="text-red-400">Failed to load leadership data.</p>;
        if (!isSuccess) return null;
        if (leadershipItems.length === 0) return <p className="text-secondary">No leadership items found.</p>;

        return leadershipItems.map((item, idx) => (
            <div key={idx} className="w-full bg-base-2 rounded-md p-5">
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-primary font-bold text-lg">{item.title}</h2>
                            <h3 className="text-tertiary text-md">{item.org}</h3>
                        </div>
                        <div className="flex flex-col md:text-right">
                            <h3 className="text-secondary text-sm">{item.timeline}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {item.bullets.map((bullet, bIdx) => (
                            <p key={bIdx} className="text-secondary">• {bullet}</p>
                        ))}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex flex-col space-y-5">
            <h2 className="text-primary text-3xl font-bold">Leadership</h2>

            <div className="flex space-x-2 md:space-x-4 w-full h-auto">
                <div className="border-l-3 border-white" />
                <div className="flex flex-col w-full space-y-4">
                    {isLoading ? <p className="text-secondary">Fetching from resume...</p> : renderItems()}
                </div>
            </div>
        </div>
    );
}
