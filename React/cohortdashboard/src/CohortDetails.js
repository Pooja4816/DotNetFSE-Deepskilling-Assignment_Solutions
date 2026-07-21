import React from 'react';
import styles from './CohortDetails.module.css';

export const CohortDetails = ({ cohort }) => {
  const h3Style = {
    color: cohort.status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohort.title}</h3>
      <dl>
        <dt>Cohort Code:</dt>
        <dd>{cohort.code}</dd>
        
        <dt>Technology Stack:</dt>
        <dd>{cohort.techStack}</dd>
        
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
