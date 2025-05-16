import "./Card.css";
import Tag from "./Tag/Tag";
import { Link } from "react-router";

interface CardProps {
    image: string;
    alt: string;
    projectName: string;
    projectDescription: string;
    tags: string[];
    projectPath: string;
}

function Card({
    image,
    alt,
    projectName,
    projectDescription,
    tags,
    projectPath,
}: CardProps) {
    const tagsList = tags.map((tag) => <Tag tag={tag} />);
    return (
        <div className="card-wrapper">
            <div className="card-image rounded">
                <img src={`${image}`} alt={alt} className="card-img" />
            </div>
            <div className="card-content">
                <div className="card-content-top">
                    <div className="card-content-text">
                        <h5>{projectName}</h5>
                        <p className="card-project-description">
                            {projectDescription}
                        </p>
                        <div className="card-tags-wrapper">{tagsList}</div>
                    </div>
                </div>
                <div className="card-content-actions">
                    <Link
                        to={projectPath}
                        style={{ color: "rgba(255, 255, 255, 0" }}
                    >
                        <div className="view-project-button">
                            <p className="view-project-button-text">
                                View project
                            </p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <path
                                        d="M10.2508 17.4958L15.9578 11.7888L10.2508 6.08179L8.83682 7.49579L13.1298 11.7888L8.83682 16.0818L10.2508 17.4958Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
