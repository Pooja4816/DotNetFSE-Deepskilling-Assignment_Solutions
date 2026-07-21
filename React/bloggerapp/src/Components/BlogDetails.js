import React from 'react';

export const BlogDetails = ({ isFeatured }) => {
  const blogs = [
    { id: 1, title: 'Understanding React State Management', category: 'Frontend', readTime: '5 min' },
    { id: 2, title: 'Building Scalable Microservices with .NET Core', category: 'Backend', readTime: '8 min' },
    { id: 3, title: 'Advanced T-SQL Optimization Techniques', category: 'Database', readTime: '6 min' }
  ];

  return (
    <div className="detail-card blog-card">
      <h2>📝 Blog Details Component</h2>
      
      {/* Ternary Operator Conditional Rendering inside Component */}
      {isFeatured ? (
        <div className="featured-banner">
          🌟 <strong>Featured Article:</strong> "Deep Dive into React Server Components & Performance Optimization"
        </div>
      ) : (
        <p className="subtitle">Explore our technical blog archives below:</p>
      )}

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> [{blog.category}] — <em>{blog.readTime} read</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
