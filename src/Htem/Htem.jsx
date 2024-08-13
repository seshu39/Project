import React from "react";

import "./Htem.css";


import { Link } from "react-router-dom";

const Card = ({ title, imageSrc, buttonLink, buttonText }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
      <div  className="view-button">
        {buttonText}
      </div>
    </div>
  );
};

const Htem = () => {
  return (
    <>
    
      <div>
        <div class="t">
          <h2 class="topy">
            <span class="cv1"> Resume </span>
           <span class="under">Templates for Every Career Path</span>
          </h2>
         
          <p class="cep">
            Handpick, personalize, and download your resume quickly.
          </p>
        </div>
        <div class="Hbody">
          <div className="card-container">
            <Card
              imageSrc="https://marketplace.canva.com/EAFRKj4M1aw/1/0/1131w/canva-white-black-elegant-modern-corporate-cv-resume-JRmzII0BSpY.jpg"
         
              buttonText="Creative"
            />

            <Card
              imageSrc="https://online.visual-paradigm.com/repository/images/54ddab24-f280-4b83-807b-2eda1cbc2f52/resumes-design/black-resume.png"
      
              buttonText="Professional"
            />
            <Card
              imageSrc="https://i.pinimg.com/originals/f4/33/83/f433835b0f25f4b36de921ffdfa166b4.png"
             
              buttonText="College"
            />
          </div>
        </div>
        <br></br>
        <div class="bH">
       
          <Link to="/Templates">  <button>Discover More Resume Templates</button></Link>
          
        </div>
      </div>

     
    </>
  );
};

export default Htem;