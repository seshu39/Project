import React, { useEffect } from 'react';
import './AboutUs.css';

import pdfIcon from './aboutus1.jpg';


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
  <div id ="about">
  <div className="about-us" >
      <div className="contentss">
        <h2>We <span class="change">Deliver The Best</span></h2>
        <ul>
          <li><span className="checkmark">✔</span> Proven CV Templates to increase Hiring Chance</li>
          <li><span className="checkmark">✔</span> Creative and Clean Templates Design</li>
          <li><span className="checkmark">✔</span> Easy and Intuitive Online CV Builder</li>
          <li><span className="checkmark">✔</span> Free to use. Developed by hiring professionals.</li>
          <li><span className="checkmark">✔</span> Fast Easy CV and Resume Formatting</li>
          <li><span className="checkmark">✔</span> Recruiter Approved Phrases</li>
        </ul>
      </div>
      <div className="cv-imagess">
        <img src={pdfIcon} alt="PDF Icon" className="templatess" />
      </div>
    </div>
  </div>
      </>
  );
};

export default AboutUs;