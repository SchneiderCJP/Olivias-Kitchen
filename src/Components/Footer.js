import React from 'react'
import Logo from "../Assets/logo.png"
import { BsTwitter } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa"

//Handles the footer section of the landing page.
export const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div>
                 {/*Displays logo with the website name next to it */}
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                    <h1>Olivia's Kitchen</h1>
                </div>
                 {/*Displays social media icons */}
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
             {/*Display example footer menu options*/}
            <div className='footer-section-two'>
            <div className = "footer-section-columns">
                    <span>Allergen & Nutrition Info</span>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Corportate Sales</span>
                    <span>Donations</span>
                    <span>Merch</span>
                    <span>Countries</span>
                </div>
                <div className="footer-section-columns">
                    <span>Contact</span>
                    <span>Newsroom</span>
                    <span>FAQ</span>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                    <span>Accessibility</span>
                </div>
            </div>
        </footer>
    )
}
