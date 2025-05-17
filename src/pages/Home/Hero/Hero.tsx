import "./Hero.css";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router";

function Hero() {
    return (
        <header>
            <div className="container px-5">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 px-5" style={{ margin: "64px 0px" }}>
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
                        <div className="d-flex flex-row gap-3 mt-4">
                            <HashLink to="#projects" id="projects-button" className="button">
                                See Projects
                            </HashLink>
                            <button id={"contact-button"} className="button">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-5 column-wrapper" style={{ margin: "64px 0px" }}>
                        <div className="row">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner rounded">
                                    <div className="carousel-item active">
                                        <img src="images/God Sees All Thumbnail 3.png" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/Goats_Thumbnail.png" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/Asian Airlines v4 P1.png" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/FSA Election Results Story No Glow.png" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/Kingmaker Documentary Screening Poster Final 2.png" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/FSA Coffee House Design 2.jpg" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            {/* <div
                                className="col-6 d-flex flex-column gap-3 preview-column"
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
                                className="col-6 d-flex flex-column gap-3 preview-column"
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
