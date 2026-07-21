import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showAll, setShowAll] = useState(false);
  const [showExtraOffer, setShowExtraOffer] = useState(true);

  // Conditional Rendering Method 1: Helper function with Switch Statement
  const renderTabContent = () => {
    switch (activeTab) {
      case 'books':
        return <BookDetails showExtra={showExtraOffer} />;
      case 'blogs':
        return <BlogDetails isFeatured={true} />;
      case 'courses':
        return <CourseDetails status="open" />;
      default:
        return <p>Select a view to display details.</p>;
    }
  };

  // Conditional Rendering Method 2: Element Variable (if-else)
  let viewHeader;
  if (activeTab === 'books') {
    viewHeader = <h3>Currently Viewing: Book Catalog</h3>;
  } else if (activeTab === 'blogs') {
    viewHeader = <h3>Currently Viewing: Tech Articles & Blogs</h3>;
  } else {
    viewHeader = <h3>Currently Viewing: Learning Courses</h3>;
  }

  return (
    <div className="App">
      <h1>Blogger & Knowledge Portal</h1>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button
          className={activeTab === 'books' ? 'active' : ''}
          onClick={() => setActiveTab('books')}
        >
          Book Details
        </button>
        <button
          className={activeTab === 'blogs' ? 'active' : ''}
          onClick={() => setActiveTab('blogs')}
        >
          Blog Details
        </button>
        <button
          className={activeTab === 'courses' ? 'active' : ''}
          onClick={() => setActiveTab('courses')}
        >
          Course Details
        </button>
      </div>

      <div className="controls">
        <button className="btn-toggle" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Hide All Sections View' : 'Show All Sections View'}
        </button>
        <button
          className="btn-toggle"
          onClick={() => setShowExtraOffer(!showExtraOffer)}
        >
          Toggle Book Special Offer ({showExtraOffer ? 'ON' : 'OFF'})
        </button>
      </div>

      {/* Displaying Element Variable */}
      <div className="view-status">{viewHeader}</div>

      {/* Conditional Rendering Method 3: Ternary Operator (Show Single Tab vs All Tabs) */}
      {showAll ? (
        <div className="all-sections">
          <h2>Displaying All 3 Components (All Sections View):</h2>
          <BookDetails showExtra={showExtraOffer} />
          <BlogDetails isFeatured={true} />
          <CourseDetails status="open" />
        </div>
      ) : (
        <div className="tab-content">
          {/* Invoking Switch-Case Helper Function */}
          {renderTabContent()}
        </div>
      )}

      {/* Conditional Rendering Method 4: Logical && Short-Circuit */}
      {showAll && (
        <div className="footer-note">
          📌 <em>Logical && Operator: All components are rendered above simultaneously!</em>
        </div>
      )}
    </div>
  );
}

export default App;
