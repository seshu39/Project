import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ResumeUploaderAnalyzer.css'; // Combined CSS

const ResumeUploaderAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState(null);
  const [overallScore, setOverallScore] = useState(null);
  const [suggestions, setSuggestions] = useState("");

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleAnalyzeClick = () => {
    if (file) {
      setLoading(true);
      setTimeout(() => {
        const mockScores = {
          formatting: Math.floor(Math.random() * 100),
          content: Math.floor(Math.random() * 100),
          keywords: Math.floor(Math.random() * 100),
          experience: Math.floor(Math.random() * 100),
          skills: Math.floor(Math.random() * 100),
        };

        const overall = (
          (mockScores.formatting +
            mockScores.content +
            mockScores.keywords +
            mockScores.experience +
            mockScores.skills) /
          5
        ).toFixed(2);

        setScores(mockScores);
        setOverallScore(overall);
        setSuggestions(generateSuggestions(mockScores));
        setLoading(false);
      }, 2000);
    } else {
      alert("Please upload a resume file");
    }
  };

  const generateSuggestions = (scores) => {
    let suggestions = "";
    if (scores.formatting < 50) {
      suggestions += "Improve formatting by using consistent fonts and bullet points. ";
    }
    if (scores.content < 50) {
      suggestions += "Add more detailed descriptions of your roles and achievements. ";
    }
    if (scores.keywords < 50) {
      suggestions += "Include more industry-specific keywords to pass through ATS. ";
    }
    if (scores.experience < 50) {
      suggestions += "Highlight your professional experience with more quantifiable results. ";
    }
    if (scores.skills < 50) {
      suggestions += "List more relevant skills and provide context for each skill. ";
    }
    return suggestions;
  };

  const shareResults = () => {
    const resultText = `Resume Analysis Results:\nOverall Score: ${overallScore}%\n${suggestions}`;
    if (navigator.share) {
      navigator.share({
        title: "Resume Analysis Results",
        text: resultText,
      });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  const resetPage = () => {
    setFile(null);
    setScores(null);
    setOverallScore(null);
    setSuggestions("");
  };

  return (
    <div className="uploader-analyzer-body">
      <h2 className="page-heading">
        <span className="pagee1">"Make sure </span>
        <span className="white">your resume has everything it needs, for free"</span>
      </h2>
      <div className={`uploader-analyzer-container ${scores ? 'analyzer' : 'uploader'}`}>
        {!scores ? (
          <div className="upco">
            <div className="uploader-container">
              <h1 className="uploader-heading">Resume Uploader</h1>
              <div
                className="uploader-box"
                {...getRootProps({ className: 'dropzone' })}
              >
                <input {...getInputProps()} />
                {file ? (
                  <p>{file.name}</p>
                ) : (
                  <div className="cloud-upload">
                    <p>Drag & drop a file here, or click to select a file</p>
                  </div>
                )}
              </div>
              <button onClick={handleAnalyzeClick} className="analyze-button">
                Analyze Resume
              </button>
              {loading && (
                <div className="loading-overlay">
                  <div className="loading-spinner"></div>
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="analyzer-container">
            <h1>Resume Analyzer</h1>
            <div className="results-container">
              <div className="speedometers">
                {Object.entries(scores).map(([key, value]) => (
                  <div key={key} className="speedometer">
                    <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                    <div className="gauge-container">
                      <svg
                        viewBox="0 0 36 36"
                        className="circular-chart green"
                      >
                        <path
                          className="circle-bg"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="circle"
                          strokeDasharray={`${value}, 100`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">
                          {value}%
                        </text>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="overall-score-container">
                <h2 className="overall">Overall Score</h2>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${overallScore}%` }}
                  >
                    {overallScore}%
                  </div>
                </div>
              </div>
            </div>
            <div className="details-container">
              <div className="suggestions-container">
                <h2>Suggestions to Improve Your Resume</h2>
                <p className="suggestions">
                  {suggestions}
                </p>
              </div>
              <div className="tips-paragraph">
                <h2>Tips to Improve Your Resume</h2>
                <p>
                  1. Tailor your resume for each job application to highlight relevant skills and experience.
                  <br />
                  2. Use action verbs and quantify achievements to demonstrate your impact.
                  <br />
                  3. Ensure there are no spelling or grammatical errors by proofreading multiple times.
                  <br />
                  4. Keep your resume concise and focused, ideally fitting onto one or two pages.
                </p>
              </div>
              <div className="button-row">
                <button onClick={shareResults} className="share-button">
                  Share Results
                </button>
                <button onClick={resetPage} className="back-button">
                  Back to Uploader
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUploaderAnalyzer;
