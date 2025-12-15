import { NavLink } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";
import type { ExperienceItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { parseExperience } from "../utils";

export default function Experience() {
    const linkStyle = 'text-tertiary underline font-bold hover:text-base hover:no-underline hover:bg-tertiary transition duration-300 ease-in-out'

    const [expItems, setExpItems] = useState<ExperienceItem[]>()

    const { data, error, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['rawResume'],
        queryFn: async () => {
            const response = await fetch('https://raw.githubusercontent.com/MarkRyanGarcia/Resume/refs/heads/main/resume.tex')

            if (!response.ok) {
                throw new Error('Could not retrieve resume data')
            }
            console.log(error, isLoading, isError, isSuccess)
            return response.text()
        },
    })

    useEffect(() => {
        if (isSuccess && data) {
            try {
                const parsedItems: ExperienceItem[] = parseExperience(data);
                setExpItems(parsedItems);
                // console.log("Successfully parsed and set experience items:", parsedItems);
            } catch (e) {
                console.error("Error parsing LaTeX content:", e);
            }
        }
    }, [data, isSuccess]);

    return (
        <div className="flex flex-col space-y-5">
            <div className="flex justify-between items-center w-full ">
                <h2 className="text-primary text-3xl font-bold">
                    Experience
                </h2>
                <NavLink to="/resume" className={`flex ${linkStyle}`}>
                    <p className="">{"View Resume ->"}</p>
                </NavLink>
            </div>

            <div className="flex space-x-2 md:space-x-10 w-full h-auto">
                <div className="border-l-3 border-white" />
                <div className="flex flex-col w-full space-y-4">
                    {expItems && expItems.length > 0 ? (
                        expItems.map((expItem, idx) => (
                            <ExperienceCard key={`expCard-${idx}`} title={expItem.title} company={expItem.company} timeline={expItem.timeline} location={expItem.location} bullets={expItem.bullets} />
                        ))
                    ) : (
                        <p>No experience items found or still loading.</p>
                    )}
                </div>
            </div>
        </div>
    )
}