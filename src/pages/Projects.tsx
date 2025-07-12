import { projects } from "../data/projects.ts";

function Projects() {
    const filterToggles = <div className="flex space-x-4 mb-8"></div>;
    const projectsList = projects.map((project) => (
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6"></div>
                <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                        {project.name}
                    </h3>
                    <ul></ul>
                </div>
            </div>
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
            <ul className="space-y-12">{projectsList}</ul>
        </>
    );
}

export default Projects;
