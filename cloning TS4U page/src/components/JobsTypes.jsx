import React from 'react';
import { useParams } from 'react-router-dom';
import tsData from '../staticData/tsData';

  const JobsTypes = () => {
    const { jobId } = useParams();
    const jobType = tsData.find((type) => type.id === parseInt(jobId));
    // console.log('jobType', jobType);

    const handleApply = () => {
    };

    return (
      <div className='container-jobType'>
        <div className="title-header">
        <h1>{jobType.title}</h1>
        </div>

        <div className="job-list">
          <div className='job-list-info'>
            <p>
              <strong></strong> {jobType.jobDescription}
            </p>
            <div>
              <div>
              <strong></strong> {jobType.location}
              <div className="btn-cls">
              <button className="apply-button" onClick={handleApply}>
              Apply for the Job
              </button>
              </div>
              </div>
            </div>
            <p>
              <strong>Job Type:</strong> {jobType.jobType}
            </p>
          </div>
          <p className="res-area">
            <strong>Responsibilities</strong>
            <ul>
            {jobType.responsibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </p>

          <p className='required-area'>
            <strong>Required Qualification</strong>
           <ul>
            {jobType.requiredQualification.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
          </p>

          <div className='other-sec'>
            <p>
              <strong>Vacancy:</strong> {jobType.vacancy}
            </p>
            <p>
              <strong>Office Hours:</strong> {jobType.officeHours}
            </p>
            <p>
              <strong>Salary Review:</strong> {jobType.salaryReview}
            </p>
            <p>
              <strong>Festival Bonus:</strong> {jobType.festivalBonus}
            </p>
            <p>
              <strong>Salary:</strong> {jobType.salary}
            </p>
          </div>
          
        </div>
      </div>
    );
  }

  export default JobsTypes;
