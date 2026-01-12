import { linkStyle } from "../../lib/styles";
import TooltipText from "../ui/TooltipText";

export default function AboutBio() {
    return (
        <div className="flex flex-col gap-4 text-secondary">
            <p>
                Hey! I’m <span className="text-tertiary font-bold">Mark Garcia</span>, a Computer Science student at Cal State
                Fullerton with a minor in Mathematics, graduating in May 2026.
                Some of my work includes full stack projects built with React,
                FastAPI, and SQL, as well as hackathon and club driven projects
                through ACM.
            </p>

            <p>
                I am heavily involved in
                <a className={linkStyle} href="https://acmcsuf.com/" target="_blank">
                    Association for Computing Machinery (ACM)
                </a>{" "}
                at CSUF, currently leading the club as the President for
                the '25 to '26 year. I am also a Co-Director for FullyHacks 2026,
                CSUF's biggest annual hackathon.
            </p>

            <p>
                Some of my interests include
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