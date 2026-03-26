import type { ExperienceItem, LeadershipItem } from "./types";

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

export function parseLeadership(latex: string): LeadershipItem[] {
    const items: LeadershipItem[] = [];

    const sectionIdx = latex.search(/\\section\{[^}]*(?:\{[^}]*\}[^}]*)*Leadership/);
    if (sectionIdx === -1) return [];

    const afterSection = latex.slice(sectionIdx);
    const endMatch = afterSection.match(/\}([\s\S]*?)\\resumeSubHeadingListEnd/);
    if (!endMatch) return [];

    const block = endMatch[1];

    // Find each \resumeProjectHeading and extract its two brace args manually
    // to handle nested braces like \href{url}{\textbf{...} $|$ \emph{...}}
    const token = "\\resumeProjectHeading";
    let i = 0;

    while ((i = block.indexOf(token, i)) !== -1) {
        i += token.length;

        // Skip whitespace
        while (i < block.length && /\s/.test(block[i])) i++;

        // Extract first brace arg (heading — may have nested braces)
        const headingRaw = extractNextBraceContent(block, i);
        if (headingRaw === null) continue;
        i += headingRaw.consumed;

        // Skip whitespace
        while (i < block.length && /\s/.test(block[i])) i++;

        // Extract second brace arg (timeline)
        const timelineRaw = extractNextBraceContent(block, i);
        if (timelineRaw === null) continue;
        i += timelineRaw.consumed;

        // Find the items block between \resumeItemListStart and \resumeItemListEnd
        const listStart = block.indexOf("\\resumeItemListStart", i);
        const listEnd = block.indexOf("\\resumeItemListEnd", i);
        if (listStart === -1 || listEnd === -1) continue;
        const itemsBlock = block.slice(listStart + "\\resumeItemListStart".length, listEnd);
        i = listEnd + "\\resumeItemListEnd".length;

        // Clean heading: strip \href{url}{text} -> text, \textbf{x} -> x, \emph{x} -> x, $|$ -> |
        let cleanHeading = headingRaw.content;
        // Repeatedly strip wrappers until stable (handles nesting)
        let prev = "";
        while (prev !== cleanHeading) {
            prev = cleanHeading;
            cleanHeading = cleanHeading
                .replace(/\\href\{[^{}]*\}\{([\s\S]*?)\}/g, "$1")
                .replace(/\\textbf\{([^{}]*)\}/g, "$1")
                .replace(/\\emph\{([^{}]*)\}/g, "$1")
                .replace(/\$\s*\|\s*\$/g, "|")
                .replace(/\s+/g, " ")
                .trim();
        }

        const pipeIdx = cleanHeading.indexOf(" | ");
        const title = pipeIdx !== -1 ? cleanHeading.slice(0, pipeIdx).trim() : cleanHeading;
        const org = pipeIdx !== -1 ? cleanHeading.slice(pipeIdx + 3).trim() : "";

        const rawBullets = extractBraceBlocks(itemsBlock, "resumeItem");
        const bullets = rawBullets.map(b =>
            b
                .replace(/\\textbf\{([^}]+)\}/g, "$1")
                .replace(/\\%/g, "%")
                .replace(/\s+/g, " ")
                .trim()
        );

        items.push({
            title,
            org,
            timeline: timelineRaw.content.replace(/--/g, "–").trim(),
            bullets,
        });
    }

    return items;
}

function extractNextBraceContent(
    input: string,
    start: number
): { content: string; consumed: number } | null {
    if (input[start] !== "{") return null;
    let depth = 1;
    let i = start + 1;
    while (i < input.length && depth > 0) {
        if (input[i] === "{") depth++;
        else if (input[i] === "}") depth--;
        i++;
    }
    return { content: input.slice(start + 1, i - 1), consumed: i - start };
}
