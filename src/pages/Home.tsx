import Header from "./Header.tsx";
import About from "./About.tsx";
import Experience from "./Experience.tsx";
import Education from "./Education.tsx";
import Projects from "./Projects.tsx";
function Home() {
    return (
        <div className="min-h-screen text-white">
            {/* Mobile */}
            <div className="lg:hidden">
                <main className="p-6 max-w-screen-sm mx-auto">
                    <div className="mb-6">
                        <Header />
                    </div>
                    <div>
                        <About />
                    </div>
                    <div>
                        <Experience />
                    </div>
                    <div>
                        <Education />
                    </div>
                    <div>
                        <Projects />
                    </div>
                </main>
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex flex-row">
                <div className="lg:fixed lg:w-2/5 h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px] opacity-100 transform-none">
                    <div>
                        <Header />
                    </div>
                </div>
                <div className="lg:ml-[40%] w-full lg:w-3/5 min-h-screen min-w-[300px] max-w-[1200px] mx-auto">
                    <main className="p-8 lg:p-12 lg:pr-[10%] opacity-100">
                        <div>
                            <About />
                        </div>
                        <div>
                            <Experience />
                        </div>
                        <div>
                            <Education />
                        </div>
                        <div>
                            <Projects />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home;
