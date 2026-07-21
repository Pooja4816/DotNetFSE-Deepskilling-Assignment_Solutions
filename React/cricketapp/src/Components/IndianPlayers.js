import React from 'react';

export const IndianPlayers = () => {
  const indianPlayersList = [
    'Sachin',
    'Dhoni',
    'Virat',
    'Rohit',
    'Yuvraj',
    'Raina'
  ];

  // ES6 Destructuring to extract Odd and Even Team Players
  const [first, second, third, fourth, fifth, sixth] = indianPlayersList;
  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // Two arrays for T20 and Ranji Trophy players
  const T20players = ['Surya Kumar', 'Ishan Kishan', 'Shubman Gill'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Jaydev Unadkat'];

  // Merging two arrays using ES6 Spread Operator
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div className="section-card">
      <h2>Indian Players</h2>

      <h3>Odd Team Players (Extracted using ES6 Destructuring):</h3>
      <ul>
        {oddTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players (Extracted using ES6 Destructuring):</h3>
      <ul>
        {evenTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <hr />

      <h3>Merged Players (T20 + Ranji Trophy using ES6 Spread Operator):</h3>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
