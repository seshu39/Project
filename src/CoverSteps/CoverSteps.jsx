import React from 'react';
import './CoverSteps.css'; // Ensure you have the CSS file for styling

// Importing images
import firstBoxImg from '../assets/FirstBox.png';
import step2Img from '../assets/FirstBox.png';
import step3Img from '../assets/FirstBox.png';
import step4Img from '../assets/FirstBox.png';

const CoverSteps = () => {
  const steps = [
    { id: 1, imgSrc: firstBoxImg, description: 'Submit Your Details Now' },
    { id: 2, imgSrc:  firstBoxImg, description: 'Tailor to your needs.' },
    { id: 3, imgSrc:  firstBoxImg, description: 'Customize your design.' },
    { id: 4, imgSrc:  firstBoxImg, description: 'Check for errors and download' }
  ];

  return (
    <div className="working-containerr">
      <h1 className="working_titlee">CV<span className='ninja'>Ninjas </span>Cover Letter Guide</h1>
      <div className="containerr">
        {steps.map(step => (
          <div className="step-boxx" key={step.id}>
            <div className="logo-boxx">
              <img src={step.imgSrc} alt={`${step.description} Logo`} />
            </div>
            <div className="step-numberr">Step #{step.id}</div>
            <div className="descriptionn">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverSteps;
