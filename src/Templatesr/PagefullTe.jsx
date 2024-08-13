import React from "react";
import "./PagefullTe.css";

import resume1 from "../Templatesr/resume1.jpg";
import resume2 from "../Templatesr/resume2.jpg";
import resume3 from "../Templatesr/resume3.jpg";
import resume4 from "../Templatesr/resume4.jpg";
import resume5 from "../Templatesr/resume5.jpg";
import resume6 from "../Templatesr/resume6.jpg";
import resume7 from "../Templatesr/resume7.jpg";
import resume8 from "../Templatesr/resume8.jpg";

import StepsToPerfectResume from "../StepsToPerfectResume/StepsToPerfectResume"
import Footer from "../Footer/Footer";
import Design from "../Design/Design";
import Navbar from "../Navbar/Navbar";

const Card = ({ imageSrc, buttonLink, buttonText }) => {
  return (
    <div className="card1">
      <div className="image-container1">
        <img src={imageSrc} alt="resume" />
        <div className="overlay">
          <a href={buttonLink} className="button1">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

const PagefullTe = () => {
  return (
    <>
<Navbar/>
      <div className="bgpf">
        <div className="bgpf-content">
          <div className="page-header">
            <strong>
              <h1>
                <span className="cvse">Craft </span>
                <span className="cvpg"> Your Perfect Resume</span>
              </h1>
            </strong>
            <p ><span class="newpara">
              Each resume template is designed to follow the exact rules you
              need to get hired faster. <br />
              Tailored by industry experts, our templates ensure that your
              resume stands out from the competition.
            </span></p>
            <br />
          
          </div>
        </div>
      </div>

      <StepsToPerfectResume />

      <div className="bu-container">
        <button className="header-button">
          <img
            src="https://cdn.enhancv.com/all_templates_icon_762b155432.webp"
            width="33px"
            height="33px"
          />
          All Templates
        </button>
      </div>
      <div>
        <br></br>
        <br></br>
        <div class="Hbody1">
          <div className="card-container1">
            <Card
              imageSrc={resume2}
              buttonLink="/Edit1"
              buttonText="Use Template"
            />

            <Card
              imageSrc={resume6}
              buttonLink="/Edit2"
              buttonText="Use Template"
            />
            <Card imageSrc={resume1} buttonLink="#" buttonText="Use Template" />
          </div>
        </div>
        <div class="Hbody1">
          <div className="card-container1">
            <Card imageSrc={resume7} buttonLink="#" buttonText="Use Template" />

            <Card imageSrc={resume3} buttonLink="#" buttonText="Use Template" />
            <Card imageSrc={resume5} buttonLink="#" buttonText="Use Template" />
          </div>
        </div>
        <div class="Hbody1">
          <div className="card-container1">
            <Card imageSrc={resume3} buttonLink="#" buttonText="Use Template" />

            <Card imageSrc={resume8} buttonLink="#" buttonText="Use Template" />
            <Card imageSrc={resume4} buttonLink="#" buttonText="Use Template" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Design />
      <br></br>
      <br></br>
      {/* <StepsToPerfectResume/> */}
      <br></br>
      <div class="job-resume">
        <h2>
          <img src="https://cdn.enhancv.com/images/48/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vUHJvX3RpcF9jZjYwNzcxOGY3LnBuZw~~.png" />
          Resume Templates by Experience
        </h2>
      </div>
      <br></br>
      <br></br>
      <div>
        <div class="Hbody">
          <div className="card-container">
            <Card imageSrc={resume2} buttonLink="#" buttonText="Junior" />

            <Card imageSrc={resume6} buttonLink="#" buttonText="Senior" />
            <Card imageSrc={resume1} buttonLink="#" buttonText="Executive" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default PagefullTe;