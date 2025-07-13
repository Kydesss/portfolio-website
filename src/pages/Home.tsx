import { useEffect, useState } from "react";
import Header from "./Header.tsx";
import About from "./About.tsx";
import Experience from "./Experience.tsx";
import Education from "./Education.tsx";
import Projects from "./Projects.tsx";

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen text-white">
            {/* Mobile */}
            <div className="lg:hidden">
                <main className="p-6 max-w-screen-sm mx-auto">
                    <div
                        className={`mb-6 transition-all duration-800 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "0ms" }}
                    >
                        <Header />
                    </div>
                    <div
                        className={`transition-all duration-800 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <About />
                    </div>
                    <div
                        className={`transition-all duration-800 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "400ms" }}
                    >
                        <Experience />
                    </div>
                    <div
                        className={`transition-all duration-800 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "600ms" }}
                    >
                        <Education />
                    </div>
                    <div
                        className={`transition-all duration-800 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "800ms" }}
                    >
                        <Projects />
                    </div>
                </main>
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex flex-row">
                <div
                    className={`lg:fixed lg:w-2/5 h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px] transition-all duration-1000 ease-out ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: "0ms" }}
                >
                    <div>
                        <Header />
                    </div>
                </div>
                <div className="lg:ml-[40%] w-full lg:w-3/5 min-h-screen min-w-[300px] max-w-[1200px] mx-auto">
                    <main className="p-8 lg:p-12 lg:pr-[10%]">
                        <div
                            className={`transition-all duration-800 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: "300ms" }}
                        >
                            <About />
                        </div>
                        <div
                            className={`transition-all duration-800 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: "500ms" }}
                        >
                            <Experience />
                        </div>
                        <div
                            className={`transition-all duration-800 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: "700ms" }}
                        >
                            <Education />
                        </div>
                        <div
                            className={`transition-all duration-800 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: "900ms" }}
                        >
                            <Projects />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home;
