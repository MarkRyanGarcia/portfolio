import type { ExperienceItem } from "./types";

export function parseExperience(latexContent: string): ExperienceItem[] {
    const experienceItems: ExperienceItem[] = [];

    // 1. ISOLATE THE EXPERIENCE BLOCK
    // Using [\s\S]*? to ensure we catch everything between the markers.
    const experienceBlockMatch = latexContent.match(
        /\\section\{Experience\}([\s\S]*?)\\resumeSubHeadingListEnd/
    );

    if (!experienceBlockMatch) {
        console.error("FATAL PARSING FAILURE: Could not find the experience block markers.");
        // Add a debugging hint:
        console.log("Check if the raw file contains: \\section{Experience} and \\resumeSubHeadingListEnd");
        return [];
    }

    const experienceBlock = experienceBlockMatch[1]; 
    console.log(`Successfully isolated Experience Block (Length: ${experienceBlock.length} chars).`);

    // 2. REGEX TO CAPTURE A SINGLE ITEM WITHIN THE BLOCK
    // ************************************************************************************
    // *** ULTIMATE FIX: Using [\\s\\S]*? to tolerate ALL content between arguments. ***
    // ************************************************************************************
    const experienceRegex = new RegExp(
        /\\resumeSubheading[\s\S]*?/.source + // Start
        /\{(.*?)\}[\s\S]*?/.source +          // Group 1: Title
        /\{(.*?)\}[\s\S]*?/.source +          // Group 2: Timeline
        /\{(.*?)\}[\s\S]*?/.source +          // Group 3: Company
        /\{(.*?)\}[\s\S]*?/.source +          // Group 4: Location
        
        /\\resumeItemListStart[\s\S]*?/.source + // Required list start
        
        // Group 5: The full list of bullets (non-greedy match to \\resumeItemListEnd)
        /([\s\S]*?)\\resumeItemListEnd/ 
        ,'g'
    );

    const bulletRegex = /\\resumeItem\{([\s\S]*?)\}/g;
    
    let match;
    let itemCounter = 0;
    
    // Execute the regex against the ISOLATED block
    while ((match = experienceRegex.exec(experienceBlock)) !== null) {
        itemCounter++;
        console.log(`--> FOUND ITEM #${itemCounter}. Title: ${match[1].trim()}`);

        const title = match[1].trim();
        const timeline = match[2].trim();
        const company = match[3].trim();
        const location = match[4].trim(); 
        const bulletsBlock = match[5]; 

        const bullets: string[] = [];
        let bulletMatch;
        bulletRegex.lastIndex = 0;
        
        while ((bulletMatch = bulletRegex.exec(bulletsBlock)) !== null) {
            const cleanedBullet = bulletMatch[1]
                .replace(/\\textbf\{([^\}]*)\}/g, '$1') 
                .replace(/\\btilde/g, '~')              
                .replace(/^[ \t\r\n]+|[ \t\r\n]+$/g, '')
                .trim();
            
            if (cleanedBullet) {
                bullets.push(cleanedBullet);
            }
        }
        console.log(`---- Parsed ${bullets.length} bullets.`);

        experienceItems.push({
            title,
            company,
            timeline,
            location,
            bullets
        });
    }

    console.log(`Parser finished execution. Total items returned: ${experienceItems.length}.`);
    return experienceItems;
}