import React from "react";
import "./StepsToPerfectResume.css";
import img11 from "../StepsToPerfectResume/step1.png";
import img22 from "../StepsToPerfectResume/step2.png";
import img33 from "../StepsToPerfectResume/step3.png";


const StepsToPerfectResume = () => {
  return (
    <div className="steps-container">
      <strong>
        {" "}
        <h1 class="sh1">
          Your Dream <span class="cv">Resume</span> in 3 Steps
        </h1>
      </strong>
    
      <div className="steps">
        <div className="step">
          <img src={img11} alt="Pick a template" />
          <h3 className="steps-h3">Pick a template and follow the prompts.</h3>
          {/* <p>
            Our builder will tailor your resume to the desired role once we know
            your details.
          </p> */}
        </div>
        <div className="arrow"></div>
        <div className="step">
          <img src={img22} alt="Choose customized text" />
          <h3 className="steps-h3">Fill In the Blanks</h3>
          {/* <p>
            The builder features professionally written content and keywords
            that you can select.
          </p> */}
        </div>
        <div className="arrow"></div>
        <div className="step">
          <img src={img33} width="100px" height="100px" />
          <h3 className="steps-h3">Download and send to employers.</h3>
          {/* <p>
            Save and send as a PDF, Word DOC or any other file format the
            employer wants.
          </p> */}
        </div>
      </div>
      <br></br>
      {/* <button className="make-resume-button">Make a resume</button> */}
    </div>
  );
};

export default StepsToPerfectResume;