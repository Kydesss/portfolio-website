import { useState } from "react";
import "./Projects.css";
import Card from "../../../components/Card/Card";
import jsonProjectsList from "../../../data/projects.json";

function Projects() {
    const [showMore, setShowMore] = useState(true);
    const projectsList = jsonProjectsList.projects.map((projects) => (
        <div className="col-lg-4 col-sm-12 mb-4">
            <Card
                image={projects.url}
                alt={projects.alt}
                projectName={projects.name}
                projectDescription={projects.description}
                tags={projects.tags}
                projectPath={projects.path}
            ></Card>
        </div>
    ));
    const projectsListPreview = jsonProjectsList.projects
        .slice(0, 3)
        .map((projects) => (
            <div className="col-lg-4 col-sm-12 mb-4">
                <Card
                    image={projects.url}
                    alt={projects.alt}
                    projectName={projects.name}
                    projectDescription={projects.description}
                    tags={projects.tags}
                    projectPath={projects.path}
                ></Card>
            </div>
        ));

    return (
        <section id="projects">
            <div className="container projects-container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="tagline">Portfolio</p>
                        <h2>Projects</h2>
                        <p className="portfolio-text">
                            Explore a selection of my recent projects showcasing my skills in web development, UI/UX design, graphic design, and video production. Each project highlights different technologies and creative solutions I've implemented.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {showMore ? projectsListPreview : projectsList}
                </div>
                <div className="row">
                    <div className="view-all-button col-12 d-flex justify-content-center">
                        <button
                            className="rounded"
                            onClick={() => setShowMore((s) => !s)}
                        >
                            {showMore ? "View all" : "View less"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
