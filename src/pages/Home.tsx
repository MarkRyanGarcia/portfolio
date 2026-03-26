import Experience from "../components/home/Experience";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Hero from "../components/home/Hero";

export default function Home() {
    return (
        <div className="space-y-16 md:space-y-20">
            <Hero />
            <Experience />
            <FeaturedProjects />
        </div>
    )
}