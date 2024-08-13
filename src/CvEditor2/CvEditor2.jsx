import React, { useState } from 'react';
import './CvEditor2.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CvEditor2 = () => {
  const [formData, setFormData] = useState({
    fromFirstName: 'Seshapriya',
    fromLastName: 'R',
    fromTitleBefore: '',
    fromTitleAfter: '',
    fromPhone: '555-555-555',
    fromEmail: 'CVNinjas@gmail.com',
    fromAddress: '',
    fromCity: '',
    fromPostalCode: '',
    fromCountry: '',

    toFirstName: '',
    toLastName: '',
    toTitleBefore: '',
    toTitleAfter: '',
    toPhone: '',
    toEmail: '',
    toAddress: '',
    toCity: '',
    toPostalCode: '',
    toCountry: '',

    content: '',

    Sincerely: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const input = document.getElementById('cover-letter-pdf');

    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter',
      });

      const imgWidth = 8;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0.5, 0.5, imgWidth, imgHeight);
      pdf.save('cover-letter.pdf');
    });
  };

  return (
 

    <div className="editor-container">
      <div className="form-section">
        <form>
        <h2>
             <span className="thed2"> Let's start !</span>
            </h2>
       <h2> <span className='blackcv'>From</span></h2>
          <div className="form-group-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="fromFirstName"
                value={formData.fromFirstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="fromLastName"
                value={formData.fromLastName}
                onChange={handleChange}
              />
            </div>
          </div>
         
          <div className="form-group-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="fromPhone"
                value={formData.fromPhone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="fromEmail"
                value={formData.fromEmail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="fromAddress"
                value={formData.fromAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="fromCity"
                value={formData.fromCity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="fromPostalCode"
                value={formData.fromPostalCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="fromCountry"
                value={formData.fromCountry}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2> <span className='blackcv'>To</span></h2>
          <div className="form-group-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="toFirstName"
                value={formData.toFirstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="toLastName"
                value={formData.toLastName}
                onChange={handleChange}
              />
            </div>
          </div>
        
          <div className="form-group-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="toPhone"
                value={formData.toPhone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="toEmail"
                value={formData.toEmail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="toAddress"
                value={formData.toAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="toCity"
                value={formData.toCity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="toPostalCode"
                value={formData.toPostalCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="toCountry"
                value={formData.toCountry}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2> <span className='blackcv'>Content</span></h2>
          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Sincerely,</label>
            <input
              type="text"
              name="Sincerely"
              value={formData.Sincerely}
              onChange={handleChange}
            />
          </div>

          <button type="button" onClick={generatePDF} className="generate-pdf-button">
            Generate PDF
          </button>
        </form>
      </div>
      <div className="preview-sectionn">
        <div className="cover-letterr" id="cover-letter-pdf">
          <div className="cover-letter-headerr">
            <div className="header-leftt">
              <h1>{`${formData.fromFirstName} ${formData.fromLastName}`}</h1>
              
            </div>
            <div className="header-rightt">
              <p>{formData.fromPhone}</p>
              <p>{formData.fromEmail}</p>
              <p>{formData.fromAddress}</p>
            </div>
          </div>
          <div className="cover-letter-bodyy">
          <p>{formData.toPhone}</p>
              <p>{formData.toEmail}</p>
              <p>{formData.toAddress}</p>
            <p>Dear {`${formData.toFirstName} ${formData.toLastName}`},</p>
            <p>{formData.content}</p>
            <p>Sincerely,</p>
            <p>{`${formData.fromFirstName} ${formData.fromLastName}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvEditor2;
