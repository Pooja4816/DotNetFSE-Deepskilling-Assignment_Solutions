import React from 'react';

export const CourseDetails = ({ status }) => {
  const courses = [
    { id: 101, name: 'DotNet Full Stack Engineering', duration: '12 Weeks', trainer: 'Cognizant Academy' },
    { id: 102, name: 'Angular & TypeScript Essentials', duration: '6 Weeks', trainer: 'Cognizant Tech Academy' },
    { id: 103, name: 'Microservices & Cloud Native', duration: '8 Weeks', trainer: 'Deepskilling Team' }
  ];

  return (
    <div className="detail-card course-card">
      <h2>🎓 Course Details Component</h2>
      
      {/* Inline ternary check */}
      <p>
        <strong>Enrollment Status:</strong>{' '}
        <span className={status === 'open' ? 'status-open' : 'status-closed'}>
          {status === 'open' ? '🟢 Admissions Open' : '🔴 Seats Full'}
        </span>
      </p>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> ({course.duration}) — Trainer: {course.trainer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
