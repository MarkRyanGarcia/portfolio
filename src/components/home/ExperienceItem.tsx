import { useQuery } from "@tanstack/react-query"

export default function ExperienceItem({ selectedExperience }: { selectedExperience: boolean }) {

    const { data, error, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['rawResume'],
        queryFn: async () => {
            const response = await fetch('https://raw.githubusercontent.com/MarkRyanGarcia/Resume/refs/heads/main/resume.tex')

            if (!response.ok) {
                throw new Error('Could not retrieve resume data')
            }

            return response.text()
        },
    })

    return (
        <h1>
            t - {selectedExperience} - {error?.name} {isLoading}, {isError}, {isSuccess}
        </h1>
    )
}