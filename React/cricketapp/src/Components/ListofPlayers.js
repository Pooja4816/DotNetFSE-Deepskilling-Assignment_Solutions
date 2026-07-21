import React from 'react';

export const ListofPlayers = () => {
  const players = [
    { name: 'Sachin Tendulkar', score: 100 },
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 92 },
    { name: 'MS Dhoni', score: 68 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik Pandya', score: 75 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Jasprit Bumrah', score: 25 },
    { name: 'Mohammed Shami', score: 15 },
    { name: 'Kuldeep Yadav', score: 30 },
    { name: 'Rishabh Pant', score: 62 }
  ];

  // Filter players with scores below 70 using ES6 arrow function
  const playersBelow70 = players.filter((player) => player.score <= 70);

  return (
    <div className="section-card">
      <h2>List of Players</h2>

      <h3>All Players (11 Players):</h3>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            Mr. {p.name} <span>{p.score}</span>
          </li>
        ))}
      </ul>

      <hr />

      <h3>List of Players having Scores Below 70 (Filtered using ES6 Arrow Functions):</h3>
      <ul>
        {playersBelow70.map((p, index) => (
          <li key={index}>
            Mr. {p.name} <span>{p.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
