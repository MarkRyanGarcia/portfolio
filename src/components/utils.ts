import type { ExperienceItem } from "./types";

export function parseExperience(latex: string): ExperienceItem[] {
    const experienceItems: ExperienceItem[] = [];

    const experienceBlockMatch = latex.match(
        /\\section\{Experience\}([\s\S]*?)\\resumeSubHeadingListEnd/
    );

    if (!experienceBlockMatch) {
        console.error("Could not find the experience block.");
        return [];
    }

    const experienceBlock = experienceBlockMatch[1];

    const subheadingRegex =
        /\\resumeSubheading\s*\n\s*\{([^}]+)\}\{([^}]+)\}\s*\n\s*\{([^}]+)\}\{([^}]+)\}\s*\n\s*\\resumeItemListStart([\s\S]*?)\\resumeItemListEnd/g;


    let match: RegExpExecArray | null;

    while ((match = subheadingRegex.exec(experienceBlock)) !== null) {
        const [, title, timeline, company, location, itemsBlock] = match;

        const rawBullets = extractBraceBlocks(itemsBlock, "resumeItem");

        const bullets = rawBullets.map(b =>
            b
                .replace(/\\textbf\{([^}]+)\}/g, "$1")
                .replace(/\\%/g, "%")
                .replace(/\\btilde/g, "~")
                .replace(/\s+/g, " ")
                .trim()
        );

        experienceItems.push({
            title: title.trim(),
            company: company.trim(),
            timeline: timeline.replace(/--/g, "–").trim(),
            location: location.trim(),
            bullets
        });
    }

    return experienceItems;
}

function extractBraceBlocks(
    input: string,
    command: string
): string[] {
    const results: string[] = [];
    const startToken = `\\${command}{`;

    let i = 0;
    while ((i = input.indexOf(startToken, i)) !== -1) {
        let depth = 1;
        let j = i + startToken.length;

        while (j < input.length && depth > 0) {
            if (input[j] === "{") depth++;
            else if (input[j] === "}") depth--;
            j++;
        }

        results.push(input.slice(i + startToken.length, j - 1));
        i = j;
    }

    return results;
}