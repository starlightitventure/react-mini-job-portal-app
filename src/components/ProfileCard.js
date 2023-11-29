import React from 'react';

const profileCardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  maxWidth: '600px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};

function ProfileCard({ candidate }) {
  return (
    <div data-testid="profile-card" style={profileCardStyle}>
      <h2>{candidate.name}</h2>
      <p>Role: {candidate.role}</p>
      <p>Skills: {candidate.skills.join(', ')}</p>
    </div>
  );
}

export default ProfileCard;
