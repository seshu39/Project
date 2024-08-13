import React from 'react';
import './CoverLetter.css';
// import GIFF from './Home/GIFF'
import example from '../CoverLetter/example.gif'
import Working from '../Working/Working';
import Works from '../Works/Works';
import Us from '../Us/Us';
import TemplateGallery from '../TemplateGallery/TemplateGallery';
import Extra from '../Extra/Extra';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const CoverLetter = () => {
  return (
    <div>
      <Navbar/>
    <div class="wholies">
    <div className="whole_containers">
     {/* <img src={NILO} alt="GIFF" className="giff-image" /> */}
      <div className="container-img">
      {/* <div className="First_Box">
        <h1 className="text">"Your Dream Job Awaits: Build a Standout CV Today"</h1>
      </div> */}
      <div>
        <h1 className="Head">
        Online <span className='CoverLet'>Cover Letter</span><br></br> Builder
        </h1>
        <h2 className="SubHead">
        CVNinja is the cover letter builder that helps you tell<br></br> your story. Beat the writer’s block with our cover letter<br></br> generator. Just answer a few simple questions,<br></br> customize the design, and save as PDF.
       </h2>
      </div>
     <Link to="/Editcover"><button class="head_button">Build My Cover Letter Now</button></Link>
      {/* <div>
        <h3 class="company">Our cover letters get people hired at top companies:</h3>
        
        </div> */}
        </div>
        </div>
       
        <img src={example} alt="coverfirst" className='cover_image'/>
        </div>
        <Works/>
        <Us/>
        <TemplateGallery/>
        <Extra/>
        <Footer/>
        </div>
  );
};

export default CoverLetter;
