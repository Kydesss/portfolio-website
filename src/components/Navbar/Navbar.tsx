import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="container mx-auto py-3">
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <a className="text-lg font-semibold" href="#">
                        Joaquin Pacia
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="block lg:hidden p-2"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="block w-6 h-0.5 bg-current mb-1"></span>
                        <span className="block w-6 h-0.5 bg-current mb-1"></span>
                        <span className="block w-6 h-0.5 bg-current"></span>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex justify-center">
                        <ul className="flex space-x-8">
                            <li>
                                <a
                                    className="hover:text-gray-600 transition-colors"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>

                            {/* <li>
                                <HashLink smooth to="#about" className="hover:text-gray-600 transition-colors">
                                    About
                                </HashLink>
                            </li> */}

                            <li>
                                <HashLink
                                    smooth
                                    to="#projects"
                                    className="hover:text-gray-600 transition-colors"
                                >
                                    Projects
                                </HashLink>
                            </li>
                            <li>
                                <a className="hover:text-gray-600 transition-colors" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <a
                                className="hover:text-gray-600 transition-colors"
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="#projects"
                                className="hover:text-gray-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </HashLink>
                        </li>
                        <li>
                            <a
                                className="hover:text-gray-600 transition-colors"
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                            >
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
