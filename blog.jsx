import React from 'react';

const blogPosts = [
  {
    category: 'Uncategorized',
    title: '10 Shocking Real Estate Myths in Nigeria (Debunked)',
    date: '10',
    month: 'Jun',
  },
  {
    category: 'Building',
    title: 'Building Your House: 8 Stylish Building Materials',
    date: '06',
    month: 'Aug',
  },
  {
    category: 'Investment',
    title: 'Factors to Consider Before Buying Properties in Nigeria',
    date: '24',
    month: 'Jul',
  },
  {
    category: 'Charity',
    title: 'Terra Gives: Nurturing Hope, Uplifting Lives—Our Commitment',
    date: '',
    month: '',
  },
];

const BlogGrid = () => {
  return (
    <div className="blog-section">
      {/* Updated Heading */}
      <h2 className="blog-heading">
        <span className="highlight">Our</span> Blog
      </h2>
      
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className={`blog-card ${!post.date ? 'empty' : ''}`}>
            <div className="blog-content">
              <div className="category">{post.category}</div>
              <h3>{post.title}</h3>
              {post.date && (
                <div className="date">
                  <span className="day">{post.date}</span>
                  <span className="month">{post.month}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
