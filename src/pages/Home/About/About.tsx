import "./About.css";

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <img
                            src="images/JoaquinHeadshot.jpg"
                            alt="Picture of Joaquin Pacia's face"
                            className="img about-image"
                        ></img>
                    </div>
                    <div className="col-12 col-lg-6">
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
