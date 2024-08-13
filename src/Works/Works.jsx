import React from "react";
import "./Works.css";
import img44 from "../Works/img44.png";
import img2 from "../Works/img2.png";
import img4 from "../Works/img4.png";

const Works = () => {
  return (
    <div className="steps-containerr">
      <strong>
        <h1 className="white">
          Your Dream <span className="cv">Cover Letter</span> in 3 Steps
        </h1>
      </strong>
      <div className="stepsr">
        <div className="stepr">
          <img src={img44} alt="Pick a template" width="100px" />
          <h3 className="stepsr-h3">Choose an ATS-friendly, professionally designed template.</h3>
        </div>
        <div className="arrowr"></div> {/* Add arrow between steps */}
        <div className="stepr">
          <img src={img2} alt="Choose customized text" className="imar" />
          <h3 className="stepsr-h3">Add tailored content from Certified Professional Resume Writers.</h3>
        </div>
        <div className="arrowr"></div> {/* Add arrow between steps */}
        <div className="stepr">
          <img src={img4} width="100px" height="100px" />
          <h3 className="stepsr-h3">Download in the file format you need and send!</h3>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Works;
