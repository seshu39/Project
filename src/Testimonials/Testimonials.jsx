import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'TechCorp',
    feedback: 'This resume builder was a game-changer for me. I landed my dream job thanks to the professional template and easy-to-use interface!',
    photo: 'john.jpg' // Add the path to the user photo if available
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Specialist',
    company: 'MarketMinds',
    feedback: 'The templates are fantastic and the process was so straightforward. I highly recommend this service to anyone looking to enhance their resume!',
    photo: 'jane.jpg' // Add the path to the user photo if available
  },
  {
    name: 'Emily Johnson',
    title: 'Graphic Designer',
    company: 'CreativeCo',
    feedback: 'I was able to create a visually stunning resume that stood out from the rest. The customization options are top-notch!',
    photo: 'emily.jpg' // Add the path to the user photo if available
  },
  {
    name: 'Michael Brown',
    title: 'Project Manager',
    company: 'BuildIt',
    feedback: 'The resume builder made it so easy to present my skills and experience professionally. Excellent tool for job seekers!',
    photo: 'michael.jpg' // Add the path to the user photo if available
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>The Rage is All About Us.
      Here’s what people are saying.</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial-box box-${(index % 6) + 1}`} key={index}>
            <div className="testimonial-photo">
              <img src={testimonial.photo} alt={`${testimonial.name} Photo`} />
            </div>
            <div className="testimonial-content">
              <h2 className="testimonial-name">{testimonial.name}</h2>
              <h3 className="testimonial-title">{testimonial.title} at {testimonial.company}</h3>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
