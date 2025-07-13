// src/types/Project.ts

export interface Project {
    name: string;
    coverImageURL: string;
    youtubeVideoId?: string; // Optional YouTube video ID for embedded videos
    figmaEmbedUrl?: string; // Optional Figma embed URL for design files
    alt: string;
    description?: string;
    hasGitHub: boolean;
    gitHubURL: string;
    hasLiveDemo: boolean;
    category: string;
    bulletpoints: string[];
    tags: string[];
    imageArray: string[];
    path: string;
}
