import React from 'react';

export const GuestPage = () => {
  const flights = [
    { id: 'AI-101', origin: 'Mumbai', destination: 'Delhi', price: '₹5,500', time: '08:00 AM' },
    { id: '6E-204', origin: 'Bengaluru', destination: 'Hyderabad', price: '₹3,200', time: '11:30 AM' },
    { id: 'UK-815', origin: 'Chennai', destination: 'Kolkata', price: '₹6,100', time: '04:15 PM' }
  ];

  return (
    <div className="page-container guest-page">
      <h2>Welcome Guest! (Flight Schedule & Browse Page)</h2>
      <p className="info-msg">⚠️ Please login to book flight tickets.</p>

      <div className="flight-grid">
        {flights.map((f) => (
          <div key={f.id} className="flight-card">
            <h3>Flight {f.id}</h3>
            <p><strong>Route:</strong> {f.origin} ➔ {f.destination}</p>
            <p><strong>Departure Time:</strong> {f.time}</p>
            <p><strong>Price:</strong> {f.price}</p>
            <button className="btn btn-disabled" disabled>
              Login Required to Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPage;
