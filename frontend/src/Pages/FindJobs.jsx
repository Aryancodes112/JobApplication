import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styles/FindJobs.css';
import JobCard from '../Components/JobCard';
import Data from '../Data/data.json';

const FindJobs = () => {
  const [queryTitle, setQueryTitle] = useState('');
  const [queryLocation, setQueryLocation] = useState('');
  const [salary, setSalary] = useState(50000);
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 10;

  // Filter Logic
  const filteredJobs = Data.filter((job) => {
    const titleMatch = job.jobTitle.toLowerCase().includes(queryTitle.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(queryLocation.toLowerCase());
    const maxSalary = parseInt(job.salary.replace(/[^0-9\-]/g, '').split('-')[1]);
    const salaryMatch = maxSalary >= salary;
    return titleMatch && locationMatch && salaryMatch;
  });

  // Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <>
      <div className="find-jobs-container">
        <div className="filter-group">
          <label htmlFor="job-title">Job Title</label>
          <div className="input-with-icon">
            <FaSearch className="input-icon" />
            <input
              type="text"
              id="job-title"
              placeholder="Enter job title"
              value={queryTitle}
              onChange={(e) => {
                setQueryTitle(e.target.value);
                setCurrentPage(1); // Reset to page 1
              }}
            />
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <div className="input-with-icon">
            <FaSearch className="input-icon" />
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              value={queryLocation}
              onChange={(e) => {
                setQueryLocation(e.target.value);
                setCurrentPage(1); // Reset to page 1
              }}
            />
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="salary">Salary Range</label>
          <input
            type="range"
            id="salary"
            min="20000"
            max="200000"
            step="1000"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
              setCurrentPage(1); // Reset to page 1
            }}
          />
          <span className="salary-value">₹{salary}</span>
        </div>
      </div>

      <div className="job-list">
        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <p className="no-results">No jobs found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default FindJobs;
