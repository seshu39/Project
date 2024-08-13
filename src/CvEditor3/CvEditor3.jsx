import React, { useState } from 'react';
import './CvEditor3.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CvEditor3 = () => {
  const [formData, setFormData] = useState({
    fromFirstName: 'CONRAD',
    fromLastName: 'LOGAN',
    fromTitleBefore: '',
    fromTitleAfter: '',
    fromPhone: '555-555-5555',
    fromEmail: 'example@example.com',
    fromAddress: 'Denver',
    fromCity: '',
    fromPostalCode: '80010',
    fromLinkedIn: '',

    toFirstName: 'Donald',
    toLastName: 'Tran',
    toTitleBefore: 'Office Manager',
    toTitleAfter: '',
    toPhone: '555-555-5555',
    toEmail: 'example@example.com',
    toAddress: 'Pentaho',
    toCity: 'Denver',
    toPostalCode: '',
    toCountry: 'CO',

    content: `Dear Mr. Tran,

Opening paragraph: Immediately grab the hiring manager's attention with an opening that conveys your enthusiasm for the job opportunity. Mention your years of relevant experience, the job you're applying for, how you found out about the job (Was it a referral? Did you see the job opening on their website?) and why you're interested in the position.

For a more detailed guide on writing a compelling opener and strong cover letter, see our article How to Write a Cover Letter.

Body paragraphs: There are different ways to approach body paragraphs. Generally speaking, you should go beyond what's written in your resume and provide further details on work accomplishments, draw a connection between your past experiences and how they can be applied to the new job, and show your knowledge of the company's culture, goals and environment.

You can include bullet points in this section to highlight relevant achievements. Use numbers, when possible, to better present these accomplishments. For example: “I've used my creativity, energy and compassion in bettering over 60 students each school year, giving them the dedication and attention they deserve.”

For more guidance and inspiration on specific scenarios, explore our cover letter examples.

Closing paragraph: Make your interest in the company clear and express your excitement one more time. Remember to thank the hiring manager for their time and consideration, and encourage them to follow up (e.g., “I look forward to further discussing my qualifications with you.”).

Sincerely,
CONRAD LOGAN`
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
              <label>Title Before</label>
              <input
                type="text"
                name="fromTitleBefore"
                value={formData.fromTitleBefore}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Title After</label>
              <input
                type="text"
                name="fromTitleAfter"
                value={formData.fromTitleAfter}
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
              <label>LinkedIn</label>
              <input
                type="text"
                name="fromLinkedIn"
                value={formData.fromLinkedIn}
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
              <label>Title Before</label>
              <input
                type="text"
                name="toTitleBefore"
                value={formData.toTitleBefore}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Title After</label>
              <input
                type="text"
                name="toTitleAfter"
                value={formData.toTitleAfter}
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
        </form>
        <button onClick={generatePDF} className="generate-pdf-button">
          Generate PDF
        </button>
      </div>
      <div className="preview-section">
        <div className="cover-letter" id="cover-letter-pdf">
          <div className="cover-letter-header">
            <div className="header-left">
              <h1>{`${formData.fromFirstName} ${formData.fromLastName}`}</h1>
              {/* <p>{`${formData.fromAddress}, ${formData.fromCity}, ${formData.fromCountry} ${formData.fromPostalCode}`}</p> */}
              {/* <p>{formData.fromPhone} | {formData.fromEmail}</p> */}
            </div>
            <div className="header-right">
  <p style={{ marginTop: '28px',marginRight: '20px' }}>Phone Number : {formData.fromPhone}</p>
  <p style={{ marginTop: '1px' }}>Email : {formData.fromEmail}</p>
  <p style={{ marginTop: '1px' }}>Address : {formData.fromAddress}</p>
  <p style={{marginTop:'0px'}}>LinkedIn : {formData.fromLinkedIn}</p>
</div>

          </div>
          <div className="cover-letter-body">
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

export default CvEditor3;
