import React, { useState } from "react";
import "./TestimonialCard.css";

const testimonials = [
  {
    text: "CV Ninjas Executive has changed my life: One week & four interviews later, I will be making 150% more doing the job I chose.",
    author: "JENICA",
    title: "SOLUTIONS ENGINEER",
    avatar:
      "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=",
  },
  {
    text: "CV Ninjas helped me land my dream job at Google. The templates are easy to use and very customizable.",
    author: "John Doe",
    title: "Software Engineer",
    avatar:
      "https://r2.erweima.ai/imgcompressed/img/compressed_bc3b9e2e7583717ff772a3ebc1faec48.webp",
  },
  {
    text: "Thanks to CV Ninjas, I was able to create a resume that stands out. I got hired within a week!",
    author: "Jane Smith",
    title: "Product Manager",
    avatar:
      "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_6_standard-1.jpg",
  },
  {
    text: "The CVNinjas Resume Builder offers a very intuitive interface that guides users seamlessly through the resume creation process. The step-by-step layout is straightforward and easy to follow",
    author: "Jane Smith",
    title: "Product Manager",
    avatar:
      "https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png",
  },
  {
    text: "CVNinjas' cover letter and resume checker features are well-integrated and add significant value to the resume-building process. They help users create high-quality documents that stand out.",
    author: "Jane Smith",
    title: "Product Manager",
    avatar:
      "https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg",
  },
  // Add more testimonials here if needed
];

const TestimonialCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="unique-g-container">
      <div className="unique-container">
        <div className="unique-heading">
          <h2>Hear from people like you !!</h2>
        </div>
        <div className="unique-slider">
          <button onClick={prevSlide} className="unique-slider-button">
            ‹
          </button>
          <div className="unique-slider-content">
            {testimonials
              .slice(currentSlide, currentSlide + 3)
              .map((testimonial, index) => (
                <div className="unique-testimonial-card" key={index}>
                  <img
                    className="unique-testimonial-avatar"
                    src={testimonial.avatar}
                    alt="Avatar"
                  />
                  <blockquote className="unique-testimonial-quote">
                    {testimonial.text}
                  </blockquote>
                  <div className="unique-testimonial-author">
                    <h5 className="unique-testimonial-name">
                      {testimonial.author}
                    </h5>
                    <p className="unique-testimonial-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button onClick={nextSlide} className="unique-slider-button">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
