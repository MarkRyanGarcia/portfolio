import type { Project } from "../lib/types";

export const projects: Project[] = [
    {
        title: "Cohosted: An Event RSVP Site",
        description:
            "Events are always better when everybody pitches into the planning. Invite friends and prompt them with questions, polls, or just chat. Deployed with AWS (API Gateway, ECR, Lambda, RDS, DynamoDB, S3, Cognito, Bedrock)",
        image_path: "/ProjectImages/cohosted.png",
        featured: true,
        tags: ["AWS", "Docker", "CI/CD", "DevOps"],
        links: {
            Github: "https://github.com/elenav24/cpsc465-event-rsvp",
            Deployment: "https://cohosted.cloud"
        },
    },
    {
        title: "ACM March Madness",
        description:
            "A 5-day coding challenge event hosted by ACM at California State University, Fullerton! Collaborate in teams and put your problem-solving skills to the test to see if you shall become the best!",
        image_path: "/ProjectImages/march_madness.png",
        featured: true,
        tags: ["Python", "FastAPI", "SQL", "Clerk", "React", "TypeScript", "Node.js", "Tanstack"],
        links: {
            Github: "https://github.com/MarkRyanGarcia/acm-march-madness-2026",
            Deployment: "https://madness.markgarcia.dev/",
        },
    },
    {
        title: "conquian333.com",
        description:
            "(Under Development) Website for Conquian 333, a Mexican card game app with over 1.1 million downloads. Conquian is a traditional matching card game and one of the oldest rummy-style games in North America.",
        image_path: "/ProjectImages/conquian333.png",
        featured: false,
        tags: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            Github: "https://github.com/MarkRyanGarcia/conquian333.com",
            Deployment: "https://www.conquian333.com/app/v2/",
        },
    },
    {
        title: "fastfastapi",
        description:
            "A modular fastapi app generation tool. No bloated/overkill boilerplate, only include the capabilities you need. Inspired by create-vite. Support for PostgreSQL with SQLAlchemy, SQLModel, or FastCRUD; MongoDB via PyMongo; Redis caching; and OIDC authentication",
        image_path: "/ProjectImages/fapi-init-demo.gif",
        featured: false,
        tags: ["Go", "CLI"],
        links: {
            Github: "https://github.com/MarkRyanGarcia/fastfastapi",
        },
    },
    {
        title: "True Cost",
        description:
            "Project Submission for BeachHacks 9.0. Search any manufactured good and see its carbon footprint, supply chain map, and labor ethics score before you buy.",
        image_path: "/ProjectImages/true_cost.jpg",
        featured: false,
        tags: ["FastAPI", "Python", "Cohere AI", "React", "TypeScript", "Tailwind CSS"],
        links: {
            Github: "https://github.com/elenav24/beachhacks",
            Deployment: "https://devpost.com/software/trace-x8b97p",
        },
    },
    {
        title: "Realease",
        description:
            "An AI assistant that helps you understand the home-buying process. Realease provides personalized guidance, answers your questions, and shows you real listings, and provides predictive valuation insights. Submitted for IrvineHacks 2026.",
        image_path: "/ProjectImages/realease.png",
        featured: false,
        tags: ["AI/ML", "Python", "FastAPI", "React", "SQL", "Clerk"],
        links: {
            Github: "https://github.com/MarkRyanGarcia/IrvineHacks26",
            Deployment: "https://devpost.com/software/realease",
        },
    },
    {
        title: "URL Shortener",
        description:
            "Simple URL Shortener made to learn how to make an API in Go. Features a React frontend, PostgreSQL database, and a REST API backend.",
        image_path: "/ProjectImages/url_shortener.png",
        featured: true,
        tags: ["Go", "React", "TypeScript", "SQL"],
        links: {
            Github: "https://github.com/MarkRyanGarcia/url-shortener",
            Deployment: "https://url.markg.dev"
        },
    },
    {
        title: "Sudoku Solver",
        description:
            "Enter your own puzzle or generate a new one, choose an algorithm, and watch the solution unfold step-by-step.",
        image_path: "/ProjectImages/sudoku.png",
        tags: ["React", "TypeScript", "Tailwind CSS"],
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
        tags: ["C#", "Unity", "Game Dev"],
        links: {
            Github: "https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25",
        },
    },
    {
        title: "Marktris",
        description:
            "A Tetris clone made in Godot. It includes many in-game features to make the game as faithful to modern Tetris as possible. This includes 7-bag, wall-kicks, and the Super Rotation System. Warning: Use Chrome for best experience.",
        image_path: "/ProjectImages/marktris.png",
        tags: ["GDScript", "Godot", "Game Dev"],
        links: {
            Deployment: "https://marktris.markgarcia.dev/",
        },
    },
    {
        title: "NeonChat",
        description:
            "Submission for FullyHacks 2024. NeonChat is a Bluetooth-based direct messaging chatbox that allows seamless communication between devices.",
        image_path: "/ProjectImages/neonchat.png",
        tags: ["Python", "Sockets", "Tkinter"],
        links: {
            Deployment: "https://jowen-ster.github.io/FULLYHACKS_NEONCHAT/",
            Github: "https://github.com/JOwen-ster/FULLYHACKS_NEONCHAT",
        },
    },
    {
        title: "Previous Portfolio Site",
        description: "My old portfolio website",
        image_path: "/ProjectImages/portfolio-old.png",
        tags: ["React", "TypeScript", "Material-UI"],
        links: {
            Deployment: "https://old.markgarcia.dev/",
            Github: "https://github.com/MarkRyanGarcia/portfolio-old2",
        },
    },
];
