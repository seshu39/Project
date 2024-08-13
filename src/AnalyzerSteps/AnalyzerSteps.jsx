import React from "react";
import "./AnalyzerSteps.css";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import last from "../assets/last.jpg";

const AnalyzerSteps = () => {
  return (
    <div className="steps-containerrss">
      <strong>
        <h1 className="whitess">
          Steps to enhance <span className="cv">Your Resume</span> with our Analyzer
        </h1>
      </strong>
      <div className="stepsss">
        <div className="stepss">
          <img src={first} alt="Pick a template" width="100px" />
          <h3 className="steps-h3ss">Select the resume to analyze. Our tool will provide detailed feedback and actionable insights.</h3>
        </div>
        <div className="arrowss"></div> {/* Add arrow between steps */}
        <div className="stepss">
          <img src={second} alt="Choose customized text" className="imass" />
          <h3 className="steps-h3ss">Our tool will score your resume and offer suggestions to boost its appeal for interviewers.</h3>
        </div>
        <div className="arrowss"></div> {/* Add arrow between steps */}
        <div className="stepss">
          <img src={last} width="100px" height="100px" />
          <h3 className="steps-h3ss">The analyzer will assess your resume, recommend enhancements, and give an overall score.</h3>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AnalyzerSteps;   