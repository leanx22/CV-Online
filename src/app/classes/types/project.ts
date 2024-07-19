import { project_statuses } from "../enums/enums";

export type Project = {
    title: string;
    description: string;
    technologies: string[];
    status: project_statuses;
    image_url: string|undefined;
    github_url: string|undefined;
    web_url: string|undefined;
};

