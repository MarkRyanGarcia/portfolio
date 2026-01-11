import Intro from "../components/about/Intro";

export default function About() {
    return (
        <div className="flex flex-col">
            <h2 className="text-primary text-3xl font-bold mb-5">
                About <span className="text-tertiary">Me</span>
            </h2>
            <Intro />
        </div>
    )
}