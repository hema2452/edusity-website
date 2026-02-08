import React from 'react'
import "./Landing.css"
import arrow from "../../assets/dark-arrow.png"
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  const handleDetails = () => {
    navigate("/program")
  }
  return (
    <div className='main-section container'> 
      <div className="main-text">
        <h1>We ensure better education </h1>
        <p>Our cutting-edge curriculm is designed to empower students with the knowledge, skills, and experiences need to excel in the dynamic
          fiels of education
        </p>
        <button onClick={handleDetails} className='btn'>Explore more 
          <img src={arrow} alt="arrow" />
        </button>


      </div>
    </div>
  )
}

export default Landing