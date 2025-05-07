import { HashLink } from "react-router-hash-link";

function Navbar() {
    return (
        <nav className="container navbar navbar-expand-lg py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Joaquin Pacia
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>

                        {/* <li className="nav-item">
                            <HashLink smooth to="#about" className="nav-link">
                                About
                            </HashLink>
                        </li> */}

                        <li className="nav-item">
                            <HashLink
                                smooth
                                to="#projects"
                                className="nav-link"
                            >
                                Projects
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
