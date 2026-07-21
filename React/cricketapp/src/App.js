import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Cricket Players Dashboard</h1>
      <div className="toggle-container">
        <button className="toggle-btn" onClick={() => setFlag(!flag)}>
          Toggle View (Current Flag: {flag ? 'true' : 'false'})
        </button>
      </div>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
