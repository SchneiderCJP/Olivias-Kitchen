import React from 'react'
import { FaBowlFood } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

//Handles the steps section of the landing page.
export const Steps = () => {
    //Creates an array for each of the steps, including the react-icon, which step, title, and description.
    const stepsInfoData = [
        {
            image: <FaBowlFood />,
            step: "Step One:",
            title: "Choose Your Meals",
            description: "Select from a variety of delicious, chef-curated recipes that cater to your tastes and dietary needs. Whether you're a vegetarian, a meat-lover, or looking for something kid-friendly, we've got you covered."
        },
        {
            image: <RiCalendarScheduleFill />,
            step: "Step Two:",
            title: "Customize Your Schedule",
            description: "Decide how often you want to receive your meals. Choose the delivery frequency that best fits your lifestyle, from weekly to bi-weekly options, ensuring you always have fresh meals on hand."
        },
        {
            image: <TbTruckDelivery />,
            step: "Step Three:",
            title: "Enjoy Fast Deliveries",
            description: "Sit back and relax as we deliver your meal kits straight to your door. With our fast and reliable delivery service, you can start cooking and enjoying your meals in no time."
        },
    ]
    return (
        <section className='steps-section-wrapper'>
            {/*Section for the how it step's title / message */}
            <div className='steps-section-top'>
                <p className='primary-subheading'>How It Works:</p>
                <h1>Simple Steps to Delicious Meals</h1>
                <p> Our meal plan subscription program makes it easy for you to enjoy delicious, home-cooked meals without the hassle. Follow these simple steps to start savoring fresh, nutritious dishes delivered right to your door.</p>
            </div>
            {/*Generates each of the steps using the array, creating each with the step number, icon, title, and description. */}
            <div className='steps-section-bottom'>
                {
                    stepsInfoData.map((data) => (
                        <div className="steps-section-info">
                            <h3> {data.step} </h3>
                            <div className="steps-section-image">
                                {data.image}
                            </div>
                            <h2> {data.title} </h2>
                            <p>{data.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
