import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
// import About from "./About/About";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <About /> */}
            <Projects />
            <Footer />
        </>
    );
}

export default Home;
