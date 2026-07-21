import React, { useState } from 'react';

export const UserPage = () => {
  const [bookedFlight, setBookedFlight] = useState(null);

  const flights = [
    { id: 'AI-101', origin: 'Mumbai', destination: 'Delhi', price: '₹5,500', time: '08:00 AM' },
    { id: '6E-204', origin: 'Bengaluru', destination: 'Hyderabad', price: '₹3,200', time: '11:30 AM' },
    { id: 'UK-815', origin: 'Chennai', destination: 'Kolkata', price: '₹6,100', time: '04:15 PM' }
  ];

  const handleBookTicket = (flightId) => {
    setBookedFlight(flightId);
    alert(`Ticket successfully booked for Flight ${flightId}!`);
  };

  return (
    <div className="page-container user-page">
      <h2>Welcome Registered User! (Ticket Booking Portal)</h2>
      <p className="success-msg">✅ You are logged in. You can now select and book your tickets.</p>

      {bookedFlight && (
        <div className="booking-alert">
          🎉 Active Booking Confirmed for Flight <strong>{bookedFlight}</strong>!
        </div>
      )}

      <div className="flight-grid">
        {flights.map((f) => (
          <div key={f.id} className="flight-card">
            <h3>Flight {f.id}</h3>
            <p><strong>Route:</strong> {f.origin} ➔ {f.destination}</p>
            <p><strong>Departure Time:</strong> {f.time}</p>
            <p><strong>Price:</strong> {f.price}</p>
            <button
              className="btn btn-book"
              onClick={() => handleBookTicket(f.id)}
            >
              Book Ticket Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
