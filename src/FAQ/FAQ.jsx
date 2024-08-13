import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isQuestionBoxVisible, setQuestionBoxVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const questionsAnswers = [
    {
      question: "How can I use CVNinja for free?",
      answer:
        "CVNinja has a few different tools you can use 100% for free without entering any credit card details",
    },
    {
      question: "How can I customize my resume?",
      answer:
        "Our resume templates are designed to adapt to your content and look great across all of our designs.",
    },
    {
      question: "Can I download my resume to Word or PDF?",
      answer:
        "Ofcourse,you can using the download button in edit templates page You can downlod both your resume and coverletter and you can share your resume score also.",
    },
    {
      question: "How Do I Share My Resume and Cover Letter?",
      answer:
        "once you download your resume or coverletter as pdf you can share to all",
    },
  ];


  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    setSubmissionMessage("Thank you for your question! We'll get back to you soon.");
    setUserQuestion("");
    setQuestionBoxVisible(false);
  };

  return (
    <div className="faq-container">
      <h2>
        
        <span className="faq-title">Frequently Asked Questions</span>
      </h2>
      {questionsAnswers.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
      <p className="faq-footer">
        Didn't find what you're looking for?{" "}
        <a href="#" onClick={() => setQuestionBoxVisible(true)}>
          Ask your question
        </a>
      </p>
      {isQuestionBoxVisible && (
        <div className="question-box">
          <form onSubmit={handleQuestionSubmit}>
            <textarea
              value={userQuestion}
              onChange={handleQuestionChange}
              placeholder="Ask your question here..."
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {submissionMessage && (
        <p className="submission-message">{submissionMessage}</p>
      )}
    </div>
  );
};

export default FAQ;