import React from "react";
import { Link } from "react-router-dom";
import tsData from "../staticData/tsData";
import "../styles/job.css";

const colors = ["#dcf5de", "#fcd6d3", "#d2f2ff", "#d2f2ff", "#dcf5de", "#fcd6d3", "#dcf5de", "#fcd6d3", "#d2f2ff", "#d2f2ff"];

  const JobsData = () => {
  const handleApplyClick = (jobTitle) => {
    alert(`Applying for the position: ${jobTitle}`);
 };

 return (
    <div className="container-1">
      <div className="full-list">
      <h1 className="career-list">Open Positions</h1>
      <h3 className="text">Get your dream job by applying.</h3>

      <div className="job-list-container">
        {tsData.map((jobs, index) => (
          <div key={jobs.id} className="job" style={{backgroundColor: colors[index % colors.length]}}>
            <Link to={`/job/${jobs.id}`} className="job-link">
              <div className="jobs-thumbnail">
                <img src={jobs.thumbnail} alt="jobs" loading="lazy" />
              </div>

              <div className="job-details">
              <h2 className="jobs-name">{jobs.title}</h2>
              <div className="location-container">

              <img
                className="jobs-location-img"
                src="/images/location.ts4u.png"
                alt="location"
              />
              <span className="jobs-location">{jobs.location}</span>
            </div>
              <h3 className="jobs-type">{jobs.jobType}</h3>
            </div>
       
            <div className="tech-cls">
              <ul className="tech-stack">
              {jobs.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                  ))}
                  </ul>
                  </div>

                <div className="button-cls">
                  <button className="button" onClick={() => handleApplyClick(jobs.title)}>
                    Apply
                  </button>
                </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default JobsData;
