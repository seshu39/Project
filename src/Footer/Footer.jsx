import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footers">
      <footer className="bg-black text-center text-white">
        <div className="p-4">
          <div className="social-icons-container">
            <a className="social-icon" href="#!" role="button">
              <FaFacebookF />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaTwitter />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaGoogle />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaInstagram />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaLinkedinIn />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaGithub />
            </a>
          </div>

          <div className="footer-sectionst">
            <div className="footer-sections">
              <h4>
                <strong>
                  <span className="cv">CV</span>
                  <span className="c">Ninja</span>
                </strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">Resume Templates</a>
                </li>
                <li>
                  <a href="#">CV Templates</a>
                </li>
                <li>
                  <a href="#">Cover Letters</a>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h4 className="txt">
                <strong>Learn</strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Career Blog</a>
                </li>
                <li>
                  <a href="#">How to Write a Resume</a>
                </li>
                <li>
                  <a href="#">How to Write CV</a>
                </li>
                <li>
                  <a href="#">How to Write a Cover Letter</a>
                </li>
                <li>
                  <a href="#">Resume Examples</a>
                </li>
                <li>
                  <a href="#">Cover Letter Examples</a>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h4 className="txt">
                <strong>Other</strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">eBook Store</a>
                </li>
                <li>
                  <a href="#">Media Kit</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h4 className="txt">
                <strong>Legal/Contact</strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="cop">@ 2024 All Rights Reserved and Registered</div>
          <br />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
