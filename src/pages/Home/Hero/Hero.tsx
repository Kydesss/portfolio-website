import "./Hero.css";
import { HashLink } from "react-router-hash-link";
import jsonProjectsList from "../../../data/projects.json";
// import { Link } from "react-router";

function Hero() {
    const projectsListPreview = jsonProjectsList.projects.slice(0, 6)
    return (
        <header>
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 px-5" style={{ margin: "64px 0px" }}>
                        <div className="profile-picture-img">
                            <img
                                src="images/JoaquinHeadshot.jpg"
                                alt=""
                                className="img profile-picture-img"
                            />
                        </div>

                        <h1 className="mb-4">
                            Hi! I'm Joaquin. Welcome to my portfolio website!
                        </h1>
                        <p>
                            A creative professional with expertise in web development, graphic
                            design, and multimedia production. Combines technical skills with
                            artistic vision, demonstrating leadership in project management
                            and delivering innovative solutions. Eager to drive excellence and
                            innovation in any field.
                        </p>
                        <div className="flex flex-row gap-3 mt-4">
                            <HashLink to="#projects" id="projects-button" className="button">
                                See Projects
                            </HashLink>
                            <button id={"contact-button"} className="button">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5 column-wrapper" style={{ margin: "64px 0px" }}>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="rounded overflow-hidden">
                                    <img src={projectsListPreview[0].url} alt="Featured project" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            {/* <div
                                className="w-1/2 flex flex-col gap-3 preview-column"
                                id="preview-column-left"
                            >
                                <div>
                                    <img
                                        src="images/God Sees All Thumbnail 3.png"
                                        alt=""
                                        className="img preview-project-img"
                                    />
                                </div>
                                <div><img
                                    src="images/Goats_Thumbnail.png"
                                    alt=""
                                    className="img preview-project-img"
                                /></div>
                                <div>
                                    <img
                                        src="images/Asian Airlines v4 P1.png"
                                        alt=""
                                        className="img preview-project-img"
                                    />
                                </div>
                            </div>
                            <div
                                className="w-1/2 flex flex-col gap-3 preview-column"
                                id="preview-column-right"
                            >
                                <div>
                                    <img
                                        src="images/FSA Election Results Story No Glow.png"
                                        alt=""
                                        className="img preview-project-img"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="images/Kingmaker Documentary Screening Poster Final 2.png"
                                        alt=""
                                        className="img preview-project-img"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="images/FSA Coffee House Design 2.jpg"
                                        alt=""
                                        className="img preview-project-img"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Hero;
