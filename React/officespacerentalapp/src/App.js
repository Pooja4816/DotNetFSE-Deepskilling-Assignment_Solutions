import React from 'react';
import './App.css';

function App() {
  // Page Heading JSX Element
  const pageHeading = (
    <h1 className="heading">Office Space Rental Portal</h1>
  );

  // Single Office Object
  const singleOffice = {
    name: 'TechPark Corporate Tower',
    rent: 55000,
    address: 'Electronic City, Phase 1, Bengaluru',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60'
  };

  // List of Office Objects
  const officeList = [
    {
      id: 101,
      name: 'Cyber Heights Plaza',
      rent: 45000,
      address: 'HITEC City, Hyderabad',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 102,
      name: 'Prestige Trade Center',
      rent: 75000,
      address: 'MG Road, Bengaluru',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 103,
      name: 'DLF Cyber City Tech Hub',
      rent: 85000,
      address: 'DLF Phase 2, Gurugram',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 104,
      name: 'Mindspace IT Hub',
      rent: 58000,
      address: 'Akurli Road, Malad West, Mumbai',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <div className="App">
      {pageHeading}

      {/* Featured Office Space Section */}
      <section className="featured-section">
        <h2>Featured Office Space</h2>
        <div className="office-card featured">
          <img
            src={singleOffice.image}
            alt={singleOffice.name}
            className="office-img"
          />
          <div className="office-details">
            <h3>{singleOffice.name}</h3>
            <p><strong>Address:</strong> {singleOffice.address}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span
                style={{
                  color: singleOffice.rent < 60000 ? 'red' : 'green',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                ₹{singleOffice.rent.toLocaleString()} / month
              </span>
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Available Office Spaces List Section */}
      <section className="list-section">
        <h2>Available Office Spaces</h2>
        <div className="office-grid">
          {officeList.map((office) => (
            <div key={office.id} className="office-card">
              <img
                src={office.image}
                alt={office.name}
                className="office-img"
              />
              <div className="office-details">
                <h3>{office.name}</h3>
                <p><strong>Address:</strong> {office.address}</p>
                <p>
                  <strong>Rent:</strong>{' '}
                  <span
                    style={{
                      color: office.rent < 60000 ? 'red' : 'green',
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}
                  >
                    ₹{office.rent.toLocaleString()} / month
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
