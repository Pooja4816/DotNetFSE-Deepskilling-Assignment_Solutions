import React, { useState } from 'react';

export const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountInINR = parseFloat(inr);

    if (isNaN(amountInINR) || amountInINR <= 0) {
      alert('Please enter a valid amount in INR');
      return;
    }

    // Fixed conversion rate: 1 EUR = 90 INR
    const convertedEuro = (amountInINR / 90).toFixed(2);
    setEuro(convertedEuro);
  };

  return (
    <div className="card currency-card">
      <h2>Currency Convertor (INR to EUR)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount in INR (₹): </label>
          <input
            type="number"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
            placeholder="Enter Indian Rupees"
            required
          />
        </div>
        <button type="submit" className="btn btn-submit">
          Convert to Euro
        </button>
      </form>

      {euro !== null && (
        <div className="result">
          <h3>
            ₹{inr} INR = <span className="highlight">€{euro} EUR</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
