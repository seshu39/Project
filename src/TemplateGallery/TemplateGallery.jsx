import React, { useState } from 'react';
import './TemplateGallery.css';

const images = [
  {
    src: 'https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg',
    link: '/CvEditor2'
  },
  {
    src: 'https://cvgenius.com/wp-content/uploads/short-cover-letter-sample-5.png',
    link: '/CvEditor3'
  },
  {
    src: 'https://d1xn1bcogdo8ve.cloudfront.net/2348/image.webp',
    link: '/template3'
  },
  {
    src: 'https://www.myperfectresume.com/wp-content/uploads/2024/03/free-cover-letter-template-charismatic.svg',
    link: '/template4'
  },
  {
    src: 'https://cdn.prod.website-files.com/62f3a8c764f6eb23f4252b13/630b966a3591b5c0aa807d2b_61ceb8468cdf72309d581783_61ceb04e8a5181a7163ad1fe_61cddf9bbda4b0eb4ec691bd_6142e0813e51c45ae329519f_Content-Writer-1.png',
    link: '/template5'
  },
  {
    src: 'https://marketplace.canva.com/EAFCa0sgb9I/1/0/1131w/canva-black-minimalist-software-engineer-cover-letter-QWzfWrytZqs.jpg',
    link: '/template6'
  },
  {
    src: 'https://www.jobseeker.com/api/media/documents/7281651d-064f-40ac-a51e-a52bfd38c83c/social-worker-cover-letter-example.svg',
    link: '/template7'
  },
  {
    src: 'https://cdn.enhancv.com/Classic_1_8d24d72fbf.png',
    link: '/template8'
  },
  {
    src: 'https://cdn.enhancv.com/High_Performer_1_No_Photo_2ad9a0af47.png',
    link: '/template9'
  },
  {
    src: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/07/Light-Marketing-College-Student-Cover-Letter-Template.jpg',
    link: '/template10'
  },
  {
    src: 'https://marketplace.canva.com/EAFmnx_mgGw/2/0/1237w/canva-cover-letter-doc-in-dark-blue-pastel-blue-simple-style-Bdurjmh8KIw.jpg',
    link: '/template11'
  },
  {
    src: 'https://marketplace.canva.com/EAFoJ0xeZyg/1/0/1131w/canva-black-and-white-classic-professional-job-cover-letter-hC7ZxwJskRU.jpg',
    link: '/template12'
  }
];

const TemplateGallery = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (index) => {
    setSelectedTemplate(index);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      <div className="topic">
        <h1><span className="high">Build your Cover Letter now.</span> Choose a design.</h1>
        <p>Explore our library of cover letter templates to get started. Use our Cover Letter Maker to customize the design and add tailored content from Certified Resume Writers.</p>
      </div>
      <div className="template-gallery-container">
        <div className="template-gallery">
          {images.map((image, index) => (
            <div className="template-box" key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="template-image"
                  src={image.src}
                  alt={`Template ${index + 1}`}
                />
                <div className="edit-overlay">
                  <span>Customize Template</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        {selectedTemplate !== null && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleClose}>&times;</span>
              <h2>Edit Template {selectedTemplate + 1}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateGallery;
