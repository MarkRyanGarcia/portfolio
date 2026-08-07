import type { ExperienceItem, LeadershipItem } from "./types";

type LatexCommand = {
    name: string;
    args: string[];
    start: number;
    end: number;
};

/**
 * The content contract for the Experience section is intentionally small:
 * \resumeSubheading{company}{location}{title}{timeline}
 * \resumeSubSubheading{title}{timeline}
 * \resumeItem{bullet}
 *
 * Layout commands and whitespace can change without affecting this parser.
 */
export function parseExperience(latex: string): ExperienceItem[] {
    const commands = commandsInSection(latex, "Experience");
    const roleCommands = commands.filter(command =>
        command.name === "resumeSubheading" || command.name === "resumeSubSubheading"
    );
    const experienceItems: ExperienceItem[] = [];
    let company = "";
    let location = "";

    for (let index = 0; index < roleCommands.length; index++) {
        const role = roleCommands[index];
        const nextRoleStart = roleCommands[index + 1]?.start ?? Number.POSITIVE_INFINITY;

        if (role.name === "resumeSubheading") {
            if (role.args.length < 4) continue;
            company = latexToText(role.args[0]);
            location = latexToText(role.args[1]);
        } else if (!company || role.args.length < 2) {
            continue;
        }

        const [title, timeline] = role.name === "resumeSubheading"
            ? [role.args[2], role.args[3]]
            : [role.args[0], role.args[1]];

        experienceItems.push({
            title: latexToText(title),
            company,
            timeline: formatTimeline(timeline),
            location,
            bullets: bulletsBetween(commands, role.end, nextRoleStart),
        });
    }

    return experienceItems;
}

export function parseLeadership(latex: string): LeadershipItem[] {
    const commands = commandsInSection(latex, "Leadership");
    const headings = commands.filter(command => command.name === "resumeProjectHeading");

    return headings.flatMap((heading, index) => {
        if (heading.args.length < 2) return [];

        const nextHeadingStart = headings[index + 1]?.start ?? Number.POSITIVE_INFINITY;
        const displayHeading = latexToText(heading.args[0]);
        const separator = displayHeading.indexOf("|");

        return [{
            title: separator === -1 ? displayHeading : displayHeading.slice(0, separator).trim(),
            org: separator === -1 ? "" : displayHeading.slice(separator + 1).trim(),
            timeline: formatTimeline(heading.args[1]),
            bullets: bulletsBetween(commands, heading.end, nextHeadingStart),
        }];
    });
}

function commandsInSection(latex: string, sectionName: string): LatexCommand[] {
    const commands = readCommands(stripComments(latex));
    const sectionIndex = commands.findIndex(command =>
        command.name === "section" && latexToText(command.args[0] ?? "").includes(sectionName)
    );

    if (sectionIndex === -1) return [];

    const section = commands[sectionIndex];
    const nextSection = commands.slice(sectionIndex + 1).find(command => command.name === "section");
    const sectionEnd = nextSection?.start ?? Number.POSITIVE_INFINITY;

    return commands.filter(command => command.start >= section.end && command.start < sectionEnd);
}

function bulletsBetween(commands: LatexCommand[], start: number, end: number): string[] {
    return commands
        .filter(command => command.name === "resumeItem" && command.start >= start && command.start < end)
        .map(command => latexToText(command.args[0] ?? ""));
}

function readCommands(input: string): LatexCommand[] {
    const commands: LatexCommand[] = [];
    let cursor = 0;

    while (cursor < input.length) {
        if (input[cursor] !== "\\") {
            cursor++;
            continue;
        }

        const command = readCommand(input, cursor);
        if (command === null) {
            cursor++;
            continue;
        }

        commands.push(command);
        cursor = command.end;
    }

    return commands;
}

function readCommand(input: string, start: number): LatexCommand | null {
    let cursor = start + 1;
    const nameStart = cursor;

    while (cursor < input.length && /[A-Za-z@]/.test(input[cursor])) cursor++;
    if (cursor === nameStart) return null;

    const name = input.slice(nameStart, cursor);
    const args: string[] = [];
    let end = cursor;

    while (true) {
        const argumentStart = skipWhitespace(input, cursor);
        if (input[argumentStart] === "[") {
            const optionalArgument = readBalanced(input, argumentStart, "[", "]");
            if (optionalArgument === null) break;
            cursor = optionalArgument.end;
            end = cursor;
            continue;
        }
        if (input[argumentStart] !== "{") break;

        const argument = readBalanced(input, argumentStart, "{", "}");
        if (argument === null) break;
        args.push(argument.content);
        cursor = argument.end;
        end = cursor;
    }

    return { name, args, start, end };
}

function readBalanced(
    input: string,
    start: number,
    open: string,
    close: string,
): { content: string; end: number } | null {
    if (input[start] !== open) return null;

    let depth = 1;
    let cursor = start + 1;

    while (cursor < input.length && depth > 0) {
        if (!isEscaped(input, cursor)) {
            if (input[cursor] === open) depth++;
            if (input[cursor] === close) depth--;
        }
        cursor++;
    }

    if (depth !== 0) return null;
    return { content: input.slice(start + 1, cursor - 1), end: cursor };
}

function latexToText(input: string): string {
    let result = "";
    let cursor = 0;

    while (cursor < input.length) {
        if (input[cursor] === "\\") {
            const escapedCharacter = input[cursor + 1];
            if (escapedCharacter && "%$#&_{}\\".includes(escapedCharacter)) {
                result += escapedCharacter;
                cursor += 2;
                continue;
            }

            const command = readCommand(input, cursor);
            if (command === null) {
                cursor++;
                continue;
            }

            if (command.name === "btilde") {
                result += "~";
            } else {
                const visibleArgs = command.name === "href"
                    ? command.args.slice(1, 2)
                    : command.name === "textcolor"
                        ? command.args.slice(-1)
                        : command.args;
                result += visibleArgs.map(latexToText).join("");
            }
            cursor = command.end;
            continue;
        }

        if (input[cursor] !== "{" && input[cursor] !== "}" && input[cursor] !== "$") {
            result += input[cursor];
        }
        cursor++;
    }

    return result
        .replace(/\s+/g, " ")
        .replace(/\btilde\b/g, "~")
        .trim();
}

function formatTimeline(input: string): string {
    return latexToText(input).replace(/--/g, "–");
}

function stripComments(input: string): string {
    return input
        .split("\n")
        .map(line => {
            for (let index = 0; index < line.length; index++) {
                if (line[index] === "%" && !isEscaped(line, index)) return line.slice(0, index);
            }
            return line;
        })
        .join("\n");
}

function isEscaped(input: string, index: number): boolean {
    let slashCount = 0;
    for (let cursor = index - 1; cursor >= 0 && input[cursor] === "\\"; cursor--) slashCount++;
    return slashCount % 2 === 1;
}

function skipWhitespace(input: string, cursor: number): number {
    while (cursor < input.length && /\s/.test(input[cursor])) cursor++;
    return cursor;
}
