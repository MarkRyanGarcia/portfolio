import TooltipText from "../ui/TooltipText";

export default function AboutBio() {
    return (
        <div className="flex flex-col gap-4 text-secondary">
            <p>
                Hey! I'm <span className="text-tertiary font-bold">Mark Garcia</span>, a Computer Science student at Cal State
                Fullerton with a minor in Mathematics, graduating in May 2026.
                I'm a fullstack developer with a focus on backend.
            </p>

            <p>
                I try to spend a lot of my free-time learning new tools. Some of my favorites include FastAPI, Neon (SQL), Clerk,
                React, Tanstack, and Vercel.
            </p>

            <p>
                Outside of code, I enjoy
                <TooltipText
                    id="cube pb"
                    label="Rubik's Cubes"
                    tooltip="PB: 14.87s"
                />
                ,
                <TooltipText
                    id="valorant rank"
                    label="Valorant"
                    tooltip="Top 0.1% in NA"
                />
                , going out with friends, and eating lots and lots of Mexican food.
            </p>
        </div>
    );
}
