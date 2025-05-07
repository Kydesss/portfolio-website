import "./Hero.css";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router";

function Hero() {
    return (
        <header>
            <div className="container px-5">
                <div className="row align-items-center">
                    <div
                        className="col-12 col-lg-6"
                        style={{ padding: "64px 0px" }}
                    >
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
                            A creative professional with expertise in web
                            development, graphic design, and multimedia
                            production. Combines technical skills with artistic
                            vision, demonstrating leadership in project
                            management and delivering innovative solutions.
                            Eager to drive excellence and innovation in any
                            field.
                        </p>
                        <div className="d-flex flex-row gap-3 mt-4">
                            <HashLink
                                to="#projects"
                                id="projects-button"
                                className="button"
                            >
                                See Projects
                            </HashLink>
                            <button id={"contact-button"} className="button">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 column-wrapper">
                        <div className="row">
                            <div
                                className="col-6 d-flex flex-column gap-3 preview-column"
                                id="preview-column-left"
                            >
                                <img
                                    src="images/God Sees All Thumbnail 3.png"
                                    alt=""
                                    className="img preview-project-img"
                                />
                                <img
                                    src="images/Goats_Thumbnail.png"
                                    alt=""
                                    className="img preview-project-img"
                                />
                                <img
                                    src="images/Asian Airlines v4 P1.png"
                                    alt=""
                                    className="img preview-project-img"
                                />
                            </div>
                            <div
                                className="col-6 d-flex flex-column gap-3 preview-column"
                                id="preview-column-right"
                            >
                                <img
                                    src="images/FSA Election Results Story No Glow.png"
                                    alt=""
                                    className="img preview-project-img"
                                />
                                <img
                                    src="images/Kingmaker Documentary Screening Poster Final 2.png"
                                    alt=""
                                    className="img preview-project-img"
                                />
                                <img
                                    src="images/FSA Coffee House Design 2.jpg"
                                    alt=""
                                    className="img preview-project-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
