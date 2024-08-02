import React from 'react'
import introductionImage from "../Assets/mainImage.png"

//Handles the introduction section of the landing page.
export const Introduction = () => {
    return (

        <section className="introduction-container">
            {/*Section for the introduction title / message */}
            <div className="introduction-text-section">
                <h1 className="primary-heading">
                    Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className="primary-text">
                    Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
                </p>
                {/*Order button*/}
                <button className='secondary-button'>
                    Order Now
                </button>
            </div>
            {/*Image of salad that is loaded to look like it is coming out of the navbar*/}
            <div className="introduction-image-section">
                <img src={introductionImage} alt="Tossed Salad" />
            </div>
        </section>
    )
}
