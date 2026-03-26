import type { ExperienceItem } from "./types";

export function parseExperience(latex: string): ExperienceItem[] {
    const experienceItems: ExperienceItem[] = [];

    // Find the experience section — handles both plain \section{Experience}
    // and wrapped forms like \section{\textcolor{main}{\textbf{Experience}}}
    const expIdx = latex.search(/\\section\{[^}]*(?:\{[^}]*\}[^}]*)*Experience/);
    if (expIdx === -1) {
        console.error("Could not find the experience block.");
        return [];
    }
    // Find the end of this section (next \resumeSubHeadingListEnd)
    const afterSection = latex.slice(expIdx);
    const endMatch = afterSection.match(/\}([\s\S]*?)\\resumeSubHeadingListEnd/);
    if (!endMatch) {
        console.error("Could not find the experience block end.");
        return [];
    }
    const experienceBlock = endMatch[1];

    // Match both single-line: \resumeSubheading{arg1}{arg2}{arg3}{arg4}
    // and multi-line: \resumeSubheading\n  {arg1}{arg2}\n  {arg3}{arg4}
    // New format arg order: {company}{timeline}{title}{location}
    // Old format arg order: {title}{timeline}\n{company}{location}
    const subheadingRegex =
        /\\resumeSubheading\s*\{([^}]+)\}\{([^}]+)\}\s*\{([^}]+)\}\{([^}]+)\}\s*\\resumeItemListStart([\s\S]*?)\\resumeItemListEnd/g;


    let match: RegExpExecArray | null;

    while ((match = subheadingRegex.exec(experienceBlock)) !== null) {
        // New format: {company}{timeline}{title}{location}
        // Old format: {title}{timeline}{company}{location} (multi-line)
        // Detect new format: single-line args (no newline between arg pairs)
        const fullMatch = match[0];
        const isNewFormat = !/\\resumeSubheading\s*\n/.test(fullMatch);
        const [, arg1, arg2, arg3, arg4, itemsBlock] = match;
        const [title, timeline, company, location] = isNewFormat
            ? [arg3, arg2, arg1, arg4]
            : [arg1, arg2, arg3, arg4];

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