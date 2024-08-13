import React, { useState } from 'react';
import './ResumeBuilder.css'
import Navbar from '../Navbar/Navbar';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    summary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
        <Navbar/>
      <section className="hero">
        <div className="search-banner-bg"></div>
        <h2>Career Growth</h2>
        <p>Check out these cover letter examples for ideas on how to start your perfect cover letter!</p>
       
      </section>

      <section className="categories">
        <ul>
          <li><a href="#">"Your resume is your personal marketing brochure. Make sure it sells you well."</a></li>
        
        </ul>
      </section>

      <section className="questions-section">
        {/* <h4 className="section-title">Resume Advice</h4> */}
        <div className="questions-container">
          <div className="question-box">
            <h4>RESUME ADVICE</h4>
            <p>How do I format my resume for maximum impact?</p>
            <p>Jul 17, 2024 • 9 min read</p>
          </div>
          <div className="question-box">
            <h4>RESUME ADVICE</h4>
            <p>What sections should be included in my resume?</p>
            <p>Jul 16, 2024 • 9 min read</p>
          </div>
          <div className="question-box">
            <h4>RESUME ADVICE</h4>
            <p>How can I tailor my resume for a specific job application?</p>
            <p>Jul 5, 2024 • 9 min read</p>
          </div>
        </div>
      </section>

      <section className="questions-section">
        {/* <h4 className="section-title">Cover Letter Advice</h4> */}
        <div className="questions-container">
          <div className="question-box">
            <h4>COVER LETTER ADVICE</h4>
            <p>The ultimate cover letter guide</p>
            <p>Jul 16, 2024 • 9 min read</p>
          </div>
          <div className="question-box">
            <h4>COVER LETTER ADVICE</h4>
            <p>What should I include in my cover letter?</p>
            <p>Jul 5, 2024 • 9 min read</p>
          </div>
          <div className="question-box">
            <h4>COVER LETTER ADVICE</h4>
            <p>Do employers read cover letters?</p>
            <p>Jul 17, 2024 • 9 min read</p>
          </div>
        </div>
      </section>

      <section className="questions-section">
        {/* <h4 className="section-title">Resume Checker</h4> */}
        <div className="questions-container">
          <div className="question-box">
            <h4>RESUME CHECKER</h4>
            <p>Is my resume ATS-friendly?</p>
            <p>Jul 17, 2024 • 9 min read</p>
          </div>
          <div className="question-box">
            <h4>RESUME CHECKER</h4>
            <p>Are there any spelling or grammar errors in my resume?</p>
            <p>Jul 17, 2024 • 9 min read</p>
          </div>
          <div className="question-box">
            <h4>RESUME CHECKER</h4>
            <p>Is my resume properly formatted for readability?</p>
            <p>Jul 17, 2024 • 9 min read</p>
          </div>
        </div>
      </section>
      <div class="us">
    <div class="content-wrapper3">
        <div class="text-section3">
            <h2>Do employers read cover letters?</h2>
            <p>Wait, hold on a hot second. There’s a rumor going around that you don’t need a cover letter at all. Why should you go to the to trouble of writing one if you don’t need it to get a job?</p>

<p>To be honest, the reality is that you don’t know whether an employer cares about your cover letter - so why take a chance that they’ll miss it?</p>

<p>It’s always best to write a short cover letter, no matter what.</p>

<p>Don’t be intimidated by writing a cover letter. With the cover letter builder, writing a cover letter is a breeze. Try out the cover letter and resume builder here.</p>
        </div>
    </div>
    </div>
      <div class="wee">
      <div class="image-content1">
            <img src="https://quire.io/blog/images/2020-08-25-productivity_myths_leadership/productivity_myths_leadership.png" alt="Cover Letter Illustration"/>
        </div>
      <div class="content-wrapper">
        <div class="text-section">
            <h2>The ultimate cover letter guide</h2>
            <p>Today’s job market is fierce. Now that employers are getting hundreds of applications for a single job posting, the reality is that you absolutely need a cover letter to get noticed.</p>
            <p>Taking the time to create a unique cover letter shows employers that you really care about the job you’re applying for. Cover letters also show employers why you, as an individual, are worth hiring. They’re one of the best opportunities you have to show off your personality, skills, and accomplishments in a compelling way.</p>
            <p>Resumes are invaluable, but cover letters really make you stand out. Check out this ultimate guide on how to write a cover letter that will get you hired fast.</p>
        </div>
    </div>
        
        </div>
      <div class="container-q">
        <div class="text-content-q">
            <h2>What Should I Write in My Cover Letter?</h2>
            <p>The most important thing to keep in mind when you’re writing a cover letter is that it should answer the employer’s fundamental question, “Why should I hire you?”</p>
            <p>Your cover letter should be several paragraphs long, but no larger than one page in length.</p>
            <p>The introductory paragraph explains why you are writing to the employer, as well as how you heard about the job opening.</p>
            <p>The main body of text can be between one to three paragraphs. This text elaborates on the most relevant skills and experiences in your resume that would make you the best fit for the specific job opening you’re applying for.</p>
            <p>For the main body of text, write about the most important qualifications that make you a standout candidate for the position. Frame this text to explain how you’d add to the employer’s company in a positive way.</p>
            <p>In the final paragraph, thank the employer for considering your application, restate your interest in the position, and state your availability for an interview.</p>
        </div>
        <div class="image-content">
            <img src="https://www.resume.com/static/10e219d4184262e95a343c0cde25a1db/7cf6d/question-mark.webp" alt="Cover Letter Illustration"/>
        </div>
    </div>



    <div class="us1">
    <div class="content-wrapper3-res">
        <div class="text-section3-res">
            <h2>How do I format my resume for maximum impact?</h2>
            <p><b>Craft a Clear and Concise Layout</b></p>
<p>A well-structured resume with a clear layout makes a strong impression. Focus on using a clean, professional design that highlights your most relevant experiences and skills. Prioritize essential sections like contact information, a brief professional summary, and key accomplishments. Consistent formatting and effective use of whitespace will help guide the reader's eye, ensuring that your resume is both easy to read and impactful.</p>

<p>Tailor your resume for each job application by emphasizing the skills and experiences most relevant to the position. Use bullet points to make key details stand out, and quantify achievements where possible to demonstrate your impact. This targeted approach will make your resume more compelling and increase your chances of landing an interview.</p>
        </div>
    </div>
    </div>



    <div class="container-q3">
        <div class="text-content-q3">
            <h2>What sections should be included in my resume?</h2>
            <p>Key Sections for an Effective Resume</p>
<p>To create a compelling resume, start with the Header/Contact Information section, where you include your full name, phone number, email address, and any relevant online profiles like LinkedIn or personal websites. Next, the Professional Summary or Objective should provide a concise overview of your experience, skills, and career goals. This sets the tone for your resume and gives potential employers a snapshot of what you bring to the table.</p>

<p>Following these sections, include Work Experience detailing your previous job roles, responsibilities, and achievements, as well as Education showcasing your academic background and qualifications. Additional sections such as Skills, Projects, and Certifications can further highlight your relevant capabilities and accomplishments. Tailoring these sections to the job you’re applying for will make your resume stand out and effectively communicate your qualifications.</p>
        </div>
        <div class="image-content3">
            <img src="https://blog.glassdoor.com/site-us/wp-content/uploads/sites/2/best_skills_for_resumes.png"/>
        </div>
    </div>

    {/* https://media.healthecareers.com/wp-content/uploads/2022/10/20195744/CareerResources-Header-Job-Search.svg */}
    <div class="wee2">
      <div class="image-content2">
            <img src="https://resumegenius.com/wp-content/uploads/2018/12/illus-templatepage.svg" alt="Cover Letter Illustration"/>
        </div>
      <div class="content-wrapper2">
        <div class="text-section2">
            <h2>How can I tailor my resume for a specific job application?</h2>
            <p>Tailoring Your Resume for a Specific Job Application</p>
<p>To tailor your resume effectively, start by analyzing the job description for the position you're applying for. Identify key skills, qualifications, and responsibilities mentioned in the description. Match these with your own skills and experiences, emphasizing those that align closely with the job requirements. Highlight relevant achievements and use keywords from the job description throughout your resume to demonstrate that you meet the specific needs of the role.</p>

<p>Additionally, adjust your professional summary or objective to reflect the goals and values of the company and the position you're targeting. Ensure your work experience section showcases achievements and responsibilities that are most pertinent to the job. By customizing these sections, you show potential employers that you are a strong fit for the position and have the specific skills and experience they are seeking.</p>
        </div>
    </div>
    </div>




    <div class="c1">
      <div class="image-contentc1">
            <img src="https://www.myperfectresume.com/wp-content/uploads/2022/10/good-resume-and-right-skills.png"/>
        </div>
      <div class="content-wrapperc1">
        <div class="text-sectionc1">
            <h2>Is your Resume Polished for Perfect Readability and Impact?</h2>
            <p>A well-crafted resume is essential for making a strong impression in today’s competitive job market.</p> <p>Readability is key—your resume should be easy to navigate, with a clear structure that highlights your skills and experiences effectively. Utilizing the right tools can help you assess the clarity of your layout, font choices, and overall design, ensuring that your resume not only looks professional but also conveys your qualifications at a glance.</p>

<p>Focusing on both readability and impact is crucial for creating a compelling narrative that captures the attention of recruiters. Implementing expert tips and best practices—such as using bullet points for concise information and ensuring consistent formatting—can significantly enhance your resume's effectiveness. By refining your resume into a powerful tool that showcases your strengths, you can increase your chances of landing interviews and leaving a lasting impression on potential employers.</p>
        </div>
    </div>
    </div>



    <div class="c2">
    <div class="content-wrapper3-resc2">
        <div class="text-section3-resc2">
            <h2>Seeking Expert Advice to Make My Resume the Top Choice for Recruiters?</h2>
            <p>In today’s competitive job market, having a standout resume is crucial to catching the eye of recruiters. Seeking expert advice can help you identify key elements that make your resume appealing, such as effective formatting, strategic keyword usage, and compelling language. By incorporating tailored tips and insights, you can enhance your resume's overall impact, ensuring it highlights your strengths and aligns with the job you're targeting.</p>

<p>Taking the time to refine your resume not only increases your chances of landing interviews but also boosts your confidence as you present your qualifications. Whether you need assistance with content, layout, or presentation, expert guidance can transform your resume into a powerful tool that positions you as a top candidate in the eyes of recruiters.</p>
        </div>
    </div>
    </div>





    <div class="container-q3c3">
        <div class="text-content-q3c3">
            <h2>How Can I Score My Resume for Maximum Impact?</h2>
            <p>At CV Ninja, we understand that your resume is often your first impression with potential employers, and making it stand out is crucial. To help you evaluate your resume effectively, we provide tools and resources that assess its content, format, and overall impact. Our innovative scoring system analyzes key elements such as keyword optimization, clarity, and structure, giving you valuable insights into how well your resume aligns with industry standards and job descriptions.</p>

<p>Boost your chances of landing your dream job by identifying areas for improvement. Our user-friendly platform not only scores your resume but also offers tailored suggestions to enhance its effectiveness. Whether you’re a seasoned professional or just starting your career, CV Ninja equips you with the knowledge and tools to create a compelling resume that captures the attention of recruiters and hiring managers. Get ready to take your resume to the next level and make a lasting impression!</p>
        </div>
        <div class="image-content3c3">
            <img src="https://cdn-images.zety.com/images/zety/landings/static/check-your-resume@3x.png"/>
        </div>
    </div>
    </div>
  );
};

export default ResumeBuilder;
