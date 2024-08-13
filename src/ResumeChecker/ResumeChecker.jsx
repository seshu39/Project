import React from "react";
import "../ResumeChecker/ResumeChecker.css";
import checker from "../assets/scores.jpg";
import AnalyzerSteps from "../AnalyzerSteps/AnalyzerSteps";
import ResumeCards from "../ResumeCards/ResumeCards";
import ResumeUploaderAnalyzer from "../ResumeUploaderAnalyzer/ResumeUploaderAnalyzer";
import Companies from "../Companies/Companies";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const ResumeChecker = () => {
  return (
    <>
      <Navbar />
      <div class="fullss">
        <div class="checker-h1ss">
          Is Your resume <span class="checker-h1-changess">Good Enough?</span>
        </div>
        <div class="gifss">
          <div class="checker-h2ss">
            Ensure your resume stands out and has <br></br>all the{" "}
            <span class="checker-h2-changess">essentials, at no cost.</span>
          </div>
          <div class="para-checkerss">
            <p>
              Revamp your resume at no cost with our expert service. We ensure
              your <br></br>resume includes all the essential elements to stand
              out. Make a lasting<br></br> impression with a polished,
              professional document. Get started today and <br></br>grab
              employers' attention!
            </p>
          </div>
        </div>
        <div className="checker-imagess">
          <img
            src={checker}
            alt="Sample Resumess"
            style={{ width: "350px", height: "400px" }}
          />
        </div>
        <AnalyzerSteps />
        <ResumeCards />
        <ResumeUploaderAnalyzer />
        {/* <Companies/> */}
        <Footer />
      </div>
    </>
  );
};

export default ResumeChecker;
