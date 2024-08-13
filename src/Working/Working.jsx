import React from "react";
import "./Working.css"; // Ensure you have the CSS file for styling

// Importing images
import firstBoxImg from "../assets/FirstBox.png";
// import NIN from "../Working/NIN.jpg"
const Working = () => {
  const steps = [
    { id: "CVNinjas", imgSrc: firstBoxImg, description: "Create account" },
    { id: "Pitch", imgSrc: firstBoxImg, description: "Resume Builder" },
    { id: "Craft", imgSrc: firstBoxImg, description: "Cover Letter" },
    { id: "Refine", imgSrc: firstBoxImg, description: "Resume Analyzer" },
  ];

  return (
    <div className="working-container">
      <h1 className="working_title">
        {" "}
        CV<span className="ninja"> Ninjas</span> Creation Guide
      </h1>
      <div className="container1">
        {steps.map((step) => (
          <div className="step-box" key={step.id}>
            <div className="logo-box">
              <img src={step.imgSrc} alt={`${step.description} Logo`} />
            </div>
            <div className="step-number">{step.id}</div>
            <div className="description">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
