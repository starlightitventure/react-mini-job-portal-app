import React, { useState, useEffect } from 'react';

// Base styles for the component
const alertMessage = {
  marginTop: '5px'
}

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red'
}

const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

function CandidateRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [highlightInput, setHighlightInput] = useState(false);
  const [isValid, setValid] = useState(false);

  const handleAddSkill = () => {
    const { skill, skills } = formData;

    if (skill.trim() && skills.length < 5 && !skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...skills, skill.trim()],
        skill: '',
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, role, skills } = formData;

    if (name.trim() && email.trim() && role.trim() && skills.length > 0) {
      // Check if email already exists
      const isEmailExists = candidates.some(candidate => candidate.email === email);
      if (isEmailExists) {
        setRegistrationStatus('Email already exists');
        setHighlightInput(true);
      } else {
        const newCandidate = {
          id: Date.now(),
          name: name.trim(),
          email: email.trim(),
          role: role.trim(),
          skills,
        };

        setCandidates([...candidates, newCandidate]);
        setRegistrationStatus('Candidate profile created');
        setFormData({
          name: '',
          email: '',
          role: '',
          skill: '',
          skills: [],
        });
        setHighlightInput(false);
      }
    } else {
      setRegistrationStatus('Please fill in all required fields and add at least one skill');
      setHighlightInput(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      role: '',
      skill: '',
      skills: [],
    });
    setRegistrationStatus(null);
    setHighlightInput(false);
  };

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  useEffect(() => {
    const regex = /^[a-zA-Z0-9\s]+$/;
    setValid(regex.test(formData.name) && regex.test(formData.role) && formData.skills.length > 0);
  },[formData])

  return (
    <div style={centerContainerStyle}>
      <div style={formBoxStyle}>
        <div data-testid='registration-component' style={formBoxStyle}>
          <form onSubmit={handleFormSubmit} data-testid="registration-form">
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                required
                data-testid="form-input-name"
                style={{ ...inputStyle, }}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                required
                data-testid="form-input-email"
                style={{ ...inputStyle, ...(highlightInput ? highlight : {}) }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="role"
                value={formData.role}
                placeholder="Role"
                required
                data-testid="form-input-role"
                style={{ ...inputStyle, }}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="skill"
                value={formData.skill}
                placeholder="Skill"
                data-testid="form-input-skill"
                style={inputStyle}
                onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
              />
              <button
                type="button"
                data-testid="add-btn"
                style={addSkillButtonStyle}
                onClick={handleAddSkill}
                disabled={formData.skill === '' || formData.skills.length >= 5}
              >
                Add Skill
              </button>
            </div>
            <div>
              {formData.skills.map((skill, index) => (
                <span key={index} data-testid='skill-tag' style={skillTagStyle}>
                  {skill}
                </span>
              ))}
            </div>
            <div style={buttonGroupStyle}>
              <button
                data-testid="submit-btn"
                type="submit"
                style={sharpEdgeButtonStyle}
                disabled={!isValid}
              >
                Register
              </button>
              <button
                data-testid="reset-btn"
                type="button"
                style={sharpEdgeButtonStyle}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
          {registrationStatus && (
            <p style={alertMessage} data-testid="alertMessage">{registrationStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateRegistration;
