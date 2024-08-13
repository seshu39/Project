import React, { useRef, useState } from 'react';
import './EditCover.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const EditCover = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const nameRef = useRef();
  const roleRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const linkedinRef = useRef();
  const monthRef = useRef();
  const coverLetterRef = useRef();
  const addressRef = useRef();
  const mainContentRef = useRef();

  const generatePDF = () => {
    setIsDownloading(true);
    setTimeout(() => {
      html2canvas(mainContentRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('cover-letter.pdf');
        setIsDownloading(false);
      });
    }, 0);
  };

  return (
    <>
      
    <div className="containerrs">
      <aside className="sidebarr">
        <button className="sidebar-btnn">Templates</button>
        {/* <button className="sidebar-btn">Design & Font</button>
        <button className="sidebar-btn">Improve text</button>
        <button className="sidebar-btn">Download</button>
        <button className="sidebar-btn">History</button> */}
        <button className="download-btnn" onClick={generatePDF}>Download as PDF</button>
        {/* <div className="branding-toggle">
          <label>Branding</label>
          <input type="checkbox" defaultChecked />
        </div> */}
      </aside>
      <main className="main-contentt" ref={mainContentRef}>
        <div className="headerr">
          {isDownloading ? (
            <h1>{nameRef.current.value}</h1>
          ) : (
            <input ref={nameRef} type="text" placeholder="Your Name" className="input-fieldd" />
          )}
          {isDownloading ? (
            <h2>{roleRef.current.value}</h2>
          ) : (
            <input ref={roleRef} type="text" placeholder="The role you are applying for?" className="input-fieldd" />
          )}
          <div className="contact-info">
            {isDownloading ? (
              <>
                <div className="contact-field">{phoneRef.current.value}</div>
                <div className="contact-field">{emailRef.current.value}</div>
                <div className="contact-field">{linkedinRef.current.value}</div>
              </>
            ) : (
              <>
                <input ref={phoneRef} type="text" placeholder="Phone" className="input-fieldd contact-fieldd" />
                <input ref={emailRef} type="text" placeholder="Email" className="input-fieldd contact-fieldd" />
                <input ref={linkedinRef} type="text" placeholder="LinkedIn/Portfolio" className="input-fieldd contact-fieldd" />
              </>
            )}
          </div>
          {isDownloading ? (
            <div>{monthRef.current.value}</div>
          ) : (
            <input ref={monthRef} type="date" placeholder="Month" className="input-fieldd" />
          )}
          {isDownloading ? (
            <div>{addressRef.current.value}</div>
          ) : (
            <input ref={addressRef} type="text" placeholder="Address" className="input-fieldd" />
          )}
        </div>
        {/* <div className="profile-picture">
          <div className="avatar"></div>
        </div> */}
        <div className="cover-letterr">
          {/* <h3>Cover Letter</h3> */}
          {isDownloading ? (
            <p>{coverLetterRef.current.value}</p>
          ) : (
            <textarea
            
              ref={coverLetterRef}
             
              placeholder="Cover Letter 
              
This is your opportunity to introduce yourself to the organization! Share your passion for the position you are applying for to motivate the reader to interview you."
              className="cover-letter-textareaa"
            />
          )}
        </div>
      </main>
       
    </div>
    </>
  );
};

export default EditCover;
