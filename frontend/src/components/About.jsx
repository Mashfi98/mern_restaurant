import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">ABOUT US</h1>
                            <p>The only thing we're serious about is food.</p>
                        </div>
                        <p className="mid">
                            Welcome to AZIM – A World of Flavors Under One Roof

                            At AZIM, we bring together the best of Indian, Mexican, Chinese, and Italian cuisine, offering a diverse menu that caters to every palate. Located in [City/Neighborhood], our restaurant is a vibrant fusion of global flavors, crafted with passion and served with warmth. Whether you're in the mood for spicy Indian curries, savory Mexican dishes, classic Chinese flavors, or comforting Italian pasta, AZIM is your destination for an unforgettable dining experience.



                        </p>
                        <Link to={"/"}>
                            Explore Menu{" "}
                            <span>
                                <HiOutlineArrowRight />
                            </span>
                        </Link>
                    </div>
                    <div className="banner">
                        <img src="about.png" alt="about" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;