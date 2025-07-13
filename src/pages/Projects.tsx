import { useState } from "react";
import { projects } from "../data/projects.ts";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [showMore, setShowMore] = useState<boolean>(false);
    const [failedEmbeds, setFailedEmbeds] = useState<Set<number>>(new Set());

    // Get unique categories from projects
    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ].sort((a, b) => a.localeCompare(b));

    // Filter projects based on selected category
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    // Determine how many projects to show
    const projectsToShow = showMore
        ? filteredProjects
        : filteredProjects.slice(0, 3);

    const filterToggles = (
        <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category);
                        setShowMore(false); // Reset show more when changing category
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        selectedCategory === category
                            ? "bg-stone-800/80 text-white"
                            : " text-gray-400 hover:text-white"
                    }`}
                >
                    {category}{" "}
                    {category !== "All" &&
                        `(${
                            projects.filter((p) => p.category === category)
                                .length
                        })`}
                </button>
            ))}
        </div>
    );

    const projectsList = projectsToShow.map((project, index) => (
        <li
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
        >
            {project.coverImageURL !== "" ||
            project.youtubeVideoId ||
            project.figmaEmbedUrl ? (
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex items-center justify-center">
                        <div className="w-full max-w-xs aspect-[4/3] bg-stone-800/30 rounded-lg overflow-hidden flex items-center justify-center relative">
                            {project.figmaEmbedUrl &&
                            !failedEmbeds.has(index) ? (
                                <>
                                    <div className="absolute top-2 left-2 z-10 bg-purple-600/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                                        Figma
                                    </div>
                                    <iframe
                                        src={project.figmaEmbedUrl}
                                        title={`${project.name} - Figma Design`}
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        onError={() => {
                                            setFailedEmbeds(
                                                (prev) =>
                                                    new Set(prev.add(index))
                                            );
                                        }}
                                    ></iframe>
                                </>
                            ) : project.youtubeVideoId ? (
                                <>
                                    <div className="absolute top-2 left-2 z-10 bg-red-600/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                                        Video
                                    </div>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                                        title={project.name}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </>
                            ) : project.coverImageURL ? (
                                <img
                                    src={project.coverImageURL}
                                    alt={project.alt}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-gray-400 p-4">
                                    {project.figmaEmbedUrl ? (
                                        <>
                                            <svg
                                                className="w-8 h-8 mb-2"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M15.5 12A3.5 3.5 0 1112 8.5 3.5 3.5 0 0115.5 12zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                                            </svg>
                                            <p className="text-sm text-center">
                                                Figma embed unavailable
                                            </p>
                                            <a
                                                href={project.figmaEmbedUrl
                                                    .replace(
                                                        "embed?embed_host=share&url=",
                                                        ""
                                                    )
                                                    .replace("%3A%2F%2F", "://")
                                                    .replace("%2F", "/")}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-400 hover:text-purple-300 text-xs mt-1 underline"
                                            >
                                                View in Figma
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                className="w-8 h-8 mb-2"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l-3-3 1.5-1.5L9 14l7-7 1.5 1.5L9 17z" />
                                            </svg>
                                            <p className="text-sm">
                                                No preview available
                                            </p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                            {project.name}
                        </h3>
                        <div className="mb-4">
                            <span className="inline-block bg-stone-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                        </div>
                        {project.description && (
                            <p className="text-gray-300 mb-4">
                                {project.description}
                            </p>
                        )}
                        {project.bulletpoints.length > 0 && (
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                                {project.bulletpoints.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        )}
                        {project.imageArray.length > 0 && (
                            <div className="mb-4">
                                <h4 className="text-lg font-medium text-gray-200 mb-3">
                                    Project Gallery
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {project.imageArray.map((image, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square bg-stone-800/30 rounded-lg overflow-hidden group cursor-pointer"
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.name} - Image ${
                                                    i + 1
                                                }`}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-block bg-green-500/30 px-3 py-1.5 text-xs font-medium text-green-500 mr-2 mb-2 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {project.hasGitHub && (
                                <a
                                    href={project.gitHubURL}
                                    rel="external"
                                    target="_blank"
                                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 496 512"
                                        className="mr-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            )}
                            {project.hasLiveDemo && (
                                <a
                                    href={project.path}
                                    rel="external"
                                    target="_blank"
                                    className="flex items-center text-purple-500 hover:text-purple-600 transition-colors duration-300"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mr-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                                    </svg>
                                    <span>View Project</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                        {project.name}
                    </h3>
                    <div className="mb-4">
                        <span className="inline-block bg-stone-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                        </span>
                    </div>
                    {project.description && (
                        <p className="text-gray-300 mb-4">
                            {project.description}
                        </p>
                    )}
                    {project.bulletpoints.length > 0 && (
                        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                            {project.bulletpoints.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
                    {project.imageArray.length > 0 && (
                        <div className="mb-4">
                            <h4 className="text-lg font-medium text-gray-200 mb-3">
                                Project Gallery
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {project.imageArray.map((image, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square bg-stone-800/30 rounded-lg overflow-hidden group cursor-pointer"
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.name} - Image ${
                                                i + 1
                                            }`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="inline-block bg-green-500/30 px-3 py-1.5 text-xs font-medium text-green-500 mr-2 mb-2 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-4 mt-4">
                        {project.hasGitHub && (
                            <a
                                href={project.gitHubURL}
                                rel="external"
                                target="_blank"
                                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 496 512"
                                    className="mr-2"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                </svg>
                                <span>GitHub</span>
                            </a>
                        )}
                        {project.hasLiveDemo && (
                            <a
                                href={project.path}
                                rel="external"
                                target="_blank"
                                className="flex items-center text-purple-500 hover:text-purple-600 transition-colors duration-300"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    className="mr-2"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                                </svg>
                                <span>View Project</span>
                            </a>
                        )}
                    </div>
                </div>
            )}
        </li>
    ));

    return (
        <>
            <section id="projects" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Projects
                </h2>
            </section>
            {filterToggles}
            <ul className="space-y-8">{projectsList}</ul>
            {filteredProjects.length > 3 && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        {showMore
                            ? "Show Less"
                            : `See All ${filteredProjects.length} Projects`}
                    </button>
                </div>
            )}
        </>
    );
}

export default Projects;
