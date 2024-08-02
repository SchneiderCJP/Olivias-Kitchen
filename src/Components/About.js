import React from 'react'
import aboutImage from "../Assets/spaghetti.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'


//Handles the about section of the landing page.
export const About = () => {
    return (
        <section className="about-section-container" id = "about">
            {/*Display food example image*/}
            <div className="about-section-image-container">
                <img src={aboutImage} alt="" />
            </div>
            {/*Section for the introduction title / message */}
            <div className="about-section-text-container">
                <p className="primary-subheading">About Us:</p>
                <h1 className="primary-headingLight">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-textLight">
                    At Olivia's Kitchen, we believe in the power of delicious, nutritious meals to enhance your well-being. Our focus is on fresh, high-quality ingredients that not only satisfy your taste buds but also support a balanced, healthy lifestyle. Discover the joy of eating well with us!
                </p>
                {/*Buttons to learn more or watch a video (which uses the react-icon) */}
                <div className="about-buttons-container">
                    <button className="secondary-buttonLight">Learn More</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill /> Watch Video </button>
                </div>
            </div>
        </section>
    )
}
