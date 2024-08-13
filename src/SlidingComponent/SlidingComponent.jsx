import React, { useState } from 'react';
import './SlidingComponent.css';

const SlidingComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://marketplace.canva.com/EAFCa0sgb9I/1/0/1131w/canva-black-minimalist-software-engineer-cover-letter-QWzfWrytZqs.jpg',
    'https://d1xn1bcogdo8ve.cloudfront.net/2348/image.webp',
    'https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg',
    'https://www.myperfectresume.com/wp-content/uploads/2024/03/free-cover-letter-template-charismatic.svg',
    'https://cvgenius.com/wp-content/uploads/short-cover-letter-sample-5.png',
    // 'https://d1xn1bcogdo8ve.cloudfront.net/2348/image.webp',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <div className='Slide_header'>Craft Your Perfect Cover Letter Today!</div>
     {/* <div className="cls-cover-letter-content">
        <h1 className="cls-cover-letter-title">
          <span className="cls-cover-letter-highlight">P</span>roven cover letter templates
        </h1>
        <p className="cls-cover-letter-description">
          Real-world experience is what defines job market success. That’s why our designs and cover letter samples were approved by recruiters and seasoned professionals from various fields.
        </p> */}
        {/* <button className="cls-cover-letter-btn">Select Template</button>
      </div> */}
    <div className="sliding-container">
      <button className="nav-button prev" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="arrow-icon"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide-item" key={index}>
            <div className="image-box">
              <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
              <button className="template-button">Use This Template</button>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="arrow-icon"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </>
  );
};

export default SlidingComponent;
