import React, { useState, useEffect } from 'react';
import ProfileCard from "./ProfileCard.js";

// Base styles for the component
const searchContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const profileCardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  maxWidth: '600px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};

const searchBoxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const skillsStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 10px',
  margin: '5px',
}

const searchBoxStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const searchButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

const listAllButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none'
};

function CandidateList() {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const handleSearch = () => {
    const filtered = candidates.filter(candidate =>
      candidate.skills.includes(searchText.toLowerCase())
    );
    setFilteredCandidates(filtered);
  };

  const handleListAll = () => {
    setSearchText("");
    setFilteredCandidates(candidates);
  };
  return (
    <div style={{ ...searchContainerStyle, alignItems: 'center' }}>
      <div style={searchBoxContainerStyle}>
        <input
          type="text"
          placeholder="search skills"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          data-testid="search-input"
          style={searchBoxStyle}
        />
        <button onClick={handleSearch} style={searchButtonStyle}>
          Search
        </button>
        <button onClick={handleListAll} data-testid="search-all" style={listAllButtonStyle}>
          List All
        </button>
      </div>
      {filteredCandidates.length === 0 ? (
        <p>No profiles found</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {filteredCandidates.map(candidate => (
            <ProfileCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CandidateList;
