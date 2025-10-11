import React, { useEffect, useState } from 'react'
import '../../styles/freelancer/freelancer.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Edit3, CheckCircle, XCircle } from 'lucide-react'

const Freelancer = () => {
  const [isDataUpdateOpen, setIsDataUpdateOpen] = useState(false)
  const [freelancerData, setFreelancerData] = useState()
  const [skills, setSkills] = useState([])
  const [description, setDescription] = useState('')
  const [freelancerId, setFreelancerId] = useState('')
  const [updateSkills, setUpdateSkills] = useState('')
  const [updateDescription, setUpdateDescription] = useState('')
  const [applicationsCount, setApplicationsCount] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetchUserData(localStorage.getItem('userId'))
    fetchApplications()
  }, [])

  const fetchUserData = async (id) => {
    axios.get(`http://localhost:6001/fetch-freelancer/${id}`).then((response) => {
      const data = response.data
      setFreelancerData(data)
      if (data) {
        setFreelancerId(data._id)
        setSkills(data.skills || [])
        setDescription(data.description || '')
        setUpdateSkills(data.skills || '')
        setUpdateDescription(data.description || '')
      }
    })
  }

  const updateUserData = async () => {
    axios
      .post(`http://localhost:6001/update-freelancer`, {
        freelancerId,
        updateSkills,
        description: updateDescription
      })
      .then(() => {
        fetchUserData(localStorage.getItem('userId'))
        alert('Profile updated successfully!')
        setIsDataUpdateOpen(false)
      })
  }

  const fetchApplications = async () => {
    await axios
      .get('http://localhost:6001/fetch-applications')
      .then((response) => {
        setApplicationsCount(
          response.data.filter(
            (a) => a.freelancerId === localStorage.getItem('userId')
          )
        )
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      {freelancerData ? (
        <div className='freelancer-home'>
          <motion.h2
            className='freelancer-heading'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome, {freelancerData.username}
          </motion.h2>

          {/* Dashboard Cards */}
          <motion.div
            className='home-cards'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                title: 'Current Projects',
                value: freelancerData.currentProjects.length,
                action: () => navigate('/my-projects'),
                gradient: 'linear-gradient(135deg, #b2caf3ff, #7B6BFF)'
              },
              {
                title: 'Completed Projects',
                value: freelancerData.completedProjects.length,
                action: () => navigate('/my-projects'),
                gradient: 'linear-gradient(135deg, #abede4ff, #60C6FF)'
              },
              {
                title: 'Applications',
                value: applicationsCount.length,
                action: () => navigate('/myApplications'),
                gradient: 'linear-gradient(135deg, #cbadfaff, #ffc76dff)'
              },
              {
                title: 'Funds Available',
                value: `₹ ${freelancerData.funds}`,
                action: null,
                gradient: 'linear-gradient(135deg, #FF8C68, #FF66C4)'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className='home-card'
                style={{ background: card.gradient }}
                whileHover={{ scale: 1.07 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <h4>{card.title}</h4>
                <p>{card.value}</p>
                {card.action && (
                  <button onClick={card.action}>View</button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Freelancer Details */}
          <motion.div
            className='freelancer-details'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {!isDataUpdateOpen ? (
              <div className='freelancer-details-data'>
                <span>
                  <h4>My Skills</h4>
                  <div className='skills'>
                    {skills.length > 0 ? (
                      skills.map((skill) => (
                        <h5 className='skill' key={skill}>
                          {skill}
                        </h5>
                      ))
                    ) : (
                      <p className='text-muted'>No skills added yet</p>
                    )}
                  </div>
                </span>

                <span>
                  <h4>About Me</h4>
                  <p>{description || 'Add a short bio about yourself.'}</p>
                </span>

                <button
                  className='btn-edit'
                  onClick={() => setIsDataUpdateOpen(true)}
                >
                  <Edit3 size={18} /> Edit Profile
                </button>
              </div>
            ) : (
              <div className='freelancer-details-update'>
                <label>
                  <h4>My Skills</h4>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter skills (comma-separated)'
                  value={updateSkills}
                  onChange={(e) => setUpdateSkills(e.target.value)}
                />

                <label className='mt-3'>
                  <h4>Description</h4>
                </label>
                <textarea
                  className='form-control'
                  placeholder='Enter your description'
                  value={updateDescription}
                  onChange={(e) => setUpdateDescription(e.target.value)}
                />

                <div className='update-btns'>
                  <button className='btn-save' onClick={updateUserData}>
                    <CheckCircle size={18} /> Save
                  </button>
                  <button
                    className='btn-cancel'
                    onClick={() => setIsDataUpdateOpen(false)}
                  >
                    <XCircle size={18} /> Cancel
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ) : (
        <p className='loading-text'>Loading your dashboard...</p>
      )}
    </>
  )
}

export default Freelancer
