import Intro from "../components/about/Intro";

export default function About() {
    return (
        <div className="space-y-16 md:space-y-20">
            <div className="flex flex-col space-y-5">
                <h2 className="text-primary text-3xl font-bold">
                    About <span className="text-tertiary">Me</span>
                </h2>
                <Intro />
            </div>
        </div>
    )
}