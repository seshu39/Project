import React from 'react';
import './ResumeCards.css';

const ResumeCards = () => {
  const cardData = [
    { 
      score: 49, 
      strength: 'WEAK', 
      paragraph: 'The resume is weak and needs improvement to stand out.' 
    },
    { 
      score: 72, 
      strength: 'GOOD', 
      paragraph: 'The document is solid, but there’s potential for greater impact' 
    },
    { 
      score: 85, 
      strength: 'EXCELLENT', 
      paragraph: 'The document shines with exceptional content and quality' 
    },
  ];

  return (
    <div class="ress">
    <div className="resume-cards-wrappers">
      <h1 className="heading"><span class="make">Resume </span> Scores</h1>
      <div className="resume-cards-containers">
        {cardData.map((data, index) => (
          <div className="contents" key={index}>
            <div className="score-circles">
              <div className="scores">{data.score}</div>
              <div className="strengths">{data.strength}</div>
            </div>
            <p className="descriptions">
              {data.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ResumeCards;