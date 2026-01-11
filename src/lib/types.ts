type BaseLink = {
    label: string;
};

type InternalLink = BaseLink & {
    route: string;
    open_new_tab?: boolean;
    href?: never;
};

type ExternalLink = BaseLink & {
    href: string;
    route?: never;
};

export type NavBarLink = InternalLink | ExternalLink;

export type ExperienceItem = {
    title: string
    company: string
    timeline: string
    location: string
    bullets: string[]
}

type ProjectLinks = {
    Deployment?: string;
    Github?: string;
}

export type Project = {
    title: string;
    description: string;
    image_path: string;
    links?: ProjectLinks;
}