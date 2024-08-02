import React, { useState, useEffect } from 'react'
import reviews from "../Data/Reviews.json";
import { ReviewSlide } from './ReviewSlide';

//Handles the Reviews section of the landing page.
export const Reviews = () => {

  //Calculates the user's interaction with the slide show, allowing the user to switch between two of the reviews at a time.
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 800) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(reviews.length / slidesPerView));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(reviews.length / slidesPerView)) % Math.ceil(reviews.length / slidesPerView));
  };

  // Calculate the start and end index of the slides to display
  const startIndex = currentSlide * slidesPerView;
  const endIndex = Math.min(startIndex + slidesPerView, reviews.length);

  return (
    <section className='review-section-wrapper' id = "reviews">
      {/*Displays some examples of food at the top, separating this section from the previous. */}
      <img src="/images/foodImages.png" className="review-img-container" alt="Food examples" />
      {/*Section for the reviews' title / message */}
      <div className="review-section-top">
        <p className="primary-subheading">Reviews:</p>
        <h1>
          What Our Customers Are Saying
        </h1>
        <p>
          Discover why our customers rave about Olivia's Kitchen. Read their reviews to learn more about the delicious meals, exceptional service, and the convenience they enjoy with our meal plan subscription.
        </p>
      </div>
      {/*Uses ReviewSlide to displays each of the reviews in the JSON data file, sending each reviewer's name, photo, image */}
      <div className="review-slide-section-wrapper">
        <button className="slide-button" onClick={prevSlide}>❮</button>
        <div className="review-slide-section-bottom">
          {reviews.slice(startIndex, endIndex).map((review, id) => (
            <ReviewSlide key={id} review={review} />
          ))}
        </div>
        <button className="slide-button" onClick={nextSlide}>❯</button>
      </div>
    </section>
  )
}