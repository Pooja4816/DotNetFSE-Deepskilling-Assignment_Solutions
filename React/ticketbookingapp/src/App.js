import React, { useState } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Element variable conditional rendering approach
  let pageContent;
  let authButton;

  if (isLoggedIn) {
    pageContent = <UserPage />;
    authButton = (
      <button className="auth-btn logout-btn" onClick={handleLogout}>
        Logout
      </button>
    );
  } else {
    pageContent = <GuestPage />;
    authButton = (
      <button className="auth-btn login-btn" onClick={handleLogin}>
        Login
      </button>
    );
  }

  return (
    <div className="App">
      <header className="navbar">
        <h1>✈️ SkyWings Flight Ticket Booking Portal</h1>
        <div className="auth-section">{authButton}</div>
      </header>

      <main className="main-content">{pageContent}</main>
    </div>
  );
}

export default App;
