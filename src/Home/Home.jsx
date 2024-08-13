import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Works from "../Works/Works";
import Working from "../Working/Working";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import AboutUs from "../AboutUs/AboutUs";
import Htem from "../Htem/Htem";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import FAQ from "../FAQ/FAQ";
import Customers from "../Customers/Customers";
import Footer from "../Footer/Footer";
import CoverLetter from "../CoverLetter/CoverLetter";
import Features from "../Features/Features";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home-sec" id="home">
        <div className="home-container">
          <div className="home-content">
            <div className="home-row">
              <div className="home-col-50 align-item-center">
                <div className="home-info">
                  <h1>
                    <span class="Highlight">Online CV </span> Builder With
                    Creative Templates.
                  </h1>

                  <p class="paa">
                    {" "}
                    Our Perfect resume builder takes the hassle out of resume
                    writing. <br />
                    Choose from several templates and follow easy prompts to{" "}
                    <br />
                    create the perfect job-ready resume.
                  </p>
                  <div className="buttons">
                    <div className="home-btnn">
                      Reach Us
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-col-50 order-first order-lg-last">
                <div className="img-sec">
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Working />
      <AboutUs />
      <WhyChooseUs />
      <Htem />
      <Features />
      <TestimonialCard />
      <Customers />
      <Contact />
      <FAQ />
      <Footer />
      {/* <CoverLetter/> */}
    </>
  );
};

export default Home;
