import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { parseExperience, parseLeadership } from "../lib/utils";
import type { ExperienceItem, LeadershipItem } from "../lib/types";

export function useResume() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["rawResume"],
        queryFn: async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/MarkRyanGarcia/Resume/refs/heads/main/Mark_Garcia_Resume.tex"
            );
            if (!response.ok) throw new Error("Could not retrieve resume data");
            return response.text();
        },
    });

    const expItems = useMemo<ExperienceItem[]>(() => {
        if (!isSuccess || !data) return [];
        try {
            return parseExperience(data);
        } catch (e) {
            console.error("Error parsing LaTeX content:", e);
            return [];
        }
    }, [data, isSuccess]);

    const leadershipItems = useMemo<LeadershipItem[]>(() => {
        if (!isSuccess || !data) return [];
        try {
            return parseLeadership(data);
        } catch (e) {
            console.error("Error parsing leadership content:", e);
            return [];
        }
    }, [data, isSuccess]);

    return { expItems, leadershipItems, isLoading, isSuccess, isError };
}
