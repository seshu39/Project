import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail");
    setIsLoggedIn(loggedIn);
    if (loggedIn && email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return (
    <div className="whole">
      <div className="navbar">
        <div className="navbar-logo">
          <div>
            <span className="cvnav">CV</span>
            <span className="c">Ninja</span>
          </div>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="dropdown">
              <a href="#resumes">Resumes</a>
              <div className="dropdown-content">
                <Link to="/Templates">Resume Templates</Link>
                <a href="#resume2">Guide</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#analyzer">Analyzer</a>
              <div className="dropdown-content">
                <Link to="/ResumeChecker">Resume Analyzer</Link>
                <a href="#analyzer2">Guide</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#coverletter">Cover Letter</a>
              <div className="dropdown-content">
                <Link to="/CoverLetter">CoverLetter Builder</Link>
                <a href="#coverletter2">Guide</a>
              </div>
            </li>
            <li>
              <a href="http://localhost:5173/rb">Career Guide</a>
            </li>
          </ul>
        </div>
        <div className="navbar-buttons">
          {isLoggedIn ? (
            <div className="user-profile">
              <FaUser className="user-icon" />
              <div className="user-dropdown">
                <p>{userEmail}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/Login" className="navbar-buttonn">Login</Link>
              <Link to="/Signup" className="navbar-button">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
