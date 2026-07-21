import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      id: 1,
      code: 'INTADM24DF001',
      title: 'DotNet Full Stack Engineering',
      techStack: 'C#, ASP.NET Core, React, SQL Server',
      startDate: '2026-01-15',
      status: 'ongoing'
    },
    {
      id: 2,
      code: 'INTADM24JA002',
      title: 'Java Full Stack Development',
      techStack: 'Java, Spring Boot, Angular, MySQL',
      startDate: '2025-11-01',
      status: 'completed'
    },
    {
      id: 3,
      code: 'INTADM24PY003',
      title: 'Python Data Engineering',
      techStack: 'Python, PySpark, AWS, Snowflake',
      startDate: '2026-02-01',
      status: 'ongoing'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Cognizant Academy Cohorts Dashboard</h1>
      <div>
        {cohorts.map((cohort) => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
