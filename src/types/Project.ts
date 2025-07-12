// src/types/Project.ts

export interface Project {
    name: string;
    coverImageURL: string;
    alt: string;
    description?: string;
    hasGitHub: boolean;
    hasLiveDemo: boolean;
    category: string;
    bulletpoints: string[];
    tags: string[];
    imageArray: string[];
    path: string;
}
