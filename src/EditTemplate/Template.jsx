import React, { useState } from "react";
import { FaUser, FaTools, FaBriefcase, FaGraduationCap,FaLanguage,FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
 
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Template.css";

const Template = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
    summary: "",
    languages: "",
  });

  const [currentSection, setCurrentSection] = useState("header");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderFormSection = () => {
    switch (currentSection) {
      case "header":
        return (
          <>
            <h2 class="th2">
              <span className="thed2">Let's start</span> <span className="cth2">with your header</span>
            </h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "skills":
        return (
          <>
            <h2 className="th2">Skills</h2>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "experience":
        return (
          <>
            <h2 className="th2">Experience</h2>
            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "education":
        return (
          <>
            <h2 className="th2">Education</h2>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "languages":
        return (
          <>
            <h2 className="th2">Languages</h2>
            <div className="form-group">
              <label htmlFor="languages">Languages</label>
              <textarea
                name="languages"
                value={formData.languages}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "summary":
        return (
          <>
            <h2 className="th2">Summary</h2>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const downloadResume = () => {
    const input = document.querySelector(".resume-preview");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Resume.pdf");
    });
  };

  return (
    <>
     <div class="editbgc">
     <div className="template-containerc">
        <div className="sidebarc">
          <div
            className="sidebar-iconc"
            onClick={() => setCurrentSection("header")}
          >
            <FaUser />
          </div>
          <div
            className="sidebar-iconc"
            onClick={() => setCurrentSection("summary")}
          >
          <FaGlobe/>
           {/* <FaSquareWebAwesome/> */}
          </div>
          <div
            className="sidebar-iconc"
            onClick={() => setCurrentSection("skills")}
          >
            <FaTools />
          </div>
          <div
            className="sidebar-iconc"
            onClick={() => setCurrentSection("experience")}
          >
            <FaBriefcase />
          </div>
          <div
            className="sidebar-iconc"
            onClick={() => setCurrentSection("education")}
          >
            <FaGraduationCap />
          </div>
          <div
            className="sidebar-iconc"
            onClick={() => setCurrentSection("languages")}
          >
           <FaLanguage />
          </div>
        </div>
        <div className="form-container">{renderFormSection()}</div>
        <div className="preview-container">
          <div className="resume-preview">
            <div className="ko">
              <button></button>
            </div>
            <br></br>
            <div className="resume-header">
              <h1>
                {formData.firstName} {formData.surname}
              </h1>
            </div>

            <div className="resume-contact">
              <div>
                <MdLocationOn /> {formData.city}, {formData.country}
              </div>
              <div>
                <MdPhone /> {formData.phone}
              </div>
              <div>
                <MdEmail /> {formData.email}
              </div>
            </div>
            <div className="resume-summary resume-section">
              <h6>Summary</h6>
              <p>{formData.summary}</p>
            </div>
            <div className="resume-skills resume-section">
              <h6>Skills</h6>
              <p>{formData.skills}</p>
            </div>
            <div className="resume-experience resume-section">
              <h6>Experience</h6>
              <p>{formData.experience}</p>
            </div>
            <div className="resume-education resume-section">
              <h6>Education and Training</h6>
              <p>{formData.education}</p>
            </div>
            <div className="resume-education resume-section">
              <h6>Languages Known</h6>
              <p>{formData.languages}</p>
            </div>
          </div>
          <button className="download-btnsisu" onClick={downloadResume}>
            Download
          </button>{" "}
        </div>
      </div>
     </div>
    </>
  );
};

export default Template;