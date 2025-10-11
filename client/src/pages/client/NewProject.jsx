import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/client/newProject.css';

const NewProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  // Add skill tag
  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim() !== '') {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
        setSkillInput('');
      }
    }
  };

  // Remove skill tag
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = async () => {
    await axios
      .post('http://localhost:6001/new-project', {
        title,
        description,
        budget,
        skills,
        clientId: localStorage.getItem('userId'),
        clientName: localStorage.getItem('username'),
        clientEmail: localStorage.getItem('email'),
      })
      .then((response) => {
        alert('New project added!');
        setTitle('');
        setDescription('');
        setBudget(0);
        setSkills([]);
        setSkillInput('');
        navigate('/client');
      })
      .catch((err) => {
        alert('Operation failed!');
      });
  };

  return (
    <div className="new-project-page">
      <h3>Post New Project</h3>
      <div className="new-project-form">
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Project Title</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control mb-3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Description</label>
        </div>

        <span>
          <div className="form-floating">
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <label>Budget (in &#8377;)</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Required skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
            />
            <label>Required Skills (Press Enter to add)</label>

            <div className="skills-tags">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill(skill)}>
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
        </span>

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewProject;
