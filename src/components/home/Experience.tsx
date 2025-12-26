import ExperienceCard from "./ExperienceCard";
import type { ExperienceItem } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useMemo, } from "react";
import { parseExperience } from "../utils";

export default function Experience() {
    const linkStyle = 'text-tertiary underline font-bold hover:text-base hover:no-underline hover:bg-tertiary transition duration-300 ease-in-out'

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['rawResume'],
        queryFn: async () => {
            const response = await fetch('https://raw.githubusercontent.com/MarkRyanGarcia/Resume/refs/heads/main/resume.tex')

            if (!response.ok) {
                throw new Error('Could not retrieve resume data')
            }
            return response.text()
        },
    })

    const expItems = useMemo<ExperienceItem[]>(() => {
        if (!isSuccess || !data) return []

        try {
            return parseExperience(data)
        } catch (e) {
            console.error('Error parsing LaTeX content:', e)
            return []
        }

    }, [data, isSuccess])

    const renderExperience = () => {
        if (!isSuccess) return null
        if (expItems.length === 0) return <p>No experience items found.</p>

        return expItems.map((expItem, idx) => (
            <ExperienceCard
                key={`expCard-${idx}`}
                title={expItem.title}
                company={expItem.company}
                timeline={expItem.timeline}
                location={expItem.location}
                bullets={expItem.bullets}
            />
        ))
    }


    return (
        <div className="flex flex-col space-y-5">
            <div className="flex justify-between items-center w-full ">
                <h2 className="text-primary text-3xl font-bold">
                    Experience
                </h2>
                <a href="https://docs.google.com/viewerng/viewer?url=https://raw.githubusercontent.com/MarkRyanGarcia/Resume/main/resume.pdf"
                    target='_blank' className="flex transition duration-300 ease-in-out hover:text-tertiary">
                    <p className={`${linkStyle}`}>{"View Resume ->"}</p>
                </a>

            </div>

            <div className="flex space-x-2 md:space-x-4 w-full h-auto">
                <div className="border-l-3 border-white" />
                <div className="flex flex-col w-full space-y-4">
                    {isLoading ? (
                        <p>Fetching from resume...</p>
                    ) : (
                        renderExperience()
                    )}
                </div>
            </div>
        </div>
    )
}