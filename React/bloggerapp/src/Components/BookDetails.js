import React from 'react';

export const BookDetails = ({ showExtra }) => {
  const books = [
    { id: 1, title: 'Mastering React 18', author: 'Dan Abramov', price: '₹799' },
    { id: 2, title: 'Clean Code in C#', author: 'Robert C. Martin', price: '₹950' },
    { id: 3, title: 'ASP.NET Core Web API Guide', author: 'Andrew Lock', price: '₹850' }
  ];

  return (
    <div className="detail-card book-card">
      <h2>📚 Book Details Component</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} — <span>{book.price}</span>
          </li>
        ))}
      </ul>

      {/* Short-circuit && Conditional Rendering */}
      {showExtra && (
        <div className="extra-info">
          💡 <strong>Special Offer:</strong> Get 15% discount on purchasing 2 or more books!
        </div>
      )}
    </div>
  );
};

export default BookDetails;
