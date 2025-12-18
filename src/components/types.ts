type BaseLink = {
    label: string;
};

type InternalLink = BaseLink & {
    route: string;
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