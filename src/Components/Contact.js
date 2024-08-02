import React from 'react'

//Handles the contact section of the landing page.
export const Contact = () => {
  return (
    <section className = "contact-page-wrapper" id = "contact">
       {/*Section for the contact's title / message */}
        <p className = "primary-subheading">Contact Us:</p>
        <h2> Got a Recipe for Curiosity?</h2>
        <h3>Let Us Serve Up the Answers!</h3>
        <div className = "contact-form-container">
            <input type = "text" placeholder = "Please enter your email"/>
            <button className = "secondary-button">Submit</button>
        </div>
    </section>
  )
}
