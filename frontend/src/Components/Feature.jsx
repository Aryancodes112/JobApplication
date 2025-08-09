import React from 'react';
import '../Styles/Feature.css';

import featureImage from '../assets/F_image.png';
import ResumeImage from '../assets/Resume.png';
import ApplicationImage from '../assets/Application.png';
import SelectionImage from '../assets/Selection.png';

const Feature = () => {
  return (
    <div className="feature-section">
      <div className="left-container">
        <img src={featureImage} alt="Main Feature" className="main-feature-image" />
      </div>

      <div className="right-container">
        <div className="feature-box">
          <div className="image-container">
            <img src={ResumeImage} alt="Resume" />
          </div>
          <h3>Curate your Resume and Submit</h3>
        </div>

        <div className="feature-box">
          <div className="image-container">
            <img src={ApplicationImage} alt="Application" />
          </div>
          <h3>Apply for Jobs</h3>
        </div>

        <div className="feature-box">
          <div className="image-container">
            <img src={SelectionImage} alt="Selection" />
          </div>
          <h3>Get Hired</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
