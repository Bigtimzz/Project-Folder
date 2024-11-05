import React, { useState } from 'react';

const FindAgentForm = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('agency');

  // Handler for tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="find-agent">
      <h2>
        <span className="highlight-text">Find Your</span> <span className="main-text">Agent</span>
      </h2>
      <p>
        They're the professionals who can help you find a home, sell your home, make an offer on a home, deal with buyers, and more.
      </p>

      {/* Tabs for agency/agent/team selection */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'agency' ? 'active' : ''}`}
          onClick={() => handleTabClick('agency')}
        >
          Agency
        </div>
        <div
          className={`tab ${activeTab === 'agent' ? 'active' : ''}`}
          onClick={() => handleTabClick('agent')}
        >
          Agent
        </div>
        <div
          className={`tab ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => handleTabClick('team')}
        >
          Team
        </div>
      </div>

      {/* Conditionally render the form based on the active tab */}
      <div className="search-form">
        {activeTab === 'agency' && (
          <>
            <div className="form-group">
              <input type="text" placeholder="Enter Area, Town, State" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter Name of Agency" />
            </div>
          </>
        )}

        {activeTab === 'agent' && (
          <>
            <div className="form-group">
              <input type="text" placeholder="Enter Agent's Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter City or State" />
            </div>
          </>
        )}

        {activeTab === 'team' && (
          <>
            <div className="form-group">
              <input type="text" placeholder="Enter Team's Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter State or Region" />
            </div>
          </>
        )}
        <button className="search-btn">Search Now</button>
      </div>

      {/* More Search Option */}
      <a href="#" className="more-search-link">More Search</a>
    </section>
  );
};

export default FindAgentForm;
