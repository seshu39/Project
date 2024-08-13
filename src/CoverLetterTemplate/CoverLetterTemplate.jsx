import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CoverLetterTemplate.css';
// import { Link } from 'react-router-dom';
const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
   
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick}>
   {/* Left arrow symbol */}
  </button>
);


const CoverLetterTemplate = () => {
  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  
  };

  return (
    <div className="cls-cover-letter-section">
      <div className="cls-cover-letter-content">
        <h1 className="cls-cover-letter-title">
          <span className="cls-cover-letter-highlight">Craft</span> Your Perfect Cover Letter Today!
        </h1>
        <p className="cls-cover-letter-description">
          Real-world experience is what defines job market success. That’s why our designs and cover letter samples were approved by recruiters and seasoned professionals from various fields.
        </p>
        <button className="cls-cover-letter-btn">See Template</button>
      </div>
      <Slider className="cls-cover-letter-slider" {...settings}>
        <div className="cls-cover-letter-template">
          {/* <Link to='./EditCover'> */}
          <img src="https://d1xn1bcogdo8ve.cloudfront.net/2348/image.webp" alt="Cover Letter Template 1" />
          <button>Use this Template</button>
        </div>
        <div className="cls-cover-letter-template">
          <img src="https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg" alt="Cover Letter Template 2" />
        </div>
        <div className="cls-cover-letter-template">
          <img src="https://www.myperfectresume.com/wp-content/uploads/2024/03/free-cover-letter-template-charismatic.svg" alt="Cover Letter Template 3" />
        </div>
        <div className="cls-cover-letter-template">
          <img src="https://cvgenius.com/wp-content/uploads/short-cover-letter-sample-5.png" alt="Cover Letter Template 4" />
        </div>
        <div className="cls-cover-letter-template">
          <img src="https://cdn.prod.website-files.com/62f3a8c764f6eb23f4252b13/630b966a3591b5c0aa807d2b_61ceb8468cdf72309d581783_61ceb04e8a5181a7163ad1fe_61cddf9bbda4b0eb4ec691bd_6142e0813e51c45ae329519f_Content-Writer-1.png" alt="Cover Letter Template 5" />
        </div>
        <div className="cls-cover-letter-template">
          <img src="https://marketplace.canva.com/EAFCa0sgb9I/1/0/1131w/canva-black-minimalist-software-engineer-cover-letter-QWzfWrytZqs.jpg" alt="Cover Letter Template 5" />
        </div>

      </Slider>
    </div>
  );
};

export default CoverLetterTemplate;
