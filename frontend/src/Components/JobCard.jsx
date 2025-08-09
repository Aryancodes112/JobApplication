import React from 'react';
import '../Styles/jobcard.css';

const JobCard = ({ job }) => {
  const { companyName, jobTitle, location, companyLogo, salary } = job;

  return (
    <div className="job-card">
      <img src={companyLogo} alt={companyName} className="company-logo" />
      <h3 className="job-title">{jobTitle}</h3>
      <p className="company-name">{companyName}</p>

      <div className="job-details">
        <p className="location">📍 {location}</p>
        <p className="salary">💰 {salary}</p>
      </div>
    </div>
  );
};

export default JobCard;
