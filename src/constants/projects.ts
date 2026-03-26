import type { Project } from "../lib/types";

export const projects: Project[] = [
    {
        title: "Realease",
        description:
            "An AI assistant that helps you understand the home-buying process. Realease provides personalized guidance, answers your questions, and shows you real listings, and provides predictive valuation insights. Submitted for IrvineHacks 2026.",
        image_path: "/ProjectImages/realease.png",
        links: {
            Github: "https://github.com/MarkRyanGarcia/IrvineHacks26",
            Deployment: "https://devpost.com/software/realease",
        },
    },
    {
        title: "Sudoku Solver",
        description:
            "Enter your own puzzle or generate a new one, choose an algorithm, and watch the solution unfold step-by-step.",
        image_path: "/ProjectImages/sudoku.png",
        links: {
            Github: "https://github.com/MarkRyanGarcia/cpsc481-sudoku",
            Deployment: "https://sudoku.markgarcia.dev/",
        },
    },
    {
        title: "DoodleJump Workshop",
        description:
            "As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#.",
        image_path: "/ProjectImages/doodlejump1.png",
        links: {
            Github: "https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25",
        },
    },
    {
        title: "Marktris",
        description:
            "A Tetris clone made in Godot. It includes many in-game features to make the game as faithful to modern Tetris as possible. This includes 7-bag, wall-kicks, and the Super Rotation System. Warning: Use Chrome for best experience.",
        image_path: "/ProjectImages/marktris.png",
        links: {
            Deployment: "https://marktris.markgarcia.dev/",
        },
    },
    {
        title: "NeonChat",
        description:
            "Submission for FullyHacks 2024. NeonChat is a Bluetooth-based direct messaging chatbox that allows seamless communication between devices.",
        image_path: "/ProjectImages/neonchat.png",
        links: {
            Deployment: "https://jowen-ster.github.io/FULLYHACKS_NEONCHAT/",
            Github: "https://github.com/JOwen-ster/FULLYHACKS_NEONCHAT",
        },
    },
    {
        title: "Previous Portfolio Site",
        description: "My old portfolio website",
        image_path: "/ProjectImages/portfolio-old.png",
        links: {
            Deployment: "https://old.markgarcia.dev/",
            Github: "https://github.com/MarkRyanGarcia/portfolio-old2",
        },
    },
];
