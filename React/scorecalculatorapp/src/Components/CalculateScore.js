import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal * 100).toFixed(2) + '%';
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, Total, Goal }) => {
  return (
    <div className="formatstyle">
      <h2>Student Score Details</h2>
      <div className="score-details">
        <p><span>Name:</span> {Name}</p>
        <p><span>School:</span> {School}</p>
        <p><span>Total Marks Obtained:</span> {Total}</p>
        <p><span>Goal / Max Marks:</span> {Goal}</p>
        <p><span>Average Score Percentage:</span> {calcScore(Total, Goal)}</p>
      </div>
    </div>
  );
};

export default CalculateScore;
