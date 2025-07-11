import "./About.css";

function About() {
    return (
        <section id="about">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="images/JoaquinHeadshot.jpg"
                            alt="Picture of Joaquin Pacia's face"
                            className="img about-image"
                        ></img>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3>Who am I?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi libero quam porro optio consectetur
                            debitis vel officia eum quae mollitia tempore enim
                            deserunt natus, nisi nobis animi non dicta sequi!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
