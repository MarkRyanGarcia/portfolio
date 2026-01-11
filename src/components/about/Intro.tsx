import AboutBio from "./AboutBio";
import AboutImage from "./AboutImage";
import AboutLinks from "./AboutLinks";

export default function Intro() {
    return (
        <div className="flex flex-col w-full gap-6 md:flex-row md:items-center">
            <AboutImage />

            <div className="flex flex-col w-full gap-4 md:w-[60%] md:px-6">
                <AboutBio />
                <AboutLinks />
            </div>
        </div>
    )
}