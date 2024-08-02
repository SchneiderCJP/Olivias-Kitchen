import React from 'react'
import {AiFillStar} from "react-icons/ai"


//Handles displaying each slide in the Reviews section's slide show on the landing page.
export const ReviewSlide = ({review : {image,name, review}}) => {
  return (
    <div className = "review-slide">
      {/*Display's each reviewer's name, image, review, and a 5 star rating*/}
        <h4>{name}</h4>
        <img src={image} alt={`Picture of ${name}`}/>
            <p>
            {`"${review}"`}
            </p>
            <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            
    </div>
  )
}
