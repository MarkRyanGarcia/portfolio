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
            const rawText = await response.text()
            return rawText
        },
    })

    useEffect(() => {
        // 2. Check if the query was successful AND data exists.
        if (isSuccess && data) {
            try {
                // 3. Parse the raw LaTeX content using your function.
                const parsedItems: ExperienceItem[] = parseExperience(data);

                // 4. Set the state with the parsed data.
                setExpItems(parsedItems);

                console.log("Successfully parsed and set experience items:", parsedItems);
            } catch (e) {
                console.error("Error parsing LaTeX content:", e);
                // Optionally handle parsing error state here
            }
        }
        // Dependency array: Rerun this effect only when data or isSuccess changes.
    }, [data, isSuccess]);

    const mockExp: ExperienceItem[] = [
        {
            "title": "Supplemental Instruction (SI) Leader",
            "company": "California State University, Fullerton",
            "timeline": "Jan 2024 -- Present",
            "location": "Fullerton, CA",
            "bullets": [
                "Increased student grades and comprehension an average of 10% by leading 90 peer-assisted study sessions across three semesters and developing targeted review materials that simplified key Calculus I and II concepts",
                "Utilized innovative teaching methods such as guided group discussions, collaborative problem-solving, and peer-to-peer interaction to create an engaging learning environment that reinforced foundational calculus topics"
            ]
        },
        {
            "title": "Software Engineer Intern",
            "company": "Glenair, Inc.",
            "timeline": "May 2025 -- Aug 2025",
            "location": "Anaheim, CA",
            "bullets": [
                "Engineered a full-stack web application to generate Zebra printer label templates, printing approximately ~600 labels per week, utilizing React, FastAPI, SQLAlchemy, SQL Server, Labelary API, and Zebra Printer Language",
                "Integrated inventory and job-order APIs to auto-populate part and job numbers into a custom Zebra label template, eliminating manual entry errors, guaranteeing 100% audit-trail accuracy, and accelerating workflows",
                "Optimized Flask API endpoints by integrating MinIO storage buckets with SQL Server, reducing average file retrieval latency by an average of 60% compared to retrieving raw binary files from SQL tables"
            ]
        },
        {
            "title": "Crew Trainer",
            "company": "McDonalds",
            "timeline": "June 2022 -- May 2025",
            "location": "Chino, CA",
            "bullets": [
                "Trained new hires and maintained efficient, high-quality service across multiple stations in a fast-paced setting"
            ]
        }
    ]



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

            <div className="flex space-x-10 w-full h-auto">
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