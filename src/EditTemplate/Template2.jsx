import React, { useState } from "react";
import { FaUser, FaTools, FaBriefcase, FaGraduationCap,FaGlobe,FaAddressBook } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Template2.css";

const Template2 = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    surname: "R",
    address: "Street Address, City, State ZIP Code",
    phone: "(123) 456-7890",
    email: "email@address.com",
    website: "website.com",
    profilePicture: "",
    skills: [
      { name: "Skill 1", level: 80 },
      { name: "Skill 2", level: 70 },
      { name: "Skill 3", level: 90 },
      { name: "Skill 4", level: 60 },
    ],
   
    profile: "About you.",
    experience:"Your Past Working experience",
    education: "Education Background",
    languages: "",
  });

  const [currentSection, setCurrentSection] = useState("header");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (index, e) => {
    const updatedSkills = formData.skills.map((skill, i) =>
      i === index ? { ...skill, [e.target.name]: e.target.value } : skill
    );
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profilePicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const renderFormSection = () => {
    switch (currentSection) {
      case "header":
        return (
          <>
            <h2 className="th2">
             <span className="thed2"> Let's start</span> <span className="cth2">with your header</span>
            </h2>
            <div className="form-group2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group2">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group2">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group2">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-group2">
              <label htmlFor="profilePicture">Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleImageUpload}
              />
            </div>
          </>
        );
      case "profile":
        return (
          <>
            <h2 className="thed2">Profile</h2>
            <div className="form-group2">
              <label htmlFor="profile">Profile</label>
              <textarea
                name="profile"
                value={formData.profile}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "skills":
        return (
          <>
            <h2 className="thed2">Skills</h2>
            {formData.skills.map((skill, index) => (
              <div key={index} className="form-group2">
                <label htmlFor={`skillName${index}`}>Skill Name</label>
                <input
                  type="text"
                  name="name"
                  id={`skillName${index}`}
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, e)}
                />
                <label htmlFor={`skillLevel${index}`}>Skill Level</label>
                <input
                  type="number"
                  name="level"
                  id={`skillLevel${index}`}
                  value={skill.level}
                  onChange={(e) => handleSkillChange(index, e)}
                />
              </div>
            ))}
          </>
        );
      case "experience":
        return (
          <>
            <h2 className="thed2">Experience</h2>
            <div className="form-group2">
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
            <h2 className="thed2">Education</h2>
            <div className="form-group2">
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
            <h2 className="thed2">Languages</h2>
            <div className="form-group2">
              <label htmlFor="languages">Languages</label>
              <textarea
                name="languages"
                value={formData.languages}
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
    const input = document.querySelector(".resume-preview2");
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
   <div className="editbg">
   <div className="template-container2">
        <div className="sidebar2">
          <div
            className="sidebar-icon2"
            onClick={() => setCurrentSection("header")}
          >
            <FaUser />
          </div>
          <div
            className="sidebar-icon2"
            onClick={() => setCurrentSection("profile")}
          >
        <FaAddressBook aria-hidden="true" />
          </div>
          <div
            className="sidebar-icon2"
            onClick={() => setCurrentSection("skills")}
          >
            <FaTools />
          </div>
          <div
            className="sidebar-icon2"
            onClick={() => setCurrentSection("experience")}
          >
            <FaBriefcase />
          </div>
          <div
            className="sidebar-icon2"
            onClick={() => setCurrentSection("education")}
          >
            <FaGraduationCap />
          </div>
          <div
            className="sidebar-icon2"
            onClick={() => setCurrentSection("languages")}
          >
             <FaGlobe/>
          </div>
        </div>
        <div className="form-container2">{renderFormSection()}</div>
        <div className="preview-container2">
          <div className="resume-preview2">
            <div className="resume-header2">
              {formData.profilePicture && (
                <img
                  src={formData.profilePicture}
                  alt="Profile"
                  className="profile-picture2"
                />
              )}
              <h1>
                {formData.firstName} {formData.surname}
              </h1>
            </div>

            <div className="resume-contact2">
              <div>
                <MdEmail /> {formData.email}
              </div>
              <div>
                <MdPhone /> {formData.phone}
              </div>
              <div>
                <MdLocationOn /> {formData.address}
              </div>
            </div>
            <div className="resume-profile2 resume-section2">
              <h6 class="th22">Profile</h6>
              <p>{formData.profile}</p>
            </div>
            <div className="resume-skills2 resume-section2">
              <h6 class="th22">Skills</h6>
              {formData.skills.map((skill, index) => (
                <p key={index}>{skill.name} - {skill.level}%</p>
              ))}
            </div>
            <div className="resume-experience2 resume-section2">
              <h6 class="th22">Experience</h6>
              <p>{JSON.stringify(formData.experience)}</p>
            </div>
            <div className="resume-education2 resume-section2">
              <h6 class="th22">Education</h6>
              <p>{JSON.stringify(formData.education)}</p>
            </div>
            <div className="resume-languages2 resume-section2">
              <h6 class="th22">Languages</h6>
              <p>{formData.languages}</p>
            </div>
          </div>
          <button className="download-btnsisu" onClick={downloadResume}>
            Download
          </button>
        </div>
      </div>
   </div>
    </>
  );
};

export default Template2;