import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Design.css";

const Design = () => {
  const featureCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    featureCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page-containers">
      <main className="main-contents">
        <h1 className="main-headings">
          The resume builder that’s right for your job and experience
        </h1>
        <p className="sub-heading">
        Design professional-looking resumes in minutes with CVNinjas
        </p>
       <Link to="/ResumeChecker"><button className="cta-button">Check Score of your resume</button></Link> 
        <br></br>
        <br></br>
        <p className="sub-heading">
        Our users are hired by
        </p>
        <div className="feature-cards">
          {["https://static.jobscan.co/blog/uploads/2-2.webp", "https://static.jobscan.co/blog/uploads/Facebook-logo-300x188-1.webp", "https://static.jobscan.co/blog/uploads/6-2.webp","https://static.jobscan.co/blog/uploads/logo-ibm@2x.webp","https://static.jobscan.co/blog/uploads/1024px-General_Electric_logo.svg_-300x300-1.webp","https://static.jobscan.co/blog/uploads/Uber-Logo-300x170-1.webp"].map(
            (src, index) => (
              <div
                key={index}
                className="feature-card"
                ref={(el) => (featureCardsRef.current[index] = el)}
              >
                <img src={src} alt={`Feature ${index + 1}`} className="icon" />
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Design;