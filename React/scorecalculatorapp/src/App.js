import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Pooja Mandal"
        School="Delhi Public School"
        Total={465}
        Goal={500}
      />
    </div>
  );
}

export default App;
